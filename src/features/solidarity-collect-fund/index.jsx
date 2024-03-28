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

      // Check if both authentication and collector authentication are true, then show the meeting form
      if (isAuthenticated && isCollectorAuthenticated) {
        setIsMeetingFormVisible(true)
      }
  }, [isAuthenticated, isCollectorAuthenticated])

  const handleAuthentication = (authStatus) => {
    setIsAuthenticated(authStatus)
  }
  const handleCollectorAuthentication = () => {
    setIsCollectorAuthenticated(true)

    // setIsMeetingFormVisible(true)
  }

  // const handleMeetingFormVisibility = () => {
  //   setIsMeetingFormVisible(true)
  // }

  return (
    <div>
      {/* MM: forDM; how can i display the WeeklyMeetingForm() component after submitting the CollectorAuthenticationForm() according to the attempted logic below. the description of the code is in the src/features/solidarity-collect-fund/user-authentication/collector-authentication-form.jsx file */}
      <Header />
      {!isAuthenticated && <UserAuthentication onFormSubmit={handleAuthentication} />}
      {isAuthenticated && !isCollectorAuthenticated && (
        <CollectorAuthenticationForm
          onFormSubmit={() => {
            handleCollectorAuthentication()
            // handleMeetingFormVisibility() // Call handleMeetingFormVisibility when collector authentication form is submitted
          }}
        />
      )}
      {isMeetingFormVisible && <WeeklyMeetingForm />}
    </div>
  )
}
