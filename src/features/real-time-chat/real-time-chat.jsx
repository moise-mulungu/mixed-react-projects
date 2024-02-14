import { useState, useEffect, useContext } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import db, { database, auth } from './firebase'
import Header from './header'
import ChatBox from './chat-box'
import MessageInput from './message-input'
import Footer from './footer'
import User from './user'
import UserProfile from './user/user-profile'

import {
  ref as createDatabaseReference,
  onValue as listenToDatabaseValueChanges,
  set as setDatabaseValue,
  get as getDatabaseValue,
} from 'firebase/database'
import { serverTimestamp } from 'firebase/database'
import { UserContext } from './user/user-context-provider'
import { doc, getDoc, deleteDoc } from 'firebase/firestore'
import { FiLogOut } from 'react-icons/fi'

export default function RealTimeChat() {
  // console.log('RealTimeChat component rendered')

  console.log('RealTimeChat Database object:', database) // to check the database object is available to the RealTimeChat component

  const [messages, setMessages] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [connectedUsers, setConnectedUsers] = useState([])
  const [typingUsers, setTypingUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [isProfileVisible, setProfileVisible] = useState(false)
  const [loading, setLoading] = useState(true)

  const { user: currentUser } = useContext(UserContext)
  console.log('RealTimeChat w of RealTimeChat:', { currentUser })
  console.log('connected users in the Array:', connectedUsers)

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
    })

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

      snapshot.forEach((doc) => {
        messages.push({ id: doc.id, ...doc.data() })
      })
      setMessages(messages)
    })

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
          console.log('RealTimeChat User status:', { user, status })
        }
      })
    })
    // DM: Im putting the deleted console.logs back and commenting them instead. Best to leave the console.logs there in case you need them again, unless you are completely sure that it is not a valid console.log. ;console.logs take time to write properly, so useful to keep them around instead of deleting. MM: ok, i see.
    // console.log('RealTimeChat Database object:', database) // Add this line
    // New subscription for typing status
    const typingRef = createDatabaseReference(database, 'typing')
    // console.log('RealTimeChat Typing reference:', typingRef) // Add this line
    const unsubscribeTyping = listenToDatabaseValueChanges(typingRef, (snapshot) => {
      const typingUsers = []
      snapshot.forEach((childSnapshot) => {
        if (childSnapshot.val() === true) {
          typingUsers.push(childSnapshot.key)
        }
      })
      //2. check the typingUsers value
      // console.log('RealTimeChat Updated typingUsers state:', typingUsers) // to check the typingUsers value
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

    setMessages((previousMessages) => [...previousMessages, message])
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

  useEffect(() => {
    const usersStatusReference = createDatabaseReference(database, 'status')

    // DM: search console on "RealTimeChat useEffect deps []" to see only the comments from this useEffect
    console.log('RealTimeChat useEffect deps [] triggered')
    console.log('Created reference to status node in database', usersStatusReference)

    const stopListeningToStatusChanges =
      //1. This function sets up a listener to the 'status' node in the database. When a change is detected, it triggers the callback function, passing in a snapshot of the updated data. DM: good description
      listenToDatabaseValueChanges(
        usersStatusReference, // DM: 3. this database reference must not contain the displayName
        (snapshot) => {
          console.log(
            'RealTimeChat useEffect deps [] userStatusChanges listener fired:',
            snapshot.val()
          )

          // const updatedUsers = []
          const userPromises = []
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
            //(done) DM: todoMM: see the "..." it's telling you to use a guard clause here, do so
            if (userStatus.state !== 'online') {
              return
            }
            // const isUserAlreadyConnected =
            //   updatedUsers && updatedUsers.some((user) => user && user.uid === childSnapshot.key)

            const userReference = createDatabaseReference(database, 'users/' + childSnapshot.key)
            const userPromise =
              //2. For each child in the snapshot, if the user's status is 'online', it fetches the user's data from the 'users' node in the database. This returns a promise, which is pushed into the userPromises array
              getDatabaseValue(userReference).then((userSnapshot) => {
                // DM: todoMM: is this code correct? user does nto contain display name. find out why. look into firebase and check that your code in the above 3 lines is correct. does displayName exist in firebase. if so, why does your query here not return it? You have known for many days that your problem is already identifiable already here, so how could it help of you debug further below? Find the first place in the code where the problem exists (no display name) and debug the code just before that.
                const user = userSnapshot.val()
                //(done) DM: todoMM: are you sure this works? I don't see any console.logs. If you used console.logs to validate isUserAlreadyConnected and userStatus.state, don't delete them, but comment them out so that I or you can use them in the future and also so that I know what you have already tried to debug this area. MM: i mentioned in the report file that the same user is till repeated many times in the connectedUsers array despite attempts to debug the code. DM: fine but you still need console.logs and detailed items should be here commented in the code not in the daily report. In any case "there is one only user listed many times on the list" is a general comment - how am I supposed to know where in the code that is? Ok to repeat things in code comments, but my main concern was no console.logs here which is obviously where in the code the issue is found.
                // DM: todoMM: please follow my pattern by putting both variables in the same comment using an object for the 2nd console.log argument, because your console has so many logs it is hard to read. Also put searchable detail and context into the first log argument example:
                // console.log(
                //   'RealTimeChat useEffect deps [] userStatusChanges userStatusState===online:',
                //   {
                //     isUserAlreadyConnected,
                //     userStatusState: userStatus.state,
                //     userStatus,
                //     updatedUsers,
                //   }
                // )
                console.log('RealTimeChat useEffect deps [] userStatusChanges userReference:', {
                  userSnapshot,
                  user, // DM: this is undefined
                  userStatus,
                  childSnapshotKey: childSnapshot.key,
                  childSnapshot,
                })
                console.log(`Fetched user data: ${JSON.stringify(user)}`)
                return {
                  uid: childSnapshot.key,
                  displayName: user?.displayName,
                  ...userStatus,
                }
              })
            userPromises.push(userPromise)
          })
          //3. This waits for all the promises in the userPromises array to resolve. When they do, it triggers the callback function, passing in an array of the resolved values (i.e., the updated user data).
          Promise.all(userPromises).then((updatedUsers) => {
            // DM: this is going to show you the same info that is in the .then() block. Your problem is above in the database queries.
            console.log(`Updated users: ${JSON.stringify(updatedUsers)}`)
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

    setConnectedUsers((previousUsers) => {
      console.log('RealTimeChat handleUserConnect previousUsers:', { previousUsers, user })
      // DM: todoMM: you call SetConnectedUsers in 2 places. IN this place, you add user, which is not the same as what you are adding in the other place you call it. Here, user.displayName is not undefined. In the other place, displayName is undefined. also remember, this runs only once, for the current user, so you should see only 1 user in the console.log.
      // const updatedUsers = [user, ...previousUsers.filter((u) => u.uid !== user.uid)]
      const updatedUsers = [...previousUsers.filter((u) => u.uid !== user.uid), user]

      return updatedUsers
    })
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
            />
          ) : (
            <div className="flex-1">
              <div className="flex flex-col md:flex-row flex-grow h-full md:h-full">
                <div className="flex flex-col flex-grow md:w-1/3 border-r-2 border-gray-200">
                  <ChatBox
                    fetchUser={fetchUser}
                    messages={[...messages]}
                    deleteMessage={deleteMessage}
                    currentUser={currentUser}
                  />
                </div>
                <div className="flex flex-col flex-grow md:w-1/3 border-r-2 border-gray-200">
                  <MessageInput
                    onSendMessage={onSendMessage}
                    onTyping={(isTyping) => onTyping(isTyping)}
                  />
                </div>
                <div className="flex flex-col flex-grow md:w-1/3 border-r-2 border-gray-200">
                  <div className="flex flex-col h-full">
                    <div className="flex-grow">
                      <h2 className="text-gray-100 bg-purple-500 p-2 rounded text-xl font-bold text-center mb-4">
                        Connected Users
                      </h2>

                      {console.log('connected users array in RealTimeChat', connectedUsers) ||
                        connectedUsers.map((user) => {
                          const formattedDisplayName =
                            user?.displayName &&
                            user?.displayName[0].toUpperCase() + user?.displayName.slice(1)

                          console.log('Formatted Display Name:', formattedDisplayName) // log the formattedDisplayName
                          console.log('RealTimeChat Formatted display name:', formattedDisplayName)
                          {
                            /* // DM: apparently, right now, I see 4 users in the console. So, 4 is the expected number of users, this may be correct, but the code populating connectedUsers may simply need to be fixed so that it doesn't have undefined user.displayName. So, go back to where the connectedUsers array is populated and check that code. MM: the issue is why the same user is repeatedly listed many times in the connectedUsers array, to fix that i: 1. tried to add a condition to check if the user is already in the connectedUsers array, so not to add it again, 2. was to keep only the useEffect to add the user to the connectedUsers but not the onConnect function, and 3. was on the nSendMessage when a message is sent, you are adding the sender to the connectedUsers state. This is why you see the same user multiple times when a user sends multiple messages. all of the three steps lead to no changes in the connectedUsers array. DM: but how come among the users, I don"t see any user other than the current user when I click on the users to see user profile. They are all me. MM: yesterday i mentioned that the issue is not fixed yet. DM: I know, but my point was the same current users is in each row. It is a clue for you. */
                          }
                          console.log('RealTimeChat real-time-chat/index.jsx ', {
                            user,

                            typeofUserDisplayname: typeof user?.displayName, // DM: 1a. this is undefined. MM:i checked and found  the output is a "string" not undefined
                            userDisplayname: user?.displayName, // this outputs the current connected user
                            userUid: user?.uid, // DM: 1b. this looks correct
                            connectedUsers, // DM: so I can see what is in connectedUsers
                          })
                          if (!user) {
                            console.error('User is undefined')
                            return
                          }

                          const isTyping = typingUsers.includes(user.uid)

                          console.log('User:', user)
                          console.log('User Display Name:', user?.displayName)

                          return (
                            <div
                              key={user?.uid}
                              className="flex justify-between items-center text-gray-500 p-2 rounded mt-4 mb-4 shadow-md cursor-pointer"
                              onClick={() => {
                                console.log('connectedUser clicked', { user, currentUser })
                                if (user.uid !== currentUser.uid) {
                                  console.log(
                                    'connectedUser clicked and user.uid !== currentUser.uid',
                                    { user, currentUser }
                                  )
                                  setSelectedUser(user)

                                  setProfileVisible(true)
                                }
                              }}
                            >
                              <div className="flex items-center">
                                {/* {console.log(
                                  'RealTimeChat xxx formatted display name:',
                                  formattedDisplayName
                                ) || null} */}
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
the jsx code that includes the DM: todoMMs: 
 {console.log('connected users array in RealTimeChat', connectedUsers) ||
                        connectedUsers.map((user) => {
                          const formattedDisplayName =
                            user?.displayName &&
                            user?.displayName[0].toUpperCase() + user?.displayName.slice(1)

                          console.log('Formatted Display Name:', formattedDisplayName) // log the formattedDisplayName
                          console.log('RealTimeChat Formatted display name:', formattedDisplayName)
                          {
                            /* // DM: apparently, right now, I see 4 users in the console. So, 4 is the expected number of users, this may be correct, but the code populating connectedUsers may simply need to be fixed so that it doesn't have undefined user.displayName. So, go back to where the connectedUsers array is populated and check that code. MM: the issue is why the same user is repeatedly listed many times in the connectedUsers array, to fix that i: 1. tried to add a condition to check if the user is already in the connectedUsers array, so not to add it again, 2. was to keep only the useEffect to add the user to the connectedUsers but not the onConnect function, and 3. was on the nSendMessage when a message is sent, you are adding the sender to the connectedUsers state. This is why you see the same user multiple times when a user sends multiple messages. all of the three steps lead to no changes in the connectedUsers array. DM: but how come among the users, I don"t see any user other than the current user when I click on the users to see user profile. They are all me. MM: yesterday i mentioned that the issue is not fixed yet. DM: I know, but my point was the same current users is in each row. It is a clue for you. */
//   }
//   console.log('RealTimeChat real-time-chat/index.jsx ', {
//     user,

//     typeofUserDisplayname: typeof user?.displayName, // DM: 1a. this is undefined. MM:i checked and found  the output is a "string" not undefined
//     userDisplayname: user?.displayName, // this outputs the current connected user
//     userUid: user?.uid, // DM: 1b. this looks correct
//     connectedUsers, // DM: so I can see what is in connectedUsers
//   })
//   if (!user) {
//     console.error('User is undefined')
//     return
//   }

//   const isTyping = typingUsers.includes(user.uid)

//   console.log('User:', user)
//   console.log('User Display Name:', user?.displayName)

//   return (
//     <div
//       key={user?.uid}
//       className="flex justify-between items-center text-gray-500 p-2 rounded mt-4 mb-4 shadow-md cursor-pointer"
//       onClick={() => {
//         console.log('connectedUser clicked', { user, currentUser })
//         if (user.uid !== currentUser.uid) {
//           console.log(
//             'connectedUser clicked and user.uid !== currentUser.uid',
//             { user, currentUser }
//           )
//           setSelectedUser(user)

//           setProfileVisible(true)
//         }
//       }}
//     >
//       <div className="flex items-center">
//         {/* {console.log(
//           'RealTimeChat xxx formatted display name:',
//           formattedDisplayName
//         ) || null} */}
//         <span className="hover:text-purple-500 transition-colors duration-200">
//           {/* user?.uid is showing up, but not the user?.displayName */}
//           {formattedDisplayName || user?.uid}
//         </span>
//         <span className="ml-2 h-2 w-2 bg-green-500 rounded-full" />
//       </div>

//       {isTyping && (
//         <span className="ml-2 animate-pulse text-2xl text-blue-500 flex-shrink-0">
//           ...
//         </span>
//       )}
//       <div className="flex items-center">
//         <FiLogOut
//           onClick={handleSignOut}
//           className="cursor-pointer text-red-500 hover:text-red-700 mr-1"
//           size={24}
//         />
//         <span className="text-xs text-red-500 mt-0.5">Sign Out</span>
//       </div>
//     </div>
//   )
// })}
/*the useEffect that populates the connected users:

useEffect(() => {
  const usersStatusReference = createDatabaseReference(database, 'status')

  // DM: search console on "RealTimeChat useEffect deps []" to see only the comments from this useEffect
  console.log('RealTimeChat useEffect deps [] triggered')

  const stopListeningToStatusChanges = listenToDatabaseValueChanges(
    usersStatusReference, // DM: 3. this database reference must not contain the displayName
    (snapshot) => {
      console.log('RealTimeChat useEffect deps [] userStatusChanges:', snapshot.val())

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
        if (userStatus.state === 'online') {
          const isUserAlreadyConnected =
            updatedUsers && updatedUsers.some((user) => user && user.uid === childSnapshot.key)

          console.log(
            'RealTimeChat useEffect deps [] userStatusChanges userStatusState===online:',
            {
              isUserAlreadyConnected,
              userStatusState: userStatus.state,
              userStatus,
              updatedUsers,
            }
          )

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
*/
