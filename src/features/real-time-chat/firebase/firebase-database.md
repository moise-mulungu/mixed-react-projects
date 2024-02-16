//(done) DM: link? or, AI prompt? always include the source of the info! In the future when you come back and read this, source is useful in many ways.
MM: i was writing while watching the video from src: https://www.youtube.com/watch?v=_ycD0d7skdQ
Setup the firebase database and connect it to the project.
  1. go to firebase console and opened my project.
  2. on the left sidebar, click on firebase database.
  3. click on create database.
  4. select either test mode or production mode and click on next.
  5. click on next.
  6. select the location of your database and click on Enable.
  7. a Cloud Firestore database will be created with tabs like Rules, Data, Indexes, Usage, and Get Started.
  8. in the data tab there is a collection column that is like a table in a database, and a document column that is like a row in a table.
  9. click on the + sign to add a collection, and name it whatever you want. the document can be auto-generated or you can manually add a document.
  10. in order to make the collection work, you can change the rules in the rules tab to allow read and write. the rules by default are set to allow read and write only to authenticated users; *allow read, write, if false;*, but if you want to allow read and write to anyone, just customize the rules according to your preference. to allow read and write to anyone would be like this: *allow read, write: if true;* and click on publish.
  11. back in the data tab, you'll have to add a document to the created collection that will keep track of the user's actions.


## firebase-database-query
* howtofirebase:: database: how to make a query on Firebase Firestore; you can use the `collection`, `query`, `where`, and `get` functions provided by the Firebase Firestore library as follow: 
- Get a reference to the Firestore collection
- Get the documents from the query
- Loop through the documents and do something with each one

  ```js
  import { collection, getDocs, query, where } from "firebase/firestore"; 

  // Get a reference to the Firestore collection
  const q = query(collection(db, "your-collection"), where("your-field", "==", "your-value"));

  // Get the documents from the query
  const querySnapshot = await getDocs(q);

  // Loop through the documents and do something with each one
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
  ```


 