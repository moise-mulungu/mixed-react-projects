import React, { createContext, useState, useEffect } from 'react'
// DM: dont use fetchUsers in other places in the app. The provider should be the only place that fetchUsers is used. Instead, use the UsersContext to access the users array in the app, after you are getting all the data you want from the database via fetchUsers
import { fetchUsers } from './fetch-users' // import your Firebase fetchUsers function
import LinearProgress from '@material-ui/core/LinearProgress'

/* 
DM: this looks great! 
  Now, how can you write this so that it gets updated when isActive changes for some user in the database?
  Options: setTimeout to perform this query every 60 seconds
           Or, use a real-time listener to perform this query every time isActive changes
           MM: i described the approach below with code modifications in the fetchUsers, and in the UsersContextProvider files. i paused there waiting for what i should do next.
(done)DM: todoMM: plan your approach out and write it here:
MM: in real-time-chat app the onSnapshot function is used to listen to changes in the database, so i will use it to listen to changes in the isActive field in the users collection in the database as follows:
  1. Modify the fetchUsers function to take a callback as an argument.
  2. Use the onSnapshot function to listen to changes in the users collection in the database.
  3. In the onSnapshot function, call the callback with the updated users array whenever the users collection changes.
  4. in the listener, i'll check if the user is active, if it is, i'll add it to the users array, if it is not, i'll remove it from the users array.
  5. i'll use the useEffect hook to call the fetchUsers function and update the users array whenever the component mounts.
  6. i'll return a cleanup function from fetchUsers that removes the listener.

I tried to implement them in the fetchUsers file.

But to implement with the setTimeout, i will use the useEffect hook to call the fetchUsers function and update the users array every 60 seconds as follow:
  1. i'll use the useEffect hook to call the fetchUsers function and update the users array whenever the component mounts.
  2. i'll use the setTimeout function to call the fetchUsers function and update the users array every 60 seconds.
  3. Store the interval ID returned by setInterval in a variable.
  4.Return a cleanup function from the useEffect hook that clears the interval using clearInterval.
Here is how the code would look like:

export const UsersContext = createContext()

export default function UsersContextProvider({ children }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAndSetUsers = async () => {
      const fetchedUsers = await fetchUsers()
      setUsers(fetchedUsers)
      setLoading(false)
    }

    fetchAndSetUsers()

    const intervalId = setInterval(fetchAndSetUsers, 60000) // 60000 milliseconds = 60 seconds

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return <UsersContext.Provider value={{ users, usersLoading: loading }}>{children}</UsersContext.Provider>
}

DM: this plan (above, in this comment) looks good

*/
export const UsersContext = createContext()

export default function UsersContextProvider({ children }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // fetchUsers().then((fetchedUsers) => { to return the promise from fetchUsers
    const unsubscribe = fetchUsers((fetchedUsers) => {
      setUsers(fetchedUsers)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const updateUserIsTyping = (uid, isTyping) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.uid === uid ? { ...user, isTyping } : user))
    )
  }

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user])
  }

  const value = {
    users,
    updateUserIsTyping, // Add this line
    addUser, // Add this line
  }

  // DM: never do this in a React provider because you always want users, setUsers to be available - avoids errors and unnecessary rerenders when users, setUsers disappear then reappear. Later you will add to this file a mechanism so that users is updated when isActive changes in the database
  // if (loading) return <LinearProgress />

  // return <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
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
