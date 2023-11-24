// JavaScript (React)
import { useState } from 'react'
import { login, signup } from '../firebase'
import { useContext } from 'react'
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
          error={error}
          toggleAuthenticationMode={toggleAuthenticationMode}
        />
      ) : (
        <Signup
          handleSignup={handleSignup}
          error={error}
          toggleAuthenticationMode={toggleAuthenticationMode}
        />
      )}
    </div>
  )
}
// MM: DM: this component is not complete yet, i'll add other features to it later once i am done with either websocket or firebase

export default User
