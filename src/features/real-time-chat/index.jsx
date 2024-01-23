import RealTimeChat from './real-time-chat'
import UserContextProvider from './user/user-context-provider'
// RealTimeChatProvider component
export default function RealTimeChatProvider() {
  return (
    <UserContextProvider>
      <RealTimeChat />
    </UserContextProvider>
  )
}

/*
In order to fix the animated typing dots, to verify that the setDatabaseValue function is executed, and the currentUser.uid and currentUser undefined, i did in the following order:
1. first phase:
  - added a useEffect hook to the RealTimeChat component to trigger whenever currentUser changes
  - added a console.log to the setDatabaseValue function to check if it is executed
  - added a console.log to the UserContextProvider component to check if the Firebase user object has a uid property.
after those console.logs, i found that setDatabaseValue was not showing in the console, and the currentUser.uid was undefined due to the fact that the root component RealTimeChat was trying to use the UserContext within the same component where it's being provided. the solution was to create another component RealTimeChatProvider that wraps the RealTimeChat component and provides the UserContext to it.
2. second phase:
 - created a new component RealTimeChatProvider that wraps the RealTimeChat component and provides the UserContext to it.
 - changed the root component in the index.jsx file from RealTimeChat to RealTimeChatProvider
 - initialized the userContext in the RealTimeChat component. 

DM: ok, good job, this is helpful to me as code reviewer(ok)

*/
