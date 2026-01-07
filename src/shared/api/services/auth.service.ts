import { apiClient } from '@topcoder/api'
import { IAxiosResponse, IUser, TypeAny } from '@topcoder/types'

export const AuthService = {
  async login(credentials: TypeAny) {
    const response = await apiClient.post<IAxiosResponse<IUser>>('auth/login', credentials)
    return response.data.data
  },

  async oneIDLogin(credentials: TypeAny) {
    const response = await apiClient.post<IAxiosResponse<IUser>>('auth/one-id', credentials)
    return response.data.data
  },

  async me() {
    const response = await apiClient.get<IAxiosResponse<IUser>>('users/me')
    return response.data.data
  },

  async logout() {
    const response = await apiClient.post<IAxiosResponse<TypeAny>>('auth/logout')
    return response.data.message || 'success'
  },
}
