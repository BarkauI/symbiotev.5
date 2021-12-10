import Button from '@mui/material/Button'
import { Data } from 'scripts'
import styled from "styled-components"

const tmain = ({ theme: { text } }: Data.ttheme ) => text.main
const tfont = ({ theme: { typography } }: Data.ttheme) => typography.fontFamily
const tsize = ({ theme: { typography } }: Data.ttheme) => typography.fontSize


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

export {ButtonX}