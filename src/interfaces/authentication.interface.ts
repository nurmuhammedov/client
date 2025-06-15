import {ROLE_LIST} from 'constants/roles'


type IRole = ROLE_LIST.USER | ROLE_LIST.ADMIN

interface ILogin {
	id: number
	name: string
	role: IRole
}

interface IUser {
	fullName: string
	role: IRole
	roleLabel: string
}

export type{
	ILogin,
	IUser,
	IRole
}