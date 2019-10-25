import React from 'react';
import cls from './style.module.scss';

export const FormControl = ({ input, meta, child, ...props }) => {
	const showErorr = meta.touched && meta.error;
	return (
		<div className={cls.formControl}>
			{props.children}
			{showErorr && <span className={cls.errorMes}>{meta.error}</span>}
		</div>
	);
};

export const Input = props => {
	const { input, ...Restprops } = props;
	return (
		<FormControl {...props}>
			<input {...input} {...Restprops} />
		</FormControl>
	);
};

export const Textarea = props => {
	const { input, ...Restprops } = props;
	return (
		<FormControl {...props}>
			<textarea {...input} {...Restprops} />
		</FormControl>
	);
};
