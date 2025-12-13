import { TypeRootState } from '@topcoder/store'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
