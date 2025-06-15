enum ROLE_LIST {
	ADMIN = 'admin',
	USER = 'USER',
}

const ROLE_LABEL: Record<ROLE_LIST, string> = {
	[ROLE_LIST.USER]: 'Employee',
	[ROLE_LIST.ADMIN]: 'Admin',
}

export {
	ROLE_LIST,
	ROLE_LABEL
}