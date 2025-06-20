import {useActions, useAuth} from 'hooks'
import {PropsWithChildren, createContext, useEffect} from 'react'
import {Loader} from 'components'


const AppContext = createContext<null>(null)

function AppContextProvider({children}: PropsWithChildren) {
	const {me} = useActions()
	const {isLoading} = useAuth()

	useEffect(() => {
		me()
	}, [])

	if (isLoading) {
		return <Loader screen background/>
	}

	return (
		<AppContext.Provider value={null}>
			{children}
		</AppContext.Provider>
	)
}

export {AppContext, AppContextProvider}
