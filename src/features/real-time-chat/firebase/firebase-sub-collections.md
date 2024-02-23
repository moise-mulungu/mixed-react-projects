// DM: todoMM: this is great, but there is nothing here about subcollections, so rename the file to represent the content here

## react-firebase-hooks
* react-firebase-hooks is a set of reusable React hooks that make it easier to integrate Firebase services into your React applications. These hooks provide a more idiomatic way of using Firebase in React components by encapsulating Firebase API calls within hooks.

```js
// Use the 'useCollectionData' hook to fetch data from Firestore
// This hook returns an array containing the documents from the collection ('docs'), a loading state ('loading'), and an error state ('error')
// The 'query' argument is a reference to the Firestore collection to fetch
const [docs, loading, error] = useCollectionData(query);
```

## querying in Firestore
* Querying in Firestore involves creating a reference to a collection or a document and then using methods provided by Firestore to retrieve or manipulate the data.

```js
const query = collection(db, path); // db is the database, path is the collections where you want to query
```

## update data with setDoc
* The setDoc function is a method provided by Firestore in Firebase to set or update data in a document.

```js
import { doc, setDoc } from "firebase/firestore";

// Define an asynchronous function to update data
async function updateData() {
  // Create a reference to the document you want to set or update
  // The 'doc' function takes the Firestore database instance, the path to the collection, and the ID of the document
  const docRef = doc(db, "myCollection", "myDocument");

  // Use the 'setDoc' function to set or update the data in the document
  // This function takes two arguments: the document reference and an object containing the data to set or update
  // If the document does not exist, it will be created with this data
  // If the document does exist, its contents will be overwritten with this data (unless you use the 'merge' option)
  await setDoc(docRef, { field: "value" });
}

// Invoke the function to update the data
updateData();
```