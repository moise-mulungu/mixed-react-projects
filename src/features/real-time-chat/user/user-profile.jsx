import { useState, useContext, useEffect } from 'react'
import { UserContext } from './user-context-provider'
import { updateProfile } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import db, { auth } from '../firebase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

const UserProfile = ({ setSelectedUser, setProfileVisible }) => {
  const [displayName, setDisplayName] = useState(user ? user.displayName : '')
  const [photoURL, setPhotoURL] = useState(user ? user.photoURL : '')
  const [selectedFile, setSelectedFile] = useState(null)

  const storage = getStorage()
  // DM: traditionally, the useState declarations come first in a component(ok)
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName)
      setPhotoURL(user.photoURL)
    }
  }, [user])

  const handleUpdateProfile = () => {
    //  This line creates a reference to a location in Firebase Storage where the user's profile photo will be stored
    const storageRef = ref(storage, `profilePhotos/${user.uid}`)
    // This line starts the process of uploading the user's selected file (presumably their new profile photo) to Firebase Storage
    const uploadTask = uploadBytesResumable(storageRef, selectedFile)
    // This line sets up a listener that will be called every time the upload state changes
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Handle the upload progress
      },
      (error) => {
        console.error('Error uploading file', error)
      },
      () => {
        // is used to update the user's profile in Firebase Authentication. It sets the user's display name and profile photo URL.
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          updateProfile(user, {
            displayName,
            photoURL: downloadURL,
          })
            .then(() => {
              //  is used to update the user's profile in Firestore. It sets the user's display name and profile photo URL in the document that represents the user.
              return setDoc(doc(db, 'users', user.uid), {
                displayName,
                photoURL: downloadURL,
              })
            })
            .then(() => {
              // is used to update the user object in the local state of your app. It sets the user's display name and profile photo URL in the user object.
              setUser({
                ...user,
                displayName,
                photoURL: downloadURL,
              })
              // sets up a listener for changes in the user's authentication state. If the user is still authenticated after the profile update, it updates the user object in the local state again, deselects the user, and hides the profile.
              const unsubscribe = auth.onAuthStateChanged((updatedUser) => {
                if (updatedUser) {
                  setUser(updatedUser)
                  setSelectedUser(null)
                  setProfileVisible(false)
                  unsubscribe()
                }
              })
            })
            // If any error occurs during the profile update, it's logged to the console with console.error.
            .catch((error) => {
              console.error('Error updating profile', error)
            })
        })
      }
    )
  }

  /*
  After implementing the above code, i encountered the following error: "1 Access to XMLHttpRequest at 'https://firebasestorage.googleapis.com/v0/b/app-chat-1f5a4.appspot.com/o?name=profilePhotos%2Fj0nwHQJVpgYxYPDvwTsm7g7ycNj1' from origin 'http://localhost:3005' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status."
  To fix that, i got an AI prompt to :
  1. create a file called cors.json in the root of your project with the following content:
  [
    {
      "origin": ["*"],
      "method": ["GET"],
      "maxAgeSeconds": 3600
    }
  ]
  2. run the following command in your terminal:
  firebase init or firebase login if not logged in yet.
  3. Open your terminal.
  4. Navigate to the root directory of your real-time-chat app.
  5. Run firebase init and follow the prompts to set up the services you want to use. Make sure to select Storage when asked which Firebase features you want to set up.
  6. After initialization, a firebase.json file will be created in the root directory of your real-time-chat app.
  7. Create a cors.json file in the same directory with the CORS configuration you provided.
  8. Run gsutil cors set cors.json gs://your-firebase-storage-bucket-url to set the CORS configuration for your Firebase Storage. Replace your-firebase-storage-bucket-url with the URL of your Firebase Storage bucket, which should look something like gs://app-chat-1f5a4.appspot.com.

I was blocked on step 8 because gsutil was not correctly installed on my machine, so i had to configure it first. i didn't finish the configuration because i was running out of time. i will come back to this later.
  */

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
            // type="text"
            type="file"
            // value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.files[0])}
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
