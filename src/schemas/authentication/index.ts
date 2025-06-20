import {passwordSchema, usernameSchema} from 'schemas/index'
import * as yup from 'yup'


export const loginSchema = yup.object().shape({
	username: usernameSchema,
	password: passwordSchema
})