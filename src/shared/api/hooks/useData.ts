import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { IQueryParams } from '@topcoder/types'
import { useTypedSelector } from '@topcoder/hooks/use-typed-selector'
import { CommonService } from '@topcoder/api'

export const useData = <TResponse>(
  endpoint: string,
  queryKey: string | string[],
  params?: IQueryParams,
  enabled: boolean = true,
  staleTime?: number
) => {
  const { i18n } = useTranslation()
  const { user } = useTypedSelector((state) => state.authentication)
  const queryKeys = Array.isArray(queryKey) ? queryKey : [queryKey]

  return useQuery<TResponse, Error>({
    queryKey: [...queryKeys, endpoint, params, i18n.language, user?.role].filter((queryKey) => !!queryKey),
    queryFn: () => CommonService.getData<TResponse>(endpoint, params),
    enabled,
    staleTime,
  })
}
