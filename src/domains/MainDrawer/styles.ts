import Box from '@mui/system/Box'
import Drawer from '@mui/material/Drawer'
import styled from 'styled-components'

// import styled from 'styled-components/macro'

const MyLi = styled.li` 
display: flex;
justify-content: space-between;
cursor: pointer;
`

const TextSpan = styled.span`
display: block;
&:hover{
  background: ${({theme}) => theme.text?.hightlight};
  padding-right: 100px;
  transition: .1s;
}
`

const Xtag = styled.span`
padding: 0 5px;
color: red;
&:hover{
  background: red;
  color: black;
  padding: 0 10px;
  transition: .1s;
}
`

const DrawerS = styled(Drawer)`
  & .MuiDrawer-paper {
    background: ${({ theme }) => theme.bg?.main};
    ${({ theme }) => theme.text?.col}
    border-right: 1px solid ${({ theme }) => theme.text?.main}
  }
`


const DrawerHeader = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 56px;
  @media (min-width: 600px) {
    height: 64px;
  }
  @media (min-width: 0px) {
    height: 48px;
  }
  padding: ${props => props.theme.spacing(0, -1)};
`

export {Xtag, TextSpan, MyLi, DrawerS, DrawerHeader}