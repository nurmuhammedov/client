import { rootReducer } from '@topcoder/store/rootReducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: rootReducer,
  devTools: false,
})

export type TypeRootState = ReturnType<typeof store.getState>
export * from './rootActions'
export * from './rootReducer'
