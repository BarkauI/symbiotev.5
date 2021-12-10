import Typography from '@mui/material/Typography'
import styled from "styled-components";

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

export {DivRow, Typo}


