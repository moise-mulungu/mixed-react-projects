// import { render } from '@react-email/render'
// import nodemailer from 'nodemailer'
// import { myEmail } from '@/constants/portfolio/contact-form'
// import FormattedContactEmail from '@/server/features/portfolio/formatted-contact-email.jsx'

// // note on NextJS API routes: any console.logs will be in the terminal where NextJS is running, not in the browser

// /*
//   testing URLs: use a URL for testing, with the key info in the query string
//   * add values to the query string (instead of the POST body which is used by the contact form)
//   * ethereal: http://localhost:3005/api/portfolio/contact?testWithEthereal=true&fromEmail=dmckeeve9@gmail.com&firstName=testFirstName
//   * !!!production: http://localhost:3005/api/portfolio/contact?fromEmail=dmckeeve9@gmail.com&firstName=testFirstName
//     * result: test email is seen in MM's gmail account
// */

// export default async function handler(req, res) {
//   const toEmail = req.query.toEmail || myEmail
//   /*
//   const obj = undefined
//   const { myProperty } = obj // ReferenceError: obj is not defined
//   // defensive approach (cannot use "object destructuring assignment" on undefined or empty string)
//   const { myProperty } = obj || {} // myProperty is undefined
//   // give a default value to myProperty
//   const { myProperty = 'myDefaultValue' } = obj || {} // myProperty is undefined
//   */
//   const {
//     email: fromEmail = req.query.fromEmail,
//     firstName = req.query.firstName,
//     testWithEthereal = req.query.testWithEthereal,
//   } = req.body || {}
//   console.log({ reqBody: req.body, toEmail, fromEmail, firstName, testWithEthereal })

//   // build the email body
//   const emailHtml = testWithEthereal
//     ? `<div>${firstName}</div>`
//     : render(<FormattedContactEmail firstName={firstName} email={email} />)
//   console.log({ emailHtml })

//   // create the email sending mechanism

//   /*
//   about SMTP: email transport protocol
//   https://postmarkapp.com/guides/everything-you-need-to-know-about-smtp
//   https://postmarkapp.com/guides/everything-you-need-to-know-about-smtp#understanding-smtp-error-codes
//   */

//   /*
//     SETUP the Ethereal (testing) EMAIL service:
//       * go to the Ethereal URL: https://ethereal.email
//       * create account
//       * "download as CSV" and view file as text, not via Excel
//       * create in the main repo directory a .env.local and copy to it
//         * the contents of the CSV download
//         * the contents of the "Nodemailer configuration" section in the page shown when you "create account"
//         * all that you copy into .env.local should be as comments, i.e., each line is preceded by "# "
//       * add two (uncommented) lines
//         ETHEREAL_EMAIL_USERNAME=fill in value from the "Nodemailer configuration" section.
//         ETHEREAL_EMAIL_PASSWORD=fill in value from the "Nodemailer configuration" section.
//         * restart NextJS (npm run dev) to use the new env vars
//       * FUTURE NOTE: when you put your portfolio site into production at Vercel, if you want to test in production, get a NEW ethereal.email account specially for production, then create the same "environment variables" here in .env.production
//         * note in .gitignore that all .env.* files will not be included in the github repository
//         * security: these must never be in any repo, because they are secret
//         * the "environment variables" in .env.production you'll enter manually in the Vercel website when you create your production site
//       * troubleshooting
//         * login and look at the messages in the mailbox: https://ethereal.email/login
//   */
//   // MM: ???DM: I noticed after creating the .env.local file, it does appear in the git pending changes, is it a personal file or because it's in the ignore file that it won't be pushed to the repo? DM: yes, it is in .gitignore

//   const transporterDataEthereal = {
//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false, // STARTTLS?
//     auth: {
//       user: process.env.ETHEREAL_EMAIL_USERNAME, // in .env.*
//       pass: process.env.ETHEREAL_EMAIL_PASSWORD, // in .env.*
//     },
//   }

//   /*

//   SETUP the EMAIL service:

// https://www.geeksforgeeks.org/how-to-send-email-with-nodemailer-using-gmail-account-in-node-js/

// (ok, in progress!)DM: the idea is to use the code example in the link above as an example of how to send the email using your gmail account instead of forwardemail.net. The code in the link is not something you can copy and it will work, but rather it is a working example of a standalone node script. You'll have to use the information in the link to make this code work. Remember, this code (using the nodemailer npm package) already works with the Ethereal test. You are just implementing the "real" (production) part of the email. Take time to read and understand this entire script. I'm going to ask you to explain to me how this script works with Ethereal on Friday.

// MM: DM: I got this file to read about sending email: https://dev.to/jlong4223/how-to-implement-email-functionality-with-node-js-react-js-nodemailer-and-oauth2-2h7m

// DM: I'm going to remove these steps that you copied and pasted from the link because you will need to list just the the steps that you will do here to make this existing code work with your gmail account.

// STEPS to send email using gmail account
// *
// *

// MM: ???DM: I listed all the required steps for sending gmail with the code below, but I am not able to understand where to add content to the appropriate field from your code. DM: see my notes below. If it helps, you could use the exact code from the geeksforgeeks link in a separate testSendMail.js file in this directory and run it as a node script. Sometimes it helps to first get something working in a clean/simple situation first.

//   */

//   /*

