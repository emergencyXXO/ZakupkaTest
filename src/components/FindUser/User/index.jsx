import React from 'react';
import cls from './style.module.scss';
import { NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const Users = props => {
	return (
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
				<NavLink
					onClick={() => {
						const target = `/`;
						createBrowserHistory().push({
							pathname: target,
						});
					}}
					to={`/user/${props.id}`}
				>
					<span className="glyphicon glyphicon-eye-open" />
				</NavLink>
				<NavLink
					onClick={() => {
						props.getCurrentUseThunkCreator(props.id);
					}}
					to={`/user/${props.id}/edit`}
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
	);
};

export default Users;
