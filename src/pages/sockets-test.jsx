import { useEffect, useState } from 'react'
import io from 'socket.io-client'

/* 

npm i socket.io-client
url: http://localhost:3005/sockets-test

*/

const Chat = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    console.log('Connecting to WebSocket server...')
    const newSocket = io('http://localhost:5005', {
      // const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER_URL, {
      transports: ['websocket'],
    })

    newSocket.on('connect', () => {
      console.log('Connected to WebSocket server')
    })

    newSocket.on('message', (newMessage) => {
      console.log('Received message:', newMessage)
      setMessages((prevMessages) => [...prevMessages, newMessage])
    })

    setSocket(newSocket)

    // Clean up the socket connection on unmount
    return () => {
      console.log('Disconnecting from WebSocket server...')
      newSocket.disconnect()
    }
  }, [])

  const handleMessageSubmit = (e) => {
    e.preventDefault()
    if (message.trim() && socket) {
      socket.emit('message', message)
      setMessage('')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Chat App</h1>
      <div className="mb-4 overflow-auto h-64 w-64 border border-gray-300 p-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            {msg}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit} className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-300 rounded-l p-2 flex-grow"
        />
        <button type="submit" className="bg-blue-500 text-white rounded-r px-4">
          Send
        </button>
      </form>
    </div>
  )
}

export default Chat
