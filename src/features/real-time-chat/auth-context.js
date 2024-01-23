// auth-context.js
import { createContext } from 'react'

export const AuthContext = createContext({
  handleLogin: () => {},
  handleSignup: () => {},
  // Add any other functions you want to share here
})