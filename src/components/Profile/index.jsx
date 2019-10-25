import React, { useState } from 'react';
import cls from './style.module.scss';

import Preloader from '../Preloader/';
import { Redirect } from 'react-router-dom';

let Profile = props => {
	let [redirect, SetRedirect] = useState(false);

	let renderRedirect = () => {
		if (redirect) {
			return <Redirect to={`/user/${props.id}/edit`} />;
		}
	};

	return (
		<>
			{renderRedirect()}
			{props.isFetching ? <Preloader /> : null}
			<div className={cls.profile_page}>
				<div className={`${cls.top} line`}>
					<p className={cls.had}>{`${props.UserData.first_name} ${props.UserData.last_name}`}</p>
					<div>
						<button
							onClick={async () => {
								await props.getCurrentUseThunkCreator(props.UserData.id);
								await props.setNewUserId(false);
								SetRedirect(true);
							}}
							className="btn btn-primary btn-xs pull-right gutter-sm-right"
						>
							Update
						</button>
						<button
							onClick={() => {
								props.deleteCurrentUserThunkCreator(props.UserData.id);
							}}
							className="btn btn-danger btn-xs pull-right"
						>
							Delete
						</button>
					</div>
				</div>
				<div className={cls.table_wrapper}>
					<table className={cls.users_list}>
						<tbody>
							<tr>
								<td>ID</td>
								<td>{props.UserData.id}</td>
							</tr>
							<tr>
								<td>First Name</td>
								<td>{props.UserData.first_name}</td>
							</tr>
							<tr>
								<td>Last Name</td>
								<td>{props.UserData.last_name}</td>
							</tr>
							<tr>
								<td>Gender</td>
								<td>{props.UserData.gender}</td>
							</tr>
							<tr>
								<td>Dob</td>
								<td>{props.UserData.dob}</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>{props.UserData.email}</td>
							</tr>
							<tr>
								<td>Phone</td>
								<td>{props.UserData.phone}</td>
							</tr>
							<tr>
								<td>Avatar</td>
								<td>
									<img src={props.UserData._links.avatar.href} alt="" />
								</td>
							</tr>
							<tr>
								<td>Address</td>
								<td>{props.UserData.address}</td>
							</tr>
							<tr>
								<td>Status</td>
								<td>{props.UserData.status}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Profile;
