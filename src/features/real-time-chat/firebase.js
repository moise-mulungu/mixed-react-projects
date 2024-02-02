/*
Steps to set up Firebase for your project:

1. Create a Firebase project: Visit the Firebase console(https://console.firebase.google.com/), 
  * click on "Add project", and follow the instructions to create a new project.

2. Register your app with Firebase: 
  * In the Firebase console, click on the "Web" icon to register your app. You'll be asked to provide your app's nickname. You can also choose to set up Firebase Hosting at this stage.

3. Add Firebase SDK to your app: 
  * After registering your app, you'll be presented with your Firebase SDK snippet. This contains the configuration for your Firebase project.
*/
import { initializeApp } from 'firebase/app'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
import { collection } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

//(done) DM: whatever of the comments inside of the firebaseConfig you want to keep, move to a separate file firebase-config.readme.md to avoid cluttering up this file. This file will be much easier to read.
// Your web app's Firebase configuration.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_REAL_TIME_CHAT_API_KEY,
  authDomain: 'app-chat-1f5a4.firebaseapp.com',
  projectId: 'app-chat-1f5a4',
  storageBucket: 'app-chat-1f5a4.appspot.com',
  messagingSenderId: '825359150547',
  appId: process.env.NEXT_PUBLIC_REAL_TIME_CHAT_APP_ID,
  databaseURL: process.env.NEXT_PUBLIC_REAL_TIME_CHAT_DATABASE_URL,
}
/*
DM: note: do this after you get the new app-chat config working:
DM: this is where I gave you lots of info/hints about how to get the .env.local vars working. MM: the instructions were clear but i don't know how i couldn't understand them. after reading for the second time, i understood what to do, so easy; so for NextJS, you have to use NEXT_PUBLIC_ before the variable name. i have updated the instructions above. DM: cool
(done)DM: I forgot to put a "DM:" next to this, but I assume that the Git diff will alert you that I wrote it. This is the solution to your problem with .env.local env vars not working: So, in order to complete the tod-oMMs above, you'll have to work through this:
OK, I know the problem: your issue is that the below console.log is in client-side code. It is confusing that you can see the console.log (with correct env vars) ONCE in the terminal (on the server side) where you ran NPM run DEV, because in NextJS when you're using the "dev" command (see the package.json scripts for what "npm run dev" calls) it always runs client side code ONCE when the code compiles. Similarly, when you use "npm run build" the console.log below will also show once as it builds the production version of the site. HOWEVER, you want to use secrets in client-side code (remember this code is client-side code because it is called originally from src/pages, and because the functionality is triggered IN THE BROWSER by user actions in the browser EX login, send). 
Moise, ask AI to rephrase the above "in other words [with example]" if it is unclear. For debugging, you need to really understand how NextJS works.
SOLUTION - you need to use the NextJS solution to accessing secret vars in client-side code: search google on "NextJS DEV mode, how to use secret env vars in client side"
*/

/* 
variables: app, auth, DB
are initialized "in the module scope" (outside of any function or block) so that when they are imported into other files, they are already initialized and ready to use. Most importantly, they are initialized only once in the lifecycle of the app (until you reload the browser, which causes the whole app to start over), not every time they are imported by different files. We want them to be initialized only once, when the app is initially loaded (this is all happening in the browser, BTW).

*/

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

// Initialize Realtime Database
export const database = getDatabase()
/* 
(done)DM: don't export unnamed object literals like this. You can export each the usual way:
*/
export const auth = getAuth()

//(done) DM: you will need this in other files, so export it

//(done) DM: import into UserContextProvider (after you create it per other todo__MM)

// Export the auth object and the authentication functions
export const signup = (
  email,
  username,
  password
  // displayName
) => {
  // DM: createUserWithEmailAndPassword takes "positional parameters". You can see info about createUserWithEmailAndPassword by hovering over it in VSCode while holding down the control button. You'll see that the 3rd (and last) parameter is password. Firebase may have a createUserWithEmailUsernameAndPassword, but "username" typically is just like any other data, so you'd probably store username to the user table in the database here in a separate firebase command after creating the user.(ok)
  return createUserWithEmailAndPassword(auth, email, username, password)
  // .then((userCredential) => {
  //   // Set the displayName
  //   return userCredential.user
  //     .updateProfile({
  //       displayName: displayName,
  //     })
  //     .then(() => {
  //       // Reload the user to get the latest data
  //       return userCredential.user.reload().then(() => {
  //         // Re-fetch the current user
  //         return auth.currentUser
  //       })
  //     })
  // })
}

// DM: fine but make your changes in the above code, rather than starting over. It is much easier to see the diff and you can still revert easily. I'll show you how by commenting out this code and editing the above previous version(ok)
// export const signup = (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password)
// }

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const signOut = () => {
  return firebaseSignOut(auth)
}

// Initialize Firestore
const db = getFirestore()
export const usersCollection = collection(db, 'users')
export default db
