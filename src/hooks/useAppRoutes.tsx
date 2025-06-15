import {
	Login,
	FormatsTable
} from 'modules'
import {Navigate, useRoutes} from 'react-router-dom'
import {routeByRole} from 'utilities/authentication'
import {ROLE_LIST} from 'constants/roles'
import {useAppContext} from 'hooks'
import {Layout} from 'components'


function useAppRoutes() {
	const {user} = useAppContext()

	const defaultRoutes = [
		{
			id: 'format',
			path: 'formats',
			children: [
				{
					index: true,
					element: <FormatsTable/>
				}
			]
		}
	]

	const url = routeByRole(user?.role)

	const routes = {
		[ROLE_LIST.ADMIN]: [
			{
				path: '/',
				element: <Layout/>,
				children: defaultRoutes?.length ? [
					{
						index: true,
						element: <Navigate to={url} replace/>
					},
					...defaultRoutes
				] : [
					{
						index: true,
						element: <></>
					}
				]
			},
			{
				path: '*',
				element:
					<Navigate
						to={url}
						replace
					/>
			}
		],
		[ROLE_LIST.USER]: [
			{
				path: '/',
				element: <Layout/>,
				children: defaultRoutes?.length ? [
					{
						index: true,
						element: <Navigate to={url} replace/>
					},
					...defaultRoutes
				] : [
					{
						index: true,
						element: <></>
					}
				]
			},
			{
				path: '*',
				element:
					<Navigate
						to={url}
						replace
					/>
			}
		],
		default: [
			{
				path: '/login',
				element: <Login/>
			},
			{
				path: '*',
				element: <Navigate to="/login" replace/>
			}
		]
	}

	return useRoutes(routes[user?.role ?? 'default'] || routes.default)
}

export default useAppRoutes