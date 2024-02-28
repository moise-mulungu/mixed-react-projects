import { collection, getDocs, query, where, onSnapshot } from 'firebase/firestore'
import db from '../firebase' // import your Firebase config

/* 

your new users provider needs to gather all info about a user, except messages, that is separate. it looks like that info is in two places: realtime and firestore databases

*/

// export async function fetchUsers() {
export function fetchUsers(callback) {
  // const users = []

  // access the users collection in Firestore
  const usersCollectionReference = collection(db, 'users')

  // query the users collection for users where isActive is true
  //(done) DM: dont use abbreviations. q can be query
  // const q = query(usersCollectionReference, where('isActive', '==', true))
  // DM: even when I removed the where clause, the query still returns only one user, "geny". why?
  // MM: i am not sure why the where clause is not working. i will work on it next time.
  // DM: look in the database in the console. "geny" is probably the only user there. So, work on what process triggers a new user in the database.
  // const usersQuery = query(usersCollectionReference)

  // get the users from Firestore
  // const usersSnapshot = await getDocs(usersQuery)
  const unsubscribe = onSnapshot(usersCollectionReference, (snapshot) => {
    // DM: todoMM: look at the console.logs in this function to see what data is coming back from the database, then work on the database queries to get the data you want
    console.log('fetchUsers onSnapshot', { snapshot })
    let isActiveChanged = false
    // usersSnapshot.forEach((doc, index) => {
    snapshot.docChanges().forEach((change) => {
      console.log('fetchUsers snapshot.docChanges', { change })
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
