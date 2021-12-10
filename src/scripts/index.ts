import { Data, P } from './modules'
import {
  auth,
  createNewDoc,
  createNewSym,
  db,
  deleteSym,
  deleteUserDoc,
  getFire,
  googleLogin,
  updateSymFire,
  updateTitleFire
} from './firebase'
import { getKey, onFocusBlur } from './utils'

export {
  auth,
  db,
  getFire,
  updateSymFire,
  onFocusBlur,
  updateTitleFire,
  createNewDoc,
  googleLogin,
  createNewSym,
  deleteSym,
  deleteUserDoc,
  getKey
}
export type { Data, P }
