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

  // ctrl + enter to send message and keep multiline
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit(e)
    }
  }

  const rows = message.split('\n').length

  /* 
    DM: this all looks like a great start. I'm having trouble finding things to complain about! :) 
        suggestion: you are allowing multiline messages. do you want to do that? 
        suggestion: in either case, chat apps often let's you submit with the enter key. If multiline messages, then submit with ctrl-Enter is common.
        otherwise, keep going! looking great. MM: if i remove the multiline, users won't be able to send messages with line breaks. I think it's better to keep it as there is a send button.
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
