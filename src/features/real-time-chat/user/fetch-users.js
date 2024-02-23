import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../firebase' // import your Firebase config

/* 

your new users provider needs to gather all info about a user, except messages, that is separate. it looks like that info is in two places: realtime and firestore databases

*/

export async function fetchUsers() {
  const users = []

  // access the users collection in Firestore
  // DM: todoMM: dont use abbreviations. ref can be reference. "Ref" abbreviation is allowed in React only as it is customary, like the abbreviation "props"
  const usersCollectionRef = collection(db, 'users')

  // query the users collection for users where isActive is true
  // DM: todoMM: dont use abbreviations. q can be query
  // const q = query(usersCollectionRef, where('isActive', '==', true))
  // DM: even when I removed the where clause, the query still returns only one user, "geny". why?
  const q = query(usersCollectionRef)

  // get the users from Firestore
  const usersSnapshot = await getDocs(q)
  usersSnapshot.forEach((doc, index) => {
    const user = doc.data()
    console.log('fetchUsers each usersSnapshot', {
      usersCollectionRef,
      q,
      doc,
      user,
    })
    users.push(user)
  })
  return users
}
