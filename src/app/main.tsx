import '@topcoder/i18n'
import '@topcoder/styles/global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ErrorBoundary, Toaster } from '@topcoder/components'
import { AppContextProvider } from '@topcoder/contexts'
import { App } from '@topcoder/pages'
import { queryClient } from '@topcoder/providers'
import { store } from '@topcoder/store'
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NuqsAdapter>
            <ErrorBoundary>
              <AppContextProvider>
                <Toaster />
                <App />
              </AppContextProvider>
            </ErrorBoundary>
          </NuqsAdapter>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
)
