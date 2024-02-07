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
  get as getDatabaseValue, //(done) DM: give this a more descriptive alias because this is a very large file
} from 'firebase/database'
import { serverTimestamp } from 'firebase/database'
import { UserContext } from './user/user-context-provider'
import { doc, getDoc, deleteDoc } from 'firebase/firestore'
import { FiLogOut } from 'react-icons/fi'
export default function RealTimeChat() {
  console.log('RealTimeChat component rendered')

  console.log('RealTimeChat Database object:', database) // to check the database object is available to the RealTimeChat component

  const [messages, setMessages] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [connectedUsers, setConnectedUsers] = useState([])
  const [typingUsers, setTypingUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [isProfileVisible, setProfileVisible] = useState(false)
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
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'))
    const unsubscribeFirestore = onSnapshot(q, async (snapshot) => {
      const messages = []
      // for (const doc of snapshot.docs) {
      //   const messageData = doc.data()
      //   const userExists = await fetchUser(messageData.uid)
      //   if (userExists) {
      //     messages.push({ id: doc.id, ...messageData })
      //   }
      // }
      snapshot.forEach((doc) => {
        messages.push({ id: doc.id, ...doc.data() })
      })
      setMessages(messages)
    })

    // Set up Realtime Database presence subscription
    //(done) DM: rename unsubscribeDatabase to unsubscribeDatabaseListeners (or something like that) to make it clear that it is an array (plural) of unsubscribe functions.
    console.log('RealTimeChat connectedUsers:', connectedUsers)
    const unsubscribeDatabaseListeners = connectedUsers.map((user) => {
      console.log('RealTimeChat connectedUsers.map user:', user)
      if (!user) {
        console.error('User is undefined')
        return
      }
      const userStatusRef = createDatabaseReference(database, 'status/' + user.uid)

      return listenToDatabaseValueChanges(userStatusRef, (snapshot) => {
        const status = snapshot.val()
        if (status) {
          // const userExists = await fetchUser(user.uid)
          // if (userStatus.state === 'online' && userExists) {
          //   // your code here
          //   console.log(`User ${user.uid} is ${status.state}`)
          // }
          // Here you can update your state or UI based on the user's status
          console.log('RealTimeChat User status:', { user, status })
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
      // return userSnapshot.data()
      // const userData = userSnapshot.data()
      // // Use senderName instead of displayName
      // if (userData && userData.senderName) {
      //   return {
      //     ...userData,
      //     displayName: userData.senderName,
      //   }
      // } else {
      //   console.error('senderName is not set for user:', uid)
      //   return null
      // }
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
    // setConnectedUsers((previousUsers) => {
    //   const updatedUsers = [
    //     message.user,
    //     ...previousUsers.filter((u) => u.uid !== message.sender.uid),
    //   ]
    //   return updatedUsers
    // })
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
  // function createDatabaseReference(database, path) {
  //   return database.ref(path)
  // }

  useEffect(() => {
    //(done) DM: avoid abbreviations in general, but specially avoid "Ref" as it can be confused with React Refs (it"s ok to use the abbreviation "Ref" with React refs because it is a common convention like "props")
    const usersStatusReference = createDatabaseReference(database, 'status')

    // DM: search console on "RealTimeChat useEffect deps []" to see only the comments from this useEffect
    console.log('RealTimeChat useEffect deps [] triggered')

    // DM: this is good, but it will only catch the 1 current user because it runs in the client where that user is logged in.
    //() DM: does this listener fire only when the user unsubscribes? or, why do you call it unsubscribe? what other events cause this listener to fire? MM: The unsubscribe function is returned by listenToDatabaseValueChanges. It's called unsubscribe because calling it will stop the listener from listening to changes in the database. The listener fires whenever there's a change in the 'status' node of the database. It doesn't fire when the users unsubscribes, but you call unsubscribe in the cleanup function of useEffect to stop listening to changes when the component unmounts. DM: ok, then rename it to something like unsubscribeFromListenToDatabaseValueChangesListener so it wont be confused with something like "unsubscribe from chat room" - note: code grows over time and unspecific file names cause confusion and bugs. MM: i renamed it stopListeningToStatusChanges for shortness and conciseness instead of unsubscribeFromListenToDatabaseValueChangesListener. DM: yes, perfect
    const stopListeningToStatusChanges = listenToDatabaseValueChanges(
      usersStatusReference, // DM: 3. this database reference must not contain the displayName
      (snapshot) => {
        console.log('RealTimeChat useEffect deps [] userStatusChanges:', snapshot.val())
        // const updatedUsers = []
        // const updatedUsers = [...connectedUsers]
        const updatedUsers = []
        snapshot.forEach((childSnapshot) => {
          const userStatus = childSnapshot.val()
          console.log('RealTimeChat useEffect deps [] userStatusChanges userStatus:', {
            // DM: todoMM: you need to deal with this:
            userStatusDisplayName: userStatus.displayName, // DM: 2. this is undefined
            // DM: no longer important? uid is undefined always, but that may be because quote exceeded, but check more detail in this area of the code when you get quota fixed.
            userStatusUid: userStatus.uid,
            userStatusState: userStatus.state,
            userStatus,
            childSnapshot,
            childSnapshotKey: childSnapshot.key,
          })
          if (
            userStatus.state === 'online'
            // && userExists
          ) {
            const isUserAlreadyConnected =
              updatedUsers && updatedUsers.some((user) => user && user.uid === childSnapshot.key)
            //(done) DM: todoMM: are you sure this works? I don't see any console.logs. If you used console.logs to validate isUserAlreadyConnected and userStatus.state, don't delete them, but comment them out so that I or you can use them in the future and also so that I know what you have already tried to debug this area. MM: i mentioned in the report file that the same user is till repeated many times in the connectedUsers array despite attempts to debug the code. DM: fine but you still need ocnsole.logs and detailed items should be here commented in the code not in the daily report. In any case "there is one only user listed many times on the list" is a general comment - how am I supposed to know where in the code that is? Ok to repeat things in code comments, but my main concern was no console.logs here which is obviously where in the code the issue is found.
            // DM: todoMM: please follow my pattern by putting both variables in the same comment using an object for the 2nd console.log argument, because your console has so many logs it is hard to read. Also put searchable detail and context into the first log argument example:
            console.log(
              'RealTimeChat useEffect deps [] userStatusChanges userStatusState===online:',
              {
                isUserAlreadyConnected,
                userStatusState: userStatus.state,
                userStatus,
                updatedUsers,
              }
            )
            // console.log('isUserAlreadyConnected:', isUserAlreadyConnected)
            // console.log('userStatus.state:', userStatus.state)

            if (!isUserAlreadyConnected) {
              // Get the displayName from the 'users' node in the database
              const userReference = createDatabaseReference(database, 'users/' + childSnapshot.key)
              getDatabaseValue(userReference).then((userSnapshot) => {
                const user = userSnapshot.val() // DM: this doesn't work. is "".val()"" correct way to call it?
                // DM: todoMM: I added this console.log to see if you new code works. It doesn't work - user is always null. Moise, if you write new code and you say you're blocked and you tell me it's not working, and I don't see any console.logs where you tried to find out where the new code failed, then you are not stuck, you are not blocked, but rather you just stopped before you even tried to debug where exactly is the problem. I feel like I've told you to debug with console.logs many, many times. You are not debugging if you don't try to find out where the code is broken. If you're not debugging, you're not programming. MM: i am not sure if the problem is console.log here, you told me to follow your listed steps when you described DM: 1a/1b/3/2. i followed them as you prescribed, but i found that the console results were the values of the object properties, i don't if you double-checked that. (DM: this is not enough, debug further to find out why the console.log results were not what you wanted) for debugging i am doing my best to follow your debugging rules of adding console logs anytime when i want to check for something. if the first approach didn't work, i'll work on your second approach of adding a new user-context-provider for users and try if that one will work. DM: before you do that, debug this code here. You are trying to get the user info here. Why does it not work? Fix that first, because you'll need that in the user-context-provider solution anyway. It must be possible to query the database for user info based on the uid, which I assume is what is contained in childSnapshot.key, but you should be sure. Find out if you are calling createDatabaseReference and getDatabaseValue correctly and using the results correctly (the console.log below shows something is not right.)
                console.log('RealTimeChat useEffect deps [] userStatusChanges userReference:', {
                  userSnapshot,
                  // DM: todoMM: user is always null
                  user,
                  userStatus,
                  childSnapshotKey: childSnapshot.key,
                  childSnapshot,
                })

                updatedUsers.push({
                  uid: childSnapshot.key,
                  displayName: user?.user.displayName,
                  ...userStatus,
                })
              })
            }
          }
        })
        console.log(
          'RealTimeChat useEffect deps [] userStatusChanges about to setConnectedUsers():',
          updatedUsers
        )
        setConnectedUsers(updatedUsers)
      }
    )

    return () => stopListeningToStatusChanges()
  }, [])
  // for debugging changes to connectedUsers
  useEffect(() => {
    // DM: I see 9 different users in connectedUsers so ...
    console.log('RealTimeChat useEffect deps [connectedUsers]', { connectedUsers })
  }, [connectedUsers])

  const handleUserConnect = (user) => {
    console.log('handleUserConnect called with user:', user)
    const userStatusDatabaseRef = createDatabaseReference(database, 'status/' + user.uid)

    setDatabaseValue(userStatusDatabaseRef, {
      state: 'online',
      last_changed: serverTimestamp(),
    })
    // new function to handle user connection
    //(done) DM: always use the function form of the setter, not the object form. This is because the function form is guaranteed to have the latest state, whereas the object form may not. (This is because the object form is a shortcut that React provides, but it is not guaranteed to have the latest state.)
    // setConnectedUsers([...connectedUsers, user])
    setConnectedUsers((previousUsers) => {
      // const updatedUsers = [...previousUsers, user]
      console.log('RealTimeChat handleUserConnect previousUsers:', { previousUsers, user })
      // DM: todoMM: you call SetConnectedUsers in 2 places. IN this place, you add user, which is not the same as what you are adding in the other place you call it. Here, user.displayName is not undefined. In the other place, displayName is undefined. also remember, this runs only once, for the current user, so you should see only 1 user in the console.log.
      const updatedUsers = [user, ...previousUsers.filter((u) => u.uid !== user.uid)]
      //(done) DM: don't set another state variable in the setter of a state variable. You are setting the same state var below. What is the reason to set it here?
      return updatedUsers
    })
    setIsAuthenticated(true)
  }

  // const onConnect = (user) => {
  //   if (!user || !user.uid) {
  //     console.error('Invalid user object:', user)
  //     return
  //   }
  //   // DM: if I filter the browser console on RealTimeChat onConnect, I see that this log happens only once. If I click on each item in Connected Users list, it is the same user. Think about where/when this code runs. This runs in the client, and is passed the "user" parameter. but, because it runs in the client, how can it know about other connected users? MM: The onConnect function is called with a user object. It updates the connectedUsers state to include the user if they're not already in the list. It doesn't need to know about other connected users because it's only concerned with adding the user to the list. The list of all connected users is maintained in the connectedUsers state, which is updated by the useEffect hook whenever there's a change in the 'status' node of the database.
  //   console.log('RealTimeChat onConnect function called with:', user)

  //   // setConnectedUsers((prevUsers) => {
  //   //   const isUserAlreadyConnected = prevUsers.some((prevUser) => prevUser.uid === user.uid)

  //   //   //(done) DM: todoMM: as you clean up the code, remove obvious comments that AI adds. Also remove comments that become unnecessary because you have renamed variables to be more descriptive.

  //   //   if (isUserAlreadyConnected) {
  //   //     return prevUsers
  //   //   }
  //   //   const updatedUsers = [user, ...prevUsers]

  //   //   console.log('RealTimeChat Connected users:', updatedUsers)

  //   //   return updatedUsers
  //   // })

  //   const userStatusDatabaseRef = createDatabaseReference(database, 'status/' + user.uid)

  //   setDatabaseValue(userStatusDatabaseRef, {
  //     state: 'online',
  //     last_changed: serverTimestamp(),
  //   })

  //   setIsAuthenticated(true)

  //   // Add the connected user to the connectedUsers state
  //   setConnectedUsers((previousUsers) => {
  //     const updatedUsers = [user, ...previousUsers.filter((u) => u.uid !== user.uid)]
  //     return updatedUsers
  //   })
  // }

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

  useEffect(() => {
    console.log('RealTimeChat connected users:', connectedUsers) // MM: the console.log result is an empty array on the console, i think i'll make a pause on this task as it's a time-consuming one then i'll come back to this after completing the others.
  }, [connectedUsers])
  //(done) DM: after you have put the user* files into a ./user directory (see todo in user.js), create a file named ./user/user-context-provider.jsx and extract user, setUser into that file. Then, import that file here and use it to wrap the User component here (and also in the top-level return statement). This way, you can keep all the user-related code in one place.

  //() DM: todoMM: use the same name in both files to avoid confusion. (I like onUserConnect. Don't worry about being concise - it is more important to be clear.) MM: i don't understand what name you are referring to here, is onConnect or something else, if it's onConnect, there is no other file where it has another name. DM: the idea is to use the same name in both files.
  //(done) DM: add some horizontal margin so that the purple box is not flush against the left edge of the screen. Otherwise, looks good.
  console.log('RealTimeChat rendered')
  return (
    <>
      {!isAuthenticated && (
        <User handleUserConnect={handleUserConnect} onAuthenticate={onAuthenticate} />
      )}
      {isAuthenticated && (
        <div className="flex flex-col h-screen bg-gray-100 mx-2 md:mx-0">
          <Header className="h-10 md:h-10" />
          {isProfileVisible ? (
            /*(done) DM: todoMM: you're not passing the selected user to the UserProfile, so it always shows the current user, not other users. 
            MM: i removed the curly brackets because they were throwing eslint error, and if i replace setSelectedUser with selectedUser the code breaks. in the UserProfile component setSelectedUser is used in the handleUpdateProfile function, where setSelectedUser(null) is called after the user's profile is updated. it's likely indicating that there is no currently selected user after the profile update operation. that's why i kept it there.
            DM: ok. pass seletedUser if you want to show the profile in read-only mode, so that non-current users can see other users profile info. Optional, IMO. 
            
            */
            <UserProfile
              setSelectedUser={setSelectedUser}
              selectedUser={selectedUser}
              setProfileVisible={setProfileVisible}
            />
          ) : (
            <div className="flex-1">
              <div className="flex flex-col md:flex-row flex-grow h-full md:h-full">
                <div className="flex flex-col flex-grow md:w-1/3 border-r-2 border-gray-200">
                  <ChatBox
                    fetchUser={fetchUser}
                    // messages={messages}
                    //(done) DM: you changed the query to "desc" then you reversed that here. Why? MM: i reversed it because the messages were not displayed in the chatbox, so i thought it might be the issue, but it wasn't.
                    messages={[...messages]}
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
                        // const formattedDisplayName =
                        //   user?.displayName &&
                        //   user.displayName[0].toUpperCase() + user.displayName.slice(1)
                        const formattedDisplayName =
                          user?.displayName &&
                          user.displayName[0].toUpperCase() + user.displayName.slice(1)

                        // DM: I put the console log above the !user guard clause so that I can see this console.log when user is undefined. That way, I can see how many of the users are undefined.
                        console.log('RealTimeChat Formatted display name:', formattedDisplayName)
                        {
                          /* // DM: apparently, right now, I see 4 users in the console. So, 4 is the expected number of users, this may be correct, but the code populating connectedUsers may simply need to be fixed so that it doesn't have undefined user.displayName. So, go back to where the connectedUsers array is populated and check that code. MM: the issue is why the same user is repeatedly listed many times in the connectedUsers array, to fix that i: 1. tried to add a condition to check if the user is already in the connectedUsers array, so not to add it again, 2. was to keep only the useEffect to add the user to the connectedUsers but not the onConnect function, and 3. was on the nSendMessage when a message is sent, you are adding the sender to the connectedUsers state. This is why you see the same user multiple times when a user sends multiple messages. all of the three steps lead to no changes in the connectedUsers array. DM: but how come among the users, I don"t see any user other than the current user when I click on the users to see user profile. They are all me. MM: yesterday i mentioned that the issue is not fixed yet. DM: I know, but my point was the same current users is in each row. It is a clue for you. */
                        }
                        console.log('RealTimeChat real-time-chat/index.jsx ', {
                          user,
                          // DM: easier to read the console if you put all values you want to log into the same log statement
                          // DM: user?.displayName is undefined
                          typeofUserDisplayname: typeof user?.displayName, // DM: 1a. this is undefined. MM:i checked and found  the output is a "string" not undefined
                          userDisplayname: user?.displayName, // this outputs the current connected user
                          userUid: user?.uid, // DM: 1b. this looks correct
                          connectedUsers, // DM: so I can see what is in connectedUsers
                        })
                        if (!user) {
                          console.error('User is undefined')
                          return
                        }

                        // (done)DM: todoMM: why would user or user.displayname be falsy? console.log and validate if this check is currently necessary. If so, add a comment explaining why connectedUsers would contain falsy elements. Do you really need to check if user is truthy? Or, do you just need to check if propertly displayName is on the user object? If it is not, what does it mean? So, in summary, this check raises a lot of questions about the quality of the code that results in connetedUsers having falsy users or users without displayName, so remove it or address them in comments →→ s;for the code-reviewer/boss can know what is going on. MM: This is necessary to check a possibility of user to be be null or undefined, or if user.displayName could be null, undefined, or an empty string. i think it's safer to keep it.
                        const isTyping = typingUsers.includes(user.uid)

                        console.log('User:', user)
                        console.log('User Display Name:', user?.displayName)

                        // optional chaining
                        return (
                          //(done) DM: todoMM: check your browser console warnings while you use all the functionality of the app. Fix all the usage of index as key. I don"t want to have to keep reminding you about this same issue.
                          <div
                            //(done) DM: you have a duplicate key warning in the console. First, don't use object values as keys. "user" is an object. When you see [object Object] in the warning: Warning: Encountered two children with the same key, `[object Object]` - this means that the object is converted into a string, so all objects will be [object Object]. Run this code in the node REPO and write here what you get: String({}). Then, you can use that string as the key.
                            // DM: In general, don't ignore console warnings since they will often give clues for debugging, and they clutter up the browser console
                            // DM: todoMM use user.uid which will be unique. You may still have the duplicate key warning, so then you can deal with that.
                            key={user?.uid} // i added this because each user should be unique
                            className="flex justify-between items-center text-gray-500 p-2 rounded mt-4 mb-4 shadow-md cursor-pointer"
                            onClick={() => {
                              console.log('connectedUser clicked', { user, currentUser })
                              if (user.uid !== currentUser.uid) {
                                console.log(
                                  'connectedUser clicked and user.uid !== currentUser.uid',
                                  { user, currentUser }
                                )
                                setSelectedUser(user)
                                // DM: todoMM: should the current user be able to edit other users? I think you would only allow a click for the current user. If you decide to allow the current user to click on the other users in order to view information about other users, then in that case the UserProfile should be in a "read only" mode, so that the current user cannot edit the profile of other users. MM: I i added a condition in the onClick handler to only allow the current user to view their own profile, but the code doesn't work.
                                setProfileVisible(true)
                              }
                            }}
                          >
                            <div className="flex items-center">
                              {/*MM: this console.log  outputs the formatted display name of the connected user as expected, but what is strange is how it doesn't display the formatted display name in the browser. DM: this shows a username for me only, the current user: Dmdmdm- but is undefined for all other users. MM; but before displaying other usernames, i would want to first display for the "me" user, then others. DM: fine but the issue is you didn't investigate why the formattedDisplayName didn't display here. Don't just tell me where it is not working because formattedDisplayName is undefined, investigate it to find the origin of the problem that causes formattedDisplayName to be undefined. */}
                              {console.log(
                                'RealTimeChat xxx formatted display name:',
                                formattedDisplayName
                              ) || null}
                              <span className="hover:text-purple-500 transition-colors duration-200">
                                {' '}
                                {formattedDisplayName}
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

/*
I found something when i delete a user from firebase database, his messages still remains in the ChatBox, so i decided to figure out how i could fix it. i started by: 
  1. updating the async function fetchUser by declaring an existUser variable and assigning the value of userSnapshot.exists() to it. i then added an if statement to check if existUser is true, and if it is, i returned the userSnapshot.data(). if it's false, i console.logged an error message and returned null.
  2. i then added a new function to handle the user connection, and i updated the handleUserConnect function to insert new users at the beginning of the connectedUsers array.
  3. i then checked if the user is online and if the user exists, and if both conditions are true, i added the user to the connectedUsers array.

But after all the changes, the user's messages still remains in the ChatBox after the user is deleted from the firebase database.
I asked for AI to fix the issue, so it suggested the following:
DM: going forward, please show me your AI prompt, so that I can know what you asked.(ok) 
  1. Install Firebase CLI: If you haven't done so already, install the Firebase CLI by running npm install -g firebase-tools in your terminal.

  2. Initialize Firebase Functions: In your project directory, run firebase init functions. This will create a new functions directory.

  3. Navigate to the Functions Directory: Change your current directory to the functions directory by running cd functions.

  4. Write the Cloud Function: In the functions directory, you'll find an index.js file. This is where you write your Cloud Functions. Write the function to delete user messages when a user is deleted.

  5. Deploy the Function: Once you've written your function, you can deploy it to Firebase by running firebase deploy --only functions from the root of your project directory. This command uploads your function to Firebase's servers.

  6. Test the Function: Delete a user from the Firebase Authentication console and check if their messages are also deleted from the Firestore database.

Remember, Firebase Cloud Functions run on Firebase's servers, not in the user's app. This means they can execute even when the user's app is not running, which is ideal for tasks like cleaning up data when a user is deleted.

I tried to install the first package, but i found it will a long procedure, i decided to pause here.
* I would try to use the firebase console (WEb UI) to view data. 
*/
/*
In order to fix the connected users in the connectedUsers array, i started by:
  1. i noticed that the connectedUsers array was empty, even though it was expected to contain the currently connected users. i found that this could be due to the asynchronous nature of state updates in React, which means that the updated state might not be immediately available after calling the state update function.

  2. Logging the State: To confirm that the connectedUsers state was being updated, i updated a useEffect hook that logs the connectedUsers state every time it changes. This allowed us to see the updated state when it was applied.

  3. Identifying the Discrepancy: for this step, i noticed a discrepancy between the number of users in connectedUsers and another array, updatedUsers. this could be due to the timing of when these arrays are logged and updated.

  4. Clearing the Array: to ensure that connectedUsers only contains the currently connected users, i assumed of clearing connectedUsers before adding the connected users to it. This was done by initializing updatedUsers as an empty array at the start of the callback function passed to listenToDatabaseValueChanges, and then setting connectedUsers to updatedUsers after the snapshot.forEach loop.

  5. Updating the useEffect Hook: Finally, i updated the useEffect hook to implement the changes. This involved modifying the callback function passed to listenToDatabaseValueChanges to clear updatedUsers before adding the connected users to it, and then setting connectedUsers to updatedUsers after the loop.

After those changes, the connected users array was updated, but the discrepancy still persists. i paused again here.
*/

/*
To fix the displayName not showing up in the connected users list, i
1. added console.log to check the user,and the user.displayName, so the result was the values of the user and the user.displayName were showing up on the console.

2. i declared a variable with a descriptive name called "formattedDisplayName" which is assigned the value of user.displayName[0].toUpperCase() + user.displayName.slice(1). i then used the formattedDisplayName variable to display the user's displayName in the jsx return statement of the connected users list. but the displayName was not displayed.

3. Checked the Firestore Data: i checked the Firestore console to see if the displayName field was set in the user documents. i found that the displayName field was not present, but there was a senderName field instead.

4. Checked the fetchUser Function: i reviewed the fetchUser function by replacing displayName with senderName in the return statement.

5. Updated the Code to Use senderName: i updated the fetchUser function to return senderName as displayName. i also updated the console logs and the line where formattedDisplayName is defined to use user.senderName instead of user.displayName.

After following these steps, i wasn't able to resolve the issue with displayName not showing up. There was an error that the User doesn't have a senderName property. i was obliged to comment the updated code and revert the displayName.
*/

/*
for today's work about debugging the displayName not showing up in the connected users list, i:

  1. Identify the issue The initial problem was identified as the displayName of online users not being displayed in the real-time chat application.

  2. the displayName was stored in a separate users node in the Firebase Realtime Database, while the online status was stored in the status node.

  3. Modify the code to read from users node The code was modified to create a reference to the user's node in the users node and read the data at this reference once, in addition to reading from the status node.

  4. Encounter a permission error After modifying the code, a "Permission denied" error was encountered. This was because the Firebase Realtime Database rules did not allow reading from the users node.

  5. Update Firebase Realtime Database rules The Firebase Realtime Database rules were updated to allow reading from the users node.

  6. Verify the solution After updating the rules, the code was not able to display the displayName of online users, th issue is still there.
    * DM: todoMM: "the code was not able to display the displayName of online users" is not helpful because it contains no new information. It contains nothing that helps me help you. You said "The Firebase Realtime Database rules were updated to allow reading from the users node". That sounds good, so where did you verify that username was being returned by Firebase from your user node query/reference? If the query is working, then follow the displayName values through the code from the query to displaying in the JSX. Where did it break? MM: in the code i pointed where the code broke, i said where i declared the variable formattedDisplayName, the console result was the connected user, now in the jsx that where the formattedDisplayName was not showing up. DM: I was addressing what your wrote here just above, which did not help. I did not find any helpful info in the location you mentioned, see my comments yesterday there.

MM: I want to know what can be done in a work environment when one is stuck on an issue for longer time, even after trying all the possibilities suggested by other team mates or even the Lead? i mentioned for help because this task has taken more time than expected.
  * DM: you have to try to debug in order to find out exactly where in the code the problem starts. Then you can read the docs to make sure you used firebase or JS correctly in the code just before the problem starts. If you are still stuck, then you can ask for help. If you don't know exactly where the problem starts and you ask for help, you are asking whoever helps you to do basic, junior-level debugging for you, and that will make you look bad or like you can't do basic programming. So, always you should be able to find out exactly where the problem is so that you always have good, hard questions to ask teammates or the lead.



*/
