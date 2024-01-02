import { useState, useEffect, useContext } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import db, { database } from './firebase'
import Header from './header'
import ChatBox from './chat-box'
import MessageInput from './message-input'
import Footer from './footer'
import User from './user'
import UserContextProvider from './user/user-context-provider'
import UserProfile from './user/user-profile'
/* (done)DM: these names don't tell me what they do, so rename them to be more descriptive. Here's a template showing the necessary syntax:
import { 
  // explain how to use 
   ref as nameThatDescribesWhatIAmOrWhatIDo, 
  // explain how to use 
  onValue as nameThatDescribesWhatIAmOrWhatIDo, 
  // explain how to use 
  set as nameThatDescribesWhatIAmOrWhatIDo,
} from 'firebase/database'

 */
import {
  // 'ref' is used to create a reference to a specific location in your Database.
  //(done) DM: todoMM: ok, good, but what do you mean by "location" in the database? what is the reference attached to, what can you so with the reference returned?
  ref as createDatabaseReference,

  // 'onValue' sets up a listener that gets called whenever the data at a particular location changes.
  //(done) DM: todoMM: ok, got it. Is location/value refer to a document in a collection, or to a particular field in a document? MM: In the context of Firebase's Realtime Database, a "location" refers to a specific path in your database. It's like a URL for your data. For example, if you have a database structure like this:
  /*
  - users
    - user1
      - name: "Alice"
      - age: 20
    - user2
      - name: "Bob"
      - age: 25
      
  The location /users/user1 refers to the data { name: "Alice", age: 20 }, and the location /users/user1/name refers to the data "Alice".
    
  When you create a reference using ref or createDatabaseReference, you're specifying the path to the data you want to interact with. You can then use this reference to read data, write data, or listen for data changes at that location.
  */
  onValue as listenToDatabaseValueChanges,

  // 'set' writes or replaces data at a specific location in your Database. DM: good
  set as setDatabaseValue,
} from 'firebase/database'
import { serverTimestamp } from 'firebase/database'
import { UserContext } from './user/user-context-provider'
import { doc, getDoc, deleteDoc } from 'firebase/firestore'

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
  const [selectedUser, setSelectedUser] = useState(null)
  const [isProfileVisible, setProfileVisible] = useState(false)

  // set up a real-time listener on the 'messages' collection Firestore database
  /*
  MM: DM: in order to fix the TypeError: Cannot read properties of undefined (reading 'indexOf') error, the object that stores the messages state didn't have an id property, to fix it i added an id to it.
  */
  const currentUser = useContext(UserContext)
  // New function to handle typing status
  const onTyping = (isTyping) => {
    if (currentUser) {
      const typingRef = createDatabaseReference(database, `typing/${currentUser.uid}`)
      setDatabaseValue(typingRef, isTyping)
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
    // DM: todoMM: rename unsubscribeDatabase to unsubscribeDatabaseListeners (or something like that) to make it clear that it is an array (plural) of unsubscribe functions.
    const unsubscribeDatabase = connectedUsers.map((user) => {
      const userStatusRef = createDatabaseReference(database, 'status/' + user.uid)

      return listenToDatabaseValueChanges(userStatusRef, (snapshot) => {
        const status = snapshot.val()
        if (status) {
          console.log(`User ${user.uid} is ${status.state}`)
          // Here you can update your state or UI based on the user's status
        }
      })
    })
    // New subscription for typing status
    const typingRef = createDatabaseReference(database, 'typing')
    const unsubscribeTyping = listenToDatabaseValueChanges(typingRef, (snapshot) => {
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

  // fetch user data from firestore
  async function fetchUser(uid) {
    const userRef = doc(db, 'users', uid)
    const userSnapshot = await getDoc(userRef)
    if (userSnapshot.exists()) {
      return userSnapshot.data()
    } else {
      console.error('User does not exist:', uid)
      return null
    }
  }
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
    const userStatusDatabaseRef = createDatabaseReference(database, 'status/' + user.uid)

    setDatabaseValue(userStatusDatabaseRef, {
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
        <div className="flex flex-col h-screen bg-gray-100 mx-2 md:mx-0">
          <Header className="h-10 md:h-10" />
          {isProfileVisible ? (
            <UserProfile setSelectedUser={setSelectedUser} setProfileVisible={setProfileVisible} />
          ) : (
            <div className="flex-1">
              <div className="flex flex-col md:flex-row flex-grow h-full md:h-full">
                <div className="flex flex-col flex-grow md:w-1/3 border-r-2 border-gray-200">
                  <ChatBox
                    fetchUser={fetchUser}
                    messages={messages}
                    deleteMessage={deleteMessage}
                  />
                </div>
                <div className="flex flex-col flex-grow md:w-1/3 border-r-2 border-gray-200">
                  {/*(done) DM: choose either onSendMessage or handleSendMessage (both names are great, imo), but the prop name should be the same as the function name. this makes it a LOT easier to follow what is what as you jump back and forth between components and tweak code. If they have different names, it gets confusing and mistakes can happen. (PS: I like onSendMessage a little better, since it isn't directly an event handler, but rather is called by an event handler in another component.) */}
                  <MessageInput onSendMessage={onSendMessage} onTyping={onTyping} />
                </div>
                <div className="flex flex-col flex-grow md:w-1/3 border-r-2 border-gray-200">
                  <div className="flex flex-col h-full">
                    {/* Display connected users here */}
                    <div className="flex-grow">
                      <h2 className="text-gray-100 bg-purple-500 p-2 rounded text-xl font-bold text-center mb-4">
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
                      {connectedUsers.map((user) => {
                        console.log('real-time-chat/index.jsx ', { user })
                        console.log('displayName type:', typeof user.displayName)
                        // DM: todoMM: why would user or user.displayname be falsy? console.log and validate if this check is currently necessary. If so, add a comment explaining why connectedUsers would contain falsy elements. Do you really need to check if user is truthy? Or, do you just need to check if propertly displayName is on the user object? If it is not, what does it mean? So, in summary, this check raises a lot of questions about the quality of the code that results in connetedUsers having falsy users or users without displayName, so remove it or address them in comments →→ s;for the code-reviewer/boss can know what is going on. MM: This is necessary to check a possibility of user to be be null or undefined, or if user.displayName could be null, undefined, or an empty string. i think it's safer to keep it.
                        if (user && user.displayName) {
                          return (
                            // <div key={index} className="text-gray-100 bg-green-500 p-2 rounded mt-4">
                            //   {`user: ${user.displayName[0].toUpperCase() + user.displayName.slice(1)}`}
                            // </div>
                            //(done) DM: todoMM: check your browser console warnings while you use all the functionality of the app. Fix all the usage of index as key. I don"t want to have to keep reminding you about this same issue.
                            <div
                              key={user} // i added this because each user should be unique
                              className="flex items-center text-gray-500 p-2 rounded mt-4 mb-4 shadow-md cursor-pointer"
                              onClick={() => {
                                setSelectedUser(user)
                                setProfileVisible(true)
                              }}
                            >
                              <span>
                                {user.displayName[0].toUpperCase() + user.displayName.slice(1)}
                              </span>
                              <span className="ml-2 h-2 w-2 bg-green-500 rounded-full" />
                            </div>
                          )
                        }
                        return null
                      })}
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-100 bg-purple-500 p-2 rounded text-xl font-bold text-center">
                        Typing Users
                      </h2>
                      {typingUsers.map((user, index) => {
                        console.log('typingUsers', { user })
                        return (
                          <div key={index} className="text-gray-100 p-2 rounded mt-4">
                            <span>{`${user} is typing`}</span>
                            <span className="text-green-500">...</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                {/* <div className="flex flex-col w-1/3 ml-2">
              <h2 className="text-gray-100 bg-purple-500 p-2 rounded text-xl font-bold text-center">
                Typing Users
              </h2>
              {typingUsers.map(
                (user, index) => (
                  console.log('typingUsers', { user }),
                  (
                    <div key={index} className="text-gray-100 bg-green-500 p-2 rounded mt-4">
                      {`${user} is typing...`}
                    </div>
                  )
                )
              )}
            </div> */}
              </div>
            </div>
          )}
          <Footer className="h-10 md:h-10" />
        </div>
      )}
    </UserContextProvider>
  )
}

/*

DM: see my comment in message-input.jsx. same issue here.(ok) 

DM: good stuff
MM: DM: i realized that the app was responsive but it was not attractive on mobile device. i tested it on the Mobile simulator - responsive testing tool in chrome dev tools, and i found that the app was not responsive on mobile devices, so i read the document that provides the responsive design features by the framework to make the app responsive on mobile devices.(https://tailwindcss.com/docs/responsive-design)
To use media queries in Tailwind CSS, you can use the responsive design features provided by the framework. Here are the steps:

1. Understand the breakpoints: Tailwind CSS comes with five default breakpoints:

  sm: 640px
  md: 768px
  lg: 1024px
  xl: 1280px
  2xl: 1536px

2. Use the breakpoints: To apply a style only at a specific breakpoint, you prepend the breakpoint name to the utility class with a colon. For example, md:bg-red-500 will apply the bg-red-500 class only on medium screens (768px and above).

3. Apply to your elements: Here's an example of how you can use media queries in your HTML:

<div className="bg-red-500 md:bg-blue-500 lg:bg-green-500 xl:bg-yellow-500 2xl:bg-purple-500">
  This is a div with a background color that changes at different breakpoints.
</div>

MM: DM: for today's work, i added screenshots of the login, signup and chatbox components on how they look like on mobile device by using the chrome extension Mobile Simulator - Responsive Testing Tool in the src/features/real-time-chat/image folder.
*/
