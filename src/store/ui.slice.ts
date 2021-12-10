import {createSlice} from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    sidebarON: true,
    drawerWidth: 300,
    themeId: 3,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarON ? state.sidebarON = false : state.sidebarON = true
    },
    toggleTheme: (state) => {
      if(state.themeId >= 3) state.themeId = 0;
      state.themeId ++
    }
  }
})


export const {toggleSidebar, toggleTheme} = uiSlice.actions

export default uiSlice