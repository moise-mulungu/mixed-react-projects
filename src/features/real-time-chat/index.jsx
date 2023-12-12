import { useState, useEffect, useContext } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import db, { database } from './firebase'
import { doc, deleteDoc } from 'firebase/firestore'
// import { UserContext } from './user/user-context-provider'
import Header from './header'
import ChatBox from './chat-box'
import MessageInput from './message-input'
import Footer from './footer'
import User from './user'
import UserContextProvider from './user/user-context-provider'
/* DM: todoMM: these names don't tell me what they do, so rename them to be more descriptive. Here's a template showing the necessary syntax:
import { 
  // explain how to use 
  ref as nameThatDescribesWhatIAmOrWhatIDo, 
  // explain how to use 
  onValue as nameThatDescribesWhatIAmOrWhatIDo, 
  // explain how to use 
  set as nameThatDescribesWhatIAmOrWhatIDo,
} from 'firebase/database'

 */
import { ref, onValue, set } from 'firebase/database'
import { serverTimestamp } from 'firebase/database'
import { UserContext } from './user/user-context-provider'

// import firebase from 'firebase/app'a
// import 'firebase/database'

// DM: careful how you rename a directory, because I couldn't see the diffs in Git for index.js, but I could see it for all the other files. MM: i have already a component named RealTimeChat in ./pages/real-time-chat, now this component is in ./features/real-time-chat, so i named it to EasyChat to avoid confusion

/*
(done)DM: change the name of this directory to be the same as the src/pages directory name (which is in the URL - keeping the names consistent avoids confusion in a large codebase.
*/

export default function RealTimeChat() {
  const [messages, setMessages] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // const [user, setUser] = useState(null)
  const [connectedUsers, setConnectedUsers] = useState([])
  const [typingUsers, setTypingUsers] = useState([])

  // set up a real-time listener on the 'messages' collection Firestore database
  /*
  MM: DM: in order to fix the TypeError: Cannot read properties of undefined (reading 'indexOf') error, the object that stores the messages state didn't have an id property, to fix it i added an id to it.
  */
  const currentUser = useContext(UserContext)
  // New function to handle typing status
  const onTyping = (isTyping) => {
    if (currentUser) {
      const typingRef = ref(database, 'typing/' + currentUser.uid)
      set(typingRef, isTyping)
    }
  }

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'))
    const unsubscribeFirestore = onSnapshot(q, (snapshot) => {
      const messages = []
      snapshot.forEach((doc) => {
        // messages.push(doc.data())
        // adding an id for each message
        messages.push({ id: doc.id, ...doc.data() })
      })
      setMessages(messages)
    })

    // Set up Realtime Database presence subscription
    const unsubscribeDatabase = connectedUsers.map((user) => {
      const userStatusRef = ref(database, 'status/' + user.uid)

      return onValue(userStatusRef, (snapshot) => {
        const status = snapshot.val()
        if (status) {
          console.log(`User ${user.uid} is ${status.state}`)
          // Here you can update your state or UI based on the user's status
        }
      })
    })
    // New subscription for typing status
    const typingRef = ref(database, 'typing')
    const unsubscribeTyping = onValue(typingRef, (snapshot) => {
      const typingUsers = []
      snapshot.forEach((childSnapshot) => {
        if (childSnapshot.val() === true) {
          typingUsers.push(childSnapshot.key)
        }
      })
      setTypingUsers(typingUsers)
    })
    // Return a cleanup function that unsubscribes from both listeners
    return () => {
      unsubscribeFirestore()
      unsubscribeDatabase.forEach((unsubscribe) => unsubscribe())
      unsubscribeTyping() // Unsubscribe from typing status
    }
  }, [connectedUsers]) // include connectedUsers in the dependency array so that the useEffect hook will run again when the connectedUsers state changes

  // DM: nice function name
  /*
  MM: DM: to fix the "Error: Objects are not valid as a React child (found: object with keys {text, sender, timestamp, id}). If you meant to render a collection of children, use an array instead." error. the onSendMessage function was sending an object to the setMessages function, where the message was expected to be a string, but in the MessageInput component the message is an object, so i changed the message to be an object in the onSendMessage function to match the MessageInput component.
  */
  const onSendMessage = (message) => {
    console.log({ message })
    // setMessages([...messages, { text: message, sender: 'You', timestamp: new Date() }])
    // DM: todoMM: use the function form of the setter, as you have done a few lines below
    setMessages([...messages, message])
  }

  const deleteMessage = async (message) => {
    // Remove the message from the local state
    setMessages((previousMessages) => previousMessages.filter((m) => m.id !== message.id))

    // Get the document reference
    // const docRef = doc(db, 'messages', message.id)

    // // Check if the document reference is defined
    // if (!docRef) {
    //   console.error('Document reference is undefined', { message })
    //   return
    // }

    // Remove the message from Firestore
    try {
      // DM: todoMM: assign all expressions to a well-named variable (for readability and console.logging). What is a doc? is it a message in the database?
      await deleteDoc(doc(db, 'messages', message.id))
    } catch (e) {
      console.error('Error removing document: ', e)
    }
  }

  const handleUserConnect = (user) => {
    const userStatusDatabaseRef = ref(database, 'status/' + user.uid)

    set(userStatusDatabaseRef, {
      state: 'online',
      last_changed: serverTimestamp(),
    })
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
              <MessageInput onSendMessage={onSendMessage} onTyping={onTyping} />
            </div>
            <div className="flex flex-col w-1/3">
              {/* Display connected users here */}
              <h2 className="text-gray-100 bg-purple-500 p-2 rounded text-xl font-bold text-center">
                Connected Users
              </h2>
              {/* {connectedUsers.map(
                (user, index) => (
                  console.log('real-time-chat/index.jsx ', { user }),
                  console.log('displayName type:', typeof user.displayName),
                  (
                    <div key={index} className="text-gray-100 bg-green-500 p-2 rounded mt-4"> */}
              {/* {user.email} MM: DM: i am still working on this, to display the username instead of the email DM: this is fixed?* Yes, it is!/}
                      {/* {user.displayName} */}
              {/* {user.displayName
                        ? `user: ${user.displayName[0].toUpperCase() + user?.displayName.slice(1)}`
                        : ``}
                    </div>
                  )
                )
              )} */}
              {connectedUsers.map((user, index) => {
                console.log('real-time-chat/index.jsx ', { user })
                console.log('displayName type:', typeof user.displayName)
                if (user && user.displayName) {
                  return (
                    <div key={index} className="text-gray-100 bg-green-500 p-2 rounded mt-4">
                      {`user: ${user.displayName[0].toUpperCase() + user.displayName.slice(1)}`}
                    </div>
                  )
                }
                return null
              })}
            </div>
            <div className="flex flex-col w-1/3 ml-2">
              <h2 className="text-gray-100 bg-purple-500 p-2 rounded text-xl font-bold text-center">
                Typing Users
              </h2>
              {typingUsers.map((user, index) => (
                <div key={index} className="text-gray-100 bg-green-500 p-2 rounded mt-4">
                  {`${user} is typing...`}
                </div>
              ))}
            </div>
            {/* MM: DM: this part of code still needs styling improvements, i'll continue with it tomorrow */}
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
