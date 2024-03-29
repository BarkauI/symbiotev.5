import { addPageDoc, toggleSidebar, useAppDispatch, useAppSelector } from "store"

import Box from "@mui/system/Box"
import { Button } from "@mui/material"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import styled from "styled-components"
import { useTheme } from '@mui/material/styles'

const DrawerHeader = styled( Box )(   ({ theme }) => {
    console.log(theme);
    return (
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    })
  }
)

const MyLi = styled.li` 
  cursor: pointer;
  &:hover{
    background: yellow;
  }
`




const DrawerContent = () => {
  const dis = useAppDispatch()
  const userDocs = useAppSelector(state=>state.fire.userDocs)

  const clickHandler = (docId: string) => {
    let obj = userDocs.filter((doc: any)=> doc.docId === docId )
    console.log(obj);
    
    dis(addPageDoc(obj[0]))
  }
  
  
  if(userDocs){
    return (
      <ul>
        {userDocs.map((doc: any)=>(
          <MyLi key={doc.docId} onClick={()=>clickHandler(doc.docId)} >{doc.title}</MyLi>
        ))}
      </ul>
    )}
  else {
    return (
      <h3>Couldn't get user docs</h3>
    )}

}






const MainDrawer = () => {
  const theme = useTheme(); console.log( {...theme.mixins.toolbar});
  const sidebarON = useAppSelector(state => state.ui.sidebarON )
  const dis = useAppDispatch()
  const drawerWidth = useAppSelector(state => state.ui.drawerWidth)


  return (
    <Drawer
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
          // position: 'static'
        }
      }}
    >
      <DrawerHeader 
        sx={{ 
          // ...(theme.mixins.toolbar),
          height: '56px',
          ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            height: '64px'
          },
          ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            height: '48px'
          },
          padding: theme.spacing(0, -1)
        }}
      >
        <Button 
          onClick={()=>{dis(toggleSidebar())}} 
          variant="text"
        >
          <ChevronLeftIcon />CLOSE

        </Button>
      </DrawerHeader>
      <DrawerContent />
    </Drawer>
  )
}

export default MainDrawer
