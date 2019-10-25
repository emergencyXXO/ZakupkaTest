import React from 'react';
import cls from './style.module.scss';
import Users from './User';
import Preloader from '../Preloader/';
import Paginations from '../Paginations';
import { NavLink } from 'react-router-dom';

class FindUser extends React.PureComponent {
	componentDidMount() {
		this.props.getUserThunkCreator(this.props._meta.CurrentPage);
	}

	render() {
		let pagesCount = this.props._meta.pageCount;
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<div className={cls.user_page}>
					<div className={`line ${cls.top}`}>
						<p className={cls.had}>Users</p>
						<NavLink to={`/user/new`} className="btn btn-success btn-xs pull-right">
							Add new user
						</NavLink>
					</div>
					<table className={cls.users_list}>
						<thead>
							<tr>
								<th className={`${cls.name}`}>Avatar</th>
								<th className={`${cls.last_name}`}>Name</th>
								<th className={`${cls.last_name}`}>Second name</th>
								<th className={`${cls.email}`}>Email</th>
								<th className={`${cls.phone}`}>Phone</th>
								<th className={`${cls.website}`}>Website</th>
								<th className={`${cls.navigation}`}>Navigation</th>
							</tr>
						</thead>
						{this.props.UserData.map(el => (
							<Users
								key={el.id}
								id={el.id}
								first_name={el.first_name}
								last_name={el.last_name}
								email={el.email}
								phone={el.phone}
								website={el.website}
								link={el._links}
								getCurrentUseThunkCreator={this.props.getCurrentUseThunkCreator}
								currentPage={this.props._meta.currentPage}
								deleteUserThunkCreator={this.props.deleteUserThunkCreator}
							/>
						))}
					</table>
					<Paginations
						pageList={pages}
						currentPage={this.props._meta.currentPage}
						getUser={this.props.getUserThunkCreator}
						pageCount={pagesCount}
					/>
				</div>
			</>
		);
	}
}

export default FindUser;
