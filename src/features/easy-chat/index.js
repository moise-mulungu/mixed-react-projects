import { useState } from 'react'
import Header from './header'
import ChatBox from './chat-box'
import MessageInput from './message-input'
import Footer from './footer'

export default function EasyChat() {
  const [messages, setMessages] = useState([])

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'You', timestamp: new Date() }])
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex-grow flex">
        <div className="flex flex-col w-1/3 border-r-2 border-gray-200">
          <ChatBox messages={messages} />
        </div>
        <div className="flex flex-col w-1/3 border-r-2 border-gray-200">
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
        <div className="flex flex-col w-1/3">{/* User component goes here */}</div>
      </div>
      <Footer />
    </div>
  )
}

/*
import React, { useState } from 'react';

const EasyChat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'You', timestamp: new Date() }]);
  }

  return (
    <div>
      <h1>Easy Chat</h1>
      <ChatBox messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}

const ChatBox = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          <strong>{message.sender}</strong>: {message.text} <em>{message.timestamp.toLocaleTimeString()}</em>
        </div>
      ))}
    </div>
  );
}

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSendMessage(message);
    setMessage('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
}

export default EasyChat;
*/
