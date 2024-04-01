import React, { useState } from 'react'
import Link from 'next/link'

import { getDoc, setDoc, doc } from 'firebase/firestore'
import { app, db } from '../firebase'

import CollectorAuthentication from './collector-authentication-form'

import AdminAuthentication from './admin-authentication'

export default function UserAuthentication({ onFormSubmit }) {
  const [isLogin, setIsLogin] = useState(true)
  // const [error, setError] = useState(null)
  const [role, setRole] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false) // New state for authentication

  const fetchUserRole = async (userId) => {
    const userRef = doc(db, 'users', userId)
    const userSnap = await getDoc(userRef)

    if (userSnap.exists()) {
      return userSnap.data().role
    } else {
      console.log('No such document!')
      return null
    }
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

      {role === 'admin' && (
        <AdminAuthentication
          onFormSubmit={onFormSubmit}
          isAuthenticated={isAuthenticated}
          onRoleSwitch={handleRoleSwitch}
          fetchUserRole={fetchUserRole}
        />
      )}
      {role === 'collector' && (
        <CollectorAuthentication
          onFormSubmit={onFormSubmit}
          isAuthenticated={isAuthenticated}
          onRoleSwitch={handleRoleSwitch}
        />
      )}
    </div>
  )
}
