import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthenticationService } from '@topcoder/api'
import { ILoginForm, ILoginResponse } from '@topcoder/types'

export const login = createAsyncThunk<ILoginResponse, ILoginForm>('authentication/login', async (credentials) => {
  return AuthenticationService.login(credentials)
})

export const me = createAsyncThunk<ILoginResponse>('authentication/me', async () => {
  return AuthenticationService.me()
})

export const logout = createAsyncThunk<undefined>('authentication/logout', async () => {
  return AuthenticationService.logout()
})
