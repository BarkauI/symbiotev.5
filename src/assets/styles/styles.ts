import 'styled-components';

import { createGlobalStyle } from 'styled-components/macro';

const BaseCSS = createGlobalStyle` 

  // general init styles
  html{ 
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
  }
  body{
    margin: 0;
    padding: 0;
  }
  *{box-sizing: border-box}

`
const FunkyCSS = createGlobalStyle`  
  
  // general styles
  *{
    /* outline: 1px dashed #ffd5d5 !important;  */
  }


  body{
    border-radius: 2px; 
  }

  p{opacity: 0.6; line-height: 1.5;} 

  img{max-width: 100%}
`

//

//

//

//

//

const GeneralCSS = createGlobalStyle` 
  body{
    font-family: ${({theme}) => theme.typography.fontFamily};
    font-size: ${({theme}) => theme.typography.fontSize}px;
    background: ${({ theme: {bg}  }) => bg?.main };
    ${({theme}) => theme.text?.col} 
  }
`



export { BaseCSS, FunkyCSS, GeneralCSS }
