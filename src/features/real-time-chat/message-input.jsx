import { useState, useContext, useEffect } from 'react'
import { UserContext } from './user/user-context-provider'
import { addDoc, collection, getDoc, getDocs, updateDoc, doc } from 'firebase/firestore'
import db from './firebase'

export default function MessageInput({ onSendMessage, onTyping }) {
  const [message, setMessage] = useState('')

  useEffect(() => {
    /*
    In order to update the senderName for the previous messages: 
    - I created a script that would fetch all messages and update them with the senderName. 
    - I used the updateAllMessages function to update the senderName for all messages. 
    - I used the updatePromises array to hold all update promises. 
    - I used the userPromise to fetch the user associated with the message.
    But after all the above steps, the senderName for the previous messages was not updated.
    To resolve this issue, copilot suggest to check for the four points to check:

      1. Authentication: Ensure that the user is authenticated when trying to update the documents. If the user is not authenticated, the update operation will fail due to your Firestore rules. MM: for this issue, all users are authenticated, so i don't think this is the issue.

      2. Data Consistency: As mentioned before, ensure that the sender field in your messages collection correctly corresponds to a user ID in your users collection. If there's a mismatch or if a user document doesn't exist for a given sender ID, the senderName won't be updated. MM; the issue might be here, but i am not sure.

      3. Error Handling: You've added error handling to your updateDoc function, which is great. Check your console to see if any errors are being logged when trying to update the documents. MM: I added the error handling, but i didn't see any errors in the console.

      4. Real-time Updates: If you're using Firestore's real-time updates feature to listen for changes to your messages collection, make sure that you're listening for modified events in addition to added events. This will ensure that your app reflects the updated senderName in real-time. MM: also for this there is no issue, i'm listening for modified events in addition to added events.
      
    */
    const updateAllMessages = async () => {
      // Fetch all messages
      const messagesSnapshot = await getDocs(collection(db, 'messages'))

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
    return () => {
      onTyping(false)
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
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

    const messageObj = {
      text: message,
      sender: user.user.uid, // Store the user's ID instead of the display name
      senderName: user.user.displayName,
      timestamp: new Date().toISOString(),
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
  }

  /*
  the error: Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'indexOf'). this error was happening when i wanted to delete a specific message, but instead of deleting one message, all messages were deleted at once. in order to fix this i:
  1. tried to get a specific id for each message by using the getDoc that is used to retrieve the document after it's created
  2. used again compared the getDoc with addDoc
  3. after many attempts, i paused and would continue tomorrow.
  */

  const handleInputChange = (e) => {
    setMessage(e.target.value)
    onTyping(e.target.value !== '')
  }

  // DM: cool
  // ctrl + enter to send message and keep multiline
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit(e)
    }
  }

  const user = useContext(UserContext)
  // const sendMessage = async (message) => {
  //   try {
  //     await addDoc(collection(db, 'messages'), {
  //       text: message,
  //       createdAt: new Date().toISOString(),
  //       user: user.displayName, // Or any other property of the suer object
  //     })
  //   } catch (e) {
  //     console.error('Error adding document: ', e)
  //   }
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   sendMessage(message)
  // }

  const rows = message.split('\n').length

  /* 
    DM: this all looks like a great start. I'm having trouble finding things to complain about! :) 
        suggestion: you are allowing multiline messages. do you want to do that? 
        suggestion: in either case, chat apps often let's you submit with the enter key. If multiline messages, then submit with ctrl-Enter is common.
        otherwise, keep going! looking great. MM: if i remove the multiline, users won't be able to send messages with line breaks. I think it's better to keep it as there is a send button. DM: exactly so, and with they c-Enter option, you have the best of both worlds (use doesn't have to grab mouse to send).
  */

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
