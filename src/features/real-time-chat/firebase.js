/*
Steps to set up Firebase for your project:

1. Create a Firebase project: Visit the Firebase console(https://console.firebase.google.com/), 
  * click on "Add project", and follow the instructions to create a new project.

2. Register your app with Firebase: 
  * In the Firebase console, click on the "Web" icon to register your app. You'll be asked to provide your app's nickname. You can also choose to set up Firebase Hosting at this stage.

3. Add Firebase SDK to your app: 
  * After registering your app, you'll be presented with your Firebase SDK snippet. This contains the configuration for your Firebase project.
*/
import {
  // getApps,
  initializeApp,
} from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  // DM: todoMM: move this to the .env.local file, like you did with quiz3.js. NEVER put secrets in the codebase. This is a security risk. If anyone sees secret keys in your code they will not hire you because it will appear that you don't take security seriously. If any of the other properties in this object are secret, move them to .env.local as well (better safe than sorry).
  /*
  Steps i took to move the firebaseConfig to .env.local:
  1. add the following to .env.local:
    REACT_APP_API_KEY=AIzaSyDkDSHVPcfg
    REACT_APP_AUTH_DOMAIN=real-time-chat-78e91.firebaseapp.com
    REACT_APP_PROJECT_ID=real-time-chat-78e91
    REACT_APP_STORAGE_BUCKET=real-time-chat-78e91.appspot.com
    REACT_APP_MESSAGING_SENDER_ID=146694862195
    REACT_APP_APP_ID=1:146694862195:web:5807cc69a5fc7c6f5a4106
    REACT_APP_MEASUREMENT_ID=G-3FC7LLH74P

  3. replace the values in the firebaseConfig object with the following:
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,

  4. restart the server
  5. confirm that the app still works(but it didn't)

  blockers: i faced these two errors: "FirebaseError: Firebase: Error (auth/invalid-api-key)"" and "Firebase: Firebase App named '[DEFAULT]' already exists (app/duplicate-app)."
  attempted solution: i asked AI to help me and got the following response:

  The error message "Firebase: Error (auth/invalid-api-key)" indicates that the API key you're using to initialize Firebase is invalid. This could be due to a few reasons:

    1. The API key is not correctly set in the .env.local file.

    2. The .env.local file is not being correctly loaded.
    3. The environment variables are not being correctly accessed in your code.

    Here are some steps to debug this issue:

    1. Check your .env.local file and ensure that the REAL_TIME_CHAT_API_KEY variable is correctly set with the correct API key.

    2. Ensure that your .env.local file is in the root of your project directory.

    3. Make sure you restart your development server after adding new environment variables. Environment variables are loaded when the server starts, so any changes won't take effect until the server is restarted.

    4. If you're using Create React App, environment variables should start with REACT_APP_. If you're not using Create React App, you might need to use a package like dotenv to load the environment variables.

    5. In your code, you can add a console.log(process.env) to see all the environment variables and check if your variables are being loaded correctly.
i console logged process.env and got all the variables i set in .env.local, then i imported getApps on top of the file and added the following code:
  let app
  if (!getApps().length) {
    app = initializeApp(firebaseConfig)
  } else {
    app = getApps()[0]
  }

  But after all the above, i still got the same errors. i decided to pause there first and reverted the changes.

  */
  apiKey: 'AIzaSyDkDSHVPcfgxFq4ctp4ODGd68gsikQ8G7o',
  authDomain: 'real-time-chat-78e91.firebaseapp.com',
  projectId: 'real-time-chat-78e91',
  storageBucket: 'real-time-chat-78e91.appspot.com',
  messagingSenderId: '146694862195',
  appId: '1:146694862195:web:5807cc69a5fc7c6f5a4106',
  measurementId: 'G-3FC7LLH74P',
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}
console.log({ process: process.env })
console.log(firebaseConfig.apiKey)
/* 
variables: app, auth, DB
are initialized "in the module scope" (outside of any function or block) so that when they are imported into other files, they are already initialized and ready to use. Most importantly, they are initialized only once in the lifecycle of the app (until you reload the browser, which causes the whole app to start over), not every time they are imported by different files. We want them to be initialized only once, when the app is initially loaded (this is all happening in the browser, BTW).

DM: todoMM: this is very important to understand. ask AI to "restate this in other words" to be sure you fully understand it.

*/

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// let app
// if (!getApps().length) {
//   app = initializeApp(firebaseConfig)
// } else {
//   app = getApps()[0]
// }
// const analytics = getAnalytics(app)

//(done) DM: todoMM: you will need this in other files, so export it
// Initialize Firebase Auth
const auth = getAuth()
export { auth }

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


(done)DM: todoMM: this is good. Keep a careful list of the steps to setup firebase in this project. If you don't you will regret it later, I know from experience.

Steps for authentication:
  1. Go to the Firebase console(https://console.firebase.google.com/)
  2. Click on your project.
  3. In the left-hand menu, click on "Authentication".
  4. You will now be in the "Users" tab of the "Authentication" section.
  5. To enable or configure sign-in methods, click on the "Sign-in method" tab.
*/
