import { memo } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ErrorAction, ErrorFallbackProps } from '../types'
import { Button } from '@topcoder/components'

export const ErrorFallback = memo(({ reloadPage }: ErrorFallbackProps) => {
  const { t } = useTranslation('errors')

  const actions: ErrorAction[] = [
    {
      label: t('Reload page'),
      icon: RefreshCw,
      action: reloadPage,
      variant: 'default',
    },
  ]

  return (
    <div className="bg-background text-foreground flex min-h-screen w-full flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl text-center">
        <div className="mb-8 flex justify-center">
          <AlertTriangle className="text-destructive h-24 w-24" />
        </div>
        <h2 className="text-foreground font-golos-text mb-8 text-3xl font-bold tracking-tight">
          {t('An unexpected error occurred')}
        </h2>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {actions.map((action, index) => (
            <Button
              key={index}
              onClick={action.action}
              variant={action.variant}
              className="w-full min-w-[140px] gap-2 sm:w-auto"
            >
              <action.icon className="h-4 w-4" />
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
})

ErrorFallback.displayName = 'ErrorFallback'
