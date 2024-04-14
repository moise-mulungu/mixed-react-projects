// user/user-context-provider.jsx
import React, { createContext, useState, useEffect } from 'react'
import {
  auth,
  // database
} from '@/features/real-time-chat/firebase' // import your Firebase auth object
import LinearProgress from '@material-ui/core/LinearProgress'
// import { ref, set, serverTimestamp } from 'firebase/database'

export const UserContext = createContext()

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      console.log('Firebase user:', firebaseUser) // check your console to see the Firebase user object if it has a uid property.
      console.log('Firebase with Display Name:', firebaseUser && firebaseUser.displayName) // Log the displayName if it exists.
      setUser(firebaseUser)
      setLoading(false)
      //(done) DM: todoMM: where are you updating user status now? MM: i commented the lines below because i was getting an error. once the error is fixed, i will uncomment the lines below
      // Update the user's status in the Firebase database
      // if (firebaseUser) {
      //   // User is signed in, set their status in the database
      //   set(ref(database, '/status/' + firebaseUser.uid), {
      //     state: 'online',
      //     last_changed: serverTimestamp(),
      //     displayName: firebaseUser.displayName,
      //   })
      // } else if (firebaseUser === null) {
      //   // User is signed out, remove their status from the database
      //   // Here we don't have a firebaseUser.uid, so we can't remove a specific user's status
      // }
    })

    return unsubscribe
  }, [])

  if (loading) return <LinearProgress />

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
