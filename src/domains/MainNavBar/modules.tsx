import {AppBarX, ToolbarS} from './styles'

import Toolbar from '@mui/material/Toolbar'
import { useAppSelector } from 'store'

const AppBarY:React.FC = ({children}) => {

  const sidebarON = useAppSelector(state => state.ui.sidebarON)
  const drawerWidth = useAppSelector(state => state.ui.drawerWidth)

  return (
    <>
      <AppBarX
        open={sidebarON}
        drawerwidth={drawerWidth}
        position='fixed'
      >
        <ToolbarS>
          {children}
        </ToolbarS>
      </AppBarX>
      <Toolbar />
    </>
  )
}

export { AppBarY }
