import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import styled from 'styled-components/macro'

interface ttheme {
  theme: {
    text: {
      main: string
    }
  }
}
const tmain = ({ theme: { text } }: ttheme) => text.main
const tfont = ({ theme: { typography } }: any) => typography.fontFamily
const tsize = ({ theme: { typography } }: any) => typography.fontSize

const DivRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

const Typo = styled(Typography)`
  &&{
    ${({ theme: { text } }) => text?.col};
  }
`

const ButtonX = styled(Button)`
  && {
    color: ${tmain};
    font-family: ${tfont};
    font-size: ${tsize}px;
    &:hover {
      text-decoration: underline;
    }
  }
`
const ChevronRightIconX = styled(ChevronRightIcon)`
  && {
    color: ${({ theme: { text } }) => text?.main};
  }
`

const AppBarX = styled(AppBar)<{ open: boolean; drawerwidth: number }>`
  && {
    display: flex;
    align-content: center;
    background: transparent;
    ${({open, drawerwidth}) => (open ? `width: calc(100% - ${drawerwidth}px);` : '')}
    box-shadow: none;
  }
`

const ToolbarS = styled(Toolbar)` 
  display: flex;
  justify-content: space-between;
`

export { Typo, DivRow, ChevronRightIconX, ButtonX, AppBarX, ToolbarS }
