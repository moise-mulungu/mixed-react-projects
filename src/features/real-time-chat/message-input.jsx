import { useState, useContext, useEffect, useRef } from 'react'
import { UserContext } from './user/user-context-provider'
import { addDoc, collection, getDoc, getDocs, updateDoc, doc } from 'firebase/firestore'
import db from './firebase'
import { getAuth } from 'firebase/auth'
//(done) DM: don't import the entire lodash, just import the throttle function. This will reduce the size of the bundle.
import { throttle } from 'lodash' // for throttling

export default function MessageInput({ onSendMessage, onTyping }) {
  const [message, setMessage] = useState('')
  const [prevMessage, setPrevMessage] = useState('') // to store the previous message
  const typingTimeoutRef = useRef(null) // reference to store the timeout

  useEffect(() => {
    /*
    In order to update the senderName for the previous messages: 
    - I created functionality that would fetch all messages and update them with the senderName. DM: a script is something that runs standalone from the Linux command line.
    - I used the updateAllMessages function to update the senderName for all messages. 
    - I used the updatePromises array to hold all update promises. 
    - I used the userPromise to fetch the user associated with the message.
    But after all the above steps, the senderName for the previous messages was not updated.
    To resolve this issue, copilot suggest to check for the four points to check:

      1. Authentication: Ensure that the user is authenticated when trying to update the documents. If the user is not authenticated, the update operation will fail due to your Firestore rules. MM: for this issue, all users are authenticated, so i don't think this is the issue.

      2. Data Consistency: As mentioned before, ensure that the sender field in your messages collection correctly corresponds to a user ID in your users collection. If there's a mismatch or if a user document doesn't exist for a given sender ID, the senderName won't be updated. MM; the issue might be here, but i am not sure. DM: todoMM: how can you find out?
        MM: this also is no more needed as the issue was fixed.

      3. Error Handling: You've added error handling to your updateDoc function, which is great. Check your console to see if any errors are being logged when trying to update the documents. MM: I added the error handling, but i didn't see any errors in the console.

      4. Real-time Updates: If you're using Firestore's real-time updates feature to listen for changes to your messages collection, make sure that you're listening for modified events in addition to added events. This will ensure that your app reflects the updated senderName in real-time. MM: also for this there is no issue, i'm listening for modified events in addition to added events.
      
    */
    const updateAllMessages = async () => {
      // Fetch all messages
      const messagesSnapshot = await getDocs(collection(db, 'messages'))
      console.log('messages snapshot:', messagesSnapshot)
      // Prepare an array to hold all update promises
      const updatePromises = []

      // Loop over each message
      messagesSnapshot.docs.forEach((messageDoc) => {
        // Fetch the user associated with this message
        const userPromise = getDoc(doc(db, 'users', messageDoc.data().sender))

        // Add the update promise to the array
        updatePromises.push(
          userPromise.then(async (userSnapshot) => {
            if (userSnapshot.exists()) {
              // Update the message with the user's displayName
              return updateDoc(doc(db, 'messages', messageDoc.id), {
                senderName: userSnapshot.data().displayName,
              }).catch((error) => {
                console.error(`Failed to update document: ${messageDoc.id}`, error)
              })
            } else {
              console.warn(`User document not found for sender ID: ${messageDoc.data().sender}`)
            }
          })
        )
      })

      // Wait for all updates to complete
      await Promise.all(updatePromises)
    }

    updateAllMessages()
    if (message !== '') {
      onTyping(true)
    }
    return () => {
      //(done) DM: this is good thinking, but if the user types a little bit, then moves to a different tab to read the news or whatever, the typing status stays true for a long time, perhaps all day. See my other note on using a timeout to set the onTyping to false
      onTyping(false)
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current) // clear the timeout when the component unmounts
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const auth = getAuth()
    if (!auth.currentUser) {
      console.log('User is not authenticated')
      return
    }

    if (!user.user?.displayName) {
      //(done) DM: explore the user object in the browser console and find out where the displayName is. In general, always log variables so that you can inspect their contents.
      console.error('User or user.displayName is undefined', { user })
      // onAuthenticate(false)
      return
    }

    // Trim the message and check if it's empty
    const trimmedMessage = message.trim()
    if (trimmedMessage === '') {
      return
    }

    /*
    const currentDate = new Date();
    const messageDate = currentDate.toISOString().slice(0, 10); // Extract only the date part
    const messageTime = currentDate.toISOString().slice(11, 19); // Extract only the time part

    const messageObj = {
      text: message,
      sender: user.user.uid,
      senderName: user.user.displayName,
      timestamp: `${messageDate} ${messageTime}`, // Combining date and time
    };
    */

    const messageObj = {
      text: message,
      sender: user.user.uid, // Store the user's ID instead of the display name
      senderName: user.user.displayName,
      timestamp: Date.now(),
    }

    // await addDoc(collection(db, 'messages'), messageObj)
    const docRef = await addDoc(collection(db, 'messages'), messageObj)

    // Retrieve the document to get its id
    const docSnapshot = await getDoc(docRef)

    // Add the Firestore-generated id to the message object
    messageObj.id = docSnapshot.id
    onSendMessage(messageObj)
    setMessage('')
    // onAuthenticate(true)

    // DM: why repeat setMessage?
    setMessage('')
    onTyping(false)
  }

  /*
  the error: Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'indexOf'). this error was happening when i wanted to delete a specific message, but instead of deleting one message, all messages were deleted at once. in order to fix this i:
  1. tried to get a specific id for each message by using the getDoc that is used to retrieve the document after it's created
  2. used again compared the getDoc with addDoc
  3. after many attempts, i paused and would continue tomorrow.
  */

  const handleInputChange = (e) => {
    // console.log('Form submitted')
    setMessage(e.target.value)
    //(done) DM: assign the logical expression to a well-named variable that expresses exactly what it is.  to me it indicates whether there is text in the field or not. It does not tell you if the user is typing right now. This will help understand the code to distinguish between the two. I see what you're trying to do, it is ok, but keep the names clear and always assign logical expressions to variables with clear names. onTyping name is OK, but the logical expression is not clear.
    const isInputFieldNotEmpty = e.target.value !== ''
    //(done) DM: assign e.target.value !== prevMessage to a well-named variable, also. You can remove the comments on the next line if the variable names are clear.
    const isDifferentFromPreviousMessage = e.target.value !== prevMessage
    const isUserTypingNewContent = isInputFieldNotEmpty && isDifferentFromPreviousMessage // check if the user is typing new content

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current) // clear the previous timeout

    // set a new timeout
    typingTimeoutRef.current = setTimeout(() => {
      onTyping(false)
    }, 3000) // 3 seconds

    // throttle the onTyping function to only call it once every 3 seconds
    const throttledOnTyping = throttle(onTyping, 3000)
    throttledOnTyping(isUserTypingNewContent)
    // console.log('Is input field not empty:', isInputFieldNotEmpty) // Add this line
    // console.log('Is user typing:', isUserTypingNewContent) // Add this line
    // 1. try to debug why the animated typing dots are not showing up
    // console.log('Is input field not empty:', isUserTypingNewContent)
    onTyping(isUserTypingNewContent)
    setPrevMessage(e.target.value) // update the previous message
  }

  /*
  1. added a console.log to the onTyping function to check if the function is being called when the user is typing above. this part is working fine as the isInputFieldNotEmpty is being logged in the console to true when the user is typing and false when the user is not typing.
  2. added a console.log to the useEffect to check if the useEffect is being called when the user is typing above console.log('Typing users:', typingUsers) in the src/features/real-time-chat/index.jsx file. this doesn't show up in the console when the user is typing.
  3. to check if the The typing status might not be getting updated in the Realtime Database. You can check this by going to the Firebase Console, navigating to the Realtime Database section, and looking at the typing node while you're typing something into the input field.
    - Open your Firebase project in the Firebase Console. You can do this by navigating to the Firebase Console and clicking on your project.

    - In the left-hand menu, you should see a section labeled "Develop". Under this section, you'll find both "Cloud Firestore" and "Realtime Database".

    - Click on "Realtime Database". This will take you to the Realtime Database interface.

    - In the Realtime Database interface, you should see a tree-like structure representing your database. This is where you should be able to see the typing node.

  For this step, i couldn't see the typing node in the firebase Realtime Database tab suggested by the AI prompt. i would have to double check the code for the realtime database.

  (done)DM: OK First step is to get the isTyping status reflected in the database. The next step, read the following:
  So, I started typing this: "I see that you're sending setDatabaseValue(typingRef, isTyping) up on each keystroke." Then Copilot suggested this:
  "This is not what you want. You want to send it only when the user starts typing and when the user stops typing. You can do this by using a timer. When the user starts typing, you start a timer. When the user stops typing, you clear the timer. If the timer expires, then you send the typing status to the database. This is how you can avoid sending the typing status on each keystroke."
  DM: this is a good point. but it is not really clear. I would think of it this way:
  * on the first keystroke, you send typing=true to the databse, then you set a timer to expire in 3 seconds. when it it expires, you send typing=false to the database.
  * on the next keystroke, you clear the timer, then you send typing=true to the database, then you set a timer to expire in 3 seconds. when it it expires, it sends typing=false to the database.
  * this reliably records
  * you can also "throttle" (see "throttle vs debounce") the keystrokes to 3 seconds. This way you don't send a keystroke every time the user types a letter, but only every 3 seconds. This is a good idea because it reduces the number of writes to the database, which is good for performance and cost.

  */

  // DM: cool
  // ctrl + enter to send message and keep multiline
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit(e)
    }
  }

  const user = useContext(UserContext)
  console.log({ user })
  console.log(user.displayName)

  const rows = message.split('\n').length

  /* 
    DM: this all looks like a great start. I'm having trouble finding things to complain about! :) 
        suggestion: you are allowing multiline messages. do you want to do that? 
        suggestion: in either case, chat apps often let's you submit with the enter key. If multiline messages, then submit with ctrl-Enter is common.
        otherwise, keep going! looking great. MM: if i remove the multiline, users won't be able to send messages with line breaks. I think it's better to keep it as there is a send button. DM: exactly so, and with they c-Enter option, you have the best of both worlds (use doesn't have to grab mouse to send).
  */
  // verify if the onTyping function is being passed correctly as a prop to the MessageInput component
  // console.log('onTyping prop:', onTyping)
  // console.log('Is the user sending a message?:', user)
  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full border-t-2 border-purple-300 p-4">
      <textarea
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type your message here..."
        className="w-full flex-grow mb-4 p-2 rounded border-2 border-purple-500 resize-none"
        rows={rows}
      />
      <button type="submit" className="bg-green-500 text-white rounded p-2">
        Send
      </button>
    </form>
  )
}

/*

DM: this looks like there are not many changes from the original above. It is better to comment out in place, rather than copy the entire code then comment out the entire code here. The reason is I can't tell what the diff is from this commented out code and the original code above, so I can't see what you tried to do, so I can't help. MM: i separated the two for code error reason, the same for other files, but i'll place the comments in the original code.

*/

/*
In order to fix the animated typing dots, i:
  1. changed the firebase realtime database rules from :
    {
      "rules": {
        ".read": "auth != null",
        ".write": "auth != null"
      }
    }
    to:
    "rules": {
        "typing": {
          ".read": true,
          ".write": false
        }
      }
    }

  2. checked if there is a realtime function that handles the typing status. after checking i found the onTyping function in both RealTimeChat and MessageInput components is well written and should work fine.

  3. i added console.logs to check one function after the other. the onTyping function is being called when the user is typing, but the createDatabaseRef function is not being called when the user is typing. i tried to debug this issue, but i couldn't find the issue.

  4. after checking the firebase config file, the RealTimeChat and the MessageInput components, i couldn't find the issue. i am completely blocked and i don't know how to fix this issue. 
*/
