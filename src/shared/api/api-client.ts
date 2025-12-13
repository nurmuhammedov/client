import { BASE_URL } from '@topcoder/config'
import { removeEmptyParams } from '@topcoder/lib'
import axios from 'axios'

export const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  (config) => {
    if (config.params) {
      config.params = removeEmptyParams(config.params)
    }
    return config
  },
  (error) => Promise.reject(error)
)

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('User unauthorized!')
    }
    return Promise.reject(error)
  }
)
