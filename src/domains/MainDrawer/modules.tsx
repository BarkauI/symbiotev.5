import { ButtonX, DivRow, Typo } from 'comps'
import { Data, auth, createNewDoc, deleteUserDoc, getFire } from 'scripts'
import { DrawerHeader, DrawerS, MyLi, TextSpan, Xtag } from './styles'
import { editThis, toggleTheme, useAppDispatch, useAppSelector } from 'store'

import AddIcon from '@mui/icons-material/Add'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { signOut } from 'firebase/auth'
import { toggleSidebar } from 'store'
import { useTheme } from '@mui/material/styles'

//

//

//

//

//////////////////////////////////////////////////////////////

const DrawerX: React.FC = ({ children }) => {
  const sidebarON = useAppSelector(state => state.ui.sidebarON)
  const drawerWidth = useAppSelector(state => state.ui.drawerWidth)
  const theme = useTheme()

  return (
    <DrawerS
      variant='persistent'
      anchor='left'
      open={sidebarON}
      sx={{
        boxSizing: 'border-box',
        width: `${sidebarON ? drawerWidth : 0}px`,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          padding: `${sidebarON ? theme.spacing(0, 1) : 0}`,
        },
      }}
    >
      {children}
    </DrawerS>
  )
}

//

//

//

// 

// drawer header X  ////////////////////////////////////////////

const DrawerHeaderX = () => {
  const dis = useAppDispatch()
  const displayName = useAppSelector(store => store.data.displayName)

  const toggleHandle = () => dis(toggleSidebar())

  return (
    <DrawerHeader>
      <DivRow>{displayName ? <Typo>{displayName}</Typo> : null}</DivRow>

      <DivRow>
        <ButtonX onClick={toggleHandle} variant='text'>
          <ChevronLeftIcon />
          CLOSE
        </ButtonX>
      </DivRow>
    </DrawerHeader>
  )
}

//

//

//

//

//

// drawer content ///////////////////////////////////////////////////////

const DrawerContent = () => {
  const dis = useAppDispatch()
  const edit = (key: keyof Data.storeDataType, pass: any) => dis(editThis([key, pass]))
  const userDocs = useAppSelector(state => state.data.userDocs)
  const userUID = useAppSelector(state => state.data.userUID)
  const displayName = useAppSelector(store => store.data.displayName)

  const docOpenHandler = (docId: string) => {
    let obj = userDocs.filter((doc: any) => doc.docId === docId)
    edit('pageDoc', obj[0])
  }

  const createNewDocHandler = async () => {
    // add emty to firebase

    if (userUID) {
      ;(async () => {
        await createNewDoc(userUID)
        const obj = await getFire(userUID)
        edit('userDocs', obj)
        edit('pageDoc', obj[0])
      })()
    }
  }

  const deleteDocHandler = async (docId: string) => {
    console.log('DELETED')
    deleteUserDoc(userUID, docId)
    if (userUID) {
      ;(async () => {
        const obj = await getFire(userUID)
        edit('userDocs', obj)
        edit('pageDoc', obj[0])
      })()
    }
  }

  const logOutHandler = async () => {
    await signOut(auth)
    window.location.reload()
    edit('displayName', null)
    edit('userUID', null)
  }

  const themeHandle = () => dis(toggleTheme())

  let arr = [...userDocs]
  const orderedDocs = arr.sort((a: any, b: any) => {
    return a.order - b.order
  })

  return (
    <>
      <ButtonX onClick={themeHandle}>Theme</ButtonX>
      {displayName ? <ButtonX onClick={logOutHandler}>LOG-OUT</ButtonX> : null}
      {orderedDocs ? (
        <ul>
          {orderedDocs.map((doc: any) => (
            <MyLi key={doc.docId} onClick={() => docOpenHandler(doc.docId)}>
              <TextSpan>{doc.title}</TextSpan>
              <Xtag onClick={() => deleteDocHandler(doc.docId)}>X</Xtag>
            </MyLi>
          ))}
          <MyLi onClick={createNewDocHandler}>
            <AddIcon sx={{ fontSize: 'medium' }} />
          </MyLi>
        </ul>
      ) : (
        <h3>Couldn't get user docs</h3>
      )}
    </>
  )
}

export { DrawerX, DrawerHeaderX, DrawerContent }
