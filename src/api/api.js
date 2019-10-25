import * as axios from 'axios/index';

const tokken = {
	params: {
		'access-token': 'q4TogSNtq56u_RergrgFCy_SMlwY-yiCV8_I',
	},
	headers: {
		Authorization: 'Bearer q4TogSNtq56u_RergrgFCy_SMlwY-yiCV8_I',
	},
};
const instance = axios.create({
	baseURL: 'https://gorest.co.in/public-api',
});

export const UserApi = {
	getUsers(CurrentPage) {
		return instance.get(`/users?page=${CurrentPage}`, tokken);
	},
	getCurrentUser(userId) {
		return instance.get(`/users/${userId}`, tokken);
	},
	deleteUser(userId) {
		return instance.delete(`/users/${userId}`, tokken);
	},
	addNewUser(first_name, last_name, gender, dob, phone, status, email, website, avatar, about, address) {
		return instance.post(
			`/users`,
			{
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
			},
			tokken,
		);
	},
};
