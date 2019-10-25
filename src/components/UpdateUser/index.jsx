import React from 'react';
import cls from '../AddNewUser/style.module.scss';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Input, Textarea } from '../FormControl';
import { required } from '../../util/validations/validators';
import { updateUserThunkCreator } from '../../reducer/AddNewUserPageReducer';
import Preloader from '../Preloader/';
import { Redirect } from 'react-router-dom';
import { getCurrentUseThunkCreator } from '../../reducer/ProfilePageReducer';

let UpdateUserForm = props => {
	const onSubmit = formData => {
		props.updateUserThunkCreator(
			props.initialValues.id,
			formData.first_name,
			formData.last_name,
			formData.gender,
			formData.dob,
			formData.phone,
			formData.status,
			formData.email,
			formData.website,
			formData.avatar,
			formData.about,
			formData.address,
		);
	};

	if (!props.initialValues) {
		return null;
	}
	if (props.newUserId) {
		return <Redirect to={`/user/${props.newUserId}/`} />;
	}
	return (
		<>
			{props.isPending ? <Preloader /> : null}
			<div className={cls.add_newUser__block}>
				<p className={cls.had}>Update user</p>
				<form onSubmit={props.handleSubmit(onSubmit)}>
					<Field name="first_name" component={Input} validate={[required]} placeholder="First Name*" />
					<Field name="last_name" component={Input} validate={[required]} placeholder="Last name*" />
					<Field name="gender" component="select" validate={[required]}>
						<option selected value="male">
							Male
						</option>
						<option value="female">Female</option>
					</Field>
					<Field name="dob" component={Input} placeholder="Date" />
					<Field name="phone" component={Input} placeholder="Phone" />
					<Field name="status" component={Input} validate={[required]} placeholder="Status*" />
					<Field name="email" component={Input} validate={[required]} placeholder="Email*" />
					<Field name="website" component={Input} placeholder="Website" />
					<Field name="avatar" component={Input} placeholder="Avatar" />
					<Field name="about" component={Input} placeholder="About" />
					<Field name="address" component={Textarea} type="textarea" placeholder="Address" />
					<p className={cls.error}>{props.error}</p>

					<button disabled={props.isPending}>Submit</button>
				</form>
			</div>
		</>
	);
};

UpdateUserForm = reduxForm({
	form: 'updateUserFrom',
})(UpdateUserForm);

const mapStateToProps = state => {
	return {
		isPending: state.AddNewUserPage.isPending,
		newUserId: state.AddNewUserPage.newUserId,
		initialValues: state.ProfilePage.UserData,
	};
};

export default connect(
	mapStateToProps,
	{ updateUserThunkCreator, getCurrentUseThunkCreator },
)(UpdateUserForm);
