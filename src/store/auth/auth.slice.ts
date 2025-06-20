import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ILoginResponse} from 'interfaces/authentication.interface'
import {login, logout, me} from 'store/auth/auth.action'
import {ROLES} from 'constants/roles'


interface IAuth {
	user: Omit<ILoginResponse, 'token'> | null
	isLoading: boolean
}

const initialState: IAuth = {
	user: JSON.parse(localStorage.getItem('user') || 'null'),
	isLoading: false
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.isLoading = true
				state.user = null
			})
			.addCase(login.fulfilled, (state, action: PayloadAction<ILoginResponse>) => {
				localStorage.setItem('user', JSON.stringify({
					id: action.payload.id,
					fullName: action.payload.fullName || 'User',
					username: action.payload.username,
					role: action.payload.role || ROLES.USER,
					token: action.payload.token
				}))
				state.user = {
					id: action.payload.id,
					fullName: action.payload.fullName || 'User',
					username: action.payload.username,
					role: action.payload.role || ROLES.USER
				}
				state.isLoading = false
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false
				state.user = null
				localStorage.removeItem('user')
			})
			.addCase(me.pending, (state) => {
				state.isLoading = true
				state.user = null
			})
			.addCase(me.fulfilled, (state, action: PayloadAction<ILoginResponse>) => {
				const user: ILoginResponse = JSON.parse(localStorage.getItem('user') || '{}')
				localStorage.setItem('user', JSON.stringify({
					...user,
					id: action.payload.id,
					username: action.payload.username,
					fullName: action.payload.fullName || 'User',
					role: action.payload.role || ROLES.USER
				}))
				state.user = {
					id: action.payload.id,
					fullName: action.payload.fullName || 'User',
					username: action.payload.username,
					role: action.payload.role || ROLES.USER
				}
				state.isLoading = false
			})
			.addCase(me.rejected, (state) => {
				state.isLoading = false
				state.user = null
				localStorage.removeItem('user')
			})
			.addCase(logout.pending, (state) => {
				state.isLoading = true
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = null
				state.isLoading = false
				localStorage.removeItem('user')
			})
			.addCase(logout.rejected, (state) => {
				state.isLoading = false
			})
	}
})

export const { reducer } = authSlice
