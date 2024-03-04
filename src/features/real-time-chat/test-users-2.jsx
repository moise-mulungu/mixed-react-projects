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

/* removed because this got accidentally copied from the other file

*/
