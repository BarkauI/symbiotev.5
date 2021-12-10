import Button from "@material-ui/core/Button"
import styled from 'styled-components/macro'

const MainIn = styled.div`
  ${({theme})=> theme.flex?.row}
  min-height: 100vh;
  `

const DivMA = styled.div`
  margin: 0 auto;
`

const ButtonX = styled(Button)` 
  &&{color: ${({theme: {palette}}) => palette.primary.main };} 
`

// MainIn.defaultProps = {
//   "data-id": "Section"
// }

export {MainIn, DivMA, ButtonX}