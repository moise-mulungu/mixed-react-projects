import { useState, useContext, useEffect } from 'react'
import { UserContext } from './user-context-provider'
import { updateProfile } from 'firebase/auth'

const UserProfile = ({ setSelectedUser, setProfileVisible }) => {
  const [displayName, setDisplayName] = useState(user ? user.displayName : '')
  const [photoURL, setPhotoURL] = useState(user ? user.photoURL : '')

  // DM: traditionally, the useState declarations come first in a component(ok)
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName)
      setPhotoURL(user.photoURL)
    }
  }, [user])

  const handleUpdateProfile = () => {
    updateProfile(user, {
      displayName,
      photoURL,
    })
      .then(() => {
        return user.reload()
      })
      .then(() => {
        setUser(user)
        setSelectedUser(null) // Clear the selected user
        setProfileVisible(false) // Close the profile
      })
      .catch((error) => {
        console.error('Error updating profile', error)
      })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
      <div className="p-8 bg-white shadow-md rounded">
        <h2 className="text-2xl text-purple-500 font-bold mb-5 text-center">User Profile</h2>
        <div className="flex items-center justify-center mb-5">
          <img className="w-24 h-24 rounded-full" src={photoURL} alt="Profile" />
        </div>
        <div className="mb-4">
          <label className="block text-purple-500 text-sm font-bold mb-2" htmlFor="displayName">
            Display Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-purple-500 text-sm font-bold mb-2" htmlFor="photoURL">
            Photo URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="photoURL"
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleUpdateProfile}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
