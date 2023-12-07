import { useState, useEffect } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import db from './firebase'
import { doc, deleteDoc } from 'firebase/firestore'
// import { UserContext } from './user/user-context-provider'
import Header from './header'
import ChatBox from './chat-box'
import MessageInput from './message-input'
import Footer from './footer'
import User from './user'
import UserContextProvider from './user/user-context-provider'

// DM: careful how you rename a directory, because I couldn't see the diffs in Git for index.js, but I could see it for all the other files. MM: i have already a component named RealTimeChat in ./pages/real-time-chat, now this component is in ./features/real-time-chat, so i named it to EasyChat to avoid confusion

/*
(done)DM: change the name of this directory to be the same as the src/pages directory name (which is in the URL - keeping the names consistent avoids confusion in a large codebase.
*/

export default function RealTimeChat() {
  const [messages, setMessages] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // const [user, setUser] = useState(null)
  const [connectedUsers, setConnectedUsers] = useState([])

  // set up a real-time listener on the 'messages' collection Firestore database
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = []
      snapshot.forEach((doc) => {
        messages.push(doc.data())
      })
      setMessages(messages)
    })

    return () => unsubscribe()
  }, [])

  // DM: nice function name
  const onSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'You', timestamp: new Date() }])
  }

  const deleteMessage = async (message) => {
    // Remove the message from the local state
    setMessages((previousMessages) => previousMessages.filter((m) => m.id !== message.id))

    // Get the document reference
    const docRef = doc(db, 'messages', message.id)

    // Check if the document reference is defined
    if (!docRef) {
      console.error('Document reference is undefined', { message })
      return
    }

    // Remove the message from Firestore
    try {
      await deleteDoc(doc(db, 'messages', message.id))
    } catch (e) {
      console.error('Error removing document: ', e)
    }
  }

  const handleUserConnect = (user) => {
    // new function to handle user connection
    //(done) DM: always use the function form of the setter, not the object form. This is because the function form is guaranteed to have the latest state, whereas the object form may not. (This is because the object form is a shortcut that React provides, but it is not guaranteed to have the latest state.)
    // setConnectedUsers([...connectedUsers, user])
    setConnectedUsers((previousUsers) => [...previousUsers, user])
    setIsAuthenticated(true)
  }

  const onAuthenticate = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated)
  }

  // if (!isAuthenticated) {
  // return <User onAuthenticate={() => setIsAuthenticated(true)} />
  //(done) DM: after you have put the user* files into a ./user directory (see todo in user.js), create a file named ./user/user-context-provider.jsx and extract user, setUser into that file. Then, import that file here and use it to wrap the User component here (and also in the top-level return statement). This way, you can keep all the user-related code in one place.
  // return (
  //   <UserContextProvider>
  //     <User
  //       onAuthenticate={() => setIsAuthenticated(true)}
  //() DM: todoMM: use the same name in both files to avoid confusion. (I like onUserConnect. Don't worry about being concise - it is more important to be clear.) MM: i don't understand what name you are referring to here, is onConnect or something else, if it's onConnect, there is no other file where it has another name. DM: the idea is to use the same name in both files.
  //         onConnect={handleUserConnect}
  //       />
  //     </UserContextProvider>
  //   )
  // }

  //(done) DM: add some horizontal margin so that the purple box is not flush against the left edge of the screen. Otherwise, looks good.
  return (
    <UserContextProvider>
      {!isAuthenticated && <User onConnect={handleUserConnect} onAuthenticate={onAuthenticate} />}
      {isAuthenticated && (
        <div className="flex flex-col h-screen bg-gray-100 mx-2">
          <Header />
          <div className="flex-grow flex">
            <div className="flex flex-col w-1/3 border-r-2 border-gray-200">
              <ChatBox messages={messages} deleteMessage={deleteMessage} />
            </div>
            <div className="flex flex-col w-1/3 border-r-2 border-gray-200">
              {/*(done) DM: choose either onSendMessage or handleSendMessage (both names are great, imo), but the prop name should be the same as the function name. this makes it a LOT easier to follow what is what as you jump back and forth between components and tweak code. If they have different names, it gets confusing and mistakes can happen. (PS: I like onSendMessage a little better, since it isn't directly an event handler, but rather is called by an event handler in another component.) */}
              <MessageInput onSendMessage={onSendMessage} />
            </div>
            <div className="flex flex-col w-1/3">
              {/* Display connected users here */}
              <h2 className="text-gray-100 bg-purple-500 p-2 rounded text-xl font-bold text-center">
                Connected Users
              </h2>
              {connectedUsers.map(
                (user, index) => (
                  console.log('real-time-chat/index.jsx ', { user }),
                  console.log('displayName type:', typeof user.displayName),
                  (
                    <div key={index} className="text-gray-100 bg-green-500 p-2 rounded mt-4">
                      {/* {user.email} MM: DM: i am still working on this, to display the username instead of the email DM: this is fixed?* Yes, it is!/}
                      {/* {user.displayName} */}
                      {user.displayName
                        ? `user: ${user.displayName[0].toUpperCase() + user?.displayName.slice(1)}`
                        : ``}
                    </div>
                  )
                )
              )}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </UserContextProvider>
  )
}

/*

DM: see my comment in message-input.jsx. same issue here.(ok) 

import { useState } from 'react'
import Header from './header'
import ChatBox from './chat-box'
import MessageInput from './message-input'
import Footer from './footer'
import User from './user'
import UserContextProvider from './user/user-context-provider'

export default function RealTimeChat() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return (
      <UserContextProvider>
        <User onAuthenticate={() => setIsAuthenticated(true)} />
      </UserContextProvider>
    )
  }

  return (
    <UserContextProvider>
      <div className="flex flex-col h-screen bg-gray-100 mx-2">
        <Header />
        <div className="flex-grow flex">
          <div className="flex flex-col w-1/3 border-r-2 border-gray-200">
            <ChatBox />
          </div>
          <div className="flex flex-col w-1/3 border-r-2 border-gray-200">
            <MessageInput />
          </div>
          <div className="flex flex-col w-1/3" />
        </div>
        <Footer />
      </div>
    </UserContextProvider>
  )
}

*/
