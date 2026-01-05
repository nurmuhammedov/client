import { FullPageLoader } from '@topcoder/components'
import { IS_DEV } from '@topcoder/config'
import { UserRole } from '@topcoder/constants'
import { useTypedSelector } from '@topcoder/hooks'
import { routeByRole } from '@topcoder/lib'
import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigate, useRoutes } from 'react-router-dom'

const AppLayout = lazy(() => import('@topcoder/components').then((module) => ({ default: module.AppLayout })))
const AuthLayout = lazy(() => import('@topcoder/components').then((module) => ({ default: module.AuthLayout })))
const AdminLoginForm = lazy(() =>
  import('@topcoder/modules/auth/screens/login').then((module) => ({ default: module.AdminLoginForm }))
)
const OneIdLogin = lazy(() =>
  import('@topcoder/modules/auth/screens/one-id-login').then((module) => ({ default: module.OneIdLogin }))
)
const App = lazy(() => import('@topcoder/pages').then((module) => ({ default: module.App })))

export const useAppRoutes = () => {
  const { t } = useTranslation()
  const { user, isLoading } = useTypedSelector((state) => state.auth)

  const routes = {
    [UserRole.INDIVIDUAL]: [
      {
        path: 'individual',
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={routeByRole(user?.role)} replace />,
          },
          {
            path: 'appeals',
            children: [
              {
                index: true,
                element: <App />,
              },
            ],
          },
        ],
      },
      {
        path: 'not-found',
        element: <h1>Not found</h1>,
      },
      {
        path: '*',
        element: <Navigate to={routeByRole(user?.role)} replace />,
      },
    ],
    [UserRole.LEGAL]: [
      {
        path: 'legal',
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={routeByRole(user?.role)} replace />,
          },
          {
            path: 'appeals',
            children: [
              {
                index: true,
                element: <App />,
              },
            ],
          },
        ],
      },
      {
        path: 'not-found',
        element: <h1>Not found</h1>,
      },
      {
        path: '*',
        element: <Navigate to={routeByRole(user?.role)} replace />,
      },
    ],
    [UserRole.INSPECTOR]: [
      {
        path: 'inspector',
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={routeByRole(user?.role)} replace />,
          },
          {
            path: 'appeals',
            children: [
              {
                index: true,
                element: <App />,
              },
            ],
          },
        ],
      },
      {
        path: 'not-found',
        element: <h1>Not found</h1>,
      },
      {
        path: '*',
        element: <Navigate to={routeByRole(user?.role)} replace />,
      },
    ],
    [UserRole.REGIONAL]: [
      {
        path: 'regional',
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={routeByRole(user?.role)} replace />,
          },
          {
            path: 'appeals',
            children: [
              {
                index: true,
                element: <App />,
              },
            ],
          },
        ],
      },
      {
        path: 'not-found',
        element: <h1>Not found</h1>,
      },
      {
        path: '*',
        element: <Navigate to={routeByRole(user?.role)} replace />,
      },
    ],
    [UserRole.MANAGER]: [
      {
        path: 'manager',
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={routeByRole(user?.role)} replace />,
          },
          {
            path: 'appeals',
            children: [
              {
                index: true,
                element: <App />,
              },
            ],
          },
        ],
      },
      {
        path: 'not-found',
        element: <h1>Not found</h1>,
      },
      {
        path: '*',
        element: <Navigate to={routeByRole(user?.role)} replace />,
      },
    ],
    [UserRole.HEAD]: [
      {
        path: 'head',
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={routeByRole(user?.role)} replace />,
          },
          {
            path: 'appeals',
            children: [
              {
                index: true,
                element: <App />,
              },
            ],
          },
        ],
      },
      {
        path: 'not-found',
        element: <h1>Not found</h1>,
      },
      {
        path: '*',
        element: <Navigate to={routeByRole(user?.role)} replace />,
      },
    ],
    [UserRole.CHAIRMAN]: [
      {
        path: 'chairman',
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={routeByRole(user?.role)} replace />,
          },
          {
            path: 'appeals',
            children: [
              {
                index: true,
                element: <App />,
              },
            ],
          },
        ],
      },
      {
        path: 'not-found',
        element: <h1>Not found</h1>,
      },
      {
        path: '*',
        element: <Navigate to={routeByRole(user?.role)} replace />,
      },
    ],
    [UserRole.ADMIN]: [
      {
        path: 'admin',
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={routeByRole(user?.role)} replace />,
          },
          {
            path: 'employees',
            children: [
              {
                index: true,
                element: <h1>Employees</h1>,
              },
            ],
          },
          {
            path: 'regions',
            children: [
              {
                index: true,
                element: <h1>Regions</h1>,
              },
            ],
          },
        ],
      },
      {
        path: 'not-found',
        element: <h1>Not found</h1>,
      },
      {
        path: '*',
        element: <Navigate to={routeByRole(user?.role)} replace />,
      },
    ],
    default: [
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={`/auth/${IS_DEV ? 'admin' : ' login'}`} replace />,
          },
          {
            path: 'login',
            element: <OneIdLogin />,
          },
          {
            path: 'admin',
            element: <AdminLoginForm />,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to={`/auth/${IS_DEV ? 'admin' : ' login'}`} replace />,
      },
    ],
  }

  const element = useRoutes(user?.role ? routes[user.role] : routes.default)

  if (isLoading) {
    return <FullPageLoader text={t('data_is_loading')} />
  }

  return <Suspense fallback={<FullPageLoader text={t('data_is_loading')} />}>{element}</Suspense>
}
