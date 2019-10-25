import React from 'react';
import cls from './style.module.scss';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Input, Textarea } from '../FormControl';
import { required } from '../../util/validations/validators';
import { addNewUserThunkCreator } from '../../reducer/AddNewUserPageReducer';
import Preloader from '../Preloader/';
import { Redirect } from 'react-router-dom';

const AddNewUserForm = props => {
	if (props.newUserId) {
		return <Redirect to={`/user/${props.newUserId}/`} />;
	} else {
	}
	return (
		<>
			{props.isPending ? <Preloader /> : null}
			<div className={cls.add_newUser__block}>
				<p className={cls.had}>Add new user</p>
				<form onSubmit={props.handleSubmit}>
					<Field name="first_name" component={Input} validate={[required]} placeholder="First Name" />
					<Field name="last_name" component={Input} validate={[required]} placeholder="Last name" />
					<Field name="gender" component="select" validate={[required]}>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</Field>
					<Field name="dob" component={Input} validate={[required]} placeholder="Date" />
					<Field name="phone" component={Input} validate={[required]} placeholder="Phone" />
					<Field name="status" component={Input} validate={[required]} placeholder="Status" />
					<Field name="email" component={Input} validate={[required]} placeholder="Email" />
					<Field name="website" component={Input} validate={[required]} placeholder="Website" />
					<Field name="avatar" component={Input} validate={[required]} placeholder="Avatar" />
					<Field name="about" component={Input} validate={[required]} placeholder="About" />
					<Field
						name="address"
						component={Textarea}
						type="textarea"
						validate={[required]}
						placeholder="Address"
					/>
					<p className={cls.error}>{props.error}</p>

					<button disabled={props.isPending}>Submit</button>
				</form>
			</div>
		</>
	);
};

const AddNewUserFormReduxForm = reduxForm({
	form: 'newUserFrom',
})(AddNewUserForm);

const AddNewUser = props => {
	const onSubmit = formData => {
		props.addNewUserThunkCreator(
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

	return <AddNewUserFormReduxForm onSubmit={onSubmit} newUserId={props.newUserId} isPending={props.isPending} />;
};
const mapStateToProps = state => ({
	isPending: state.AddNewUserPage.isPending,
	newUserId: state.AddNewUserPage.newUserId,
});

export default connect(
	mapStateToProps,
	{ addNewUserThunkCreator },
)(AddNewUser);
