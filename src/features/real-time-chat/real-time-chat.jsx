import { useState, useEffect, useContext } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import db, { database, auth } from './firebase'
import Header from './header'
import ChatBox from './chat-box'
import MessageInput from './message-input'
import Footer from './footer'
import User from './user'
import UserProfile from './user/user-profile'
import PrivateChatList from './private-chat/private-chat-list'
import PrivateChatWindow from './private-chat/private-chat-window'
import {
  ref as createDatabaseReference,
  onValue as listenToDatabaseValueChanges,
  set as setDatabaseValue,
  get as getDatabaseValue,
} from 'firebase/database'
import { serverTimestamp } from 'firebase/database'
import { UserContext } from './user/user-context-provider'
import { UsersContext } from './users-context-provider'
import { doc, getDoc, deleteDoc } from 'firebase/firestore'
import { FiLogOut } from 'react-icons/fi'

export default function RealTimeChat() {
  console.log('RealTimeChat Database object:', database)

  const [messages, setMessages] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [connectedUsers, setConnectedUsers] = useState([])
  const [typingUsers, setTypingUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [isProfileVisible, setProfileVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isActive, setIsActive] = useState(false)
  const [isPrivateChatActive, setPrivateChatActive] = useState(false)
  const [privateChatUser, setPrivateChatUser] = useState(null)

  const { user: currentUser } = useContext(UserContext)
  const { users, updateUserIsTyping, updateUserHasConnected } = useContext(UsersContext)
  console.log('RealTimeChat w of RealTimeChat:', { currentUser })
  console.log('connected users in the Array:', connectedUsers)
  console.log('RealTimeChat users:', users)

  const messagesCollection = collection(db, 'messages')

  useEffect(() => {
    if (currentUser) {
      onTyping(true)
    }
  }, [currentUser])

  useEffect(() => {
    if (currentUser) {
      onTyping(false)
    }
  }, [])

  // New function to handle typing status
  const onTyping = (isTyping) => {
    console.log('RealTimeChat onTyping function called with:', isTyping, {
      currentUserUid: currentUser?.uid,
      currentUser,
    })

    if (currentUser?.uid) {
      const typingRef = createDatabaseReference(database, `typing/${currentUser.uid}`)

      setDatabaseValue(typingRef, isTyping)
      setConnectedUsers((prevConnectedUsers) =>
        prevConnectedUsers.map((connectedUser) =>
          connectedUser.uid === currentUser.uid ? { ...connectedUser, isTyping } : connectedUser
        )
      )

      updateUserIsTyping(currentUser.uid, isTyping)
    }
  }

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'))
    const unsubscribeFirestore = onSnapshot(q, async (snapshot) => {
      const messages = []

      snapshot.forEach((doc) => {
        messages.push({ id: doc.id, ...doc.data() })
      })
      setMessages(messages)
    })

    const unsubscribeDatabaseListeners = users.map((user) => {
      console.log('RealTimeChat connectedUsers.map user:', user)
      if (!user) {
        console.error('User is undefined')
        return
      }
      const userStatusRef = createDatabaseReference(database, 'status/' + user.uid)

      return listenToDatabaseValueChanges(userStatusRef, (snapshot) => {
        const status = snapshot.val()
        if (status) {
          console.log('RealTimeChat User status:', { user, status })
        }
      })
    })

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
  }, [connectedUsers])

  const onSendMessage = (message) => {
    // console.log({ message })

    setMessages((previousMessages) => [...previousMessages, message])
  }

  const receiveMessages = (currentUser, privateChatUser, setMessages) => {
    const q = query(
      messagesCollection,
      where('sender', 'in', [currentUser.uid, privateChatUser.uid]),
      where('receiver', 'in', [currentUser.uid, privateChatUser.uid]),
      orderBy('timestamp', 'asc')
    )

    return onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => doc.data())
      setMessages(messages)
    })
  }

  useEffect(() => {
    if (currentUser && privateChatUser) {
      const unsubscribe = receiveMessages(currentUser, privateChatUser, setMessages)
      return unsubscribe
    }
  }, [currentUser, privateChatUser])

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

  useEffect(() => {
    const usersStatusReference = createDatabaseReference(database, 'status')

    const stopListeningToStatusChanges = listenToDatabaseValueChanges(
      usersStatusReference, // DM: 3. this database reference must not contain the displayName
      (snapshot) => {
        console.log(
          'RealTimeChat useEffect deps [] userStatusChanges listener fired:',
          snapshot.val()
        )

        const userPromises = []
        snapshot.forEach((childSnapshot) => {
          const userStatus = childSnapshot.val()
          console.log('RealTimeChat useEffect deps [] userStatusChanges userStatus:', {
            userStatusDisplayName: userStatus.displayName,
            userStatusUid: userStatus.uid,
            userStatusState: userStatus.state,
            userStatus,
            childSnapshot,
            childSnapshotKey: childSnapshot.key,
          })
          //(done) DM: see the "..." it's telling you to use a guard clause here, do so
          if (userStatus.state !== 'online') {
            return
          }

          const userReference = createDatabaseReference(database, 'users/' + childSnapshot.key)
          const userPromise = getDatabaseValue(userReference).then((userSnapshot) => {
            const user = userSnapshot.val()

            console.log(`Fetched user data: ${JSON.stringify(user)}`)
            return {
              uid: childSnapshot.key,
              displayName: user?.displayName,
              ...userStatus,
            }
          })
          userPromises.push(userPromise)
        })

        Promise.all(userPromises).then((updatedUsers) => {
          const uniqueUsers = Array.from(new Set(updatedUsers.map((user) => user.uid))).map(
            (uid) => {
              return updatedUsers.find((user) => user.uid === uid)
            }
          )
          console.log(
            'RealTimeChat useEffect deps [] userStatusChanges about to setConnectedUsers():',
            uniqueUsers
          )
          //4. This updates the state of the component with the updated user data.
          setConnectedUsers(uniqueUsers)
        })
      }
    )

    //5. at the end is a cleanup function that removes the listener when the component unmounts.
    return () => stopListeningToStatusChanges()
  }, [])

  useEffect(() => {

  }, [connectedUsers])

  const handleUserConnect = (user) => {
    console.log('handleUserConnect called with user:', user)
    const userStatusDatabaseRef = createDatabaseReference(database, 'status/' + user.uid)

    setDatabaseValue(userStatusDatabaseRef, {
      state: 'online',
      last_changed: serverTimestamp(),
      displayName: user.displayName, // Add the displayName here,
    })

    // Update the connectedUsers and users arrays
    setConnectedUsers((prevConnectedUsers) => [...prevConnectedUsers, user])
    // setUsers((prevUsers) => [...prevUsers, user])

    // Use the updateUserHasConnected function from the context to update the users array
    updateUserHasConnected(user)

    setIsAuthenticated(true)
    setIsActive(true)
  }

  const handleUserDisconnect = (user) => {
    return new Promise((resolve, reject) => {
      console.log('handleUserDisconnect called with user:', user)
      const userStatusDatabaseRef = createDatabaseReference(database, 'status/' + user.uid)

      setDatabaseValue(userStatusDatabaseRef, {
        state: 'offline',
        last_changed: serverTimestamp(),
        displayName: user.displayName,
      })
        .then(() => {
          // Remove the user from the connectedUsers array
          setConnectedUsers((prevConnectedUsers) =>
            prevConnectedUsers.filter((u) => u.uid !== user.uid)
          )

          setIsAuthenticated(false)
          setIsActive(false)
          resolve()
        })
        .catch((error) => {
          console.error('Error disconnecting user: ', error)
          reject(error)
        })
    })
  }

  const onAuthenticate = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated)
  }

  const handleSignOut = async () => {
    try {
      await handleUserDisconnect(currentUser)
      await auth.signOut()
      console.log('User signed out')
      setIsActive(false)
    } catch (error) {
      console.error('Error signing out: ', error)
    }
  }

  // console.log('connected users array in RealTimeChat', users)
  useEffect(() => {
    console.log(selectedUser)
  }, [selectedUser])

  // Functions for handling private chat
  const startPrivateChat = (user) => {
    console.log('startPrivateChat called with user:', user)
    setPrivateChatUser(user)
    setPrivateChatActive(true)
  }

  const closePrivateChat = () => {
    console.log('closePrivateChat called')
    setPrivateChatUser(null)
    setPrivateChatActive(false)
  }

  return (
    <>
      {!isAuthenticated && (
        <User handleUserConnect={handleUserConnect} onAuthenticate={onAuthenticate} />
      )}
      {isAuthenticated && (
        <div className="flex flex-col h-screen bg-gray-100 mx-2 md:mx-0">
          <Header className="h-10 md:h-10" />
          {isProfileVisible ? (
            <UserProfile
              setSelectedUser={setSelectedUser}
              selectedUser={selectedUser}
              setProfileVisible={setProfileVisible}
              isActive={isActive}
            />
          ) : isPrivateChatActive ? (
            <PrivateChatWindow
              currentUser={currentUser}
              privateChatUser={privateChatUser}
              closePrivateChat={closePrivateChat}
            />
          ) : (
            <div className="flex-1">
              <div className="flex flex-col md:flex-row flex-grow h-full md:h-full">
                <div className="flex flex-col flex-grow md:w-1/3 border-r-2 border-gray-200">
                  <ChatBox
                    messages={messages}
                    deleteMessage={deleteMessage}
                    currentUser={currentUser}
                  />
                </div>

                <div className="flex flex-col flex-grow md:w-1/3 border-r-2 border-gray-200">
                  <div className="flex flex-col h-full">
                    <div className="flex-grow">
                      <h2 className="text-gray-100 bg-purple-500 p-2 rounded text-xl font-bold text-center mb-4">
                        Connected Users
                      </h2>

                      {connectedUsers.map((user) => {
                        console.log('RealTimeChat connectedUsers.map user:', user)
                        const formattedDisplayName =
                          user?.displayName &&
                          user?.displayName[0].toUpperCase() + user?.displayName.slice(1)

                        {
                        }
                        console.log('RealTimeChat real-time-chat/index.jsx ', {
                          user,

                          typeofUserDisplayname: typeof user?.displayName, 
                          userDisplayname: user?.displayName, // this outputs the current connected user
                          userUid: user?.uid, // DM: 1b. this looks correct
                          users, // DM: so I can see what is in connectedUsers
                        })
                        if (!user) {
                          console.error('User is undefined')
                          return
                        }

                        const isTyping = typingUsers.includes(user.uid)

                        return (
                          <div
                            key={user?.uid}
                            className="flex justify-between items-center text-gray-500 p-2 rounded mt-4 mb-4 shadow-md cursor-pointer"
                            onClick={() => {
                              console.log('Clicked user:', user)
                              if (user.uid == currentUser.uid) {
                                console.log('Selected user:', user)

                                setSelectedUser(user)

                                setProfileVisible(true)
                              }
                            }}
                            // onClick={() => handleUserClick(user)}
                          >
                            <div className="flex items-center">
                              <img
                                src={user?.photoURL ? user.photoURL : '/user-avatar.jpg'}
                                alt="User Profile"
                                className="w-10 h-10 rounded-full cursor-pointer mr-2"
                                // onClick={() => handleUserClick(user)}
                              />
                              <span className="hover:text-purple-500 transition-colors duration-200">
                                {/* user?.uid is showing up, but not the user?.displayName */}

                                {formattedDisplayName || user?.uid}
                              </span>
                              <span className="ml-2 h-2 w-2 bg-green-500 rounded-full" />
                            </div>

                            {isTyping && (
                              <span className="ml-2 animate-pulse text-2xl text-blue-500 flex-shrink-0">
                                ...
                              </span>
                            )}

                            {user.uid === currentUser.uid && (
                              <div className="flex items-center">
                                <FiLogOut
                                  onClick={handleSignOut}
                                  className="cursor-pointer text-red-500 hover:text-red-700 mr-1"
                                  size={24}
                                />
                                <span className="text-xs text-red-500 mt-0.5">Sign Out</span>
                              </div>
                            )}
                          </div>
                        )
                      })}
                      <PrivateChatList
                        currentUser={currentUser}
                        users={users}
                        startPrivateChat={startPrivateChat}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-grow md:w-1/3 border-r-2 border-gray-200">
                  <MessageInput
                    onSendMessage={onSendMessage}
                    onTyping={(isTyping) => onTyping(isTyping)}
                  />
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
In order to fix on the same issue of the same user instance in the connected users array, and to display the user's display name in the connected users list, I:
  1. displayName not showing up: i tried to set a condition in the jsx if not formattedDisplayName, then display the user's uid, the user uid displays but not the displayName. i realized that the problem is not with the jsx, but with the user object that doesn't get updated in the firebase database node status. 
  2. Investigated the useEffect that populates the connectedUsers array: i looked for the useEffect that populates the connectedUsers array and found that it's the useEffect that listens to changes in the status node of the database. so i added some console.log in the code and added some promises to fetch the user data from the users node in the database. i found that the user object is not updated in the database. here is the AI prompt that i used to get the updated code: can you fix the comment from the connectedUsers.map in the jsx(i provided the code that includes the DM: todoMMs and the useEffect that populates the connected users)
  
    * DM: please put in quotes the exact AI prompt. I can't tell if you're describing what you asked AI or if that is exactly what you sent. In any case, going forward show me exactly what you asked AI, not a description of it. MM: i put details below 
  
  3. debugging one element after the other: i removed unnecessary comments and kept the connected users related ones, i also added new console.logs for each value of the useEffect.

After all of these steps, the issue is not fixed yet. nor the displayName is showing up in the connected users list, nor the user object is updated in the database.
* DM: todoMM: where is it broken?

  1. User Object Update in Firebase Database: The user object is not getting updated in the Firebase database node status. This is causing the displayName not to show up as expected. The issue seems to be with the database update operation rather than the JSX rendering.

  2. useEffect Hook: The useEffect hook that populates the connectedUsers array seems to be not functioning as expected. Despite adding console logs and promises to fetch user data from the users node in the database, the user object is not updated in the database. This could be due to the way the useEffect hook is set up or how the database read/write operations are performed.
*/

/*
To fix the isTyping issue, i realized that both connectedUsers and users were out of sync, to fix that i should update both arrays  when a user starts or stops typing, should update the typingUsers array and the corresponding user in the connectedUsers and users arrays.:
1. handleUserConnect() function: i updated the corresponding user in the connectedUsers and users arrays 
2. onTyping() function: i updated onTyping functions to also update the connectedUsers and users arrays in your local state.
3. after that, i encountered an error: ReferenceError: setUsers is not defined, which means that the function setUsers is not defined in the scope where it's being used because users is coming from a context and not a local state.
4. UsersContextProvider: to fix the above issue as i couldn't directly modify it using a setter function like setUsers. Instead, i needed to provide a method in the context to update the users array. i created two functions one is updateUserIsTyping to pass to the updateUserIsTyping function and updateUserHasConnected to pass to the handleUserConnect function.
5. i got the two functions from the context and used them to update the users array in the local state.
6. i tested the app, unfortunately, the isTyping was not updated, i checked the fetchUsers function and the useEffect that populates the connectedUsers array, i found that the user object is not updated in the firebase database node status.
7. in order to updated the user isActive status, i added conditions to check for the user's status in the function
8. i tested and the issue ws fixed.
*/

/*
To display the displayName using connectedUsers.map, i:
  1. investigated the connected-users list on the browser to find where the data was coming from
  2. checked in the firebase console, and found that data was coming from the firebase/realtime database not from the firebase/firestore database
  3. compared the two firebase databases and realized that firebase/firestore database uses documents that are stored in collections, meanwhile Firebase/realtime database stores data as one large JSON tree.
  4. opened the realtime database where i found the status JSON tree, expanded it and found it has only two fields; state, and last_changed.
  5. checked in the real-time-chat.jsx file to find out where that json-like tree was created. i found it was created inside the handleUserConnect() function
  6. in the handleUserConnect() function, i added a new field "displayName" with the value of "user.displayName"
  7. refreshed the page, and the problem was solved, all the connected users were showing up with their displayName.
  8. tried to update the user profile, later an error appeared on the screen: TypeError: change.doc.previousData is not a function Source
  9. fixed the error by replacing 'change.doc.previousData().isActive' with 'change.previous.data().isActive' code in the src/features/real-time-chat/users-context-provider/fetch-users.js file
  10. fixed another error: TypeError: Cannot read properties of undefined (reading 'data') where change.previous is undefined in the fetchUsers function in the src/features/real-time-chat/users-context-provider/fetch-users.js file as the Firestore client SDK does not provide a direct way to access the previous data before a change, so i need to manually keep track of the previous state by comparing the current data with the previous data.
  11. tested the http://localhost:3005/real-time-chat-page/test-users-2 page, and all data were successfully showing on the browser.
  
*/

/*
After fixing the users displayName issue, i realized that if click on the my user displayName to open the user-profile, the user-profile is not showing up, but it opens when i click on other users. To fix that, i:
  1. checked the onClick event in the connectedUsers.map, and found that the onClick event is only triggered when the user.uid is not equal to the currentUser.uid
  2. added a condition to check if the user.uid is equal to the currentUser.uid, then set the profileVisible to true
  3. tested the app, and the problem was fixed.

Another issue that i encountered is that the user is still listed in the connectedUsers array even after signing out. i wanted to list only the users who are currently online. To fix that, i:
  1. checked in the real-time-chat.jsx file where the state of the user is updated, and found that the user status is updated in the handleUserConnect() function
  2. created a new function handleUserDisconnect() to update the user status to offline when the user signs out
  3. checked the status in the firebase console, and found that the user status is updated to offline when the user signs out
  4. called the handleUserDisconnect() function in the handleSignOut() function
  5. tested the app, but when i sign out, the browser was crashed. i checked the console and found an error: TypeError: Cannot read properties of undefined (reading 'then')
  6. fixed the error by returning a new Promise in the handleUserDisconnect() function and made a handleSignOut() function async
  7. tested the app by connecting two different users in two different browsers, and signed out from one of them, and the user was removed from the connectedUsers array.
*/
