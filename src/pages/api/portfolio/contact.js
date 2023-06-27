import { render } from '@react-email/render'
import nodemailer from 'nodemailer'
import { myEmail } from '@/constants/portfolio/contact-form'
import FormattedContactEmail from '@/server/features/portfolio/formatted-contact-email.jsx'

// http://localhost:3005/api/portfolio/contact

const testToEmail = 'mcdevv@outlook.com' // ''
// const testToEmail = 'dmckeeve9@gmail.com' // ''
const testHtml = '<div>test html</div>' // ''
// const testReqBody = { email: 'dmckeeve9@gmail.com', firstName: 'testFirstName' }
const testReqBody = { email: process.env.ETHEREAL_EMAIL_USERNAME, firstName: 'testFirstName' } // undefined

const toEmail = testToEmail || myEmail

export default async function handler(req, res) {
  // note: the default req.body means you can test this by going directly to the api url: http://localhost:3005/api/portfolio/contact
  const body = req.body || testReqBody
  const { email: fromEmail, firstName } = body
  console.log({ reqBody: req.body, body })

  // build the email body
  const emailHtml = testHtml || render(<FormattedContactEmail {...body} />)

  // https://react.email/docs/integrations/nodemailer
  /* 
    // SETUP the testing EMAIL service:
    MOVE to a .js file in src/server with an option to return test data
    * go to the Ethereal URL: ethereal.email
    * create account
    * "download as CSV" and view file as text, not via Excel
    * create in the main repo directory a .env.local and copy to it
      * the contents of the CSV download
      * the contents of the "Nodemailer configuration" section in the page shown when you "create account"
      * all that you copy into .env.local should be as comments, i.e., each line is preceded by "# " 
    * add two (uncommented) lines
      ETHEREAL_EMAIL_USERNAME=fill in value from the "Nodemailer configuration" section.
      ETHEREAL_EMAIL_PASSWORD=fill in value from the "Nodemailer configuration" section.
    * FUTURE NOTE: when you put your portfolio site into production at Vercel, you'll get a NEW ethereal.email account specially for production, then create the same "environment variables" in .env.production 
      * note in .gitignore that all .env.* files will not be included in the github repository
      * security: these must never be in any repo, because they are secret
      * the "environment variables" in .env.production you'll enter manually in the Vercel website when you create your production site

;gfo GitHub 

    
  // SETUP the production EMAIL service: 
  // NEXT set up ... Do a quick search, "how to send email from my contact page" - be sure I understand what this "forwarding" service is about
  Nodemailer is supported by https://forwardemail.net/en might as well use it, it's free
  * option: send as if from GMail: https://forwardemail.net/en/guides/send-mail-as-gmail-custom-domain
  * option: send as if from the site hosting service that provides your custom domain name: namecheap, godaddy, etc. (Vercel is listed ... Hmm, I didn't know Vercel offered domain names)
  ... Make a server .js file for getting the test smtp stuff or getting the real one


    TROUBLESHOOTING
    * login and look at mailbox: https://ethereal.email/login
    * 
    
    NextJS API routes:
    * any console.logs will be in the terminal where NextJS is running, not in the browser
    * 
    * 
    * 
    * 
    * a
  */

  // the next three function calls were copied from: https://react.email/docs/integrations/nodemailer#3-convert-to-html-and-send-email
  // create the email sending mechanism
  const transporterData = {
    // https://ethereal.email/
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      // user: 'bogus username to test the error response', // for testing the catch block
      user: process.env.ETHEREAL_EMAIL_USERNAME, // in .env.*
      pass: process.env.ETHEREAL_EMAIL_PASSWORD, // in .env.*
    },
  },
  // https://nodemailer.com/about/
  const transporter = nodemailer.createTransport(transporterData)
  // create the email
  const options = {
    from: fromEmail, // be sure to validate proper email address in the client
    to: toEmail,
    subject: `Contact message from: ${firstName}`,
    text: 'Hello to myself!',
    // html: testHtml || emailHtml,
  }
  console.log('options', options)

  // send the email
  const response = { status: '200', result: 'success' }

  /* error handling: return a message so that the client can know if success or error */
  try {
    const result = await transporter.sendMail(options)
    console.log()
    console.log('result', result)
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses
    // 504 Gateway Timeout - This error response is given when the server is acting as a gateway and cannot get a response in time.
    // only likely problem is if the email service is down)
    const serverError = result.error ? { status: '504', result: 'success' } : undefined
    res.status(200).json(serverError ?? response)
  } catch (error) {
    // test this but using an invalid ethereal username
    console.log()
    console.log('caught error', error, error.message)
    response.status = error.responseCode
    response.result = error.message
    // note: it is OK to return a 200 and put the error in the response JSON (Facebook does this)
    res.status(200).json(response)
  }
}
