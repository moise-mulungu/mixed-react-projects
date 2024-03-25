import React, { useState } from 'react'
import Link from 'next/link'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { app, db } from '../firebase'
import Login from './login'
import Signup from './signup'
import CollectorAuthentication from './collector-authentication-form'

export default function UserAuthentication({ onAuthentication }) {
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState(null)
  const [role, setRole] = useState(null)

  const auth = getAuth(app)

  const handleLogin = async (event) => {
    event.preventDefault()
    const email = event.target.elements.email.value
    const password = event.target.elements.password.value
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      const userRef = doc(db, 'users', user.uid)
      await setDoc(userRef, {
        email: user.email,
        displayName: user.displayName,
      })
      onAuthentication(true) // Add this line
    } catch (error) {
      console.error(`Error code: ${error.code}, Error message: ${error.message}`)
    }
  }

  const handleSignup = async (event) => {
    event.preventDefault()
    const email = event.target.elements.email.value
    const password = event.target.elements.password.value
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      const userRef = doc(db, 'users', user.uid)
      await setDoc(userRef, {
        email: user.email,
        displayName: user.displayName,
      })
      onAuthentication(true) // Add this line
    } catch (error) {
      console.error(`Error code: ${error.code}, Error message: ${error.message}`)
    }
  }

  const handleLoginWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        // ...
        onAuthentication(true) // Add this line
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  const toggleAuthenticationMode = () => {
    setIsLogin(!isLogin)
  }

  const handleRoleSwitch = (newRole) => {
    setRole(newRole)
    setIsLogin(true) // Reset the login/signup state
  }

  return (
    <div>
      <div className="flex justify-between mb-2">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            handleRoleSwitch('admin')
          }}
          className="text-blue-500 hover:text-red-500 cursor-pointer"
        >
          Admin Authentication
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            handleRoleSwitch('collector')
          }}
          className="text-blue-500 hover:text-red-500 cursor-pointer"
        >
          Collector Authentication
        </a>
      </div>
      {role === 'admin' ? (
        isLogin ? (
          <Login
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            error={error}
            toggleAuthenticationMode={toggleAuthenticationMode}
            handleLoginWithGoogle={handleLoginWithGoogle}
            className="p-10 bg-white flex flex-col items-start pb-5 w-72"
          />
        ) : (
          <Signup
            handleSignup={handleSignup}
            error={error}
            toggleAuthenticationMode={toggleAuthenticationMode}
            className="p-10 bg-white flex flex-col items-start pb-5 w-72"
          />
        )
      ) : role === 'collector' ? (
        <CollectorAuthentication
          onFormSubmit={onAuthentication}
          // onReturn={props.onReturn}
        />
      ) : null}
    </div>
  )
}
