import { Theme } from '@material-ui/core/styles';
import {amber} from '@material-ui/core/colors'
import { createTheme } from "@material-ui/core";

interface CustomTheme {
    bg?: {
        main?: string
    }, 
    text?: {
        main?: string,
        col?: string,
        hightlight?: string,
    },
    flex?: {
      row?: string
    }
}
declare module '@material-ui/core/styles' {
    interface Theme extends CustomTheme {}
    interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}



const fontfamilyArray = [
  "'Azeret Mono', monospace",
  "'Roboto', sans-serif;",
  "'Yellowtail', cursive;",
  "'proggy', monospace"
]


const themeFunction = (font: number, color: number) => {

  let background = ['#fdfbf8', '#111'];
  let textColor = ['#425564', '#eee']
  const fontSize = [12, 12, 12, 22]
  const hightlight = ['#ffa', '#880']

  return createTheme({
    typography: {
      "fontFamily": `${fontfamilyArray[font]}`,
      "fontSize": fontSize[font],
    },
    palette: {
      primary: {
        main: amber[900]
      },
      secondary: {
        main: '#326eb3'
      }
    },
    flex: {
      row: `display: flex;
      flex-direction: row;`
    },
    bg: {
      main: background[color]
    },
    text: {
      main: textColor[color],
      col: `font-family: ${fontfamilyArray[font]};
      font-size: ${fontSize[font]}px;
      color: ${textColor[color]};`,
      hightlight: hightlight[color]
    }
  })
}




export {themeFunction}