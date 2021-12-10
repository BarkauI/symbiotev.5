import { RootState, useAppDispatch, useAppSelector } from './hooks'
import dataSlice, {
  editThis,
  updateSym,
  updateTitle
} from './data.slice'
import uiSlice, { toggleSidebar, toggleTheme } from './ui.slice'

import store from './configure'

export {
  store, 
  toggleSidebar, 
  uiSlice,
  useAppDispatch, 
  useAppSelector,
  dataSlice, 
  updateSym, 
  updateTitle,
  toggleTheme,
  editThis
}

export type { RootState }