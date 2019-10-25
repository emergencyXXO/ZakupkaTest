import { UserApi } from '../../api/api';

const SET_CURRENT_USERS = 'SET_CURRENT_USERS';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const NO_FIND = 'NO_FIND';

let InitialState = {
	UserData: {},
	isFetching: false,
	noFind: false,
};

let ProfilePageReducer = (state = InitialState, action) => {
	switch (action.type) {
		case SET_CURRENT_USERS:
			return {
				...state,
				UserData: action.user,
			};

		case TOGGLE_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			};
		case NO_FIND:
			return {
				...state,
				noFind: action.noFind,
			};

		default:
			return state;
	}
};

export const SetCurrentUser = user => ({ type: SET_CURRENT_USERS, user });
export const SetIsFetching = isFetching => ({ type: TOGGLE_FETCHING, isFetching });
export const SetNoFind = noFind => ({ type: NO_FIND, noFind });

export const getCurrentUseThunkCreator = userId => async dispatch => {
	dispatch(SetIsFetching(true));
	let response = await UserApi.getCurrentUser(userId);
	try {
		if (response.status === 200) {
			dispatch(SetCurrentUser(response.data.result));
			dispatch(SetIsFetching(false));
		}
	} catch (err) {
		dispatch(SetIsFetching(false));
		alert(err);
	}
};

export const deleteCurrentUserThunkCreator = userId => async dispatch => {
	dispatch(SetIsFetching(true));
	let response = await UserApi.deleteUser(userId);
	try {
		if (response.status === 200) {
			dispatch(SetIsFetching(false));
			dispatch(SetNoFind(true));
		}
	} catch (err) {
		dispatch(SetIsFetching(false));
		alert(err);
	}
};

export default ProfilePageReducer;
