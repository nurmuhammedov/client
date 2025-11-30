import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@topcoder/pages/App'
import '@topcoder/styles/tailwind.css'
import '@topcoder/styles/index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
