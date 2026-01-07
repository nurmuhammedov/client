import { Query, useMutation, useQueryClient } from '@tanstack/react-query'
import { CommonService } from '@topcoder/api'
import { showMessage } from '@topcoder/lib'
import { parseAsString, useQueryState } from 'nuqs'
import { useTranslation } from 'react-i18next'

export const useDelete = <TResponse>(
  endpoint: string,
  invalidateQueryKey: string | string[] = [],
  successMessage?: string
) => {
  const { t } = useTranslation(['common', 'errors'])
  const queryClient = useQueryClient()
  const [page, setPage] = useQueryState('page', parseAsString.withDefault('1'))

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
      setPage('1').then(() => {
        const invalidateQueryKeysOnDelete = Array.isArray(invalidateQueryKey)
          ? invalidateQueryKey
          : [invalidateQueryKey]

        if (invalidateQueryKeysOnDelete.length > 0 && page === '1') {
          setTimeout(() => {
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
          }, 0)
        }
      })

      if (successMessage) {
        showMessage(t(successMessage))
      }
    },
  })
}
