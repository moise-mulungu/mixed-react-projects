import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase'
import WeeklyMeetingForm from '../weekly-meeting-form'

export default function CollectorAuthenticationForm(props) {
  console.log('props:', props)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [collectorCode, setCollectorCode] = useState('')
  const [fullName, setFullName] = useState('')
  const [fundName, setFundName] = useState('')
  const [address, setAddress] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Submitting form with values:', {
      email,
      password,
      collectorCode,
      fullName,
      fundName,
      address,
    })

    // Validate email
    const emailRegex = /.+@.+/
    if (!emailRegex.test(email)) {
      console.error('Invalid email format')
      return
    }

    try {
      // create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log('User created with ID: ', user.uid)

      // add document to Firestore
      const docRef = await addDoc(collection(db, 'collectors'), {
        uid: user.uid, // store the user's ID
        email: user.email,
        collectorCode,
        fullName,
        fundName,
        address,
      })
      console.log('Document written with ID: ', docRef.id)

      // Call onFormSubmit prop to update isAuthenticated state
      if (typeof props.onFormSubmit === 'function') {
        props.onFormSubmit(true, 'collector')
      } else {
        console.error('onFormSubmit is not a function', props.onFormSubmit)
      }
      // props.onFormSubmit()
      setIsAuthenticated(true)
      setEmail('')
      setPassword('')
      setCollectorCode('')
      setFullName('')
      setFundName('')
      setAddress('')
    } catch (e) {
      setIsAuthenticated(false)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200">
      <form onSubmit={handleSubmit} className="w-3/4 space-y-4 bg-white p-6 rounded shadow-lg">
        <div className="mb-4">
          <a href="#" onClick={() => props.onRoleSwitch('admin')}>
            Switch to Admin Authentication
          </a>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline"
        />
        <input
          value={collectorCode}
          onChange={(e) => setCollectorCode(e.target.value)}
          type="text"
          placeholder="Collector Code"
          className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline"
        />
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          placeholder="Full Name"
          className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline"
        />
        <input
          value={fundName}
          onChange={(e) => setFundName(e.target.value)}
          type="text"
          placeholder="Fund Name"
          className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline"
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Address"
          className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="w-full px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      {isAuthenticated && <WeeklyMeetingForm />}
    </div>
  )
}

/*
I restructured the solidarity-fund-collect project, I:
1. created four components; the SolidarityCollectFund as the parent component, the UserAuthentication which deals with the admins and the collector authentication,the CollectorAuthenticationForm, the SolidarityFundForm which is used by the admins to register and generate a code for collectors to open the app, and the WeeklyMeetingForm which will be in excel-like format and used by collectors to collect data, and finally the 
2. authentication processes: the first is for admin(are those who receive data from collector), and the second is for the collector(those who are in charge of collecting data on the ground)
3. authentication links: set up two links on the page one for admins and the other for collectors
  * the logic here is the admin will login and register a collector name with a generated code that will help the collector to login to his account.
4. on the collector-form, there should be a link to take him back to the initial page of the two links.
  * i faced an error that the return button to the initial page doesn't work after implementing the required logic in the collector-authentication-form
5. After submitting the collector-authentication-form, the weekly-meeting-form page has to open which consist of an excel like file with the help of react-data-grid.
  * On this point the logic that is found in the solidarity-collect-fund doesn't allow the weekly-meeting-form to display, i tried many attempts but i failed.
6. i tried to fix the two issues by adding console.log to check for the onSubmit function but i couldn't resolve any of the two. i'll continue with next time.

To test the app:
1. open the: http://localhost:3005/solidarity-collect-fund-page
2. login as an admin, click on the open-form button, then submit the form
3. login as a collector and fill the form
4. these are steps to test for now, the other features will come later. 
*/
