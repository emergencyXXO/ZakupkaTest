import React from 'react';
import './App.css';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/Header';
import FindUserCont from './components/FindUser/container';
import ContainerProfile from './components/Profile/container';
import AddNewUser from './components/AddNewUser/';
import UpdateUser from './components/UpdateUser/';

class App extends React.Component {
	render() {
		return (
			<div className="App ">
				<Header />
				<div className="main__part container">
					<Switch>
						<Route path="/user/:userId?/edit" render={() => <UpdateUser />} />
						<Route path="/user/new" render={() => <AddNewUser />} />
						<Route path="/user/:userId?/" render={() => <ContainerProfile />} />
						<Route exact path="/" render={() => <FindUserCont />} />
						<Route
							path="*"
							render={() => (
								<div>
									404 NOT FOUND
									<br />
									<NavLink to="/">Go back to HomePage</NavLink>
								</div>
							)}
						/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default withRouter(App);
