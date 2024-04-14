// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwIqHCHU8utyO2evd1BmJWgSPtdpTMxbM',
  authDomain: 'sub-collections-e551b.firebaseapp.com',
  projectId: 'sub-collections-e551b',
  storageBucket: 'sub-collections-e551b.appspot.com',
  messagingSenderId: '82387646539',
  appId: '1:82387646539:web:160ad94110221d3cd8b5ce',
  measurementId: 'G-CKEWV7K8QL',
}

// Initialize Firebase
let app

// Check if a Firebase app is already initialized
if (getApps().length) {
  app = getApps()[0] // if already initialized, use that one
} else {
  app = initializeApp(firebaseConfig)
}
const db = getFirestore(app)

export { db }