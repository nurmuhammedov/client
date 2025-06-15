import {ROLE_LABEL, ROLE_LIST} from 'constants/roles'
import {ILogin, IRole, IUser} from 'interfaces/authentication.interface'


function buildUser(userData: ILogin | undefined): IUser | null {
	if (!userData) return null
	return {
		fullName: userData?.name,
		roleLabel: ROLE_LABEL[userData?.role] ?? 'User',
		role: ROLE_LIST.USER
	}
}

const routeByRole = (role: IRole = ROLE_LIST.USER): string => {
	switch (role) {
		case ROLE_LIST.USER:
			return '/formats'
		case ROLE_LIST.ADMIN:
			return '/formats'
		default:
			return '/'
	}
}

export {
	buildUser,
	routeByRole
}