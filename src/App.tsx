import { BaseCSS, FunkyCSS, GeneralCSS, themeFunction } from 'assets'
import { Main, Welcome } from 'domains'

import { DataComp } from 'comps'
import { ThemeProvider } from 'styled-components/macro';
import { useAppSelector } from 'store'

const CssComp = () => (<><BaseCSS /><FunkyCSS /><GeneralCSS /></>)

const App = () => {
  const themeId = useAppSelector(state => state.ui.themeId)  
  const userUID = useAppSelector(state => state.data.userUID)  

  return (
    <ThemeProvider theme={ themeFunction(themeId, 0) }>
      <CssComp />
      <div className='App'>
        <DataComp />
        { userUID ? <Main /> : <Welcome /> }
      </div>
    </ThemeProvider>
  )
}

export default App
