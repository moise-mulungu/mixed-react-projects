import { useEffect, useState, useRef, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { usersCollection } from './firebase'
import { onSnapshot } from 'firebase/firestore'
import db from './firebase'
import { UserContext } from './user/user-context-provider'
import { globalStateStore } from './global-state-store'

export default function ChatBox({
  messages,
  deleteMessage,
  // fetchUsers is for the userS provider only  fetchUsers
}) {
  console.log('messages:', typeof messages)

  const [userData, setUserData] = useState({})
  const messagesContainerRef = useRef(null)

  // testing global state with Zustand
  const testKey = globalStateStore((state) => state.testKey) // Access the global state
  const setTestKey = globalStateStore((state) => state.setTestKey) // Access the setter function

  const { user: currentUser } = useContext(UserContext)
  /*
  The error of currentUser and message.sender mismatch was due to use of UserContext inside the root component. i did the following to debug:
  1. check if the currentUser is null or undefined with console.log(currentUser) and console.log(message.sender)
  2. i found both of them are null or undefined
  3. to solve the issue was to check where the UserContext is being used, and i found it is being used in the RealTimeChat component.
  4. i removed the UserContext from the RealTimeChat component to the ChatBox component without passing it as a prop to the ChatBox component.
  5. i used the useContext hook to get the currentUser from the UserContext.
  */

  useEffect(() => {
    setTestKey('newValue') // Update the global state
  }, [])

  /*
  to test Zustand global state i did the following:
    1. read the documentation of Zustand on the following link: https://github.com/pmndrs/zustand(MM: DM: next time, i'll find out all the global states in this project and put them in the globalStateStore component)
    2. installed Zustand package by running "npm install zustand"
    3. created a global-state-store.jsx file in the real-time-chat folder, and added a component called globalStateStore.
    5. created two variables testKey and setTestKey to access the global state and the setter function.
    4. imported the globalStateStore component in the chat-box.jsx component.
    6. created a testKey state with its setter function setTestKey in the ChatBox()
    7. added a useEffect where i passed the setTestKey function with the value of "newValue"
  */

  useEffect(() => {
    // Guard clause to handle when db is not defined
    if (!db) return
    //(done) DM: rename all the variables in this useEffect and perhaps senderData, setSenderData to reflect exactly/specifically what is being stored.
    // DM: todoMM: you are fetching, but the ultimate purpose of this function is to setAllUserData, correct?
      // MM: do i need to use the setAllUserData again ?
    const fetchAllUserData = async () => {
      //(done) DM: write a comment to explain what/why this code
      // The fetchAllUserData function fetches the user data for each sender of the messages and stores it in the userData state. This data is then used to display the sender's information for each message. DM: good
      const uniqueSenders = [...new Set(messages.map((message) => message.sender))]
      const newUserData = {}
      for (const sender of uniqueSenders) {
        //(done) DM: careful of expensive operations inside a loop. what if there are 200 messages? You can't fetch the user for each message. One solution is to, inside this loop, get a list of unique message.sender, then after the loop, call fetchUsers for each unique sender(id).
        // DM: dont fetch all users for each message. Also sender is not the param, to fetchUsers which takes param callback (a setter)
        // newUserData[sender] = await fetchUsers(sender)
      }
      setUserData(newUserData)
    }
    // DM: another solution is to have firestore "push" the latest user info to you when user info is changed by user, or, if that is not possible, every 5 minutes or so. Or, you could "pull" every 5 minutes by using setInterval to query the DB for latest user info ("pull" might configurable in firebase, so be sure to query Google/AI for your top-level goal "how do I avoid user data getting stale over time?")

    //(done) DM: use a guard clause at the beginning of the useEffect to handle when !db. That way you don't have to use `let unsubscribe` and `unsubscribe && unsubscribe()`. Following the rule to avoid `let` whenever possible will help you write better code.
    // if (db) {
    const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
      //(done) DM: I'm seeing an error when I change my display name, I think it is here. Put a try-catch around the code in this callback so you can know for sure where the error is happening.
      try {
        console.log('onSnapshot callback invoked', { snapshot })
        const updatedUserData = { ...userData }
        snapshot.docs.forEach((doc) => {
          console.log('onSnapshot callback invoked', { doc, docData: doc.data() })
          updatedUserData[doc.id] = doc.data()
        })
        setUserData(updatedUserData)
      } catch (error) {
        console.error('Error in onSnapshot callback:', error)
      }
    })

    fetchAllUserData()
    return () => {
      //(done) DM: keep in mind this cleanup function will be called every time one of the dependencies changes. Do you want to unsubscribe each time the messages variable changes?

      unsubscribe()
    }
  }, [messages, db])

  useEffect(() => {
    if (messagesContainerRef.current) {
      const { scrollHeight } = messagesContainerRef.current
      messagesContainerRef.current.scrollTop = scrollHeight
    }
  }, [messages])

  return (
    <div
      ref={messagesContainerRef}
      className="flex-grow overflow-y-auto rounded p-4 bg-purple-500 text-white h-96"
    >
      {messages?.map((message, index) => {
        const sender = message.senderName || message.sender
        const user = userData[message.sender]
        console.log({ sender })
        console.log('sender type:', typeof message.sender)
        console.log('text type:', typeof message.text)
        console.log('timestamp type:', typeof message.timestamp)
        // dm: where is the property sender in the message object: MM: the sender property of the message object is being set to user.displayName in the MessageInput component. This user object is obtained from the UserContext using the useContext hook.?
        console.log({ message, index })
        console.log('currentUser', currentUser)
        console.log('currentUser?.uid', currentUser?.uid)
        console.log('message.sender', message.sender)
        console.log('message', JSON.stringify(message, null, 2))
        console.log('index', index)

        return (
          <div
            key={
              // ahem!(MM: In the context of code comments, "ahem!" is often used to draw attention to a particular piece of code. It's a way for the developer to say, "Pay attention to this," or "This might not be ideal, but it's necessary for now. is that the meaning you intended?) (done)DM: hehe, no "ahem!" means in this case: "take a look at this" and a friendly scolding, indicating "something's amiss here" - in this case implying that you'll remember you're not supposed to use index for a ReactJS key.
              message.timestamp + message.sender // i used message.timestamp because timestamp records the exact date and time a message was sent. DM: good choice
            }
            className="mb-4 border-b-2 border-purple-300 p-2"
          >
            <div className="flex justify-between">
              <div>
                <strong className="font-bold mr-2">{user?.name || sender}</strong>: {message?.text}{' '}
                <em className="text-sm text-purple-300">
                  {message?.timestamp ? new Date(message?.timestamp).toLocaleTimeString() : ''}
                </em>
              </div>

              {currentUser && currentUser?.uid === message.sender && (
                <button onClick={() => deleteMessage(message)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              )}
              {/* MM: why the delete icon message disappear? i have an assumption that there is a mismatch between the currentUser.uid and message.sender. In order to fix this i put console log to verify each details, but i'll continue with it next time because i was running out of the time.
                (done)DM: check your console.logs. I don't see any logs containing "currentUser" or "message.sender" in the console. That code above is really weird - don't console.logs after && like that - its impossible to understand the code. Put your console.logs before the return statement of this [].map callback. Or you can use JSON stringify
              */}
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

(done)DM: please put this comment near the affected code because I don't know what code this applies to. It is frustrating because I have no idea what you're talking about! Be careful each time you add a comment like this that is is directly above the affected code. And, if instructions are necessary to reproduce the problem, then give those instructions. OK, no I assume this is no longer an issue. If you had put this message immediately/directly in the line above the affected code, when you later did the fix above, you would have realized that this comment was no longer relevant and you would have deleted it. So, please be careful to put comments directly above the affected code. It is extremely frustrating to try to figure out what happened of what I should do with this Git diff! MM: this issue is no more relevant, i already fixed the problem. i think the problem is the day i wrote the comment you didn't get time to review it, then the next day i fixed the problem and forgot to delete the comment. But it's talking about the code above. DM: ok, just reiterating that if you always put comments directly above the affected code, there will never be confusion like this.(ok)

*/

/*
DM: THis doesn't help because you're not telling me what was this code for? What did you try? What didn't work? As with my comment in message-input.jsx today, best comment out individual lines (and those lines should have a comment explaining their purpose), otherwise I'm lost.  DM: ok these sound good, but please put them in the code as comments over the code where it happens. Otherwise its too hard for me to follow. You can leave the app in a broken state and then I can help debug, but give me instructions about what is the problem, what you tried, and what I should do to reproduce the bug (ie try to login, try to signup, etc)(ok, it's done!)
*/
