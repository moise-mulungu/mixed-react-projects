import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { usersCollection } from './firebase'
import { onSnapshot } from 'firebase/firestore'
import db from './firebase'
// import { getDoc, doc } from 'firebase/firestore'

export default function ChatBox({ messages, deleteMessage, fetchUser }) {
  console.log('messages:', typeof messages)

  const [userData, setUserData] = useState({})

  useEffect(() => {
    // let unsubscribe
    // Guard clause to handle when db is not defined
    if (!db) return
    //(done) DM: rename all the variables in this useEffect and perhaps senderData, setSenderData to reflect exactly/specifically what is being stored.
    // DM: todoMM: you are fetching, but the ultimate purpose of this function is to setAllUserData, correct?
    const fetchAllUserData = async () => {
      //(done) DM: write a comment to explain what/why this code
      // The fetchAllUserData function fetches the user data for each sender of the messages and stores it in the userData state. This data is then used to display the sender's information for each message. DM: good
      const uniqueSenders = [...new Set(messages.map((message) => message.sender))]
      const newUserData = {}
      for (const sender of uniqueSenders) {
        //(done) DM: todoMM: careful of expensive operations inside a loop. what if there are 200 messages? You can't fetch the user for each message. One solution is to, inside this loop, get a list of unique message.sender, then after the loop, call fetchUser for each unique sender(id).
        newUserData[sender] = await fetchUser(sender)
      }
      setUserData(newUserData)
    }
    // DM: another solution is to have firestore "push" the latest user info to you when user info is changed by user, or, if that is not possible, every 5 minutes or so. Or, you could "pull" every 5 minutes by using setInterval to query the DB for latest user info ("pull" might configurable in firebase, so be sure to query Google/AI for your top-level goal "how do I avoid user data getting stale over time?")
    // const unsubscribe = db.collection('users').onSnapshot((snapshot) => {
    //   const newUserData = {}
    //   snapshot.docs.forEach((doc) => {
    //     newUserData[doc.id] = doc.data()
    //   })
    //   setUserData(newUserData)
    // })
    //(done) DM: todoMM: use a guard clause at the beginning of the useEffect to handle when !db. That way you don't have to use `let unsubscribe` and `unsubscribe && unsubscribe()`. Following the rule to avoid `let` whenever possible will help you write better code.
    // if (db) {
    const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
      //(done) DM: I'm seeing an error when I change my display name, I think it is here. Put a try-catch around the code in this callback so you can know for sure where the error is happening.
      try {
        console.log('onSnapshot callback invoked', { snapshot })
        const newUserData = {}
        snapshot.docs.forEach((doc) => {
          console.log('onSnapshot callback invoked', { doc, docData: doc.data() })
          newUserData[doc.id] = doc.data()
        })
        setUserData(newUserData)
      } catch (error) {
        console.error('Error in onSnapshot callback:', error)
      }
    })

    fetchAllUserData()
    // }
    // MM: i am facing this error : TypeError: Cannot read properties of undefined (reading 'collection'). but i'll work on it next time. DM: what does this comment refer to? I see fetchAllUserData above and below this comment line.

    // fetchAllUserData()
    //
    return () => {
      //(done) DM todoMM: keep in mind this cleanup function will be called every time one of the dependencies changes. Do you want to unsubscribe each time the messages variable changes?

      unsubscribe()
    }
  }, [messages, fetchUser, db])

  return (
    <div className="flex-grow overflow-auto rounded p-4 bg-purple-500 text-white">
      {messages?.map((message, index) => {
        // const sender = userData[message.sender]?.displayName || message.sender
        const sender = message.senderName || message.sender // MM: I use this because the sender property of the message object is being set to user.displayName in the MessageInput component. This user object is obtained from the UserContext using the useContext hook.
        console.log({ sender })
        console.log('sender type:', typeof message.sender)
        console.log('text type:', typeof message.text)
        console.log('timestamp type:', typeof message.timestamp)
        // dm: where is the property sender in the message object: MM: the sender property of the message object is being set to user.displayName in the MessageInput component. This user object is obtained from the UserContext using the useContext hook.?
        console.log({ message, index })

        return (
          <div
            key={
              // ahem!(MM: In the context of code comments, "ahem!" is often used to draw attention to a particular piece of code. It's a way for the developer to say, "Pay attention to this," or "This might not be ideal, but it's necessary for now. is that the meaning you intended?) (done)DM: hehe, no "ahem!" means in this case: "take a look at this" and a friendly scolding, indicating "something's amiss here" - in this case implying that you'll remember you're not supposed to use index for a ReactJS key.
              message.timestamp // i used message.timestamp because timestamp records the exact date and time a message was sent. DM: good choice
            }
            className="mb-4 border-b-2 border-purple-300 p-2"
          >
            <div className="flex justify-between">
              <div>
                {/* <strong className="font-bold mr-2">{message?.sender}</strong>: {message?.text}{' '}
                <em className="text-sm text-purple-300">
                  {message?.timestamp ? new Date(message?.timestamp).toLocaleTimeString() : ''}
                </em> */}
                {/* Display the sender's display name */}
                <strong className="font-bold mr-2">{sender}</strong>: {message?.text}{' '}
                <em className="text-sm text-purple-300">
                  {message?.timestamp ? new Date(message?.timestamp).toLocaleTimeString() : ''}
                </em>
              </div>
              <button onClick={() => deleteMessage(message)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
/*

The error: Objects are not valid as a React child (found: object with keys {text, sender, timestamp, id}). If you meant to render a collection of children, use an array instead. was thrown when trying to send message, i searched for it in the react-errors.md file where it describes the process of :
1. check in the return statement of the JSX if there is a map function
2. converting an object into array with Object.entries() method
3. use array?.map() function to render if array is not null or undefined. If array is null or undefined, the expression will short-circuit and return undefined without throwing an error.
4. After all the above attempts nothing was found.
MM: i'll continue working on it tomorrow. DM: ok, good, keep going.
(done)DM: todoMM: please put this comment near the affected code because I don't know what code this applies to. It is frustrating because I have no idea what you're talking about! Be careful each time you add a comment like this that is is directly above the affected code. And, if instructions are necessary to reproduce the problem, then give those instructions. OK, no I assume this is no longer an issue. If you had put this message immediately/directly in the line above the affected code, when you later did the fix above, you would have realized that this comment was no longer relevant and you would have deleted it. So, please be careful to put comments directly above the affected code. It is extremely frustrating to try to figure out what happened of what I should do with this Git diff! MM: this issue is no more relevant, i already fixed the problem. i think the problem is the day i wrote the comment you didn't get time to review it, then the next day i fixed the problem and forgot to delete the comment. But it's talking about the code above. DM: ok, just reiterating that if you always put comments directly above the affected code, there will never be confusion like this.(ok)

*/
/*

DM: THis doesn't help because you're not telling me what was this code for? What did you try? What didn't work? As with my comment in message-input.jsx today, best comment out individual lines (and those lines should have a comment explaining their purpose), otherwise I'm lost.  DM: ok these sound good, but please put them in the code as comments over the code where it happens. Otherwise its too hard for me to follow. You can leave the app in a broken state and then I can help debug, but give me instructions about what is the problem, what you tried, and what I should do to reproduce the bug (ie try to login, try to signup, etc)(ok, it's done!)

import { useEffect, useState } from 'react';
// import the firebase functions; onSnapshot function to get the messages from the database in real-time, query function to order the messages by the time they were created, collection function to get the messages from the database, and orderBy function to order the messages by the time they were created
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import db from './firebase';

export default function ChatBox() {
  // declare the state message so that it can only be accessed here
  const [messages, setMessages] = useState([]);

  // useEffect hook to get the messages from the database and set them to the state
  useEffect(() => {
    const messagesCollection = collection(db, 'messages');
    const q = query(messagesCollection, orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex-grow overflow-auto p-4 bg-purple-500 text-white">
      {messages.map((message, index) => (
        <div key={index} className="mb-4 border-b-2 border-purple-300 p-2">
          <strong className="font-bold">{message.user}</strong>: {message.text}{' '}
          <em className="text-sm text-purple-300">{new Date(message.createdAt).toLocaleTimeString()}</em>
        </div>
      ))}
    </div>
  );
}

*/
