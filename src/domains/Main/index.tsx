import { DivMA, MainIn } from './styles'
import { MainContent, MainDrawer, MainNavBar } from 'domains'

const Main = () => {
  return (
    <MainIn>
      <MainDrawer />
      <DivMA>
        <MainNavBar />
        <MainContent />
      </DivMA>
    </MainIn>
  )
}

export default Main
