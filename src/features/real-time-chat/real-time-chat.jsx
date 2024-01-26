import { useState, useEffect, useContext } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import db, { database, auth } from './firebase'
import Header from './header'
import ChatBox from './chat-box'
import MessageInput from './message-input'
import Footer from './footer'
import User from './user'
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
import { FiLogOut } from 'react-icons/fi'
// DM: todoMM: you could remove no-longer-needed comments like the below 2 comments, right?
// DM: careful how you rename a directory, because I couldn't see the diffs in Git for index.js, but I could see it for all the other files. MM: i have already a component named RealTimeChat in ./pages/real-time-chat, now this component is in ./features/real-time-chat, so i named it to EasyChat to avoid confusion

/*
(done)DM: change the name of this directory to be the same as the src/pages directory name (which is in the URL - keeping the names consistent avoids confusion in a large codebase.
*/

export default function RealTimeChat() {
  console.log('RealTimeChat component rendered')

  console.log('RealTimeChat Database object:', database) // to check the database object is available to the RealTimeChat component

  const [messages, setMessages] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [connectedUsers, setConnectedUsers] = useState([])
  const [typingUsers, setTypingUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [isProfileVisible, setProfileVisible] = useState(false)
  // Add a new state variable for loading
  const [loading, setLoading] = useState(true)

  // set up a real-time listener on the 'messages' collection Firestore database
  /*
  MM: DM: in order to fix the TypeError: Cannot read properties of undefined (reading 'indexOf') error, the object that stores the messages state didn't have an id property, to fix it i added an id to it.
  */
  const { user: currentUser } = useContext(UserContext)
  console.log('RealTimeChat w of RealTimeChat:', { currentUser })

  // the useEffect hook will be triggered whenever currentUser changes. If currentUser is defined, it will call onTyping(true).
  useEffect(() => {
    if (currentUser) {
      onTyping(true)
    }
  }, [currentUser])

  // New function to handle typing status
  const onTyping = (isTyping) => {
    console.log('RealTimeChat onTyping function called with:', isTyping, {
      //(done) DM: todoMM: these are both undefined, so the if statement below will never be true.
      currentUserUid: currentUser?.uid,
      currentUser,
    }) // Add this line
    //(done) DM: use optional chaining to make this more concise
    //(done) DM: do a global regexp search to see if this pattern is elsewhere in the chat codebase: if \(\w+ &&  If so, use optional chaining there, too.
    if (currentUser?.uid) {
      const typingRef = createDatabaseReference(database, `typing/${currentUser.uid}`)
      // DM: you'll see that this line is never executed, so nothing saved to the DB
      console.log('RealTimeChat Typing ref:', typingRef, 'Is typing:', isTyping) // Add this line
      setDatabaseValue(typingRef, isTyping)
      console.log('RealTimeChat setDatabaseValue executed with:', typingRef, isTyping) // to verify that the setDatabaseValue function is executed
    }
  }

  useEffect(() => {
    console.log('RealTimeChat useEffect hook executed') // to check if the useEffect hook is executed
    const q = query(collection(db, 'messages'), orderBy('timestamp'))
    const unsubscribeFirestore = onSnapshot(q, (snapshot) => {
      const messages = []
      snapshot.forEach((doc) => {
        // adding an id for each message
        messages.push({ id: doc.id, ...doc.data() })
      })
      setMessages(messages)
    })

    // Set up Realtime Database presence subscription
    //(done) DM: rename unsubscribeDatabase to unsubscribeDatabaseListeners (or something like that) to make it clear that it is an array (plural) of unsubscribe functions.
    const unsubscribeDatabaseListeners = connectedUsers.map((user) => {
      if (!user) {
        console.error('User is undefined')
        return
      }
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
    console.log('RealTimeChat Database object:', database) // Add this line
    const typingRef = createDatabaseReference(database, 'typing')
    console.log('RealTimeChat Typing reference:', typingRef) // Add this line
    const unsubscribeTyping = listenToDatabaseValueChanges(typingRef, (snapshot) => {
      const typingUsers = []
      snapshot.forEach((childSnapshot) => {
        if (childSnapshot.val() === true) {
          typingUsers.push(childSnapshot.key)
        }
      })
      //2. check the typingUsers value
      console.log('RealTimeChat Updated typingUsers state:', typingUsers) // to check the typingUsers value
      setTypingUsers(typingUsers)
    })

    // Set up Firebase auth state listener
    const unsubscribeAuth = auth.onAuthStateChanged((updatedUser) => {
      if (updatedUser) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
      // Set loading to false after the auth state has been checked
      setLoading(false)
    })

    // Return a cleanup function that unsubscribes from both listeners
    return () => {
      unsubscribeFirestore()
      unsubscribeDatabaseListeners.forEach((unsubscribe) => unsubscribe())
      unsubscribeTyping() // Unsubscribe from typing status
      unsubscribeAuth()
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
    //(done) DM: use the function form of the setter, as you have done a few lines below
    setMessages((previousMessages) => [...previousMessages, message])

    //  When a message is sent, move the sender to the top of the connectedUsers list DM: good!
    // DM: this will only catch the 1 current user because it runs in the client where that user is logged in.
    setConnectedUsers((previousUsers) => {
      const updatedUsers = [
        message.user,
        ...previousUsers.filter((u) => u.uid !== message.sender.uid),
      ]
      return updatedUsers
    })
  }

  const deleteMessage = async (message) => {
    // Remove the message from the local state
    setMessages((previousMessages) => previousMessages.filter((m) => m.id !== message.id))

    // Remove the message from Firestore
    try {
      const messageDocRef = doc(db, 'messages', message.id)
      await deleteDoc(messageDocRef)
    } catch (e) {
      console.error('Error removing document: ', e)
    }
  }

  /*
  The steps i took to work on the "List all the connected users" task. to list the current users on the page, i found that i should start by 
    1. modifying the currentUsers state because i was just appending the users to the end of the connectedUsers array, so i should insert new users at the beginning of the array.
      - i modified the handleUserConnect function to insert new users once they are connected at the beginning of the connectedUsers array.
      - after modifying the code, i encountered an error of "TypeError: message.user is undefined".
      - to fix that error i changed message.user to message.sender in the onSendMessage function.
      - after fixing the first error, a second arose "TypeError: Cannot read properties of undefined (reading 'displayName')". to fix that i should make sure the user is defined before accessing its properties. so added an if statement to check if the user is defined.
    2. Also, when a new message is sent, i should move the sender to the top of the connectedUsers list.
      - when message is sent by the user, that user should be moved to the top of the connectedUsers list.

    3. to make sure that users are inserted in the connectedUsers array, i used Firefox and Chrome browser to connect with two different users. after connecting, i found that only the connected user that is connected first is inserted in the connectedUsers array, and the other user is not inserted in the array. DM: ok, good detail, thanks

    4. to fix that, AI suggested this "the issue might be in the implementation of onConnect function in the parent component. This function should update the connectedUsers state in the parent component and also update the list of connected users in your Firebase database". so i replaced the handleUserConnect function with the onConnect function that is passed from the User component to the RealTimeChat component.

    5. i checked again the users on the two browsers, but there is no change.

    6. i decided to add console.log to check first the connectedUsers array. but i found it doesn't show on the console. i then console.log the onConnect function is it's rendering, that also doesn't show on the console.

    7. i then checked the User component to see if the onConnect function is passed to the RealTimeChat component, and i found that it's passed correctly.

  From that point, i didn't know what to do next, i paused there and i decided to ask for help.
  */

  useEffect(() => {
    const usersStatusRef = createDatabaseReference(database, 'status')

    // DM: this is good, but it will only catch the 1 current user because it runs in the client where that user is logged in.
    // DM: todoMM: does this listener fire only when the user unsubscribes? aor, why do you call it unsubscribe? what other events cause this listener to fire?
    const unsubscribe = listenToDatabaseValueChanges(usersStatusRef, (snapshot) => {
      const updatedUsers = []
      snapshot.forEach((childSnapshot) => {
        const userStatus = childSnapshot.val()
        console.log('RealTimeChat UserStatus:', userStatus) // Log the userStatus object
        console.log('RealTimeChat DisplayName on Connected Users:', userStatus.displayName) // Log the displayName property
        if (userStatus.state === 'online') {
          updatedUsers.push({
            uid: childSnapshot.key,
            displayName: userStatus.displayName, // Include the displayName
            ...userStatus,
          })
        }
      })
      console.log('RealTimeChat updated users here:', updatedUsers) // Log the updatedUsers array
      setConnectedUsers(updatedUsers)
    })

    return () => unsubscribe()
  }, [])

  const onConnect = (user) => {
    // Check if user is defined and has a uid property
    if (!user || !user.uid) {
      console.error('Invalid user object:', user)
      return
    }
    // DM: if I filter the browser console on RealTimeChat onConnect, I see that this log happens only once. If I click on each item in Connected Users list, it is the same user. Think about where/when this code runs. This runs in the client, and is passed the "user" parameter. but, because it runs in the client, how can it know about other connected users?
    console.log('RealTimeChat onConnect function called with:', user)
    // Update the local state
    setConnectedUsers((prevUsers) => {
      // DM: good name! good guard clause!(ok)
      const isUserAlreadyConnected = prevUsers.some((prevUser) => prevUser.uid === user.uid)

      // DM: todoMM: as you clean up the code, remove obvious comments that AI adds. Also remove comments that become unnecessary because you have renamed variables to be more descriptive.
      // If the user is already in the list, return the previous state
      if (isUserAlreadyConnected) {
        return prevUsers
      }

      // If the user is not in the list, add them to the state
      const updatedUsers = [user, ...prevUsers]

      // Log the list of connected users
      console.log('RealTimeChat Connected users:', updatedUsers)

      return updatedUsers
    })

    // Update the list of connected users in the database
    const userStatusDatabaseRef = createDatabaseReference(database, 'status/' + user.uid)

    setDatabaseValue(userStatusDatabaseRef, {
      state: 'online',
      last_changed: serverTimestamp(),
    })

    // Set isAuthenticated to true
    setIsAuthenticated(true)
  }

  const onAuthenticate = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated)
  }

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log('RealTimeChat User signed out')
      })
      .catch((error) => {
        console.error('Error signing out: ', error)
      })
  }

  //(done) DM: after you have put the user* files into a ./user directory (see todo in user.js), create a file named ./user/user-context-provider.jsx and extract user, setUser into that file. Then, import that file here and use it to wrap the User component here (and also in the top-level return statement). This way, you can keep all the user-related code in one place.

  //() DM: todoMM: use the same name in both files to avoid confusion. (I like onUserConnect. Don't worry about being concise - it is more important to be clear.) MM: i don't understand what name you are referring to here, is onConnect or something else, if it's onConnect, there is no other file where it has another name. DM: the idea is to use the same name in both files.
  //(done) DM: add some horizontal margin so that the purple box is not flush against the left edge of the screen. Otherwise, looks good.
  return (
    <>
      {!isAuthenticated && <User onConnect={onConnect} onAuthenticate={onAuthenticate} />}
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
                    currentUser={currentUser}
                  />
                </div>
                <div className="flex flex-col flex-grow md:w-1/3 border-r-2 border-gray-200">
                  {/*(done) DM: choose either onSendMessage or handleSendMessage (both names are great, imo), but the prop name should be the same as the function name. this makes it a LOT easier to follow what is what as you jump back and forth between components and tweak code. If they have different names, it gets confusing and mistakes can happen. (PS: I like onSendMessage a little better, since it isn't directly an event handler, but rather is called by an event handler in another component.) */}
                  <MessageInput
                    onSendMessage={onSendMessage}
                    onTyping={(isTyping) => onTyping(isTyping)}
                  />
                </div>
                <div className="flex flex-col flex-grow md:w-1/3 border-r-2 border-gray-200">
                  <div className="flex flex-col h-full">
                    {/* Display connected users here */}
                    <div className="flex-grow">
                      <h2 className="text-gray-100 bg-purple-500 p-2 rounded text-xl font-bold text-center mb-4">
                        Connected Users
                      </h2>

                      {connectedUsers.map((user) => {
                        // DM: I put the console log above the !user guard clause so that I can see this console.log when user is undefined. That way, I can see how many of the users are undefined.
                        // DM: apparently, right now, I see 4 users in the console. So, 4 is the expected number of users, this may be correct, but the code populating connectedUsers may simply need to be fixed so that it doesn't have undefined user.displayName. So, go back to where the connectedUsers array is populated and check that code.
                        console.log('RealTimeChat real-time-chat/index.jsx ', {
                          user,
                          // DM: easier to read the console if you put all values you want to log into the same log statement
                          typeofUserDisplayname: typeof user?.displayName,
                          userDisplayname: user?.displayName,
                          connectedUsers, // DM: so I can see what is in connectedUsers
                        })
                        if (!user) {
                          console.error('User is undefined')
                          return
                        }

                        // (done)DM: todoMM: why would user or user.displayname be falsy? console.log and validate if this check is currently necessary. If so, add a comment explaining why connectedUsers would contain falsy elements. Do you really need to check if user is truthy? Or, do you just need to check if propertly displayName is on the user object? If it is not, what does it mean? So, in summary, this check raises a lot of questions about the quality of the code that results in connetedUsers having falsy users or users without displayName, so remove it or address them in comments →→ s;for the code-reviewer/boss can know what is going on. MM: This is necessary to check a possibility of user to be be null or undefined, or if user.displayName could be null, undefined, or an empty string. i think it's safer to keep it.
                        const isTyping = typingUsers.includes(user.uid)
                        // optional chaining
                        return (
                          //(done) DM: todoMM: check your browser console warnings while you use all the functionality of the app. Fix all the usage of index as key. I don"t want to have to keep reminding you about this same issue.
                          <div
                            // DM: todoMM: you have a duplicate key warning in the console. First, don't use object values as keys. "user" is an object. When you see [object Object] in the warning: Warning: Encountered two children with the same key, `[object Object]` - this means that the object is converted into a string, so all objects will be [object Object]. Run this code in the node REPO and write here what you get: String({}). Then, you can use that string as the key.
                            // DM: In general, don't ignore console warnings since they will often give clues for debugging, and they clutter up the browser console
                            // DM: todoMM use user.uid which will be unique. You may still have the duplicate key warning, so then you can deal with that.
                            key={user?.uid} // i added this because each user should be unique
                            className="flex justify-between items-center text-gray-500 p-2 rounded mt-4 mb-4 shadow-md cursor-pointer"
                            onClick={() => {
                              setSelectedUser(user)
                              setProfileVisible(true)
                            }}
                          >
                            <div className="flex items-center">
                              <span className="hover:text-purple-500 transition-colors duration-200">
                                {' '}
                                Test
                                {user?.displayName &&
                                  user.displayName[0].toUpperCase() + user.displayName.slice(1)}
                              </span>
                              <span className="ml-2 h-2 w-2 bg-green-500 rounded-full" />
                            </div>
                            {isTyping && (
                              <span className="ml-2 animate-pulse text-2xl text-blue-500 flex-shrink-0">
                                ...
                              </span>
                            )}
                            <div className="flex items-center">
                              <FiLogOut
                                onClick={handleSignOut}
                                className="cursor-pointer text-red-500 hover:text-red-700 mr-1"
                                size={24}
                              />
                              <span className="text-xs text-red-500 mt-0.5">Sign Out</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <Footer className="h-10 md:h-10" />
        </div>
      )}
    </>
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

/*
To list all connected users in the chatbox, i:
  1. console.logged the connectedUsers array to check if the users are inserted in the array.
  2. i found that the users are not inserted in the array, apart from the one that is connected first.
  ---
  3. i suspected that the issue might be related to real-time updates of the connectedUsers state across different browser instances. so i checked the connectedUsers array on the two browsers, but there is no change.
  4. AI suggested to listen for changes in the connected users in the Firebase database and update the connectedUsers state accordingly. i'll have to create a reference to the location in the database where the status of connected users is stored and listen for changes.
  5. i created a useEffect hook that will update the connectedUsers state in real-time whenever a user connects or disconnects, regardless of the browser instance.
  6. i then checked the connectedUsers array on the two browsers, but there is no change.
  7. AI suggested one thing to the issue might be due to the fact that the useEffect hook that listens for changes in the status node in your Firebase Realtime Database is only triggered when the connectedUsers state changes. This means that if a user's status changes in another browser, your current browser won't know about it unless the connectedUsers state changes.

  8. To fix this, i can remove the dependency on connectedUsers from the useEffect hook that listens for changes in the status node
  9. i checked the console.log again, but no change.
  10. AI suggested to change my Firebase Realtime Database rules from this: 
    {
    "rules": {
      ".read": "auth != null",
      ".write": "auth != null"
      }
    }
      to this:
    {
    "rules": {
      "typing": {
        ".read": true,
        ".write": false
      },
      "status": {
        ".read": true,
        ".write": "auth != null"
      }
    }
    This approach worked worked and the connected users are listed in the chatbox.

  11. But the displayName of the connected users is not displayed, so i checked the console.log of the connectedUsers array, and i found that the displayName is undefined.
  12. to solve i should i need to include the displayName in the updatedUsers array. after adding the displayName with the console.log, the userStatus.displayName was undefined
  13. another solution was this: f the displayName property is not present or has an invalid value, you'll need to update the code that sets the user status in the Firebase Realtime Database to include the displayName.
  14. the code that sets the user status in the Firebase Realtime Database is in the user-context-provider.jsx file, so i updated the code and added console.log to check the displayName, but it was undefined.
  15. the next approach was this: if the displayName is null or undefined, it means that it's not set for the user. You need to set it when you create the user or update the user's profile. i configured the signup function in the firebase config file to include the displayName, after that the displayName showed on the console.log, but it was not displayed on the chatbox.

I paused here for today and i am asking for help.


*/
