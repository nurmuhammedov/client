import { UserRole } from '@topcoder/constants'
import { FileText, Map, Users } from 'lucide-react'
import React from 'react'

export interface INavigationItem {
  title: string
  url: string
  icon?: React.ReactNode
  items?: { title: string; url: string; icon?: React.ReactNode }[]
}

const individualNavigations = [
  {
    title: 'appeals',
    url: '/individual/appeals',
    icon: <FileText />,
  },
]

const legalNavigations = [
  {
    title: 'appeals',
    url: '/legal/appeals',
    icon: <FileText />,
  },
]

const inspectorNavigations = [
  {
    title: 'appeals',
    url: '/inspector/appeals',
    icon: <FileText />,
  },
]

const regionalNavigations = [
  {
    title: 'appeals',
    url: '/regional/appeals',
    icon: <FileText />,
  },
]

const managerNavigations = [
  {
    title: 'appeals',
    url: '/manager/appeals',
    icon: <FileText />,
  },
]

const headNavigations = [
  {
    title: 'appeals',
    url: '/head/appeals',
    icon: <FileText />,
  },
]

const chairmanNavigations = [
  {
    title: 'appeals',
    url: '/chairman/appeals',
    icon: <FileText />,
  },
]

const adminNavigations = [
  {
    title: 'employees',
    url: '/admin/employees',
    icon: <Users />,
  },
  {
    title: 'regions',
    url: '/admin/regions',
    icon: <Map />,
  },
]

export const NAVIGATIONS: Record<UserRole, INavigationItem[]> = {
  [UserRole.INDIVIDUAL]: individualNavigations,
  [UserRole.LEGAL]: legalNavigations,
  [UserRole.INSPECTOR]: inspectorNavigations,
  [UserRole.REGIONAL]: regionalNavigations,
  [UserRole.MANAGER]: managerNavigations,
  [UserRole.HEAD]: headNavigations,
  [UserRole.CHAIRMAN]: chairmanNavigations,
  [UserRole.ADMIN]: adminNavigations,
}
