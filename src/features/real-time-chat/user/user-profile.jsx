import { useState, useContext, useEffect } from 'react'
import { UserContext } from './user-context-provider'
import { updateProfile, getAuth } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import db, { auth } from '../firebase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

//(done) DM: don't force the user to upload a photo file. Typically that is optional (if someone doesn't want to put up a picture). So, make it an optional field and indicate that in the UI. I tried to change my name without uploading a photo and it threw an error and wouldn't submit. Also, when I chose a file, it didn't work, so I can't test changing my display name.

const UserProfile = ({ setSelectedUser, setProfileVisible }) => {
  const [displayName, setDisplayName] = useState(user ? user.displayName : '')
  const [photoURL, setPhotoURL] = useState(user ? user.photoURL : '')
  //(done) DM: give this a more specific name. what kind of file/for what purpose the file?
  // const [selectedFile, setSelectedFile] = useState(null)
  const [selectedProfilePhoto, setSelectedProfilePhoto] = useState(null)

  //(done) DM: should this run on every render? or only when the user (or some other data) changes? MM: The getStorage() function is used to initialize a reference to Firebase Storage. This line of code is outside of any React hooks, so it will run every time the component re-renders. However, the getStorage() function is a memoized function, which means that it will only initialize a reference to Firebase Storage once. The reference will be stored in memory and returned on subsequent calls to getStorage(). So, the getStorage() function will only run once, even though it's outside of any React hooks. DM: super, it is called upon each render but the return value is cached and returned on subsequent calls. I'll add a comment as it is not obvious that it is cached.(ok)
  const storage = getStorage() // return value is cached
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName)
      setPhotoURL(user.photoURL)
    }
  }, [user])

  const updateProfileAndFirestore = async (userPhotoUrl) => {
    await updateProfile(user, {
      displayName,
      photoURL: userPhotoUrl,
    })

    // .then(() => {
    //  is used to update the user's profile in Firestore. It sets the user's display name and profile photo URL in the document that represents the user.
    //   return setDoc(doc(db, 'users', user.uid), {
    //     displayName,
    //     photoURL: downloadURL,
    //   })
    // })
    await setDoc(doc(db, 'users', user.uid), {
      displayName,
      photoURL: userPhotoUrl,
    })
    // .then(() => {
    // is used to update the user object in the local state of your app. It sets the user's display name and profile photo URL in the user object.
    console.log('displayName:', displayName)
    console.log('userPhotoUrl:', userPhotoUrl)
  }

  const handleUpdateProfile = async () => {
    if (!user) {
      console.error('User is not defined')
      return
    }
    /* 
      (done)DM: todoMM: Combine the if and else block into one block. By doing them separately the code is hard to read, and hard to tell what is the difference between with or without uploaded file. Also, the code is repetitive, which is a "code smell". (which will always invite extra scrutiny from reviewers, tech leads, etc.) First step: convert the .then().catch() to async/await.


      step 1: convert all .then().catch() to async/await and try/catch
      * I did the else block for you, so you can see an example
      * you can convert the if block to async/await and try/catch

      step 2: combine the if and else blocks into one block that handles both situations (it will be easy now)
    
      Why use async/await? 
      * it is easier to read EX returning the result of a call (which is a promise) is syntactically correct, but hard to read and a bit of a code smell.
      * likely easier to debug your profilePhoto file code if you are doing separate await calls for each firebase action
      * you won't need the repeated code as getDownloadURL is the only difference between the two blocks
      * async/await shows you are up-to-date with modern JS. then/catch is the old way of doing things. 
        * async/await is the new way and really helps with this exact problem of repeated code.
        * it is good to know both ways, so you can read/edit older code, but async/await is the preferred way to do things now.

      DM: still not done because step 2 "Combine the if and else block into one block" is not done. you still have the code separated into if and else blocks and you still have repeated code: updateProfile, setDoc, setUser are each called twice but the only difference in the repetitions of those calls is the value of userPhotoUrl. How can you make the code more succinct? MM: I think i did it. i combined the if and else blocks into one block. i also removed the repeated code. i think it's done now. DM: you're getting warmer, but if photo is not edited, what happens? it appears that nothing happens.


    */
    try {
      // const userPhotoUrl = user.photoURL // default to the existing photo URL

      //(done) DM:: todoMM: I don't see an ELSE clause for this IF clause. How will you handle the case where the user does not upload a photo? That scenario is not handled in the code, nothing happens if no photo uploaded. Ask yourself: what is the difference between photo uploaded or not? Then, think of how you can adjust the code so that the differences between selectedProfilePhoto or not are held in variables. MM: hum! that's was the solution to the username update! good
      let userPhotoUrl = user.photoURL // default to the existing photo URL
      if (selectedProfilePhoto) {
        // Only start the upload process if a file has been selected
        //  This line creates a reference to a location in Firebase Storage where the user's profile photo will be stored
        const storageRef = ref(storage, `profilePhotos/${user.uid}`)
        // This line starts the process of uploading the user's selected file (presumably their new profile photo) to Firebase Storage
        const uploadTask = uploadBytesResumable(storageRef, selectedProfilePhoto)
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
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              userPhotoUrl = downloadURL

              // Now you can update the user's profile with the new photo URL
              updateProfileAndFirestore(userPhotoUrl)
            })
          }
        )

        // userPhotoUrl = await getDownloadURL(uploadTask.snapshot.ref)
      } else {
        // Handle the case where no photo is uploaded
        // For example, you might want to set userPhotoUrl to a default image
        // userPhotoUrl = 'url-to-default-image'
        updateProfileAndFirestore(userPhotoUrl)
      }
      // }
      // () => {
      // is used to update the user's profile in Firebase Authentication. It sets the user's display name and profile photo URL.
      // getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      //   updateProfile(user, {
      //     displayName,
      //     photoURL: downloadURL,
      //   })
      setUser((prevUser) => ({
        ...prevUser,
        displayName,
        photoURL: userPhotoUrl,
      }))
      /*
        MM: DM: I attempted for a second time to fix the username update, but it still doesn't work. i don't know why. i tried to console.log the displayName and userPhotoUrl, but i don't find any clue. i tried to look back to commit history but i didn't see any major change that could have caused this bug.
        */
      // }
      // else {
      //   await updateProfile(user, {
      //     displayName,
      //     photoURL: user.photoURL, // Keep the existing photo URL
      //   })

      //   await setDoc(doc(db, 'users', user.uid), {
      //     displayName,
      //     photoURL: user.photoURL, // Keep the existing photo URL
      //   })

      //   setUser({
      //     ...user,
      //     displayName,
      //     photoURL: user.photoURL, // Keep the existing photo URL
      //   })
      // }

      // DM: this is a question only, no need to code anything now: how is this listener cleaned up when the component unmounts? Usually we do that by returning a "cleanup function" from the useEffect callback. DM: your answer? MM: The unsubscribe function returned by auth.onAuthStateChanged is called to clean up the listener when the user is signed in.
      // sets up a listener for changes in the user's authentication state. If the user is still authenticated after the profile update, it updates the user object in the local state again, deselects the user, and hides the profile. DM: these comments are very helpful
      const unsubscribe = auth.onAuthStateChanged((updatedUser) => {
        console.log('updatedUser', updatedUser)

        // DM: this tells us exactly what !!updatedUser really means
        const userIsSignedIn = !!updatedUser
        if (userIsSignedIn) {
          setUser(updatedUser)
          setSelectedUser(null)
          setProfileVisible(false)
          unsubscribe()
        } else {
          /*
        (done)DM: this is a question only, no need to code anything now: if !updatedUser what does this mean? do you need to catch an error? Your answer? 
        MM: In Firebase, auth.onAuthStateChanged is a listener that triggers whenever the user's sign-in state changes. The callback function receives the updated user object. If the user is signed in, updatedUser will be a User object. If the user is not signed in, updatedUser will be null. DM: good. I changed the code to reflect this information in the variable names and error messages.MM: ok

        So, if !!updatedUser is false, it means that the user is not signed in. This could occur if the user signs out, if the user's session expires, or if the user's account is deleted.
        */
          // If !updatedUser, it means the user is not authenticated. You can handle this case as you see fit.
          console.error(
            // DM: this way, you'll have a nice error message in the console. You can also use console.warn() to get a yellow warning message in the console, if hte issue doesnt merit an error message (i.e., if it will happen sometimes and is not a big deal). )
            "User is is not signed in (not authenticated). This could occur if the user signs out, if the user's session expires, or if the user's account is deleted"
          )
        }
      })
    } catch (error) {
      // If any error occurs during the profile update, it's logged to the console with console.error.
      console.error('Error updating profile', error)
    }
  }

  // DM: this code does the exact same thing as the commented-out code that follows it. I rewrote this as async/await and try/catch, so you could see an example and compare to the then-catch.
  //     try {
  //       const userPhotoUrl = user.photoURL // to avoid repeated code
  //       await updateProfile(user, {
  //     displayName,
  //     photoURL: userPhotoUrl, // Keep the existing photo URL
  //   })
  //   await setDoc(doc(db, 'users', user.uid), {
  //     displayName,
  //     photoURL: userPhotoUrl, // Keep the existing photo URL
  //   })
  //   setUser({
  //     ...user,
  //     displayName,
  //     photoURL: userPhotoUrl, // Keep the existing photo URL
  //   })
  //   const unsubscribe = auth.onAuthStateChanged((updatedUser) => {
  //     if (updatedUser) {
  //       setUser(updatedUser)
  //       setSelectedUser(null)
  //       setProfileVisible(false)
  //       unsubscribe()
  //     }
  //   })

  // } catch (error) {
  //   console.error('Error updating profile', error)
  // }
  // return

  // // If no file has been selected, just update the display name
  // updateProfile(user, {
  //   displayName,
  //   photoURL: user.photoURL, // Keep the existing photo URL
  // })
  //   .then(() => {
  //     return setDoc(doc(db, 'users', user.uid), {
  //       displayName,
  //       photoURL: user.photoURL, // Keep the existing photo URL
  //     })
  //   })
  //   .then(() => {
  //     setUser({
  //       ...user,
  //       displayName,
  //       photoURL: user.photoURL, // Keep the existing photo URL
  //     })

  //     const unsubscribe = auth.onAuthStateChanged((updatedUser) => {
  //       if (updatedUser) {
  //         setUser(updatedUser)
  //         setSelectedUser(null)
  //         setProfileVisible(false)
  //         unsubscribe()
  //       }
  //     })
  //   })
  //   .catch((error) => {
  //     console.error('Error updating profile', error)
  //   })
  //   }
  // }

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

DM: just checking if you saw these comments?
DM: these instructions may be designed for a new project, not an existing project? For example, I see "firebase init". You can seriously mess up an existing project by following instructions that are for a new project. It might be relatively simple to set up CORS for your existing project. 
DM: when you ask AI for assistance, be sure to give key context: "existing app, NextJS, connecting to firebase from the client side, [the REST of your question goes here]"
DM: the above often says to put new files in the root directory of your app, but you're putting them in this local directory. "npm run dev" is run from the root directory of your app, so usually that is where configuration files should go. 
DM: You should read NextJS instructions for CORS for client-side requests (server-side will be different).
DM: keep going as you are, but note that one of the advantages of putting firebase stuff in server-side (src/pages/api/real-time-chat.js) is you don't have to worry about CORS. But, go ahead and try to get it working client-side. You'll learn a lot, and it is not necessary now to do all the work of moving firebase interaction to the server side.


  */

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setProfileVisible(false)
        }
      }}
    >
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
            onChange={(e) => setSelectedProfilePhoto(e.target.files[0])}
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
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => setProfileVisible(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
