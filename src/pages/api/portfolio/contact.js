import { render } from '@react-email/render'
import nodemailer from 'nodemailer'
import { myEmail } from '@/constants/portfolio/contact-form'
import FormattedContactEmail from '@/server/features/portfolio/formatted-contact-email.jsx'

// note on NextJS API routes: any console.logs will be in the terminal where NextJS is running, not in the browser(ok)

/* 
  testing URLs: use a URL for testing, with the key info in the query string
  * add values to the query string (instead of the POST body which is used by the contact form)
  * ethereal: http://localhost:3005/api/portfolio/contact?testWithEthereal=true&fromEmail=dmckeeve9@gmail.com&firstName=testFirstName
  * ex: http://localhost:3005/api/portfolio/contact?fromEmail=dmckeeve9@gmail.com&firstName=testFirstName


*/

export default async function handler(req, res) {
  const toEmail = req.query.toEmail || myEmail
  /*
  const obj = undefined
  const { myProperty } = obj // ReferenceError: obj is not defined
  // defensive approach (cannot use "object destructuring assignment" on undefined or empty string)
  const { myProperty } = obj || {} // myProperty is undefined
  // give a default value to myProperty
  const { myProperty = 'myDefaultValue' } = obj || {} // myProperty is undefined
  */
  const {
    email: fromEmail = req.query.fromEmail,
    firstName = req.query.firstName,
    testWithEthereal = req.query.testWithEthereal,
  } = req.body || {}
  console.log({ reqBody: req.body, toEmail, fromEmail, firstName, testWithEthereal })

  // build the email body
  const emailHtml = testWithEthereal
    ? `<div>${firstName}</div>`
    : render(<FormattedContactEmail firstName={firstName} email={email} />)
  console.log({ emailHtml })

  // create the email sending mechanism

  /* 
  about SMTP: email transport protocol
  https://postmarkapp.com/guides/everything-you-need-to-know-about-smtp
  https://postmarkapp.com/guides/everything-you-need-to-know-about-smtp#understanding-smtp-error-codes
  */

  /* 
    SETUP the Ethereal (testing) EMAIL service:
      * go to the Ethereal URL: https://ethereal.email
      * create account
      * "download as CSV" and view file as text, not via Excel
      * create in the main repo directory a .env.local and copy to it
        * the contents of the CSV download
        * the contents of the "Nodemailer configuration" section in the page shown when you "create account"
        * all that you copy into .env.local should be as comments, i.e., each line is preceded by "# " 
      * add two (uncommented) lines
        ETHEREAL_EMAIL_USERNAME=fill in value from the "Nodemailer configuration" section.
        ETHEREAL_EMAIL_PASSWORD=fill in value from the "Nodemailer configuration" section.
        * restart NextJS (npm run dev) to use the new env vars
      * FUTURE NOTE: when you put your portfolio site into production at Vercel, if you want to test in production, get a NEW ethereal.email account specially for production, then create the same "environment variables" here in .env.production 
        * note in .gitignore that all .env.* files will not be included in the github repository
        * security: these must never be in any repo, because they are secret
        * the "environment variables" in .env.production you'll enter manually in the Vercel website when you create your production site
      * troubleshooting
        * login and look at the messages in the mailbox: https://ethereal.email/login
  */
 // MM: ???DM: I noticed after creating the .env.local file, it does appear in the git pending changes, is it a personal file or because it's in the ignore file that it won't be pushed to the repo?

  // DM: next meeting I'll give you an intro to this file, then show you how to set up Ethereal testing. Then, you can set up the production email service (transporterDataDefault) using the notes in "send as if from GMail" below.

  const transporterDataEthereal = {
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // STARTTLS?
    auth: {
      user: process.env.ETHEREAL_EMAIL_USERNAME, // in .env.*
      pass: process.env.ETHEREAL_EMAIL_PASSWORD, // in .env.*
    },
  }

  /* 
  
  SETUP the EMAIL service: 
  
  Picking a provider: 
  https://postmarkapp.com/blog/the-best-smtp-email-services-comparison-sheet
  Nodemailer is supported by https://forwardemail.net/en might as well use it, it's free
  * option: send as if from GMail: https://forwardemail.net/en/guides/send-mail-as-gmail-custom-domain
  * option: send as if from the site hosting service that provides your custom domain name: namecheap, godaddy, etc. (Vercel is listed ... Hmm, I didn't know Vercel offered domain names)

  Let's use this option for now:
  * send as if from GMail: https://forwardemail.net/en/guides/send-mail-as-gmail-custom-domain

  */
  const transporterDataDefault = {
    host: 'smtp.forwardemail.net',
    port: 587,
    secure: false, // ?
    auth: {
      // user: 'bogus username to test the error response', // for testing the catch block
      user: process.env.FORWARDEMAIL_EMAIL_USERNAME, // in .env.*
      pass: process.env.FORWARDEMAIL_EMAIL_PASSWORD, // in .env.*
    },
  }
  const transporterData = testWithEthereal ? transporterDataEthereal : transporterDataDefault
  console.log({ transporterData })
  // the next three function calls were copied from: https://react.email/docs/integrations/nodemailer#3-convert-to-html-and-send-email
  // https://nodemailer.com/about/
  const transporter = nodemailer.createTransport(transporterData)

  // create the email
  const options = {
    from: fromEmail, // be sure to validate proper email address in the client
    to: toEmail,
    subject: `Contact message from: ${firstName}`,
    // temporary using a plain text message for now
    // text: 'Hello world! This message is testing using a text version instead of HTML rendered by the @react-email package',
    html: emailHtml,
  }
  console.log('options', options)

  // send the email
  const response = { status: '200', result: 'success' }

  // next: write functions for each of nodemailer/ethereal, sendgrid: https://github.com/sendgrid/sendgrid-nodejs/tree/main/packages/mail

  /* error handling: return a message so that the client can know if success or error */
  try {
    const sendMailResponse = await transporter.sendMail(options)
    console.log()
    console.log('result', sendMailResponse)
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses
    // 504 Gateway Timeout - This error response is given when the server is acting as a gateway and cannot get a response in time.
    // 504 is the only likely problem is if the email service is down
    // todo: find a way to test the error response
    const serverError = sendMailResponse.error ? { status: '504', result: 'success' } : undefined
    res.status(200).json(serverError ?? response)
  } catch (error) {
    // test this by using an invalid ethereal username
    console.log()
    console.log('caught error', error, error.message)
    response.status = error.responseCode
    response.result = error.message
    // note: it is OK to always return a 200 and put the error in the response JSON (Facebook does this)
    res.status(200).json(response)
    /* 
      {"result":"queryA ETIMEOUT smtp.ethereal.email"} // maybe VPN
      from GitHub nodemailer: Check your firewall settings. Timeout usually occurs when you try to open a connection to a firewalled port either on the server or on your machine. Some ISPs also block email ports to prevent spamming. Nodemailer works on one machine but not in another. It's either a firewall issue, or your SMTP server blocks authentication attempts from some servers.
    
    */
  }
}

/* 
  DM: when I'm done and ready to hand this off to you, I'll put a todoMM here and then you can do the following tasks
  tasks for Moise:
  * understand how it works
  * make a video explaining each non-trivial line of code
  * 





*/
