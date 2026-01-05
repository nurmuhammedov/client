import { Separator, SidebarTrigger } from '@topcoder/components'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import { UserDropdown } from './user-dropdown'

export function Header() {
  const { t } = useTranslation('sidebar')
  const { pathname } = useLocation()
  const title = pathname?.split('/')?.[2] || ''

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-white px-4 shadow-sm transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        {title && <h1 className="text-base font-medium leading-none text-foreground">{t(title)}</h1>}
      </div>
      <div className="ml-auto flex items-center gap-4">
        <UserDropdown />
      </div>
    </header>
  )
}
