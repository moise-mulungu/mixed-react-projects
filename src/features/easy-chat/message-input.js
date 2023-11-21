import { useState } from 'react'

export default function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSendMessage(message)
    setMessage('')
  }

  const handleInputChange = (e) => {
    setMessage(e.target.value)
  }

  const rows = message.split('\n').length

  /* 
    DM: this all looks like a great start. I'm having trouble finding things to complain about! :) 
        suggestion: you are allowing multiline messages. do you want to do that? 
        suggestion: in either case, chat apps often let's you submit with the enter key. If multiline messages, then submit with ctrl-Enter is common.
        otherwise, keep going! looking great.  
  */

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full border-t-2 border-purple-300 p-4">
      <textarea
        value={message}
        onChange={handleInputChange}
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
