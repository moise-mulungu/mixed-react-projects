/* 

try out contact-plan.md
    
(in progress)MM: DM: I am trying to follow the steps from this link: https://dev.to/jlong4223/how-to-implement-email-functionality-with-node-js-react-js-nodemailer-and-oauth2-2h7m 

Steps: 
1. Set up the Node.js Server
2. Set up Nodemailer part 1
3. Configure OAuth2
4. Set up Nodemailer part 2
5. Set up Nodemailer part 3
6. Set up React.js
7. Set up Nodemailer part 4
8. Finish React.js
*/

/* 1. Set up the Node.js Server
   1.1. Create a new directory and initialize it with npm init -y (this one was already done)
   1.2. Install the following dependencies: npm install express dontev (I need to install express and dontev only as nodemailer is already installed)
   DM: you don't need dotenv because nextjs has that functionality built-in. See contact.js how you can just use process.env.MY_ENVIRONMENT_VARIABLE which is in the .env.local
To run the server: node src/pages/api/portfolio/contact2.js
*/
// DM: you don't need express because nextjs is a server. Anything in src/pages/api is a server route, just like express provides
const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
// DM: if you need cors, look in the nextjs docs for how to do cors. Or in the examples directory: https://github.com/vercel/next.js/tree/canary/examples
const cors = require('cors')
require('dotenv').config()

// middleware
app.use(express.json())
app.use(cors())

/* 2. Set up Nodemailer part 1
Nodemailer requires 3 things to begin running:

    a. A transporter object
    b. A mailOptions Object
    c. A sendMail method
*/
// a. A transporter object: we have to create an .env file to store our email credentials.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
})
/*
3. Configure OAuth2
 Before moving to the second step of the Nodemailer setup, we need to configure OAuth2:
    1. Go to https://console.cloud.google.com/projectselector2/home/dashboard?supportedpurview=project and create a new project
    2. click the dropdown select project at the left corner of the screen , and create a new project
    3. on the left sidebar of the dashboard, select API & Services, then select OAuth consent screen
    4. Once you click the OAuth consent screen, you will be brought to the following page, where you will click external: then create
    5. fill in the required fields to add your project and email, then click on save and continue button
    6. The next page is where you will add yourself as the test user: Add yourself as a test user using your gmail and then click save and continue. The next page will be a summary of all of the inputted information, which is the end of that phase.
    7. Next, click credentials on the left hand side, then click create credentials and select OAuth client ID:
    8. You will be redirected to the following page, where you create an OAuth clientID:
    Change the application type to 'Web Application'. We will be using OAuth2 Playground https://developers.google.com/oauthplayground as the Authorized redirect URI:
    9. Once those fields are inputted, you can click create, next, you will be presented with your OAuth clientID and Client Secret:
    10. Copy both of those values and return to your .env file to fill in those empty keys.
    11. Head to OAuth Playground( https://developers.google.com/oauthplayground/) Once there, click the gear on the upper right hand side of the screen to bring up the configuration. Click Use your own OAuth credentials and input the Client ID and Secret that you just inputted into your .env file.
    12. On the left hand side of the screen, you will see a large list of API’s. Select Gmail API v1 and the first option under the dropdown
    13. Click authorize API’s on the bottom right. This will bring you to a popup to select your gmail account. Choose your account and select continue on the next page.
    14. Then, a new popup will come up and ask for you to grant your app permission to send email from your gmail. Click allow here.

    15. After you click allow, you will be redirected back to the OAuth playground dashboard. Click exchange authorization code for tokens to receive your refresh token for your .env file.
    Note: the last step to get our OAuth2 configuration is done
 */

/*
4. Set up Nodemailer part 2
Let's verify the transporter underneath the created transporter from Nodemailer step 1.

*/
transporter.verify((err, success) => {
  err ? console.log(err) : console.log(`=== Server is ready to take messages: ${success} ===`)
})

/*
Within the terminal, run the server again and check for the console.log:
node src/pages/api/portfolio/contact2.js
Server is running on port: 3001
=== Server is ready to take messages: true ===
*/

// Underneath the verification, lets create a test mailOptions object:
app.post('/send', function (req, res) {
  let mailOptions = {
    from: `${req.body.mailerState.email}`,
    to: process.env.EMAIL,
    subject: `Message from: ${req.body.mailerState.email}`,
    text: `${req.body.mailerState.message}`,
  }
  /*
  5. Set up Nodemailer part 3
  Next, lets send the mailOptions through a transporter sendMail method:
  */
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: 'fail',
      })
    } else {
      console.log('== Message Sent ==')
      res.json({
        status: 'success',
      })
    }
  })
  // MM: DM: I can not get the 'Email sent successfully' message after wrapping them in app.post()
})
const port = 3001
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})

// 6. Set up React

/*
7. Set up Nodemailer part 4
Install CORs Within the myPortfolio directory, run the following in the terminal: npm i cors

*/
