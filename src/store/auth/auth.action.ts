import {ILoginResponse} from 'interfaces/authentication.interface'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {AuthenticationService} from 'modules/authentication/authentication.service'
import {showMessage} from 'utilities/alert'


export const login = createAsyncThunk<ILoginResponse, { username: string; password: string }>(
	'auth/login',
	async (credentials) => {
		return AuthenticationService.login(credentials)
	}
)

export const me = createAsyncThunk<ILoginResponse>(
	'auth/me',
	async () => {
		return AuthenticationService.me()
	}
)

export const logout = createAsyncThunk<null>(
	'auth/logout', async () => {
		localStorage.removeItem('user')
		showMessage('Successful', 'success')
		return null
	}
)