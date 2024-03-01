import { createContext, useState, useEffect, useMemo, useCallback } from 'react'

import useUsersUpdates from './use-users-updates'

/* 

USAGE:

import { UsersContext } from './users-context-provider-2'
const { users, usersLoading, usersError } = useContext(UsersContext)

import UsersContextProvider2 from './users-context-provider-2'
<UsersContextProvider2>Content</UsersContextProvider2>

TESTING:
test this in http://localhost:3005/real-time-chat-page/test-users-2
watch for changes when:
* user signs up
* user logs in
* user arrives at the chat page (user is already logged in, so user goes directly to chat)
* user posts a message
* user is typing a message
* user logs out

DO NOT integrate this into the app. All data should come from the database. You can view the data in the test URL above.

*/

export const UsersContext = createContext()

export default function UsersContextProvider2({ children }) {
  const [allUsers, setAllUsers] = useState([])
  const [connectedUsers, setConnectedUsers] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  // this useEffect runs once when the app starts, i.e., when the component mounts (because empty deps array)
  // just fetch the users from the users collection and setUsers
  // do NOT subscribe to a listener because here only you want to fetch the users once when the app starts
  useEffect(() => {
    try {
      // write async function to fetch and return the users
      async function loadUsers() {
        setLoading(true)
        // fetch the users from the database

        // in order to get good suggestions from Copilot, describe the database type and collection you want to retrieve the users from:
        // <your description here>

        // you are in an async function in a try-catch block, so await the promise returned by the database call
        const fetchedUsers = [] // await yourDatabaseCallHere()
        setAllUsers(fetchedUsers)

        const connectedUsers = fetchedUsers.filter((user) => user.isActive)
        setConnectedUsers(connectedUsers)

        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      const errorMessage = `Error fetching users: ${error.message}`
      setError(errorMessage)
      console.log(errorMessage, error)
    }
  }, [])

  useUsersUpdates({ setConnectedUsers, allUsers, setError })

  const value = { connectedUsers, usersLoading: loading, usersError: error, allUsers }

  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
}
