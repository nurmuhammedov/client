import { memo, createElement } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ErrorBoundaryCore } from './ui/error-boundary-core'
import { ErrorBoundaryProps } from './types'

export const ErrorBoundary = memo((props: ErrorBoundaryProps) => {
  const location = useLocation()
  const navigate = useNavigate()

  return createElement(ErrorBoundaryCore, {
    ...props,
    navigate,
    pathname: location.pathname,
  })
})

ErrorBoundary.displayName = 'ErrorBoundary'

export type * from './types'
