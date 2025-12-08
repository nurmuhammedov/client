import { allActions } from '@topcoder/store'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

export const useActions = () => {
  const dispatch = useDispatch()
  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}
