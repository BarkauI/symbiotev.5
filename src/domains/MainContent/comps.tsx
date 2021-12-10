import {
  Data,
  createNewSym,
  deleteSym,
  getFire,
  updateSymFire,
  updateTitleFire,
} from 'scripts'
import { EditDiv, EditH1, MyLi } from './styles'
import {
  editThis,
  updateSym,
  updateTitle,
  useAppDispatch,
  useAppSelector,
} from 'store'
import { useEffect, useRef } from 'react'

import AddIcon from '@mui/icons-material/Add'

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

interface SymbFCTypes {
  valueIN: string | null
  sym: Data.symType
}
const Symb: React.FC<SymbFCTypes> = ({ valueIN, sym }) => {
  const dis = useAppDispatch()
  const edit = (key: keyof Data.storeDataType, pass: any) => dis(editThis([key, pass]))
  const divRef = useRef<HTMLDivElement>(null)
  const userUID = useAppSelector(state => state.data.userUID)

  const handleBlur = () => {
    if (divRef.current?.textContent) {
      dis(
        updateSym({
          symId: sym.symId,
          body: divRef.current?.textContent,
          docId: sym.docId,
          order: sym.order,
        })
      )

      updateSymFire(userUID, sym, divRef.current?.textContent)
    }
  }
  const handleKeyDown = (e: any) => {
    if (e.key === 'Backspace' && e.ctrlKey) {
      if (userUID) {
        ;(async () => {
          deleteSym(userUID, sym.docId, sym.symId)
          const obj = await getFire(userUID)
          edit('userDocs', obj)
          edit('pageDoc', obj[0])
        })()
      }
    }
  }

  useEffect(() => {
    let target = divRef.current
    target?.addEventListener('blur', handleBlur)
    target?.addEventListener('keydown', handleKeyDown)
    // cleanup this component
    return () => {
      target?.removeEventListener('blur', handleBlur)
      target?.addEventListener('keydown', handleKeyDown)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <EditDiv contentEditable suppressContentEditableWarning ref={divRef}>
      {valueIN}
    </EditDiv>
  )
}

//

//

//

//

/////////////////////////////////////////////////////////////

interface DocTitleXTypes {
  doc: Data.docType
  valueIN: string
}
const DocTitleX: React.FC<DocTitleXTypes> = ({ doc, valueIN }) => {
  const dis = useAppDispatch()
  const h1Ref = useRef<HTMLDivElement>(null)
  const userUID = useAppSelector(state => state.data.userUID)

  const handleBlur = (target: any) => {
    if (target.textContent) {
      dis(
        updateTitle({
          title: target.textContent,
          docId: doc.docId,
          order: doc.order,
        })
      )

      updateTitleFire(userUID, doc, target.textContent)
    }
  }

  useEffect(() => {
    let target = h1Ref.current
    target?.addEventListener('blur', () => handleBlur(target))
    // cleanup this component
    return () => {
      target?.removeEventListener('blur', handleBlur)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <EditH1 contentEditable suppressContentEditableWarning ref={h1Ref}>
      {valueIN}
    </EditH1>
  )
}

//

//

//

//

//////////------------------------------------------/////////

const Symbs = () => {
  const dis = useAppDispatch()
  const edit = (key: keyof Data.storeDataType, pass: any) => dis(editThis([key, pass]))
  const userUID = useAppSelector(state => state.data.userUID)
  const pageDoc = useAppSelector(state => state.data.pageDoc)

  const createNewSymHandler = async () => {
    // add emty to firebase
    await createNewSym(userUID, pageDoc.docId)
    if (userUID) {
      ;(async () => {
        const userDocsArr = await getFire(userUID)
        edit('userDocs', userDocsArr)
        let thisDoc = userDocsArr.filter(
          (doc: any) => doc.docId === pageDoc.docId
        )
        edit('pageDoc', thisDoc[0])
      })()
    }
  }

  if (pageDoc) {
    let arr = [...pageDoc.syms]
    const orderedSyms = arr.sort((a: any, b: any) => {
      return a.order - b.order
    })
    return (
      <>
        <DocTitleX key={pageDoc.docId} doc={pageDoc} valueIN={pageDoc.title} />
        <ul>
          {orderedSyms.map((sym: any) => (
            <Symb key={sym.symId} sym={sym} valueIN={sym.body} />
          ))}
          <MyLi onClick={createNewSymHandler}>
            <AddIcon sx={{ fontSize: 'medium' }} />
          </MyLi>
        </ul>
      </>
    )
  } else return <h2>You have no Documents. Create one in the sidebar</h2>
}

export { Symbs }
