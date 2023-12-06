import { useState } from 'react'

export default function Login({ handleLogin, error, toggleAuthenticationMode }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 mx-2">
      <div className="bg-purple-500 text-white rounded-lg shadow-lg p-8 w-1/3 h-2/3 flex items-center justify-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">Login</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="p-2 border-2 border-gray-200 rounded mb-2 w-full text-black"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-2 border-2 border-gray-200 rounded mb-2 w-full text-black"
          />
          {error && <p className="text-black">{error}</p>}
          <button
            onClick={() => handleLogin(email, password)}
            className="p-2 mt-4 bg-pink-500 text-white rounded mb-2 w-full"
          >
            Login
          </button>
{/*           <button
            onClick={toggleAuthenticationMode}
            className="p-2 mt-4 bg-yellow-500 text-white rounded mb-2 w-full"
          >
            Signup
          </button> */}
        </div>
      </div>
    </div>
  )
}
