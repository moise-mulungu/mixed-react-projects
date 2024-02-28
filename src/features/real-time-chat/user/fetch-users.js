import { collection, getDocs, query, where, onSnapshot } from 'firebase/firestore'
import db from '../firebase' // import your Firebase config

/* 

your new users provider needs to gather all info about a user, except messages, that is separate. it looks like that info is in two places: realtime and firestore databases

*/

// export async function fetchUsers() {
export function fetchUsers(callback) {
  // const users = []

  // access the users collection in Firestore
  //(done) DM: todoMM: dont use abbreviations. ref can be reference. "Ref" abbreviation is allowed in React only as it is customary, like the abbreviation "props"
  const usersCollectionReference = collection(db, 'users')

  // query the users collection for users where isActive is true
  //(done) DM: todoMM: dont use abbreviations. q can be query
  // const q = query(usersCollectionReference, where('isActive', '==', true))
  // DM: even when I removed the where clause, the query still returns only one user, "geny". why?
    // MM: i am not sure why the where clause is not working. i will work on it next time.
  // const usersQuery = query(usersCollectionReference)

  // get the users from Firestore
  // const usersSnapshot = await getDocs(usersQuery)
  const unsubscribe = onSnapshot(usersCollectionReference, (snapshot) => {
    let isActiveChanged = false
    // usersSnapshot.forEach((doc, index) => {
    snapshot.docChanges().forEach((change) => {
      if (
        change.type === 'modified' &&
        change.doc.data().isActive !== change.doc.previousData().isActive
      ) {
        isActiveChanged = true
      }
    })
    if (isActiveChanged) {
      const users = []
      snapshot.forEach((doc) => {
        const user = doc.data()
        console.log('fetchUsers each usersSnapshot', {
          usersCollectionReference,
          usersQuery,
          doc,
          user,
        })
        users.push(user)
      })
      callback(users)
    }
  })
  return unsubscribe
}
