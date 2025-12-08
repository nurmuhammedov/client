import { IListResponse, IQueryParams } from '@topcoder/types'
import { useTypedSelector } from '@topcoder/hooks'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { CommonService } from '@topcoder/api'

const usePaginatedData = <TResponse>(
  endpoint: string,
  params?: IQueryParams,
  queryKeys: string[] = [],
  enabled: boolean = true,
  staleTime?: number
) => {
  const { i18n } = useTranslation()
  const { user } = useTypedSelector((state) => state.authentication)

  const queryMethods = useQuery<IListResponse<TResponse>, Error>({
    queryKey: [...queryKeys, endpoint, params, i18n.language, user?.role],
    queryFn: () => CommonService.getPaginatedData<TResponse>(endpoint, params),
    enabled: !!endpoint && enabled,
    staleTime,
  })

  const { results, totalPages, count } = queryMethods.data || {}

  const data = Array.isArray(queryMethods.data)
    ? (queryMethods.data as unknown as TResponse)
    : Array.isArray(results)
      ? results
      : ([] as unknown as TResponse)

  return {
    ...queryMethods,
    data: data,
    count: count,
    totalPages: totalPages,
  }
}

export default usePaginatedData
