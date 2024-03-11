import { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import db from '../firebase'
import { usersCollection } from '../firebase'
import { onSnapshot } from 'firebase/firestore'

/* 

USAGE:

import useUsersUpdates from './use-users-updates'
useUsersUpdates({ setUsers })

*/

/*   

  this custom hook will update the "users" variable in real-time with the following:
  * activity of other users on other computers
  * activity of the current user on this computer (i.e., you when you use/test the app)
    * note: all activity in the app should be sent to the database. 
      * activity should not be stored in memory
      * activity should not be updated here in this component
      * WHY? data in memory or added to this component would ONLY be seen by the current user (i.e., you when you use/test the app) but would NOT be seen by other users on other computers.

  */

// these functions enable finding and updating user objects from the initial fetch
const getUserByUid = ({ connectedUsers, uid, allUsers }) => {
  const connectedUser = connectedUsers.find((u) => u.uid === uid)
  if (connectedUser) return connectedUser
  const user = allUsers.find((u) => u.uid === uid)
  return user
}
const removeUserByUid = ({ users, uid }) => {
  const usersWithoutUser = users.filter((u) => u.uid !== uid)
  return usersWithoutUser
}
const updateUserField = ({ user, propertyName, propertyValue }) => {
  const updatedUser = { ...user, [propertyName]: propertyValue }
  return updatedUser
}

export default function useUsersUpdates({ setConnectedUsers, setAllUsers, allUsers, setError }) {


// DM: good!

// set up subscribe/listen for changes to the users collection
  useEffect(() => {
    // Get a reference to the Firestore database
    // const db = firebase.firestore()

    // Get a reference to the 'users' collection in the database
    // const usersCollection = db.collection('users')

    // this is just example code. you will need to do something similar with your own code

    // Subscribe to changes in the 'users' collection
    // The onSnapshot method returns a function that can be used to unsubscribe from the collection.
    // const unsubscribe = usersCollection.onSnapshot((snapshot) => {
    const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
      // dont put the "user" object in the state. instead, update state with specific properties of the "user" object

      // Iterate over each change in the collection snapshot
      snapshot.docChanges().forEach((change) => {
        // Create a user object from the document data and add the document ID as the 'uid' property
        const user = { ...change.doc.data(), uid: change.doc.id }

        // Extract the uid and isActive properties from the user object
        const uid = user.uid
        const isActive = user.isActive
        // DM: todoMM: what if one of the users changes their displayName? how would you handle that? (hint: you would need to update the displayName in the allUsers array, as well as the connectedUsers array). What other data from the users collection might become updated?

        // below, we will not make use of the user variable at all. instead we will use the uid and isActive variables

        // Update the connectedUsers state
        setConnectedUsers((prevConnectedUsers) => {
          // Remove the user to update from the previous connected users
          const connectedUsersWithoutUserToUpdate = removeUserByUid({
            users: prevConnectedUsers,
            uid,
          })

          // If the user is not active, return the connected users without the user to update
          if (isActive === false) return connectedUsersWithoutUserToUpdate

          // Find the user to update in the previous connected users or all users
          const userToUpdate = getUserByUid({
            connectedUsers: prevConnectedUsers,
            uid,
            allUsers,
          })

          // Update the 'isActive' property of the user to update
          const updatedUser = updateUserField({
            user: userToUpdate,
            propertyName: 'isActive',
            propertyValue: isActive,
          })

          // Return the updated connected users
          return [...connectedUsersWithoutUserToUpdate, updatedUser]
        })
      })
    })

    // Return a cleanup function that unsubscribes from the 'users' collection
    return () => {
      unsubscribe()
    }
    // The effect depends on the allUsers and setConnectedUsers variables, so it runs whenever these variables change
  }, [setConnectedUsers, allUsers, setAllUsers, setError])
  // [allUsers, setConnectedUsers])

  return null
}
// optional: if you need another subscription to get the needed data, you can add another useEffect here
// useEffect(() => {
//   // const unsubscribe = await yourSubscribeCallHere((user) => {
//   //   ...
//   // })

//   return () => {
//     // unsubscribe()
//   }
// }, [])

// optional: if you need to schedule a periodic database fetch, you can add another useEffect here
// useEffect(() => {
//   // const interval = setInterval(async () => {
//   // const users = await yourDatabaseCallHere()

//   // }, 60 * 1000)

//   return () => {
//     // clearInterval(interval)
//   }
// }, [])

// import { useEffect } from 'react'
// import { onSnapshot } from 'firebase/firestore'
// import { usersCollection } from '../firebase'

// useUsersUpdates.js
// const useUsersUpdates = ({ setConnectedUsers, allUsers, setError, setAllUsers }) => {
//   useEffect(() => {
//     const unsubscribe = onSnapshot(
//       usersCollection,
//       (snapshot) => {
//         snapshot.docChanges().forEach((change) => {
//           const user = { ...change.doc.data(), uid: change.doc.id }

//           if (change.type === 'added' || change.type === 'modified') {
//             const updatedAllUsers = allUsers.map((u) => (u.uid === user.uid ? user : u))
//             setAllUsers(updatedAllUsers)

//             const updatedConnectedUsers = updatedAllUsers.filter((u) => u.isActive)
//             setConnectedUsers(updatedConnectedUsers)
//           } else if (change.type === 'removed') {
//             const updatedAllUsers = allUsers.filter((u) => u.uid !== user.uid)
//             setAllUsers(updatedAllUsers)

//             const updatedConnectedUsers = updatedAllUsers.filter((u) => u.isActive)
//             setConnectedUsers(updatedConnectedUsers)
//           }
//         })
//       },
//       (error) => {
//         setError(`Error fetching users: ${error.message}`)
//         console.log(`Error fetching users: ${error.message}`, error)
//       }
//     )

//     return () => {
//       unsubscribe()
//     }
//   }, [setConnectedUsers, allUsers, setAllUsers, setError])

//   return null
// }

// export default useUsersUpdates
