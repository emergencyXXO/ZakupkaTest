import { UserApi } from '../../api/api';

const SET_USERS = 'SET_USERS';
const SET_META_DATA = 'SET_META_DATA';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

let InitialState = {
	UserData: [],
	_meta: {
		pageCount: 0,
		TotalUserCount: 0,
		currentPage: 1,
	},

	isFetching: false,
};

let UserPageReducer = (state = InitialState, action) => {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				UserData: action.users,
			};

		case SET_META_DATA:
			return {
				...state,
				_meta: action.metaData,
			};
		case TOGGLE_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			};

		default:
			return state;
	}
};

export const SetUsers = users => ({ type: SET_USERS, users });
export const SetMetaData = metaData => ({ type: SET_META_DATA, metaData });
export const SetIsFetching = isFetching => ({ type: TOGGLE_FETCHING, isFetching });

export const getUserThunkCreator = CurrentPage => async dispatch => {
	dispatch(SetIsFetching(true));
	let response = await UserApi.getUsers(CurrentPage);

	if (response.status === 200) {
		dispatch(SetUsers(response.data.result));
		dispatch(SetMetaData(response.data._meta));
		dispatch(SetIsFetching(false));
	}
};

export const deleteUserThunkCreator = (userId, CurrentPage = 1) => async dispatch => {
	dispatch(SetIsFetching(true));
	let response = await UserApi.deleteUser(userId);
	try {
		if (response.status === 200) {
			dispatch(getUserThunkCreator(CurrentPage));
			dispatch(SetIsFetching(false));
		}
	} catch (err) {
		dispatch(SetIsFetching(false));
		alert(err);
	}
};

export default UserPageReducer;
