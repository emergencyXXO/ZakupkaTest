import { connect } from 'react-redux';

import { deleteUserThunkCreator, getUserThunkCreator } from '../../reducer/UserPageReducer';
import FindUser from './index';
import { getCurrentUseThunkCreator } from '../../reducer/ProfilePageReducer';
import { setNewUserId } from '../../reducer/AddNewUserPageReducer';

let mapStateToProps = state => {
	return {
		UserData: state.UserPage.UserData,
		_meta: state.UserPage._meta,
		isFetching: state.UserPage.isFetching,
	};
};

export default connect(
	mapStateToProps,
	{
		getUserThunkCreator,
		deleteUserThunkCreator,
		getCurrentUseThunkCreator,
		setNewUserId,
	},
)(FindUser);
