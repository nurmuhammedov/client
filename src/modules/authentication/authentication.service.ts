import {ILoginResponse} from 'interfaces/authentication.interface'
import {ILoginForm} from 'interfaces/yup.interface'
import {interceptor} from 'libraries'


export const AuthenticationService = {
	async login(credentials: ILoginForm) {
		const response = await interceptor.post<ILoginResponse>('authentication/login', credentials)
		return response.data
	},

	async me() {
		const response = await interceptor.get<ILoginResponse>('authentication/me')
		return response.data
	}

	// async logout() {
	// 	return await interceptor.get('accounts/logout')
	// }
}