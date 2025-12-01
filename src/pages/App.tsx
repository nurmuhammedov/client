import { useEffect } from 'react'
import { apiClient } from '@topcoder/api/api-client'

function App() {
  useEffect(() => {
    apiClient.get('/users').then((res) => console.log(res))
  }, [])

  return <h1>App</h1>
}

export default App
