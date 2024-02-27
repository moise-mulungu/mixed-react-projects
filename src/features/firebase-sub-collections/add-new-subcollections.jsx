import { doc, setDoc } from '@firebase/firestore'
import React, { useRef } from 'react'
import { db } from './firebase-config'

export default function AddNewSubCollections({ path }) {
  const name = useRef()

  async function handleSubmit(e) {
    e.preventDefault()

    const docRef = doc(db, path, name.current.value)
    await setDoc(docRef, { name: name.current.value })

    e.target.reset()
  }

  return (
    <li>
      <form onSubmit={handleSubmit} className="mt-4 flex items-center">
        <input ref={name} className="border p-2 rounded mr-2 flex-grow" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>
    </li>
  )
}

/*
to add contents into input values, i modifed the security rules from:
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
to:
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;  // Allow all read and write operations
    }
  }
}

*/
