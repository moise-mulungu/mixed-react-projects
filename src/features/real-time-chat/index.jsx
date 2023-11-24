import { useState } from 'react'
// import { UserContext } from './user/user-context-provider'
import Header from './header'
import ChatBox from './chat-box'
import MessageInput from './message-input'
import Footer from './footer'
import User from './user'
import UserContextProvider from './user/user-context-provider'

// DM: careful how you rename a directory, because I couldn't see the diffs in Git for index.js, but I could see it for all the other files. MM: i have already a component named RealTimeChat in ./pages/real-time-chat, now this component is in ./features/real-time-chat, so i named it to EasyChat to avoid confusion
//(done) DM: todoMM: rename all files .jsx if they contain JSX. Otherwise, name them .js. This communicates to me their purpose

/*
(done)DM: change the name of this directory to be the same as the src/pages directory name (which is in the URL - keeping the names consistent avoids confusion in a large codebase.
*/

export default function EasyChat() {
  const [messages, setMessages] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // const [user, setUser] = useState(null)

  // DM: nice function name
  const onSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'You', timestamp: new Date() }])
  }

  if (!isAuthenticated) {
    // return <User onAuthenticate={() => setIsAuthenticated(true)} />
    //(done) DM: todoMM: after you have put the user* files into a ./user directory (see todo in user.js), create a file named ./user/user-context-provider.jsx and extract user, setUser into that file. Then, import that file here and use it to wrap the User component here (and also in the top-level return statement). This way, you can keep all the user-related code in one place.
    return (
      <UserContextProvider>
        <User onAuthenticate={() => setIsAuthenticated(true)} />
      </UserContextProvider>
    )
  }

  //(done) DM: add some horizontal margin so that the purple box is not flush against the left edge of the screen. Otherwise, looks good.
  return (
    <UserContextProvider>
      <div className="flex flex-col h-screen bg-gray-100 mx-2">
        <Header />
        <div className="flex-grow flex">
          <div className="flex flex-col w-1/3 border-r-2 border-gray-200">
            <ChatBox messages={messages} />
          </div>
          <div className="flex flex-col w-1/3 border-r-2 border-gray-200">
            {/*(done) DM: choose either onSendMessage or handleSendMessage (both names are great, imo), but the prop name should be the same as the function name. this makes it a LOT easier to follow what is what as you jump back and forth between components and tweak code. If they have different names, it gets confusing and mistakes can happen. (PS: I like onSendMessage a little better, since it isn't directly an event handler, but rather is called by an event handler in another component.) */}
            <MessageInput onSendMessage={onSendMessage} />
          </div>
          <div className="flex flex-col w-1/3">{/* User component goes here */}</div>
        </div>
        <Footer />
      </div>
    </UserContextProvider>
  )
}
