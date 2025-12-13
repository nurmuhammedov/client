import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ROLES } from '@topcoder/constants'
import { login, logout, me } from '@topcoder/store'
import { IAuthentication, ILoginResponse } from '@topcoder/types'

const initialState: IAuthentication = {
  user: null,
  isLoading: false,
}

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
        state.user = null
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<ILoginResponse>) => {
        state.user = {
          id: action.payload.id,
          fullName: action.payload.fullName,
          username: action.payload.username,
          role: action.payload.role || ROLES.USER,
        }
        state.isLoading = false
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(me.pending, (state) => {
        state.isLoading = true
        state.user = null
      })
      .addCase(me.fulfilled, (state, action: PayloadAction<ILoginResponse>) => {
        state.user = {
          id: action.payload.id,
          fullName: action.payload.fullName || 'User',
          username: action.payload.username,
          role: action.payload.role || ROLES.USER,
        }
        state.isLoading = false
      })
      .addCase(me.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
        state.isLoading = false
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const { reducer } = authenticationSlice
