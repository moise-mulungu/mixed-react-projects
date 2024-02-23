import React, { createContext, useState, useEffect } from 'react'
import { fetchUsers } from '../../real-time-chat/user/fetch-users' // import your Firebase fetchUsers function
import LinearProgress from '@material-ui/core/LinearProgress'

/* 
DM: this looks great! 
  Now, how can you write this so that it gets updated when isActive changes for some user in the database?
  Options: setTimeout to perform this query every 60 seconds
           Or, use a real-time listener to perform this query every time isActive changes
DM: todoMM: plan your approach out and write it here:


*/
export const UsersContext = createContext()

export default function UsersContextProvider({ children }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers().then((fetchedUsers) => {
      setUsers(fetchedUsers)
      setLoading(false)
    })
  }, [])

  // DM: never do this in a React provider because you always want users, setUsers to be available - avoids errors and unnecessary rerenders when users, setUsers disappear then reappear. Later you will add to this file a mechanism so that users is updated when isActive changes in the database
  // if (loading) return <LinearProgress />

  return <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
}

/*
To create a new users-context-provider, i:
  1. made a regex searcg for "isActive" in the real-time-chat directory. then i found "isActive" is found only in the sql files.
  2. searched for another variable that could be responsible for user online activity, i first found a state isLoggedIn in the User component, but that one was just to switch between loggin in and signing up.
  3. should find a function that fetches users from database, i found in the RealTimeChat() component a fetchUse() function that only fecthes one user in the connectedUsers array.
  4. how to fetch multiple users not one, i should update the fecthUser() function to fetch multiple users, and it was appropriate to rename it fetchUsers() to reflect its new functionality.
  5. in the new fetchUsers() function i modified the argument uid to uids as an array of user IDs. The function iterates over each user ID, fetches the corresponding user data from Firestore, and adds it to the users array. If a user does not exist, it logs an error message.
  6. create another useEffect with a users variables and that returns the connectedUsers
  7. create a users-context-provider where i used the fetchUsers() function, in order to use the fetchUsers, i created a new file where i moved the fetchUsers function and removed the uids argument
  8. used the new UsersContextProvider in the RealTimeChatProvider component by wrapping the RealTimeChat component with the UsersContextProvider inside the first UserContextProvider
  9. tested the code, but i could not find where the changes happen
  10. there was another issue, how to insert isActive into the users collection in the database
  11. updated the fetchUsers function by querying data from the database where the isActive is true
  12. declared isActive variable in the RealTimeChat component and used it in the handleUserConnect to insert it into the firebase database, then passeed it as props in the UserProfile component
  13. checked in the users collection if it was already added, it was successfully added.
*/
