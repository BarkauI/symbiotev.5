import { Data, auth, getFire } from 'scripts'
import { editThis, useAppDispatch, useAppSelector } from 'store'

import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

const DataComp = () => {
  const dis = useAppDispatch()
  const edit = (key: keyof Data.storeDataType, pass: any) => dis(editThis([key, pass]))
  const userUID = useAppSelector(state => state.data.userUID)
  
  
  useEffect(() => {

    // add a authentication state listener, that will
    onAuthStateChanged(auth, user => {
      if (user) {
        edit('displayName', user.displayName)
        edit('userUID', user.uid)
      }
    })
    // when useruid changes, get docs based on uid and dispatch to userdocs and page
    if(userUID){
      ;(async()=>{
        const obj = await getFire(userUID)
        edit('userDocs', obj)
        edit('pageDoc', obj[0])
      })()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userUID, dis])

  // this components is just for the data import
  return null
}

export default DataComp
