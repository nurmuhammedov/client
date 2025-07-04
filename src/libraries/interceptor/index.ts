import {showErrorMessage, showMessage} from 'utilities/alert'
import {BASE_URL} from 'constants/environment'
import {cleanParams} from 'utilities/common'
import axios from 'axios'


const instance = axios.create({
	baseURL: BASE_URL,
	withCredentials: true
})

instance.interceptors.request.use(
	config => {
		if (config.params) {
			config.params = cleanParams(config.params)
		}

		const token: string = JSON.parse(localStorage.getItem('user') || '{}')?.token || ''
		config.headers.Authorization = token ? `Bearer ${token}` : null

		return config
	},
	error => Promise.reject(error)
)

instance.interceptors.response.use(
	response => response,
	error => {
		if (error?.response?.status === 401 && (error?.response?.config?.url === 'authentication/me')) {
			showMessage('Invalid or missing authentication token', 'alert', 15000)
		} else if (error?.response?.status <= 499) {
			showErrorMessage(error)
		} else if (error?.response?.status >= 500) {
			showMessage('Internal server error', 'error', 15000)
		}
		return Promise.reject(error)
	}
)

export default instance
