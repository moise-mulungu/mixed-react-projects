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
// import { getAnalytics } from 'firebase/analytics'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  // DM: todoMM: move this to the .env.local file, like you did with quiz3.js. NEVER put secrets in the codebase. This is a security risk. If anyone sees secret keys in your code they will not hire you because it will appear that you don't take security seriously. If any of the other properties in this object are secret, move them to .env.local as well (better safe than sorry).
  apiKey: 'AIzaSyDkDSHVPcfgxFq4ctp4ODGd68gsikQ8G7o',
  authDomain: 'real-time-chat-78e91.firebaseapp.com',
  projectId: 'real-time-chat-78e91',
  storageBucket: 'real-time-chat-78e91.appspot.com',
  messagingSenderId: '146694862195',
  appId: '1:146694862195:web:5807cc69a5fc7c6f5a4106',
  measurementId: 'G-3FC7LLH74P',
}

/* 
variables: app, auth, DB
are initialized "in the module scope" (outside of any function or block) so that when they are imported into other files, they are already initialized and ready to use. Most importantly, they are initialized only once in the lifecycle of the app (until you reload the browser, which causes the whole app to start over), not every time they are imported by different files. We want them to be initialized only once, when the app is initially loaded (this is all happening in the browser, BTW).

DM: todoMM: this is very important to understand. ask AI to "restate this in other words" to be sure you fully understand it.

*/

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

// DM: todoMM: you will need this in other files, so export it
// Initialize Firebase Auth
const auth = getAuth()

// DM: todoMM: import into UserContextProvider (after you create it per other todoMMm)
// Export the auth object and the authentication functions
export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

// Initialize Firestore
const db = getFirestore()
export default db

/*


DM: todoMM: this is good. Keep a careful list of the steps to setup firebase in this project. If you don't you will regret it later, I know from experience.

Steps for authentication:
  1. Go to the Firebase console(https://console.firebase.google.com/)
  2. Click on your project.
  3. In the left-hand menu, click on "Authentication".
  4. You will now be in the "Users" tab of the "Authentication" section.
  5. To enable or configure sign-in methods, click on the "Sign-in method" tab.
*/
