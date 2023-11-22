// JavaScript (React)
import { useState } from 'react'

const User = ({ onAuthenticate }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Handle login
    onAuthenticate()
  }

  const handleSignup = () => {
    // Handle signup
    onAuthenticate()
  }

  // JavaScript (React)
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 mx-2">
      <div className="bg-purple-500 text-white rounded-lg shadow-lg p-8 w-1/3 h-2/3 flex items-center justify-center">
        <div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            className="p-2 border-2 border-gray-200 rounded mb-2 w-full"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-2 border-2 border-gray-200 rounded mb-2 w-full"
          />
          <button
            onClick={handleLogin}
            className="p-2 mt-4 bg-pink-500 text-white rounded mb-2 w-full"
          >
            Login
          </button>
          <button onClick={handleSignup} className="p-2 bg-yellow-500 text-white rounded w-full">
            Signup
          </button>
        </div>
      </div>
    </div>
  )
}
// MM: DM: this component is not complete yet, i'll add other features to it later once i am done with either websocket or firebase

export default User
