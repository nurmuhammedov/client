import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { IQueryParams } from '@topcoder/types'
import { useTypedSelector } from '@topcoder/hooks'
import { CommonService } from '@topcoder/api'

const useDetail = <TResponse>(
  endpoint: string,
  id?: string | number | null,
  params?: IQueryParams,
  queryKeys: string[] = [],
  enabled: boolean = true,
  staleTime?: number
) => {
  const { i18n } = useTranslation()
  const { user } = useTypedSelector((state) => state.authentication)

  const queryMethods = useQuery<TResponse, Error>({
    queryKey: [...queryKeys, endpoint, id, params, i18n.language, user?.role],
    queryFn: () => CommonService.getDetail<TResponse>(endpoint, id, params),
    enabled: !!endpoint && !!id && enabled,
    staleTime,
  })

  const { data = undefined, ...rest } = queryMethods || {}

  return {
    ...rest,
    detail: data,
  }
}

export default useDetail
