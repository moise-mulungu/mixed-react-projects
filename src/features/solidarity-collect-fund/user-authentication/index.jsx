import React, { useState } from 'react'
import { getDoc, setDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import CollectorAuthentication from './collector-authentication-form'
import AdminAuthentication from './admin-authentication'
import AdminFundForm from '../admin-fund-form'
import CollectorAuthenticationForm from './collector-authentication-form' // Import the CollectorAuthenticationForm

export default function UserAuthentication({ onFormSubmit }) {
  const [isLogin, setIsLogin] = useState(true)
  const [role, setRole] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false) // New state for authentication
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false) // New state for admin authentication
  const [isCollectorAuthenticated, setIsCollectorAuthenticated] = useState(false) // New state for collector authentication

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

  const handleAdminAuth = (authStatus, userRole) => {
    onFormSubmit(authStatus, userRole)
    if (authStatus && userRole === 'admin') {
      setIsAdminAuthenticated(true)
    }
  }

  const handleCollectorAuth = (authStatus, userRole) => {
    // New function for collector authentication
    onFormSubmit(authStatus, userRole)
    if (authStatus && userRole === 'collector') {
      setIsCollectorAuthenticated(true)
    }
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
          onFormSubmit={handleAdminAuth}
          isAuthenticated={isAuthenticated}
          onRoleSwitch={handleRoleSwitch}
          fetchUserRole={fetchUserRole}
        />
      )}
      {role === 'collector' && (
        <CollectorAuthentication
          onFormSubmit={handleCollectorAuth} // Use the new function here
          isAuthenticated={isAuthenticated}
          onRoleSwitch={handleRoleSwitch}
        />
      )}
      {/* MM; forDM: i would like to display the admin-fund-form after the admin-authentication, but after many attempts, i still can't solve the issue. check the ChatGPT chat link: https://chat.openai.com/share/3176d954-79f7-4e8e-a897-d4b62bfb2a8c */}
      {isAdminAuthenticated && <AdminFundForm />}
      {isCollectorAuthenticated && <CollectorAuthenticationForm />}
    </div>
  )
}
