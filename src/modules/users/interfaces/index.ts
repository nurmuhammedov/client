import {ROLES} from 'constants/roles'


export interface IUser {
	id: number;
	fullName: string;
	username: string;
	role: ROLES;
}