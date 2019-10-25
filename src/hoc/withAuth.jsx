import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const withAuthRedirect = Component => {
	let mapStateToPropsRedirect = state => {
		return {
			isAuth: state.AuthPage.isAuth,
		};
	};

	class RedirectComponent extends React.Component {
		render() {
			if (this.props.isAuth === false) return <Redirect to={'/login'} />;
			return <Component {...this.props} />;
		}
	}
	let withAutDialogRedircetComponent = connect(mapStateToPropsRedirect)(RedirectComponent);
	return withAutDialogRedircetComponent;
};
