import { useContext } from 'react'

import { UsersContext } from './users-context-provider'

export default function TestUsers() {
  const { users } = useContext(UsersContext)

  return (
    <div className="m-4">
      <h1>Test Users</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}
