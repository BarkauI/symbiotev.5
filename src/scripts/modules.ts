import { PayloadAction } from "@reduxjs/toolkit";

namespace Data {
  export type symType = {
    body: string,
    order: number,
    symId: string,
    docId: string
  }
  export type docType = {
    title: string,
    order: number,
    docId: string,
    syms: symType[] | null
  }
  export type userType = {
    userUID: string,
    name: string,
    userDocs: docType[] | null
  }
  export type storeDataType = {
    userUID: string | null, 
    displayName: string | null, 
    userDocs: Data.docType[] | null, 
    pageDoc: Data.docType | null
  } 
  export type stateObj = string | null | Data.docType | Data.docType[]
  export type ttheme = {
    theme: {
      typography: any,
      text: {
        main: string
      }
    }
  }
 
}

namespace P {
  export type a<T> = PayloadAction<T>;
}


export type { Data, P };

