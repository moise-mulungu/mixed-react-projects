import { useState, useEffect } from 'react'
import Header from './header'
// import SolidarityFundContributionsTable from './solidarity-fund-contributions-table'
import UserAuthentication from './user-authentication'
import SolidarityFundForm from './solidarity-fund-form'
import WeeklyMeetingForm from './weekly-meeting-form'
import CollectorAuthenticationForm from './user-authentication/collector-authentication-form'

export default function SolidarityCollectFund() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isCollectorAuthenticated, setIsCollectorAuthenticated] = useState(false)
  const [isMeetingFormVisible, setIsMeetingFormVisible] = useState(false)

  useEffect(() => {
    console.log('Component re-rendered')
    console.log('isAuthenticated:', isAuthenticated)
    console.log('isCollectorAuthenticated:', isCollectorAuthenticated)
  }, [isAuthenticated, isCollectorAuthenticated])

  const handleAuthentication = (authStatus) => {
    setIsAuthenticated(authStatus)
  }
  const handleCollectorAuthentication = () => {
    setIsCollectorAuthenticated(true)

    setIsMeetingFormVisible(true)
  }

  return (
    <div>
      <Header />
      {!isAuthenticated && <UserAuthentication onFormSubmit={handleAuthentication} />}
      {isAuthenticated && !isCollectorAuthenticated && (
        <CollectorAuthenticationForm onFormSubmit={handleCollectorAuthentication} />
      )}
      {isMeetingFormVisible && <WeeklyMeetingForm />}
    </div>
  )
}
