import React from 'react'


interface RoleOrder {
	[key: string]: number
}

export interface IMenuItem {
	id: string
	label: string
	icon?: () => React.ReactNode
	href: string
	allowedRoles: string[]
	order: RoleOrder
}

export interface IListResponse<T> {
	count: number
	num_pages: number
	results: T
}
