link resources: 
* https://firebase.google.com/docs/firestore/data-model
* https://stackoverflow.com/questions/54266090/are-there-any-benefits-of-using-subcollections-in-firestore
* AI prompt: "how to create collections and subcollections in firebase", "provide steps on manually creating collections, documents and subcollections", "how, when, why, where to use subcollections in a project?"

# firebase-subcollections
In Firestore, a subcollection is a collection that is nested within a document in another collection. This hierarchical structure allows you to organize related data and create more complex data models within your Firestore database. Subcollections can be used to represent ***one-to-many*** or ***parent-child*** relationships between entities.

## advantages
Using subcollections to represent one-to-many relationships in Firestore offers a ***structured***, ***scalable***, and ***efficient way*** to manage and access related data within your database. here are advantages in details:

***Nested Structure***: Subcollections are collections that exist within a document in another collection. This creates a nested structure where documents can have child collections.

***Hierarchical Relationship***: Subcollections allow you to create a hierarchical relationship between entities. For example, a user document can have a subcollection of posts, where each post is a document within the subcollection.

***One-to-Many Relationships***: Subcollections are commonly used to represent one-to-many relationships between entities. For instance, a blog post can have multiple comments, each stored as a document in a subcollection within the post document.

***Querying***: You can query subcollections using Firestore queries. This allows you to retrieve documents from both the parent collection and its subcollections based on specific criteria.
* DM: maybe each user collection can contain a subcollection of chat messages?

***Scalability***: Subcollections can help you organize and scale your data more effectively. Instead of storing all related data in a single document, you can distribute it across multiple documents within subcollections.

***Flexibility***: Subcollections provide flexibility in structuring your data. You can create multiple levels of nested subcollections to represent complex relationships between entities

## how to create subcollections?
There are two ways of creating subcollections in firebase firestore database:

### manually through firebase console. here are steps :
1. Go to the Firebase console (https://console.firebase.google.com/) and select your project.

2. Click on the "Firestore Database" option in the left sidebar menu.

3. Under the "Firestore Database" tab, click on the "Create database" button.

4. Choose a location for your database and select the "Start in test mode" option (or "Start in production mode" if you prefer).

5. Once your database is created, click on the "Start collection" button to create a new collection.

6. Enter a name for your collection and click "Next".

7. In the next step, you can add fields to your documents. Click on "Auto-ID" to automatically generate a document ID, or enter a custom ID if you prefer.

8. Click on "Save" to create the document in your collection.

9. To create a subcollection, click on the three dots next to the document you just created and select "Add subcollection".

10. Enter a name for your subcollection and click "Next".

11. Follow the same steps as above to add fields to your subcollection document and click "Save" to create the subcollection

### programmatically inside your project code: 
This way consists of creating subcollections programmatically by directly adding documents to a subcollection within a parent document. 
This method involves interacting with the Firestore database using the Firestore SDK (such as the Firebase SDK for web, Android, or iOS).

DM: reformatting. old fart can read it easier this way :)
***howtofirebase:: firestore database: how to add subcollections***
* 1. import necessary Firestore methods from the 'firebase/firestore' module(getFirestore, collection, doc, and addDoc), 
* 2. initialize the Firestore database instance by calling the getFirestore() function to initialize the Firestore database instance and store it in the db variable, 
* 3.create a reference the document within the collection by using the doc() and collection() functions to create a reference to the document within the collection, 
* 4. store this reference in the variable, 
* 5. add a document to the subcollection within the document, 
* 6. create a reference to the subcollection within the document using the collection() function with the reference, 
* 7. use the addDoc() function to add a new document to the subcollection with the specified data .
```js
// this snippet is from firebase version 8 DM: good - that is an important note

// Reference to the parent document
const userDocRef = db.collection('users').doc('user1');

// Add a document to the 'posts' subcollection within the 'user1' document
userDocRef.collection('posts').add({
    title: 'New Post',
    content: 'This is a new post.'
});

// this is from firebase version 9
// Import necessary Firestore methods from the 'firebase/firestore' module
import { getFirestore, collection, doc } from 'firebase/firestore';

// Initialize the Firestore database instance using the getFirestore() function
const db = getFirestore();

// Create a reference to the 'user1' document within the 'users' collection
const userDocRef = doc(collection(db, 'users'), 'user1');

// Add a document to the 'posts' subcollection within the 'user1' document
const postsCollectionRef = collection(userDocRef, 'posts');
addDoc(postsCollectionRef, {
    title: 'New Post',
    content: 'This is a new post.'
});

```

## how to use subcollections
* To organize related data within a document or parent collection.
* To create a hierarchical structure for your data.
* To store additional data that is specific to a subset of documents.

## When to use subcollections:

* When you have a one-to-many relationship between entities. For example, a user can have multiple posts, each of which can have multiple comments.
* When you want to avoid storing large amounts of data in a single document.
  * DM: issue solved: if you try to put an array of all user's messages in a field in the user document, you will run into the 1M (megabyte) maximum collection size for the user document. Subcollections do not have that limit.
* When you want to easily query and retrieve **related data**.
  * DM: this may be the Firestore equivalent of the RDB join (of 2 tables). I.e., `select * from users, message where user.id = message.userid`g

## Why to use subcollections:

* To improve query performance by organizing data in a way that reflects the relationships between entities.
* To simplify data management and reduce the need for denormalization.
* To make it easier to scale your database as your project grows.

## Where to use subcollections:

* Subcollections can be used within a document to store related data that belongs to that document.
* **Subcollections can be nested within other subcollections** to create a hierarchical structure for your data.
* They can be used in any part of your Firestore database **where a hierarchical structure is needed** to represent the relationships between entities.

DM: this is very helpful and clear

