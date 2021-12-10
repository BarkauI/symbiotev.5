import { Data, P } from 'scripts'

import { createSlice } from '@reduxjs/toolkit'
import {getKey} from 'scripts'

const initialState: Data.storeDataType = {
  userUID: null,
  displayName: null,
  userDocs: [],
  pageDoc: null
}

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {

    // //////////////////////////////////////////////
    editThis: (state, action: P.a<[ keyof Data.storeDataType , Data.stateObj ]>) => {
      getKey(state)(action.payload[0])(action.payload[1])
    },

    // //////////////////////////////////////////////
    updateSym: (state, action: P.a<Data.symType>) => {
      // find sym in userDocs
      if(state.userDocs)
        state.userDocs.forEach((doc: Data.docType) => {
          if (doc.docId === action.payload.docId) {
            doc.syms?.forEach((sym: Data.symType) => {
              if (sym.symId === action.payload.symId) {
                sym.body = action.payload.body
              }
            })
          }
        })
      // find sym in pageDoc
      if (state.pageDoc)
        state.pageDoc.syms?.forEach((sym: Data.symType) => {
          if (sym.symId === action.payload.symId)
            sym.body = action.payload.body
        })
    },


    // ////////////////////////////////////////////
    updateTitle: (state, action: P.a<{title: string, order: number, docId: string}>) => {
      if(state.userDocs)
      state.userDocs.forEach((doc: any) => {
        if (doc.docId === action.payload.docId) {
          doc.title = action.payload.title;
          doc.order = action.payload.order;
          doc.docId = action.payload.docId
        }
      })
      if(state.pageDoc) state.pageDoc.title = action.payload.title
    }
  }
})


export const { 
  editThis, 
  updateSym, 
  updateTitle 
} = dataSlice.actions

export default dataSlice