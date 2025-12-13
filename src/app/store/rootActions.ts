import * as authActions from './authentication/authentication.action'
import { addDemo, clearDemos, deleteDemo, updateDemo } from './demo/demo.slice'

export const allActions = {
  ...authActions,
  addDemo,
  deleteDemo,
  updateDemo,
  clearDemos,
}

export * from '@topcoder/store/authentication/authentication.action'
export { addDemo, clearDemos, deleteDemo, updateDemo }
