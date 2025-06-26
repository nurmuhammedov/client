import * as yup from 'yup'


export const usersSchema = yup.object().shape({
	fullName: yup.string().trim().required('This field is required'),
	usernameUpdate: yup.boolean().default(true).nullable(),
	username: yup.string()
		.trim()
		.nullable()
		.when('usernameUpdate', {
			is: false,
			then: schema => schema.transform(() => null),
			otherwise: schema => schema.required('This field is required')
				.min(5, 'Login must be at least 5 characters long')
				.max(30, 'Login must not exceed 30 characters')
				.matches(/^\S*$/, 'You cannot leave a space in the login')
				.matches(/^[a-zA-Z0-9_]+$/, 'The login can only contain letters, numbers, and underscores')
				.matches(/^(?!\d)[a-zA-Z0-9_]+$/, 'Login cannot start with a number')
				.matches(/^(?!_)[a-zA-Z0-9_]+(?<!_)$/, 'Login cannot begin or end with an underscore')
				.matches(/^(?!.*_{2})/, 'It is not possible to type consecutive underscores in a login')
		}),
	roleUpdate: yup.boolean().default(true).nullable(),
	role: yup.string()
		.trim()
		.nullable()
		.when('roleUpdate', {
			is: false,
			then: schema => schema.transform(() => null),
			otherwise: schema => schema.required('This field is required')
		}),
	passwordUpdate: yup.boolean().default(true).nullable(),
	password: yup.string()
		.trim()
		.nullable()
		.when('passwordUpdate', {
			is: false,
			then: schema => schema.transform(() => null),
			otherwise: schema => schema.required('This field is required')
				.min(8, 'Password must be at least 8 characters long')
				.max(30, 'Password must not exceed 30 characters')
				.matches(/^\S*$/, 'You cannot leave a space in the password')
				.matches(/^[a-zA-Z0-9!@#$%^&*()]+$/, 'Password can only contain letters, numbers, and special characters (!@#$%^&*)')
		}),
	confirmPassword: yup.string()
		.trim()
		.nullable()
		.when('passwordUpdate', {
			is: false,
			then: schema => schema.transform(() => null),
			otherwise: schema => schema.required('This field is required')
				.oneOf([yup.ref('password')], 'Passwords did not match')
		})
})
