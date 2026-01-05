import { Permission, UserRole } from '@topcoder/constants'

export interface IUser {
  id: string
  name: string
  role: UserRole
  directions: Permission[]
}

export interface IAuth {
  user: IUser | null
  isLoading: boolean
  isLoggingOut: boolean
  isLogging: boolean
}
