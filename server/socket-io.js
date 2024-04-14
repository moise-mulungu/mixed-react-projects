import { Server as socketIoServer } from 'socket.io'

export default function socketIo(server) {
  const io = new socketIoServer(server)

  io.on('connection', (socket) => {
    console.log('A user connected')

    // Listen for incoming messages
    socket.on('message', (message) => {
      console.log('Received message:', message)

      // Broadcast the message to all connected clients
      io.emit('message', message)
    })

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('A user disconnected')
    })
  })

  return io
}
