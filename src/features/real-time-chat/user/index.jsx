// JavaScript (React)
import { useState, useContext } from 'react'
// import { useAuthState } from 'react-firebase-hooks/auth'
import { login, signup } from '../firebase'
import { UserContext } from './user-context-provider'
import Login from './login'
import Signup from './signup'

//(done) DM: todoMM: move to directory named user/index.jsx and add user-context.jsx to that directory. This way, as this app grows (it seems like it will be come quite large), it will be easier to keep track of what files are imported by what other files.

// todoDM: example for lesson on hoisting, const not hoisted, function declarations are hoisted
const User = ({ onAuthenticate }) => {
  // const [email, setEmail] = useState('')
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  // const handleLogin = () => {
  //   // Handle login
  //   onAuthenticate()
  // }

  // const handleSignup = () => {
  //   // Handle signup
  //   onAuthenticate()
  // }
  // function validateEmail(email) {
  //   const re =
  //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   return re.test(String(email).toLowerCase())
  // }
  const { setUser } = useContext(UserContext)
  // const [, , authError] = useAuthState()

  const handleLogin = (email, password) => {
    // if (!validateEmail(username)) {
    //   setError('Invalid email format')
    //   return
    // }
    // const email = `${username}@dummy.com`
    login(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        setUser(user)
        // ...
        onAuthenticate()
      })
      .catch((error) => {
        // const errorCode = error.code
        const errorMessage = error.message
        // Handle errors here
        setError(errorMessage)
      })
  }

  const handleSignup = (email, username, password) => {
    // if (!validateEmail(username)) {
    //   setError('Invalid email format')
    //   return
    // }
    // const email = `${username}@dummy.com`
    signup(email, password)
      .then((userCredential) => {
        // Signed in
        // userCredential.user
        //   .updateProfile({
        //     displayName: username,
        //   })
        //   .then(() => {
        const user = userCredential.user
        setUser(user)
        // ...
        // onAuthenticate()
        setIsLoggedIn(true)
        // })
      })
      .catch((error) => {
        // const errorCode = error.code
        const errorMessage = error.message
        // Handle errors here
        setError(errorMessage)
      })
  }
  // const handleLogin = async (email, password) => {
  //   try {
  //     const userCredential = await login(email, password)
  //     const user = userCredential.user
  //     setUser(user)
  //     onAuthenticate()
  //   } catch (error) {
  //     setError(error.message)
  //   }
  // }

  // const handleSignup = async (email, username, password) => {
  //   try {
  //     const userCredential = await signup(email, password)
  //     const user = userCredential.user
  //     setUser(user)
  //     setIsLoggedIn(true)
  //   } catch (error) {
  //     setError(error.message)
  //   }
  // }

  const toggleAuthenticationMode = () => {
    setIsLoggedIn(!isLoggedIn) // Switch between Login and Signup
  }
  // JavaScript (React)
  return (
    // <div className="flex items-center justify-center h-screen bg-gray-100 mx-2">
    //   <div className="bg-purple-500 text-white rounded-lg shadow-lg p-8 w-1/3 h-2/3 flex items-center justify-center">
    //     <div>
    //       <input
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         type="email"
    //         placeholder="Email"
    //         className="p-2 border-2 border-gray-200 rounded mb-2 w-full text-black"
    //       />
    //       <input
    //         value={username}
    //         // value={email}
    //         onChange={(e) => setUsername(e.target.value)}
    //         type="text"
    //         placeholder="Username"
    //         className="p-2 border-2 border-gray-200 rounded mb-2 w-full text-black"
    //       />
    //       <input
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         type="password"
    //         placeholder="Password"
    //         className="p-2 border-2 border-gray-200 rounded mb-2 w-full text-black"
    //       />
    //       {error && <p className="text-black">{error}</p>}
    //       <button
    //         onClick={handleLogin}
    //         className="p-2 mt-4 bg-pink-500 text-white rounded mb-2 w-full"
    //       >
    //         Login
    //       </button>
    //       <button onClick={handleSignup} className="p-2 bg-yellow-500 text-white rounded w-full">
    //         Signup
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div>
      {isLoggedIn ? (
        <Login
          handleLogin={handleLogin}
          error={
            error
            // || authError
          }
          toggleAuthenticationMode={toggleAuthenticationMode}
        />
      ) : (
        <Signup
          handleSignup={handleSignup}
          error={
            error
            // || authError
          }
          toggleAuthenticationMode={toggleAuthenticationMode}
        />
      )}
    </div>
  )
}
/*


React Firebase Hooks:
1. installations process:
  * i installed this the package: npm install react-firebase-hooks

2. import:
i imported { useAuth } from 'react-firebase-hooks/auth'

3. usage:
i declared a const [, , authError] = useAuth() state variable that i passed the toggleAuthenticationMode function as a prop to both components. i didn't declare a const [user] = useAuth() state variable because i'm using the UserContextProvider to manage the user state. when i tried to run i got the following error: 
(done)DM: check the import syntax is it a named import or a default import? (give me an answer to this question); Also, you imported useAuthState above which is a different name that you have here. MM: the above export is named export because it's inside curly braces. i commented out the import { useAuthState } from 'react-firebase-hooks/auth'. AI copilot answer: useAuthState and useAuth are both named exports from the 'react-firebase-hooks/auth' module, but they serve different purposes:

useAuthState: This is a hook that allows you to access the state of the current Firebase authentication. It returns an array containing the currently authenticated user (or null if no user is authenticated), a loading boolean, and an error object.
useAuth: This hook does not exist in the 'react-firebase-hooks/auth' module. If you're trying to use it, you might be confusing it with another hook or a hook from a different library. Always make sure to check the library's documentation to see what hooks and functions are available for use.

TypeError: (0 , react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuth) is not a function. 

4. solution:
AI prompt: The 'react-firebase-hooks' library has been deprecated and is no longer maintained. It's possible that the version you're using doesn't include the useAuth function.

You might want to consider using the 'react-firebase-hooks' successor library, 'reactfire', which is currently maintained by Firebase. It provides a similar set of hooks for Firebase services.

But the google search didn't mention that the 'react-firebase-hooks' has been deprecated. i paused there, and i'll continue with the tutorial to understand more. DM: yeah AI may be confused, you can check the GitHub page for react-firebase-hooks to see if it is currently being maintained.(ok)
*/

// DM: todoMM: please move the below comment into the file where you are using the new configuration, which is firebase.js I presume?
/*
the first project i created on firebase was called react-firebase-chat-app. The project was set up to use Cloud Firestore in Datastore mode. This mode can only be accessed from the Google Cloud Console. i could not create a normal database from the firebase console. i decided to create a second project called app-chat where i created a normal database. i replaced the previous project firebaseConfig with the ew one, but the authentication doesn't work.
i got the following error: Firebase: Error (auth/operation-not-allowed).
DM: ok, things can get tricky when you have existing code that does things in a certain way, then you make a configuration change like you describe here. The way to solve it is: whatever instructions you follow to set up app-chat, test out app-chat in a super-basic sample project, using any sample code that the instructions provided. You could try it real quickly in a codesandbox react instance: https://codesandbox.io/examples/package/react Once you are sure it works in a simple environment per the exact instructions you followed, only then try it in your chat project. If it doesn't work, check that the code in your chat project is doing the same thing as the example code provided. 
DM: todoMM: edit the next 2 lines to be sure you're using the correct Google Cloud/Firestore terminology:
before: real-time-chat Google Cloud Firestore in Datastore mode? OR Google Cloud Datastore?
after: app-chat: normal database? or Firebase Firestore Database?

*/

export default User
