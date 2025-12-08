import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react'
import { getLocalStorage } from '@topcoder/lib'

interface IAppContext {
  isSideBarOpen: boolean | null
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const AppContext = createContext<IAppContext | undefined>(undefined)

function AppContextProvider({ children }: PropsWithChildren) {
  const [isSideBarOpen, setIsSidebarOpen] = useState<boolean>(Boolean(getLocalStorage<boolean>('isSideBarOpen')))

  return <AppContext.Provider value={{ isSideBarOpen, setIsSidebarOpen }}>{children}</AppContext.Provider>
}

export { AppContext, AppContextProvider }
