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
  apiKey: 'AIzaSyDkDSHVPcfgxFq4ctp4ODGd68gsikQ8G7o',
  authDomain: 'real-time-chat-78e91.firebaseapp.com',
  projectId: 'real-time-chat-78e91',
  storageBucket: 'real-time-chat-78e91.appspot.com',
  messagingSenderId: '146694862195',
  appId: '1:146694862195:web:5807cc69a5fc7c6f5a4106',
  measurementId: 'G-3FC7LLH74P',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

// Initialize Firebase Auth
const auth = getAuth()

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
Steps for authentication:
  1. Go to the Firebase console(https://console.firebase.google.com/)
  2. Click on your project.
  3. In the left-hand menu, click on "Authentication".
  4. You will now be in the "Users" tab of the "Authentication" section.
  5. To enable or configure sign-in methods, click on the "Sign-in method" tab.
*/