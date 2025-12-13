import { apiClient } from '@topcoder/api'
import { ILoginForm, ILoginResponse } from '@topcoder/types'

export const AuthenticationService = {
  async login(credentials: ILoginForm) {
    const response = await apiClient.post<ILoginResponse>('authentication/login', credentials)
    return response.data
  },

  async me() {
    const response = await apiClient.get<ILoginResponse>('authentication/me')
    return response.data
  },

  async logout() {
    const response = await apiClient.get('accounts/logout')
    return response.data
  },
}
