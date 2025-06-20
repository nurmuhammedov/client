import {User} from 'assets/icons'
import {ROLES} from 'constants/roles'
import {IMenuItem} from 'interfaces/configuration.interface'


export const menu: IMenuItem[] = [
	{
		id: 'users',
		label: 'Users',
		href: '/users',
		icon: User,
		allowedRoles: [
			ROLES.ADMIN
		],
		order: {
			[ROLES.ADMIN]: 1
		}
	},
	{
		id: 'vocabularies',
		label: 'Vocabularies',
		href: '/vocabularies',
		icon: User,
		allowedRoles: [
			ROLES.USER
		],
		order: {
			[ROLES.USER]: 1
		}
	}
]

