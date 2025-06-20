import {ROLES} from 'constants/roles'


const routeByRole = (role: ROLES = ROLES.USER): string => {
	switch (role) {
		case ROLES.ADMIN:
			return '/users'
		case ROLES.USER:
			return '/vocabularies'
		default:
			return '/'
	}
}

export {
	routeByRole
}