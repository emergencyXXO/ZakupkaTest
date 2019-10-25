import { connect } from 'react-redux';
import React from 'react';
import Profile from './index';
import { deleteCurrentUserThunkCreator, getCurrentUseThunkCreator, SetNoFind } from '../../reducer/ProfilePageReducer';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { setNewUserId } from '../../reducer/AddNewUserPageReducer';

class ContainerProfile extends React.Component {
	componentWillUnmount() {
		this.props.SetNoFind(false);
	}

	componentDidUpdate(prevProps) {
		if (
			this.props.match.params.userId !== prevProps.match.params.userId ||
			this.props.noFind !== prevProps.noFind
		) {
			let userId = this.props.match.params.userId;

			this.props.getCurrentUseThunkCreator(userId);
		}
	}

	render() {
		if (this.props.noFind === true) return <Redirect to={'/404'} />;
		return <Profile {...this.props} />;
	}
}

let mapStateToProps = state => {
	return {
		UserData: state.ProfilePage.UserData,
		isFetching: state.ProfilePage.isFetching,
		noFind: state.ProfilePage.noFind,
	};
};

export default compose(
	withRouter,
	connect(
		mapStateToProps,
		{
			getCurrentUseThunkCreator,
			deleteCurrentUserThunkCreator,
			SetNoFind,
			setNewUserId,
		},
	),
)(ContainerProfile);
