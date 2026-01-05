import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserRole } from '@topcoder/constants'
import { login, logout, me, oneIDLogin } from '@topcoder/store'
import { IAuth, IUser } from '@topcoder/types'

const initialState: IAuth = {
  user: null,
  isLoading: true,
  isLoggingOut: false,
  isLogging: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLogging = true
        state.user = null
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = {
          id: action.payload.id || '1',
          name: action.payload.name || '?',
          role: action.payload.role || UserRole.INDIVIDUAL,
          directions: action.payload.directions || [],
        }
        state.isLogging = false
      })
      .addCase(login.rejected, (state) => {
        state.isLogging = false
        state.user = null
      })
      .addCase(oneIDLogin.pending, (state) => {
        state.isLoading = true
        state.user = null
      })
      .addCase(oneIDLogin.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = {
          id: action.payload.id || '1',
          name: action.payload.name || '?',
          role: action.payload.role || UserRole.INDIVIDUAL,
          directions: action.payload.directions || [],
        }
        state.isLoading = false
      })
      .addCase(oneIDLogin.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(me.pending, (state) => {
        state.isLoading = true
        state.user = null
      })
      .addCase(me.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = {
          id: action.payload.id || '1',
          name: action.payload.name || '?',
          role: action.payload.role || UserRole.INDIVIDUAL,
          directions: action.payload.directions || [],
        }
        state.isLoading = false
      })
      .addCase(me.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(logout.pending, (state) => {
        state.isLoggingOut = true
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
        state.isLoggingOut = false
      })
      .addCase(logout.rejected, (state) => {
        state.isLoggingOut = false
      })
  },
})

export const { reducer } = authSlice
