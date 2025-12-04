import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from '@tanstack/react-query'
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7'
import { ErrorBoundary } from '@topcoder/components'
import { queryClient } from '@topcoder/providers'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from '@topcoder/pages'
import '@topcoder/i18n'

// Styles
import '@topcoder/styles/tailwind.css'
import '@topcoder/styles/global.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NuqsAdapter>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </NuqsAdapter>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </QueryClientProvider>
  </StrictMode>
)
