import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from './user/user-context-provider'
import { addDoc, collection } from 'firebase/firestore'
import db from './firebase'

export default function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState('')

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   await sendMessage(message)
  //   onSendMessage(message)
  //   setMessage('')
  // }
  // const sendMessage = async (message) => {
  //   if (!user) {
  //     console.error('User must be logged in to send a message')
  //     return
  //   }
  //   try {
  //     await addDoc(collection(db, 'messages'), {
  //       text: message,
  //       createdAt: new Date().toISOString(),
  //       user: user.displayName,
  //     })
  //     onSendMessage({
  //       text: message,
  //       sender: user.displayName,
  //       timestamp: new Date().toISOString(),
  //     })
  //     setMessage('')
  //   } catch (e) {
  //     console.error('Error adding document: ', e)
  //   }
  // }
  // const handleInputChange = (e) => {
  //   setMessage(e.target.value)
  // }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!user || !user.displayName) {
      console.error('User or user.displayName is undefined')
      return
    }
    const messageObj = {
      text: message,
      sender: user.displayName,
      timestamp: new Date().toISOString(),
    }
    await addDoc(collection(db, 'messages'), messageObj)
    onSendMessage(messageObj)
    setMessage('')
  }

  const handleInputChange = (e) => {
    setMessage(e.target.value)
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
      <button type="submit" className="bg-purple-500 text-white rounded p-2">
        Send
      </button>
    </form>
  )
}

/*

DM: this looks like there are not many changes from the original above. It is better to comment out in place, rather than copy the entire code then comment out the entire code here. The reason is I can't tell what the diff is from this commented out code and the original code above, so I can't see what you traied to do, so I can't help. MM: i separated the two for code error reason, the same for other files, but i'll place the comments in the original code.

import { useState, useContext } from 'react'
import { UserContext } from './user/user-context-provider'
import { addDoc, collection } from 'firebase/firestore'
import db from './firebase'

export default function MessageInput() {
  const [message, setMessage] = useState('')
  const user = useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await sendMessage(message)
    setMessage('')
  }

  const handleInputChange = (e) => {
    setMessage(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit(e)
    }
  }

  const sendMessage = async (message) => {
    if (!user || !user.displayName) {
      console.error('User is not defined or does not have a displayName')
      return
    }
    try {
      await addDoc(collection(db, 'messages'), {
        text: message,
        createdAt: new Date().toISOString(),
        user: user.displayName,
      })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  const rows = message.split('\n').length

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
      <button type="submit" className="bg-purple-500 text-white rounded p-2">
        Send
      </button>
    </form>
  )
}

*/
