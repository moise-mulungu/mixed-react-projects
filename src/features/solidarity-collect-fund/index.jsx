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
    // Check if both authentication and collector authentication are true, then show the meeting form
    if (isAuthenticated && isCollectorAuthenticated) {
      setIsMeetingFormVisible(true)
    }
  }, [isAuthenticated, isCollectorAuthenticated])

  const handleAuthentication = (authStatus, userRole) => {
    setIsAuthenticated(authStatus)
    setRole(userRole) // Set the role in the state
  }

  const handleCollectorAuthentication = (authStatus, userRole) => {
    setIsAuthenticated(authStatus)
    if (userRole === 'collector' && authStatus) {
      // Only set if authenticated
      setIsCollectorAuthenticated(true)
    } else {
      setIsCollectorAuthenticated(false) // Reset if not authenticated or not a collector
    }
  }

  return (
    <div>
      <Header />
      {!isAuthenticated && <UserAuthentication onFormSubmit={handleAuthentication} />}
      {isAuthenticated && !isCollectorAuthenticated && (
        <CollectorAuthenticationForm
          onFormSubmit={(authStatus, userRole) => {
            handleCollectorAuthentication(authStatus, userRole)
          }}
        />
      )}
      {isMeetingFormVisible && <WeeklyMeetingForm role={role} />}
    </div>
  )
}
