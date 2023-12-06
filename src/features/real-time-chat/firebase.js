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
  // DM: todoMM: move this to the .env.local file, like you did with quiz3.js. NEVER put secrets in the codebase. This is a security risk. If anyone sees secret keys in your code they will not hire you because it will appear that you don't take security seriously. If any of the other properties in this object are secret, move them to .env.local as well (better safe than sorry, but only if they are secret!).
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

  blockers: i faced these two errors: "FirebaseError: Firebase: Error (auth/invalid-api-key)" and "Firebase: Firebase App named '[DEFAULT]' already exists (app/duplicate-app)."
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

  DM: this are just strings that you are moving from one place to another. you're expectation should be that 0 problem/changes in the app. If there is a problem, then console.log the process.env.ENV_VAR_NAME to see if it is correct. 
  DM: todoMM: only put the secrets in .env.local. the API key definitely, and maybe your messaging sender but only if it is a secret.  
  DM: todoMM: .env.local is shared global file, so put something more specific in your variable names, such as REAL_TIME_CHAT_API_KEY. MM: i think i mentioned all the steps that i took above, but i encountered errors and i had to revert the changes. i added console.log and got the server running correctly, i don't what could be the problem. i will try again and see if i can get it working. DM: OK, eventually you will have to use .env.local vars, so go ahead now and rename them everywhere as I suggested because REACT_APP_ is not specific at all.

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

  */

  // DM: just to be sure I mentioned it: only apiKey is necessary to be treated as secrets. Maybe one or two others, but not all of them. When you publish to Vercel, it will be a lot of tedious work to set up these env vars for production, so better if you only move them to .env.local if they are truly secret. EX password is secret, username is not. apiKey is secret, authDomain is not.
  apiKey: process.env.NEXT_PUBLIC_REAL_TIME_CHAT_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_REAL_TIME_CHAT_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_REAL_TIME_CHAT_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_REAL_TIME_CHAT_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_REAL_TIME_CHAT_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_REAL_TIME_CHAT_APP_ID,
}
/*
DM: note: do this after you get the new app-chat config working:
DM: this is where I gave you lots of info/hints about how to get the .env.local vars working. MM: the instructions were clear but i don't know how i couldn't understand them. after reading for the second time, i understood what to do, so easy; so for NextJS, you have to use NEXT_PUBLIC_ before the variable name. i have updated the instructions above. DM: cool
DM: todoMM: I forgot to put a "DM:" next to this, but I assume that the Git diff will alert you that I wrote it. This is the solution to your problem with .env.local env vars not working: So, in order to complete the todoMMs above, you'll have to work through this:
OK, I know the problem: your issue is that the below console.log is in client-side code. It is confusing that you can see the console.log (with correct env vars) ONCE in the terminal (on the server side) where you ran NPM run DEV, because in NextJS when you're using the "dev" command (see the package.json scripts for what "npm run dev" calls) it always runs client side code ONCE when the code compiles. Similarly, when you use "npm run build" the console.log below will also show once as it builds the production version of the site. HOWEVER, you want to use secrets in client-side code (remember this code is client-side code because it is called originally from src/pages, and because the functionality is triggered IN THE BROWSER by user actions in the browser EX login, send). 
Moise, ask AI to rephrase the above "in other words [with example]" if it is unclear. For debugging, you need to really understand how NextJS works.
SOLUTION - you need to use the NextJS solution to accessing secret vars in client-side code: search google on "NextJS DEV mode, how to use secret env vars in client side"
*/
console.log({ process: process.env })
console.log(firebaseConfig.apiKey)
/* 
variables: app, auth, DB
are initialized "in the module scope" (outside of any function or block) so that when they are imported into other files, they are already initialized and ready to use. Most importantly, they are initialized only once in the lifecycle of the app (until you reload the browser, which causes the whole app to start over), not every time they are imported by different files. We want them to be initialized only once, when the app is initially loaded (this is all happening in the browser, BTW).

*/

export const app = initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig)
// export { app }
/* 
(done)DM: don't export unnamed object literals like this. You can export each the usual way:
*/
// const auth = getAuth()
export const auth = getAuth()
// let app
// if (!getApps().length) {
//   app = initializeApp(firebaseConfig)
// } else {
//   app = getApps()[0]
// }
// const analytics = getAnalytics(app)

//(done) DM: you will need this in other files, so export it
// Initialize Firebase Auth
// export { auth }

//(done) DM: import into UserContextProvider (after you create it per other todo__MM)
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


(done)DM: this is good. Keep a careful list of the steps to setup firebase in this project. If you don't you will regret it later, I know from experience.

Steps for authentication:
  1. Go to the Firebase console(https://console.firebase.google.com/)
  2. Click on your project.
  3. In the left-hand menu, click on "Authentication".
  4. You will now be in the "Users" tab of the "Authentication" section.
  5. To enable or configure sign-in methods, click on the "Sign-in method" tab.
*/

/*
MM: i created a new project on firebase different from the first one to test the .env.local file contents. i followed the steps from this link https://www.freecodecamp.org/news/building-a-real-time-chat-app-with-reactjs-and-firebase/. But the error still persists. Here is the code:

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0SF1IMQeIOI2MertvsUkfFJlFy-tC-eU",
  authDomain: "app-chat-1f5a4.firebaseapp.com",
  projectId: "app-chat-1f5a4",
  storageBucket: "app-chat-1f5a4.appspot.com",
  messagingSenderId: "825359150547",
  appId: "1:825359150547:web:88e803e7fbc35d4ccfd326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/
