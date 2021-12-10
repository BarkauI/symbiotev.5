import {Data, googleLogin} from 'scripts'
import { editThis, useAppDispatch } from 'store'

import { ButtonX } from 'comps'
import {CenterDiv} from './styles'

const Welcome = () => {
  const dis = useAppDispatch()
  const edit = (key: keyof Data.storeDataType, pass: any) => dis(editThis([key, pass]))


  const googleLoginHandler = async() => {
    const res = await googleLogin()
    
    if(res){
      console.log('dispatch', res.user.uid);
      edit('displayName', res.user.displayName)
      edit('userUID', res.user.uid)
    }
  }
  
  return (
    <CenterDiv>
      <ButtonX onClick={googleLoginHandler} >LOGIN with GOOGLE</ButtonX>
    </CenterDiv>
  )
}

export default Welcome
