import { toggleSidebar, useAppDispatch, useAppSelector } from 'store'

import { AppBarY } from './modules'
import {ButtonX} from 'comps'
import { ChevronRightIconX } from './styles'
import {DivRow} from 'comps'

const MainNavBar = () => {
  const dis = useAppDispatch()
  const sidebarON = useAppSelector(state => state.ui.sidebarON)



  return (
    <AppBarY>

        <DivRow>
          {sidebarON ? null : (<>
            <ButtonX onClick={() => {dis(toggleSidebar())}} variant='text'>
              OPEN<ChevronRightIconX />
            </ButtonX>
          </>)}
        </DivRow>


    </AppBarY>
  )
}

export default MainNavBar
