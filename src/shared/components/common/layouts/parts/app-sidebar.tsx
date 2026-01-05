import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader } from '@topcoder/components'
import { NAVIGATIONS } from '@topcoder/config'
import { useTypedSelector } from '@topcoder/hooks'

import { Logo } from './logo'
import { NavItem } from './nav-item'

export function AppSidebar() {
  const { user } = useTypedSelector((state) => state.auth)

  if (!user) return null

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader>
        <SidebarGroup className="border-b p-0">
          <Logo />
        </SidebarGroup>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="space-y-1">
            {NAVIGATIONS[user.role].map((item) => (
              <NavItem key={item.url} item={item} />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
