import React, { ReactPortal } from 'react'
import { createPortal } from 'react-dom'
import { Toaster } from 'sonner'

const Alert: React.FC = (): ReactPortal =>
  createPortal(
    <Toaster
      expand={false}
      richColors
      toastOptions={{
        classNames: {
          toast: 'font-golos select-none text-base cursor-pointer',
          title: 'font-golos text-base',
          description: 'font-golos text-base',
        },
      }}
    />,
    document.querySelector('#alert') as HTMLElement
  )

export { Alert as Toaster }
