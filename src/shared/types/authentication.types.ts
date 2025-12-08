import { ROLES } from '@topcoder/constants'

export interface ILoginResponse {
  id: number
  fullName: string
  username: string
  role: ROLES
}

export interface IAuthentication {
  user: ILoginResponse | null
  isLoading: boolean
}
