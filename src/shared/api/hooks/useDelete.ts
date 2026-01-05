import { Query, useMutation, useQueryClient } from '@tanstack/react-query'
import { CommonService } from '@topcoder/api'
import { showMessage } from '@topcoder/lib'
import { useTranslation } from 'react-i18next'

export const useDelete = <TResponse>(
  endpoint: string,
  invalidateQueryKey: string | string[] = [],
  successMessage?: string
) => {
  const { t } = useTranslation(['messages', 'errors'])
  const queryClient = useQueryClient()

  return useMutation<TResponse, Error, string | number | undefined | null>({
    mutationFn: (id) => {
      if (id) {
        return CommonService.deleteData<TResponse>(endpoint, id)
      } else {
        showMessage(t('id_required_for_delete', { ns: 'errors' }), 'alert')
        return Promise.reject()
      }
    },
    onSuccess: () => {
      const invalidateQueryKeysOnDelete = Array.isArray(invalidateQueryKey) ? invalidateQueryKey : [invalidateQueryKey]

      if (invalidateQueryKeysOnDelete.length > 0) {
        queryClient
          .invalidateQueries({
            predicate: (query: Query) => {
              const queryKey = query.queryKey[0]
              return typeof queryKey === 'string' && invalidateQueryKeysOnDelete.includes(queryKey)
            },
          })
          .catch(() => {
            showMessage(t('unexpected_error_refreshing_data', { ns: 'errors' }), 'alert')
          })
      }

      if (successMessage) {
        showMessage(successMessage)
      }
    },
  })
}
