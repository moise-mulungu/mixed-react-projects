const fs = require('fs')
const path = require('path')
const { text } = require('stream/consumers')

fs.readFile(path.join(__dirname, 'files', 'text.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

// Path: project-info/teamdm/tech/nodejs/create-read-update-delete/files/text.txt

fs.writeFile(path.join(__dirname, 'files', 'hello-world.txt'), 'Hello World!', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('File written!')
})
// Path: project-info/teamdm/tech/nodejs/create-read-update-delete/files/hello-world.txt

fs.appendFile(path.join(__dirname, 'files', 'text.txt'), 'Hello World!', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('File written!')
})

// MM: ???DM: I am getting something different when running  node project-info/teamdm/tech/nodejs/server/server.js on m terminal from the project-info directory.
// DM: I ran "node project-info/teamdm/tech/nodejs/server/server.js" it works fine. Did you mean "node project-info/teamdm/tech/nodejs/create-read-update-delete/files/index.js" ?(yes, that's what i meant)

// MM: ???DM: I am getting the following error: Error cannot find module '/home/moise/Take-Home-Assignments/myPortfolio/project-info/teamdm/tech/nodejs/create-read-update-delete/files/files/index.js'
// DM: this error message is giving you information you need to debug the problem. Read it closely and see if you can figure out why node cannot find that file at that path.
