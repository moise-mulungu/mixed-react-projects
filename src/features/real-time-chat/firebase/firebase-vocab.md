# Firebase 
Firebase is a platform developed by Google for creating mobile and web applications. It provides a variety of tools and services that help developers build, improve, and grow their apps. It provides several modules for different functionalities. Here are some of the other modules:

## firebase/database: 
This is the Firebase Realtime Database module. It allows you to store and sync data in real-time.

//(done) DM: todoMM: put a note here describing the difference between firebase/database and firebase/firestore

## firebase/database vs firebase/firestore
Firebase offers two distinct data storage services, Firebase Realtime Database and Firestore, each with unique features and use cases.
* The firebase/database module, also known as Firebase Realtime Database, is an older, yet still used service providing real-time JSON data storage and synchronization 
* The firebase/firestore module, or Firestore, is a modern, scalable NoSQL cloud database suitable for complex applications due to its advanced querying and scaling capabilities.

//(done) DM: todoMM: remove this as it is not helpful since this is always the case when choosing between two functionalities

(done)DM: todoMM: is firebase/firestore a subset of firebase/database? is firebase/firestore more commonly used, or is it firebase/database an old/rarely-used module? which are you using in your real-time-chat and expense repos? incorporate your answers in the bullet points above. MM: redefine them in a more concise way.

## firebase/firestore: 
This is the Cloud Firestore module. It provides a flexible, scalable database for mobile, web, and server development.

***addDoc***: This function is used to add a new document to a collection in Firestore. It takes two arguments: a reference to the collection where the document should be added, and an object containing the data for the new document. In your code, `addDoc(collection(db, 'transactions'), { description, amount, type })` is adding a new document to the 'transactions' collection. The new document has three fields: 'description', 'amount', and 'type'.

***onSnapshot***: is a method provided by Firebase Firestore to listen for real-time updates in your Firestore database. This method attaches a listener to a document or a collection in your Firestore database. Whenever data in that document or collection changes, the listener triggers, and your application can immediately react to the update.

***collection***: is a function that gets a reference to a Firestore collection. A collection in Firestore is a grouping of documents, similar to a table in a traditional database.

***getFirestore***: This function is used to get a reference to a Firestore instance. It's often used when initializing your app's connection to Firestore. In your code, getFirestore is not directly used, but it's implied that db is a reference to your Firestore database, which could have been obtained by calling getFirestore.

## firebase/storage: 
This is the Cloud Storage module. It provides secure file uploads and downloads for your Firebase apps.

## firebase/functions: 
This is the Cloud Functions module. It allows you to run your code on Google's servers.

## firebase/messaging: 
This is the Firebase Cloud Messaging module. It allows you to send messages and notifications to users across platforms.

## firebase/analytics: 
This is the Google Analytics module. It provides free, unlimited reporting on up to 500 distinct events.

## firebase/remote-config: 
This is the Firebase Remote Config module. It allows you to change the behavior and appearance of your app without requiring users to download an app update.

(done)DM: todoMM: add a note for firebase/remote-config saying something about web app VS mobile app WHY it looks like the firebase/remote-config description above is geared toward mobile apps, which is OK, but make a not about that

### firebase/remote-config web app vs mobile
The firebase/remote-config module is primarily designed for mobile applications, allowing developers to remotely configure the behavior and appearance of their mobile apps without requiring an app store update. This focus on mobile apps is due to the specific use case of remotely managing app configuration settings and feature flags, which is more commonly associated with mobile applications than web applications.

## firebase/performance: 
This is the Firebase Performance Monitoring module. It helps you to understand where your app's performance can be improved.

## firebase/auth 
firebase/auth is a module in the Firebase JavaScript SDK that provides methods and utilities for authenticating users in your application. It supports various methods of authentication, including email and password, third-party providers like Google and Facebook, and more.

The firebase/auth module provides a variety of functions for handling user authentication. Here are some of them:

***createUserWithEmailAndPassword(auth, email, password)***: This function creates a new user account associated with the specified email address and password. On successful creation of the user account, this user will also be signed in to your application.

***signInWithEmailAndPassword(auth, email, password)***: This function signs in a user with the given email address and password.

***signOut(auth)***: This function signs out the current user from the application.

***onAuthStateChanged(auth, callback)***: This function sets up a listener on the Auth object so you can get the current authentication state. The callback function is called whenever the user's sign-in state changes.

***sendPasswordResetEmail(auth, email)***: This function sends a password reset email to the given email address.

***updatePassword(user, newPassword)***: This function updates the password of the currently signed-in user.

***signInWithRedirect(auth, provider)***: This function signs in a user using a full-page redirect flow.

***getRedirectResult(auth)***: This function gets the result of a sign-in attempt.