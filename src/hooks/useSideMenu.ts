import {ROLES} from 'constants/roles'
import {useAuth} from 'hooks'
import {IMenuItem} from 'interfaces/configuration.interface'
import {menu} from 'constants/menu'
import {useMemo} from 'react'


const pickOnlyAllowedMenu = (menuItem: IMenuItem, role: ROLES) => menuItem.allowedRoles?.includes(role)
const sortMenu = (a: IMenuItem, b: IMenuItem, role: ROLES) => a?.order?.[role] - b?.order?.[role]

export default function useSideMenu() {
	const {user} = useAuth()

	return useMemo(() => {
			return user ?
				menu
					.filter((menuItem) => pickOnlyAllowedMenu(menuItem, user.role))
					.sort((a, b) => sortMenu(a, b, user.role)) :
				[]
		},
		[user]
	)
}
