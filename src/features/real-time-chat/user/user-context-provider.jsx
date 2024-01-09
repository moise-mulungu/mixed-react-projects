// user/user-context-provider.jsx
import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../firebase' // import your Firebase auth object

export const UserContext = createContext()

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  if (loading) return <p>Loading...</p>

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
