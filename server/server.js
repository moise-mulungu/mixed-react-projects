import express from 'express'
import http from 'http'
import socketIo from './socket-io'
import cors from 'cors'

/* 

// install packages
npm i tsx express socket.io cors

// start up the server that is listening for socket connections form multiple clients
npm run server-start

*/

const app = express()
const server = http.createServer(app)

const io = socketIo(server)

app.use(cors()) // Enable CORS for all routes

const PORT = process.env.PORT || 5005
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
