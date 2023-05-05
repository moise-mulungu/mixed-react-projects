/* 
	 npm install @react-email/render nodemailer
*/
import { render } from '@react-email/render'
import nodemailer from 'nodemailer'

import { myEmail } from '@/constants/portfolio/contact-form'

import FormattedContactEmail from '@/server/features/portfolio/format-contact-email'

// http://localhost:3000/api/portfolio/contact

/* 

POST body:
{
	location,
	telephone,
	email,
	firstName,
	lastName,
	message
}

*/

export default async function handler(req, res) {
  // https://react.email/docs/integrations/nodemailer

  console.log(req)
  const body = req.body

  // build the email body
  const emailHtml = render(<FormattedContactEmail {...body} />)

  // send the email
  const transporter = nodemailer.createTransport({
    // https://ethereal.email/
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      // from n
      user: 'my_user', // in .env
      pass: 'my_password', // in .env
    },
  })
  const options = {
    from: body.email, // be sure to validate proper email address in the client
    to: myEmail,
    subject: `Contact from: ${body.firstName}`,
    html: emailHtml,
  }

  const result = transporter.sendMail(options)
  // check result for success (or, put it into a try/catch if there is no return from sendMail
  // so client code can display a success message to the sender
  const success = result.error
    ? {}
    : {
        status: '200',
        result: 'success',
      }

  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses
  // 504 Gateway Timeout - This error response is given when the server is acting as a gateway and cannot get a response in time.
  // only problem would be if the email service is down)
  const serverError = { status: '504', result: 'success' }

  res.status(200).json(serverError ?? success)
}
