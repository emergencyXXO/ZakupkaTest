import { createSelector } from 'reselect';

export const getProfilePage = state => {
	return state.ProfilePage;
};

const getUsersSelectorTest = state => {
	return state.userPage.users;
};

export const getUsersTest = createSelector(
	getUsersSelectorTest,
	users => {
		return users.filter(u => true);
	},
);
