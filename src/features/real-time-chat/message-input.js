import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from './user-context'
import { addDoc, collection } from 'firebase/firestore'
import db from './firebase'

export default function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState('')

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   onSendMessage(message)
  //   setMessage('')
  // }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await sendMessage(message)
    onSendMessage(message)
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
  const sendMessage = async (message) => {
    try {
      await addDoc(collection(db, 'messages'), {
        text: message,
        createdAt: new Date().toISOString(),
        user: user.displayName, // Or any other property of the suer object
      })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

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
