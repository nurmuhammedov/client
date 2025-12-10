import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ErrorBoundary, Toaster } from '@topcoder/components'
import { QueryClientProvider } from '@tanstack/react-query'
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7'
import { AppContextProvider } from '@topcoder/contexts'
import { queryClient } from '@topcoder/providers'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { store } from '@topcoder/store'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import App from '@topcoder/pages'
import '@topcoder/i18n'

// Styles
// import '@topcoder/styles/typography.css'
import '@topcoder/styles/global.css'

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
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
)
