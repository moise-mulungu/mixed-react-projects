const nodemailer = require('nodemailer')
// really better to use .env.local (you don't have to do the next line in NEXTJS, but since this is a script run independent of nextjs, we'll do it)
require('dotenv').config({ path: './.env.local' })

let mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
})

let mailDetails = {
  from: 'xyz@gmail.com',
  to: 'abc@gmail.com',
  subject: 'Test mail',
  text: 'Node.js testing mail for GeeksforGeeks',
}

mailTransporter.sendMail(mailDetails, function (err, data) {
  if (err) {
    console.log('Error Occurs', err)
  } else {
    console.log('Email sent successfully')
  }
})

// node scripts/temp-test-nodemailer-gmail.js

/* 

setup:

Now open the link https://myaccount.google.com/lesssecureapps to Allow less secure apps: ON. 
Then use 
MM: DM: google has disabled less secure apps by default since 2022. but i went through other steps to enable, but it still didn't work.
node scripts/temp-test-nodemailer-gmail.js
to run the above code. It will send the email using gmail account. 





*/
