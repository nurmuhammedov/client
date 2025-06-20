import {ROLES} from 'constants/roles'


export interface ILoginResponse {
	id: number
	fullName: string
	username: string
	token: string
	role: ROLES
}