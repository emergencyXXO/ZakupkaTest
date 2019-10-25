import React, { useState } from 'react';
import cls from './style.module.scss';
import { Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const Users = props => {
	let [redirect, SetRedirect] = useState(false);

	let renderRedirect = () => {
		if (redirect) {
			return <Redirect to={`/user/${props.id}/edit`} />;
		}
	};
	let [redirectProfile, SetRedirectProfile] = useState(false);

	let renderRedirectProfile = () => {
		if (redirectProfile) {
			return <Redirect to={`/user/${props.id}`} />;
		}
	};

	return (
		<>
			{renderRedirect()}
			{renderRedirectProfile()}
			<tr className={`${cls.user_item}`}>
				<td className={`${cls.avatar}`}>
					<img src={props.link.avatar.href} alt="" />
				</td>
				<td className={`${cls.name}`}>{props.first_name}</td>
				<td className={`${cls.last_name}`}>{props.last_name}</td>
				<td className={`${cls.email}`}>{props.email}</td>
				<td className={`${cls.phone}`}>{props.phone}</td>
				<td className={`${cls.website}`}>{props.website}</td>
				<td className={`${cls.navigation}`}>
					<span
						className="glyphicon glyphicon-eye-open"
						onClick={async () => {
							const target = `/`;
							createBrowserHistory().push({
								pathname: target,
							});
							await props.getCurrentUseThunkCreator(props.id);
							SetRedirectProfile(true);
						}}
					/>
					<span
						onClick={async () => {
							await props.getCurrentUseThunkCreator(props.id);
							await props.setNewUserId(false);
							SetRedirect(true);
						}}
						className="glyphicon glyphicon-pencil"
					/>

					<span
						onClick={() => {
							props.deleteUserThunkCreator(props.id, props.currentPage);
						}}
						className="glyphicon glyphicon-trash"
					/>
				</td>
			</tr>
		</>
	);
};

export default Users;
