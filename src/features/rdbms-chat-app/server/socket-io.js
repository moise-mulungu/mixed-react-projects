import { Server as socketIoServer } from 'socket.io'

export default function socketIo(server) {
  const io = new socketIoServer(server)

  io.on('connection', (socket) => {
    console.log()
    console.log('A user connected')
    console.log()

    // running clients can know when the server restarts, additional user connected
    io.emit('message', { type: 'updateAllClients', message: 'a user connected' })

    socket.on('disconnect', () => {
      console.log('A user disconnected')
    })
  })

  return io
}
