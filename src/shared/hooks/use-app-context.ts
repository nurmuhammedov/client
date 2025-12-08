import { useContext } from 'react'
import { AppContext } from '@topcoder/contexts'

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('Hook used out of the AppContextProvider')
  }
  return context
}
