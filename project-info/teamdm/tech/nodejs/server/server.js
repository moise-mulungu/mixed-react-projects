// Node runs on the server, not in the browser

// Node is a JavaScript runtime environment that allows us to run JavaScript on the server

const os = require('os')

// operating system information
console.log(os.type())
console.log(os.arch())
console.log(os.cpus())
console.log(os.homedir())
console.log(os.version())

const path = require('path')

// path information
console.log(path.sep)
console.log(path.delimiter)
console.log(path.dirname(__filename))
console.log(path.extname(__filename))
console.log(path.basename(__filename))
console.log(path.parse(__filename))

// file system
const fs = require('fs')
console.log(fs)
console.log(fs.readdirSync('./'))

// you can run a file with node in the terminal by typing node and then the file name(e.g. node server.js)
// node project-info/teamdm/tech/nodejs/server/server.js
// MM: ???DM: I am getting something different when running  node project-info/teamdm/tech/nodejs/server/server.js on m terminal DM: please give me more information so that I can help. What is different?
// import a module
// DM: good job organizing these new files in directories
const math = require('../math')
console.log(math.add(1, 2))
console.log(math.subtract(1, 2))
console.log(math.multiply(1, 2))
console.log(math.divide(1, 2))

// nice!
