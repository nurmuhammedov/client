import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { IQueryParams } from '@topcoder/types'
import { useTypedSelector } from '@topcoder/hooks'
import { CommonService } from '@topcoder/api'

export const useDetail = <TResponse>(
  endpoint: string,
  id: string | number | null,
  queryKey: string | string[],
  params?: IQueryParams,
  enabled: boolean = true,
  staleTime?: number
) => {
  const { i18n } = useTranslation()
  const { user } = useTypedSelector((state) => state.authentication)
  const queryKeys = Array.isArray(queryKey) ? queryKey : [queryKey]

  const queryMethods = useQuery<TResponse, Error>({
    queryKey: [...queryKeys, endpoint, id, params, i18n.language, user?.role].filter((queryKey) => !!queryKey),
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
