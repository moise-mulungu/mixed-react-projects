import UsersContextProvider from '@/features/real-time-chat/users-context-provider'
import TestUsers from '@/features/real-time-chat/test-users'

/* 
DM: lets work on users in a clean, simple, new component
*/

export default function TestUsersPage() {
  return (
    <UsersContextProvider>
      <TestUsers />
    </UsersContextProvider>
  )
}
