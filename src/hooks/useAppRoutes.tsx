import {useAuth} from 'hooks'
import {
	Login,
	UsersTable,
	AddUser
} from 'modules'
import {Navigate, useRoutes} from 'react-router-dom'
import {routeByRole} from 'utilities/authentication'
import {ROLES} from 'constants/roles'
import {Layout} from 'components'


function useAppRoutes() {
	const {user} = useAuth()

	const url = routeByRole(user?.role)

	const routes = {
		[ROLES.ADMIN]: [
			{
				path: '/',
				element: <Layout/>,
				children: [
					{
						index: true,
						element: <Navigate to={url} replace/>
					},
					{
						path: 'users',
						children: [
							{
								index: true,
								element: <UsersTable/>
							},
							{
								path: 'add',
								element: <AddUser/>
							},
							{
								path: 'edit/:id',
								element: <AddUser edit={true}/>
							}
						]
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
		[ROLES.USER]: [
			{
				path: '/',
				element: <Layout/>,
				children: [
					{
						index: true,
						element: <Navigate to={url} replace/>
					},
					{
						id: 'vocabularies',
						path: 'vocabularies',
						children: [
							{
								index: true,
								element: <></>
							}
						]
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