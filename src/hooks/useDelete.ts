import {useMutation, useQueryClient} from '@tanstack/react-query'
import {CommonService} from 'services/common.service'
import {showMessage} from 'utilities/alert'
import {noop, noopAsync} from 'utilities/common'


const useDelete = (
	endpoint: string,
	id?: string | number | boolean | null,
	successMessage: string = 'Deleted successfully',
	errorMessage?: string
) => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: () => {
			if (id) {
				return CommonService.deleteData(endpoint, id?.toString())
			} else {
				showMessage('ID is required to perform delete operation', 'error')
			}
			return noopAsync()
		},
		onSuccess: () => {
			showMessage(successMessage, 'success')
			queryClient.invalidateQueries({queryKey: [endpoint?.slice(0, -1)]}).then(() => noop())
		},
		onError: () => {
			if (errorMessage) {
				showMessage(errorMessage, 'error')
			}
		}
	})
}

export default useDelete
