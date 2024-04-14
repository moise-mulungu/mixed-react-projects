import UsersContextProvider from '@/features/real-time-chat/users-context-provider-2'
import TestUsers2 from '@/features/real-time-chat/test-users-2'

/* 

  http://localhost:3005/real-time-chat-page/test-users-2

  * this page is completely separate from the chat app
    * it uses a separate context and separate provider 
    * separate calls to the database are done by this separate provider
      * separate data is provided by this separate provider
  * this page will mimic what other users (in other browsers on other computers) would see when you are testing in the chat app

*/

export default function TestUsers2Page() {
  return (
    <UsersContextProvider>
      <TestUsers2 />
    </UsersContextProvider>
  )
}
