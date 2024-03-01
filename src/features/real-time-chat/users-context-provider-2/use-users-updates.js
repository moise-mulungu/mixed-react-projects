import { useState, useEffect } from 'react'

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

export default function useUsersUpdates({ setConnectedUsers, allUsers, setError }) {
  //

  // set up subscribe/listen for changes to the users collection
  useEffect(() => {
    // this is just example code. you will need to do something similar with your own code
    // const unsubscribe = await yourSubscribeCallHere((
    //   // dont put the "user" object in the state. instead, update state with specific properties of the "user" object
    //   user
    // ) => {
    //   const uid = user.uid
    //   const isActive = user.isActive
    //   // below, we will not make use of the user variable at all. instead we will use the uid and isActive variables
    //   setConnectedUsers((prevConnectedUsers) => {
    //     //
    //
    //     const connectedUsersWithoutUserToUpdate = removeUserByUid({
    //       users: prevConnectedUsers,
    //       uid,
    //     })
    //
    //     if (isActive === false) return connectedUsersWithoutUserToUpdate
    //
    //     const userToUpdate = getUserByUid({
    //       connectedUsers: prevConnectedUsers,
    //       uid,
    //       allUsers,
    //     })
    //     const updatedUser = updateUserField({
    //       user: userToUpdate,
    //       propertyName: 'isActive',
    //       propertyValue: isActive,
    //     })
    //     return [...connectedUsersWithoutUserToUpdate, updatedUser]
    //   })
    // })

    return () => {
      // unsubscribe()
    }
  }, [])
  // optional: if you need another subscription to get the needed data, you can add another useEffect here
  useEffect(() => {
    // const unsubscribe = await yourSubscribeCallHere((user) => {
    //   ...
    // })

    return () => {
      // unsubscribe()
    }
  }, [])

  // optional: if you need to schedule a periodic database fetch, you can add another useEffect here
  useEffect(() => {
    // const interval = setInterval(async () => {
    // const users = await yourDatabaseCallHere()

    // }, 60 * 1000)

    return () => {
      // clearInterval(interval)
    }
  }, [])

  return
}
