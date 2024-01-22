// user/user-context-provider.jsx
import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../firebase' // import your Firebase auth object
import LinearProgress from '@material-ui/core/LinearProgress'

export const UserContext = createContext()

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      console.log('Firebase user:', firebaseUser) // check your console to see the Firebase user object if it has a uid property.
      setUser(firebaseUser)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  if (loading) return <LinearProgress />

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
