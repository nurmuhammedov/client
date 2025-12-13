import { Query, useMutation, useQueryClient } from '@tanstack/react-query'
import { CommonService } from '@topcoder/api'
import { showMessage } from '@topcoder/lib'
import { useTranslation } from 'react-i18next'

export const useUpdate = <TResponse, TPayload>(
  endpoint: string,
  invalidateQueryKey: string | string[] = [],
  method: 'put' | 'patch' = 'put',
  successMessage?: string
) => {
  const { t } = useTranslation(['messages', 'errors'])
  const queryClient = useQueryClient()

  type InternalVariables = {
    payload: TPayload
    id: string | number | undefined | null
  }

  const mutation = useMutation<TResponse, Error, InternalVariables>({
    mutationFn: ({ payload, id }) => {
      if (!id) {
        showMessage(t('ID is required to perform update operation', { ns: 'errors' }), 'error')
        return Promise.reject()
      } else {
        return method === 'put'
          ? CommonService.updateData<TPayload, TResponse>(endpoint, payload, id)
          : CommonService.partialUpdateData<TPayload, TResponse>(endpoint, payload, id)
      }
    },
    onSuccess: () => {
      const queryKeys = Array.isArray(invalidateQueryKey) ? invalidateQueryKey : [invalidateQueryKey]

      if (successMessage) {
        showMessage(successMessage)
      }

      if (queryKeys?.length > 0) {
        queryClient
          .invalidateQueries({
            predicate: (query: Query) => {
              const queryKey = query.queryKey[0]
              return typeof queryKey === 'string' && queryKeys.includes(queryKey)
            },
          })
          .catch(() => {
            showMessage(t('An unexpected error occurred while refreshing the data', { ns: 'errors' }), 'error')
          })
      }
    },
  })

  return {
    ...mutation,
    mutate: (payload: TPayload, id: string | number | undefined | null) => mutation.mutate({ payload, id }),
    mutateAsync: (payload: TPayload, id: string | number | undefined | null) => mutation.mutateAsync({ payload, id }),
  }
}
