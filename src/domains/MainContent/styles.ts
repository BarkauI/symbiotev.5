import Container from "@mui/material/Container"
import styled from 'styled-components/macro'

const StyledDiv = styled.div`
/* padding: auto; */
@media(min-width: 0px){
  min-width: 500px
}
@media(min-width: 960px){
  min-width: 750px
}
min-width: 500px
`

const MyLi = styled.li`
  &:hover {
    box-shadow: 0px 1px 0px 0px yellow;
  }
`
const  EditH1 = styled.h1`
  &:focus {
    outline: 0px solid transparent;
  }
`

const EditDiv = styled.div`
  &:focus {
    outline: 0px solid transparent;
  }
` 

const MyContainer = styled(Container)`
@media (min-width: 960px) {
  /* background: red!important; */
  max-width: 750px !important;
}
.MuiPaper-root {
}
`

export {StyledDiv, MyContainer, MyLi, EditDiv, EditH1}
