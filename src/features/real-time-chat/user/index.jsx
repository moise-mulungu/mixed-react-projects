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
  // DM: todoMM: rename to isLoggedIn - is more clear
  const [isLogin, setIsLogin] = useState(true)

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
        const user = userCredential.user
        setUser(user)
        // ...
        // onAuthenticate()
        setIsLogin(true)
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
  //     setIsLogin(true)
  //   } catch (error) {
  //     setError(error.message)
  //   }
  // }

  const toggleAuthenticationMode = () => {
    setIsLogin(!isLogin) // Switch between Login and Signup
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
      {isLogin ? (
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
DM: todoMM: check the import syntax is it a named import or a default import? (give me an answer to this question); Also, you imported useAuthState above which is a different name that you have here.
TypeError: (0 , react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuth) is not a function. 

4. solution:
AI prompt: The 'react-firebase-hooks' library has been deprecated and is no longer maintained. It's possible that the version you're using doesn't include the useAuth function.

You might want to consider using the 'react-firebase-hooks' successor library, 'reactfire', which is currently maintained by Firebase. It provides a similar set of hooks for Firebase services.

But the google search didn't mention that the 'react-firebase-hooks' has been deprecated. i paused there, and i'll continue with the tutorial to understand more. DM: yeah AI may be confused, you can check the GitHub page for react-firebase-hooks to see if it is currently being maintained.
*/

export default User
