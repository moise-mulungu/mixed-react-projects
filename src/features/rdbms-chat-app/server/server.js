import express from 'express'
import http from 'http'
import cors from 'cors'
import { Server as socketIoServer } from 'socket.io'

import { pool as db } from './aiven'

/* 

todo: provide connections only to authenticated users

*/

const app = express()
app.use(cors()) // Enable CORS for all routes

const server = http.createServer(app)

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

db.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring database', err.stack)
  }
  client.on('notification', (msg) => {
    const payload = JSON.parse(msg.payload)
    // new_message is the name of the listener in the db for changes to message table
    io.emit('new_message', payload)
  })

  client.query('LISTEN new_message')
  // 'new_message' is the channel you NOTIFY on the PostgreSQL trigger
})

const PORT = process.env.PORT || 5005
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
