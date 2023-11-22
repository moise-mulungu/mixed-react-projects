export default function ChatBox({ messages }) {
  return (
    <div className="flex-grow overflow-auto p-4 bg-purple-500 text-white">
      {messages.map((message, index) => (
        <div key={index} className="mb-4 border-b-2 border-purple-300 p-2">
          <strong className="font-bold">{message.sender}</strong>: {message.text}{' '}
          <em className="text-sm text-purple-300">{message.timestamp.toLocaleTimeString()}</em>
        </div>
      ))}
    </div>
  )
}
