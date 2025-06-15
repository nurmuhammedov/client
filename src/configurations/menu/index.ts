import {User} from 'assets/icons'
import {ROLE_LIST} from 'constants/roles'
import {IMenuItem} from 'interfaces/configuration.interface'


export const menu: IMenuItem[] = [
	{
		id: 'format',
		label: 'Formats',
		href: '/formats',
		icon: User,
		allowedRoles: [
			ROLE_LIST.ADMIN,
			ROLE_LIST.USER
		],
		order: {
			[ROLE_LIST.ADMIN]: 4,
			[ROLE_LIST.USER]: 4
		}
	}
]

