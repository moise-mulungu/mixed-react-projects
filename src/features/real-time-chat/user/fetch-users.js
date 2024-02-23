import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../firebase' // import your Firebase config

export async function fetchUsers() {
  const users = []

  // access the users collection in Firestore
  const usersCollectionRef = collection(db, 'users')
  
    // query the users collection for users where isActive is true
  const q = query(usersCollectionRef, where("isActive", "==", true))

    // get the users from Firestore
  const usersSnapshot = await getDocs(q)
  usersSnapshot.forEach((doc) => {
    users.push(doc.data())
  })
  return users
}
