import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { TypeRootState } from '@topcoder/store'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
