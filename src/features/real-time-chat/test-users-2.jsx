import { useContext } from 'react'

import { UsersContext } from './users-context-provider-2'

/* 

http://localhost:3005/real-time-chat-page/test-users-2

*/

export default function TestUsers2() {
  const { connectedUsers, error, loading, allUsers } = useContext(UsersContext)

  return (
    <div className="m-4">
      <h1>Test Users 2</h1>

      <pre>connected users, all fields: {JSON.stringify(connectedUsers, null, 2)}</pre>
      <div>
        connected users, specific fields:
        {connectedUsers?.map((user, index) => {
          console.log('user', user)
          return <div key={index}>displayName: {user.displayName}</div>
        })}
      </div>
      <pre>all users, all fields: {JSON.stringify(allUsers, null, 2)}</pre>
    </div>
  )
}

// TestUsers2.js
// import React, { useContext } from 'react'
// import { UsersContext } from 'path/to/UsersContext'

// TestUsers2.js
// import React from 'react'
// import { UsersContext } from 'path/to/UsersContext'

// const TestUsers2 = () => {
//   const { connectedUsers, error, loading, allUsers } = useContext(UsersContext)

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   if (error) {
//     return <div>Error: {error}</div>
//   }

//   return (
//     <div className="m-4">
//       <h1>Test Users 2</h1>

//       <pre>connected users, all fields: {JSON.stringify(connectedUsers, null, 2)}</pre>

//       <div>
//         connected users, specific fields:
//         {connectedUsers?.map((user, index) => (
//           <div key={index}>displayName: {user.displayName}</div>
//         ))}
//       </div>

//       <pre>all users, all fields: {JSON.stringify(allUsers, null, 2)}</pre>
//     </div>
//   )
// }

// export default TestUsers2

/*
In order to fix the test-users-2 page to display all the users info from the database in real time, i did:
  1. open two browsers and connected to two different accounts
  2. test the test-users-2 page, and found that no update was performed
  3. double-check the TestUsers2, the UseUsersUpdate, and the UserContextProvider2 component to find where the users data is coded
const removeUserByUid = ({ users, uid }) => {
  4. find that the UseUsersUpdate() component is responsible for that, so i tried to investigate the tree other functions getUserByUid, removeUserByUid, and the updateUserField. these functions they were not being used within the context of the real-time updates logic in the hook.
  5. The issue would be due to the fact that the allUsers state wasn't being updated in real-time. The allUsers state was only updated once when the component mounts, but was not updated in real-time when there's a change in the Firestore usersCollection.
  6. update the useUsersUpdate hook with the allUsers state in real-time within whenever there is a change in the Firestore usersCollection. The setAllUsers function is used to update the allUsers state based on the changes received from the snapshot
  8. pass setAllUsers as an argument to the hook along with setConnectedUsers, allUsers, and setError
  9. test the test-users-2 page, but nothing happened.
  10. find another approach by setting the initial state of the connectedUsers and allUsers which may not being set properly or not being updated when changes occur in the Firestore usersCollection. i added error handling in the test-users-2 and in the useUsersUpdate.
  11. test again on the page but nothing was changed.
  12. paused there.
*/