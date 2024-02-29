import { useContext } from 'react'

import { UsersContext } from './users-context-provider'

export default function TestUsers() {
  const { users } = useContext(UsersContext)

  return (
    <div className="m-4">
      <h1>Test Users</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      {users.map(
        (user, index) => (console.log('user', user), (<div key={index}>{user.displayName}</div>))
      )}
    </div>
  )
}

/*
In order to complete the remaining tasks of the real-time-chat displayName, i did the following:
  1. mapped over the destructured users variable and displayed the name of each user, but it didn't work.
  2. i found that the users object had not a name property, so i changed name to displayName after checking the firebase/firestore database.
  3. checked the fetchUsers function in the users-context-provider folder and found that fetchUsers function only called the callback and updated the users when the isActive field of a user is changed. If no user's isActive field is changed, the callback won't be called and the users won't be updated. To display all users regardless of whether their isActive field is changed or not, i removed the if statement that checks if the isActive field of a user is changed or not.
    * DM: however, you need to know, in users-context-provider.jsx, if the user is active or not, in order to show the correct users in Connected Users. the purpose of users-context-provider is to collect everything about users that you need to know in your app (except messages). So, the plan is to get all the users from the database, and the isActive field says if user is active or not. When you use the "users" in the app for "connected users", you will filter out the inactive users.
  4. i checked the test-users-page and found that the users were displayed correctly.
  5. to fix the last task of displaying the displayName in the application, i double checked where the connectedUsers are used in the real-time-chat.jsx file.
  6. before making any changes in the file, i tested returning the JSON format of the users from the fetchUsers function in the users-context-provider folder. the result was successful.
  7. finally i replaced connectedUsers with users in the jsx of the component in the real-time-chat.jsx file and the displayName of the users was displayed successfully.
*/
