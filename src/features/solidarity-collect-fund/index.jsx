import { useState, useEffect } from 'react'
import Header from './header'

import UserAuthentication from './user-authentication'
import WeeklyMeetingForm from './weekly-meeting-form'
import CollectorAuthenticationForm from './user-authentication/collector-authentication-form'

export default function SolidarityCollectFund() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isCollectorAuthenticated, setIsCollectorAuthenticated] = useState(false)
  const [isMeetingFormVisible, setIsMeetingFormVisible] = useState(false)
  const [role, setRole] = useState(null)

  useEffect(() => {
    console.log('Component re-rendered')
    console.log('isAuthenticated:', isAuthenticated)
    console.log('isCollectorAuthenticated:', isCollectorAuthenticated)

    // Check if both authentication and collector authentication are true, then show the meeting form
    if (isAuthenticated && isCollectorAuthenticated) {
      setIsMeetingFormVisible(true)
    }
  }, [isAuthenticated, isCollectorAuthenticated])

  const handleAuthentication = (authStatus) => {
    setIsAuthenticated(authStatus)
    setRole(userRole) // Set the role in the state
  }
  const handleCollectorAuthentication = (isAuthenticated, userRole) => {
    setIsAuthenticated(isAuthenticated)
    if (userRole === 'collector') {
      setIsCollectorAuthenticated(true)
    }
  }

  return (
    <div>
      {/* MM: forDM; i created admin-authentication component, a fetch-user-role function. according to the instructions about users roles, is it correct the way i proceeded ? another question is after submitting the collector-authentication-form, i set the weekly-meeting-form to be an excel-like format code by using react-data-grid, but i am encountering an data-grid error that i provided details in the src/features/solidarity-collect-fund/weekly-meeting-form.jsx file */}
      <Header />
      {!isAuthenticated && <UserAuthentication onFormSubmit={handleAuthentication} />}
      {isAuthenticated && !isCollectorAuthenticated && (
        <CollectorAuthenticationForm
          onFormSubmit={(isAuthenticated, userRole) => {
            handleCollectorAuthentication(isAuthenticated, userRole)
          }}
        />
      )}
      {isMeetingFormVisible && <WeeklyMeetingForm />}
    </div>
  )
}
