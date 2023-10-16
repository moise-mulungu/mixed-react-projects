// 1. import useState
import { useState } from 'react'
import { contactFormText } from '@/constants/portfolio/contact-form'
import {
  myEmail,
  myPhone,
  myLocation,
  contactFormHeading,
  myAddress,
} from '@/constants/portfolio/contact-form'

// DM: future plan: search "react send email" to find out how to send a gmail from a react component.

// DM: events perform side effects, they do not return values. this is where you'd do whatever is needed to generate the email message. We'll use the referenced values later, though.

import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function ContactForm() {
  // 2. set up our useState to reflect a name, email, and message when sending an email.
  const [mailerState, setMailerState] = useState({
    name: '',
    email: '',
    message: '',
  })

  // 3. set up a function to handle the changes when we type into our future input boxes.
  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  // 4.  create a function that actually posts to the route and attach it to the form
  const submitEmail = async (e) => {
    e.preventDefault()
    alert(`${mailerState.name}
    ${mailerState.email}
    ${mailerState.message}`)
    return

    console.log({ mailerState })
    const response = await fetch('http://localhost:3001/api/portfolio/contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res
        console.log(resData)
        if (resData.status === 'success') {
          alert('Message Sent')
        } else if (resData.status === 'fail') {
          alert('Message failed to send')
        }
      })
      .then(() => {
        setMailerState({
          email: '',
          name: '',
          message: '',
        })
      })
  }

  return (
    <section className="relative isolate bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                />
              </svg>
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">{contactFormHeading}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">{contactFormText}</p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">
                    Address (Optional) (Moise, asking for address is not customary, maybe just ask
                    for Location and let the put whatever they want there, or you could ask for an
                    optional URL to their web site(ok)).
                  </span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  {myAddress}
                  <br />
                  {myLocation}
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone (optional)</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="tel:+243 (89) 4949006">
                    {myPhone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="mailto:hello@example.com">
                    {myEmail}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          onSubmit={submitEmail}
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    placeholder="Name"
                    onChange={handleStateChange}
                    value={mailerState.name}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="given-email"
                    placeholder="Email"
                    onChange={handleStateChange}
                    value={mailerState.email}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Message"
                    onChange={handleStateChange}
                    value={mailerState.message}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

// MM: DM: after implementing the required steps for the email functionality with Node.js, React.js, Nodemailer, and OAuth2, am blocked when submitting the form by getting the following error: failed to fetch from const response = await fetch('http://localhost:3001/send'. but am at 85% of the code success.

// MM: DM: the code suggested by the SiderAI: but i am still working on this
// import { useState } from 'react'

// export default function ContactForm() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault() // Perform form submission logic here
//     console.log('Message sent!')
//   }

//   return (
//     <section className="relative isolate bg-gray-900">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
//         <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
//           <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
//             <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
//                   Name
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     autoComplete="given-name"
//                     placeholder="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div className="sm:col-span-2">
//                 <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
//                   Email
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     autoComplete="given-email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-semibold leading-6 text-white"
//                 >
//                   Message
//                 </label>
//                 <div className="mt-2.5">
//                   <textarea
//                     name="message"
//                     id="message"
//                     rows={4}
//                     placeholder="Message"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="mt-8 flex justify-end">
//               <button
//                 type="submit"
//                 className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </section>
//   )
// }
