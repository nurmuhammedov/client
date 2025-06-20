import * as yup from 'yup'

// Username validation
export const usernameSchema = yup
	.string()
	.trim()
	.required('This field is required')
	.min(5, 'Login must be at least 5 characters long')
	.max(30, 'Login must not exceed 30 characters')
	.matches(/^\S*$/, 'You cannot leave a space in the login')
	.matches(/^[a-zA-Z0-9_]+$/, 'The login can only contain letters, numbers, and underscores')
	.matches(/^(?!\d)[a-zA-Z0-9_]+$/, 'Login cannot start with a number')
	.matches(/^(?!_)[a-zA-Z0-9_]+(?<!_)$/, 'Login cannot begin or end with an underscore')
	.matches(/^(?!.*_{2})/, 'It is not possible to type consecutive underscores in a login')

// Password validation
export const passwordSchema = yup
	.string()
	.trim()
	.required('This field is required')
	.min(8, 'Password must be at least 8 characters long')
	.max(30, 'Password must not exceed 30 characters')
	.matches(/^\S*$/, 'You cannot leave a space in the password')
	.matches(/^[a-zA-Z0-9!@#$%^&*()]+$/, 'Password can only contain letters, numbers, and special characters (!@#$%^&*)')


// Confirm password validation
// export const confirmPasswordSchema = yup
// 	.string()
// 	.trim()
// 	.oneOf([yup.ref('password'), undefined], 'Passwords did not match')
// 	.required('This field is required')


// const dateField = yup
// 	.string()
// 	.length(10, 'The entered date is not valid')
// 	.transform((value) => {
// 		if (!value) return value
// 		const [day, month, year] = value.split('.')
// 		return `${year}-${month}-${day}`
// 	})
// 	.test('isValidDate', 'The entered date is not valid', (value) => {
// 		if (!value) return false
// 		const [year, month, day] = value.split('-').map(Number)
// 		const date = new Date(year, month - 1, day)
// 		return (
// 			date.getFullYear() === year &&
// 			date.getMonth() === month - 1 &&
// 			date.getDate() === day
// 		)
// 	})


