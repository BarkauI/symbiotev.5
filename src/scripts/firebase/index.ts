import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { getDocs, setDoc } from '@firebase/firestore'

import { Data } from 'scripts'
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

// to hide the values of api keys & stuff
require('dotenv').config()

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

// Initialize Firebase
initializeApp(firebaseConfig)

// exported below
const db = getFirestore()
const auth = getAuth()


// get firestore userDocs based on user uid
const getFire = async (userUID: string) => {
  let userDocsArray: any = []
  if (userUID) {
    const userDocsSnap = await getDocs(
      collection(db, 'users', userUID, 'userDocs')
    )
    

    // For each doc, push doc properties and each sym properties to the userDocsArray. 
    // Used for-loops for async/await functionality.
    for (let i = 0; i < userDocsSnap.docs.length; i++) {
      let doc = userDocsSnap.docs[i]
      
      const syms = await 
        getDocs(collection(db, 'users', userUID, 'userDocs', doc.id, 'syms'))

      // set new sym array for each doc
      let symsArray: any = []
      // For each sym add properties to symsArray
      for (let i = 0; i < syms.docs.length; i++) {
        let sym = syms.docs[i]
        symsArray = [
          ...symsArray,
          {
            body: sym.data().body,
            symId: sym.id,
            order: sym.data().order,
            docId: doc.id,
          }
        ]
      }

      userDocsArray = [
        ...userDocsArray,
        { title: doc.data().title, docId: doc.id, order: doc.data().order, syms: symsArray },
      ]
    }
    return userDocsArray
  }

}

const updateSymFire = async (
  userUID: string,
  sym: Data.symType,
  body: string
) => {
  await setDoc(
    doc(db, 'users', userUID, 'userDocs', sym.docId, 'syms', sym.symId), {
      body
    }
  )
}

////////////////////////////////////////////////////////////////////



const updateTitleFire = async (userUID: string, pageDoc: any, title: string) => {  
  try {
    await updateDoc(doc(db, "users", userUID, 'userDocs', pageDoc.docId), {
      title
    });
    console.log("Document updated " );
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// add next doc , doc.id is added automatically
const createNewDoc = async (userUID: string) => {
  const userDocsSnap = await getDocs(collection(db, 'users', userUID, 'userDocs'))
  const length = userDocsSnap.docs.length
  // add title
  const docRef = await addDoc(collection(db, 'users', userUID, 'userDocs'), {
    title: 'untitled',
    order: length + 1
  })

  // add the first sym (sym.id is added automatically)
  addDoc(collection(db, 'users', userUID, 'userDocs', docRef.id, 'syms'), {
    body: "enter text",
    order: 1,
    docId: docRef.id,
  })
}

// add next sym
const createNewSym = async (userUID: string, docId: string, order?: number) => {
  const symsSnap = 
    await getDocs(collection(db, 'users', userUID, 'userDocs', docId, 'syms'))
  let length = symsSnap.docs.length
  if(order) length = order 
  
  // sym id is added auto
  addDoc(collection(db, 'users', userUID, 'userDocs', docId, 'syms'), {
    body: '//',
    order: length + 1,
    docId
  })
}


const deleteSym = async (userUID: string, docId: string, symId: string) => {
  deleteDoc(doc(db, "users", userUID, 'userDocs', docId, 'syms', symId));
}
const deleteUserDoc = async (userUID: string, docId: string) => {
  deleteDoc(doc(db, "users", userUID, 'userDocs', docId));
}

const googleLogin = async () => {
    
    const provider = new GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
    const result = await signInWithPopup(auth, provider)
    return result
  
  
}


export {
  getFire,
  updateSymFire,
  updateTitleFire,
  db,
  auth,
  createNewDoc,
  googleLogin,
  createNewSym,
  deleteSym,
  deleteUserDoc
}
