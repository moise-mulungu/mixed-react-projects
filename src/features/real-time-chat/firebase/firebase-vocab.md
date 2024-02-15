# Firebase 
Firebase is a platform developed by Google for creating mobile and web applications. It provides a variety of tools and services that help developers build, improve, and grow their apps. It provides several modules for different functionalities. Here are some of the other modules:

## firebase/database: 
This is the Firebase Realtime Database module. It allows you to store and sync data in real-time.

//(done) DM: todoMM: put a note here describing the difference between firebase/database and firebase/firestore

## firebase/database vs firebase/firestore
Firebase provides two main modules for data storage: "firebase/database" and "firebase/firestore". 
* The firebase/database module is a real-time database that stores data in a JSON format and is suitable for applications requiring real-time synchronization.
* The "firebase/firestore" module is a NoSQL cloud database that offers more advanced querying and scaling capabilities, making it suitable for complex applications. Each module has its own strengths and use cases, so choosing the appropriate one depends on the specific requirements of the application.

## firebase/firestore: 
This is the Cloud Firestore module. It provides a flexible, scalable database for mobile, web, and server development.

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