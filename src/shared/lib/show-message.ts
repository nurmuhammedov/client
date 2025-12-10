import { toast } from 'sonner'

type ToastType = 'success' | 'error' | 'alert' | 'info'

export const showMessage = (
  message: string,
  type: ToastType = 'success',
  duration: number = 5000,
  position: 'top-right' | 'top-center' | 'bottom-right' | 'bottom-center' = 'top-center'
) => {
  const options = {
    duration,
    position,
    dismissible: true,
  }

  switch (type) {
    case 'success':
      toast.success(message, options)
      break
    case 'error':
      toast.error(message, options)
      break
    case 'alert':
      toast.warning(message, options)
      break
    default:
      toast.message(message, options)
  }
}