//   DM: this shows what should be in the variable transporterDataDefault below. I assume it will work as-is, but I'm not positive. Maybe you'll have to look at the documentation of the nodemailer package.
//   const mailTransporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'xyz@gmail.com',
//       pass: '*************',
//     },
//   }) */

//   /*

//   DM: this is already implemented.

//   const mailDetails = {
//     from: 'xyz@gmail.com',
//     to: 'moisemlg90@gmail.com',
//     subject: 'Test mail',
//     text: 'Hello World!',
//   }

//   mailTransporter.sendMail(mailDetails, (err, data) => {
//     if (err) {
//       console.log('Error Occurs')
//     } else {
//       console.log('Email sent successfully')
//     }
//   })

//  */

//   // 2) based on #1, fill out
//   const transporterDataDefault = {
//     host: 'smtp.forwardemail.net',
//     port: 587,
//     secure: false, // ?
//     auth: {
//       // user: 'bogus username to test the error response', // for testing the catch block
//       user: process.env.FORWARDEMAIL_EMAIL_USERNAME, // in .env.*
//       pass: process.env.FORWARDEMAIL_EMAIL_PASSWORD, // in .env.*
//     },
//   }
//   // 3) use the production testing URL at the top

//   // DM: read the code at the beginning of the function and be sure you understand how the test URL parameters control the value of testWithEthereal which determines which transporterData object is used in the line below.
//   const transporterData = testWithEthereal ? transporterDataEthereal : transporterDataDefault
//   console.log({ transporterData })
//   // the next three function calls were copied from: https://react.email/docs/integrations/nodemailer#3-convert-to-html-and-send-email
//   // https://nodemailer.com/about/
//   const transporter = nodemailer.createTransport(transporterData)

//   // create the email
//   const email = {
//     from: fromEmail,
//     to: toEmail,
//     subject: `Contact message from: ${firstName}`,
//     // temporary using a plain text message for now
//     text: 'Hello world! This message is testing using a text version instead of HTML rendered by the @react-email package',
//     // html: emailHtml,
//   }
//   console.log({ email })

//   // send the email
//   const response = { status: '200', result: 'success' }

//   /* error handling: return a message so that the client can know if success or error */
//   try {
//     const sendMailResponse = await transporter.sendMail(email)
//     console.log()
//     console.log('result', sendMailResponse)
//     // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses
//     // 504 Gateway Timeout - This error response is given when the server is acting as a gateway and cannot get a response in time.
//     // 504 is the only likely problem is if the email service is down
//     // todo: find a way to test the error response
//     const serverError = sendMailResponse.error ? { status: '504', result: 'success' } : undefined
//     res.status(200).json(serverError ?? response)
//   } catch (error) {
//     // test this by using an invalid ethereal username
//     console.log()
//     console.log('caught error', error, error.message)
//     response.status = error.responseCode
//     response.result = error.message
//     // note: it is OK to always return a 200 and put the error in the response JSON (Facebook does this)
//     res.status(200).json(response)
//     /*
//       {"result":"queryA ETIMEOUT smtp.ethereal.email"} // maybe VPN
//       from GitHub nodemailer: Check your firewall settings. Timeout usually occurs when you try to open a connection to a firewalled port either on the server or on your machine. Some ISPs also block email ports to prevent spamming. Nodemailer works on one machine but not in another. It's either a firewall issue, or your SMTP server blocks authentication attempts from some servers.

//     */
//   }
// }

/*
Sider prompt: "what api endpoint can you suggest me so that anyone visiting my portfolio can send me messages?"
Answer: 
In this example, replace EMAIL_USERNAME, EMAIL_PASSWORD, and RECIPIENT_EMAIL with your own details. Be sure to secure these variables, don't put them directly into your code!

If you don't want to manage your own server, then you can use serverless functions (Netlify functions, Vercel, AWS Lambda) or even third party services (for example Formspree, Getform, etc.).

One of the easiest third party services to use is Formspree.io, it accepts HTTP POST requests and then sends you an email, without requiring any server-side code. Their service also has a free tier that is limited by the number of requests per month.

Remember to always secure your sensitive data (email, API keys etc.) and keep them private!
*/
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.post('/api/contact', async (req, res) => {
  let { name, email, message } = req.body

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      // user: process.env.EMAIL_USERNAME,
      user: process.env.EMAIL, // MM: DM: i replaced with my email from .env.local file
      // pass: process.env.EMAIL_PASSWORD,
      user: process.env.WORD, // MM: DM: i replaced with my password from .env.local file
    },
  })

  let info = await transporter.sendMail({
    // from: `"Portfolio Contact" ${process.env.EMAIL_USERNAME}`,
    from: `"Portfolio Contact" ${process.env.EMAIL}`,
    // to: process.env.RECIPIENT_EMAIL,
    to: process.env.EMAIL, // MM: DM: i replaced with my email, but i don't know if that's correct to use again my own email here for the RECIPIENT_EMAIL
    subject: `New message from ${name}`,
    text: `From: ${email}, Message: ${message}`,
  })

  res.json({ message: 'Email sent successfully!' })
})

app.listen(3005, () => console.log(`Listening on port 3005`)) //MM: DM:  i changed the port 3001 to 3005 

// google search "Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON": https://stackoverflow.com/questions/73590839/uncaught-in-promise-syntaxerror-unexpected-token-doctype-is-not. it suggested to verify the port on which data is fetched