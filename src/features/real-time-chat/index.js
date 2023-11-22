import { useState } from 'react'
import Header from './header'
import ChatBox from './chat-box'
import MessageInput from './message-input'
import Footer from './footer'
import User from './user'

/* 
(done)DM: todoMM: change the name of this directory to be the same as the src/pages directory name (which is in the URL - keeping the names consistent avoids confusion in a large codebase.
*/

export default function EasyChat() {
  const [messages, setMessages] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // DM: nice function name
  const onSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'You', timestamp: new Date() }])
  }

  if (!isAuthenticated) {
    return <User onAuthenticate={() => setIsAuthenticated(true)} />
  }

  //(done) DM: todoMM: add some horizontal margin so that the purple box is not flush against the left edge of the screen. Otherwise, looks good.
  return (
    <div className="flex flex-col h-screen bg-gray-100 mx-2">
      <Header />
      <div className="flex-grow flex">
        <div className="flex flex-col w-1/3 border-r-2 border-gray-200">
          <ChatBox messages={messages} />
        </div>
        <div className="flex flex-col w-1/3 border-r-2 border-gray-200">
          {/*(done) DM: todoMM: choose either onSendMessage or handleSendMessage (both names are great, imo), but the prop name should be the same as the function name. this makes it a LOT easier to follow what is what as you jump back and forth between components and tweak code. If they have different names, it gets confusing and mistakes can happen. (PS: I like onSendMessage a little better, since it isn't directly an event handler, but rather is called by an event handler in another component.) */}
          <MessageInput onSendMessage={onSendMessage} />
        </div>
        <div className="flex flex-col w-1/3">{/* User component goes here */}</div>
      </div>
      <Footer />
    </div>
  )
}
