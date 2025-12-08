import { reducer as authReducer } from './authentication/authentication.slice'
import { reducer as demoReducer } from './demo/demo.slice'

export const rootReducer = {
  authentication: authReducer,
  demo: demoReducer,
}
