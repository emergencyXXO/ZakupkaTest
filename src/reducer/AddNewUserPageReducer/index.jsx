import { UserApi } from '../../api/api';
import { SetCurrentUser } from '../ProfilePageReducer';

const TOGGLE_PENNDING = 'TOGGLE_PENNDING';
const SET_NEW_USER_ID = 'SET_NEW_USER_ID';

let InitialState = {
	isPending: false,
	newUserId: false,
};

let AddNewUserPageReducer = (state = InitialState, action) => {
	switch (action.type) {
		case TOGGLE_PENNDING:
			return {
				...state,
				isPending: action.turn,
			};
		case SET_NEW_USER_ID:
			return {
				...state,
				newUserId: action.newUserId,
			};

		default:
			return state;
	}
};

export const setPending = turn => ({
	type: TOGGLE_PENNDING,
	turn,
});
export const setNewUserId = newUserId => ({
	type: SET_NEW_USER_ID,
	newUserId,
});

export const addNewUserThunkCreator = (
	first_name,
	last_name,
	gender,
	dob,
	phone,
	status,
	email,
	website,
	avatar,
	about,
	address,
) => async dispatch => {
	dispatch(setPending(true));

	let response = await UserApi.addNewUser(
		first_name,
		last_name,
		gender,
		dob,
		phone,
		status,
		email,
		website,
		avatar,
		about,
		address,
	);
	try {
		if (response.status === 200) {
			dispatch(SetCurrentUser(response.data.result));
			dispatch(setNewUserId(response.data.result.id));
			dispatch(setPending(false));
			if (response.data._meta.code === 422) {
				alert(response.data._meta.message);
			}
		}
	} catch (err) {
		alert(err);
	}
};

export default AddNewUserPageReducer;
