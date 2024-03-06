import { createContext, useState, useEffect, useMemo, useCallback } from 'react'

import useUsersUpdates from './use-users-updates'
import firebase from 'firebase/app'
import { getDocs } from 'firebase/firestore'
import db from '../firebase'
import { usersCollection } from '../firebase'

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

        // Get a reference to the Firestore database.
        // const db = firebase.firestore()
        // Get a reference to the 'users' collection in the database.
        // const usersCollection = db.collection('users')
        // Fetch all documents from the 'users' collection. This returns a promise that resolves to a snapshot of the collection.
        const snapshot = await getDocs(usersCollection)

        // in order to get good suggestions from Copilot, describe the database type and collection you want to retrieve the users from:
        // <your description here>
        //MM: I am using firebase/firestore database with a collection of users

        // you are in an async function in a try-catch block, so await the promise returned by the database call
        // Map over the documents in the snapshot to create an array of user objects.
        // Each document is converted to an object with the .data() method, and the document ID (which is the user's uid) is added to this object.
        const fetchedUsers = snapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id })) // await yourDatabaseCallHere()
        setAllUsers(fetchedUsers)

        const connectedUsers = fetchedUsers.filter((user) => user.isActive)
        setConnectedUsers(connectedUsers)

        setLoading(false)
      }
      // Call the loadUsers function.
      loadUsers()
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

/*
MM: In order to work on the users-context-provider-2, i didn't know at first what to do because there was no DM: todoMM: mentions in the two files. i asked for AI to explain what the comments suggest in the code like this:
AI suggested to work on two function; loadUsers() function and useUsersUpdate() hook.
Here is what i did:
loadUsers function:

  1. Create an async function: The loadUsers function is an asynchronous function because it needs to wait for the users to be fetched from the Firestore database.

  2. Set loading state: At the start of the function, the loading state is set to true to indicate that the users are being fetched.

  3. Fetch users: The getDocs function from 'firebase/firestore' is used to fetch all documents from the 'users' collection in the Firestore database. The returned snapshot is stored in the snapshot variable.

  4. Map over documents: The documents in the snapshot are mapped over to create an array of user objects. Each document is converted to an object with the .data() method, and the document ID (which is the user's uid) is added to this object.

  5. Update state: The setAllUsers function is used to update the allUsers state with the fetched users. The connectedUsers state is updated with the users who are active. The loading state is set to false to indicate that the users have been fetched.

  6. Handle errors: If an error occurs while fetching the users, the catch block is executed. The loading state is set to false, the error state is updated with the error message, and the error message is logged to the console.

  7. Call the function: The loadUsers function is called inside a useEffect hook so that it runs when the component mounts.

useUsersUpdates hook:

  1. Create a useEffect hook: The useUsersUpdates hook is a useEffect hook that runs when the allUsers and setConnectedUsers variables change.

  2. Subscribe to changes: The onSnapshot function from 'firebase/firestore' is used to subscribe to changes in the 'users' collection in the Firestore database. The returned function is stored in the unsubscribe variable.

  3. Handle changes: When a change is detected, the snapshot.docChanges().forEach method is used to iterate over each change in the collection snapshot. For each change, a user object is created from the document data, and the connectedUsers state is updated with the updated user data.

  4. Cleanup: The unsubscribe function is called in the cleanup function to prevent memory leaks and potential errors.

  5. Call the hook: The useUsersUpdates hook is called with the setConnectedUsers, allUsers, and setError variables as arguments.

I encountered errors like: 
to fix them i :

  1. Identified the problem: The initial problem was that i was getting a TypeError when trying to use the get method on usersCollection. This was because in Firebase v9 and above, the get method is not directly used on the collection reference.

  2. Updated the Firebase import and usage: In Firebase v9 and above, i should use the getDocs function from 'firebase/firestore' to get all documents from a collection. So, the line const snapshot = await usersCollection.get() was replaced with const snapshot = await getDocs(usersCollection).

  3. Imported the necessary Firebase functions: The getDocs function was imported from 'firebase/firestore' at the top of the file.

  4. Updated the loadUsers function: The loadUsers function was updated to use getDocs instead of get. This function fetches all documents from the 'users' collection, maps over the documents to create an array of user objects, and updates the state with these users.

  5. Updated the useUsersUpdates hook: The useUsersUpdates hook was updated to use the onSnapshot function from 'firebase/firestore' instead of usersCollection.onSnapshot. The onSnapshot function is used to listen for real-time updates to the 'users' collection. When a change is detected, the hook updates the connectedUsers state with the updated user data.

  6. Handled errors: In both the loadUsers function and the useUsersUpdates hook, errors are caught and handled. In loadUsers, if an error occurs while fetching the users, the error message is logged to the console and the error state is updated with the error message. In useUsersUpdates, the unsubscribe function returned by onSnapshot is called in the cleanup function to prevent memory leaks and potential errors.
*/
