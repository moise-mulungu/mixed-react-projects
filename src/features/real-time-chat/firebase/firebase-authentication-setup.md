//(done) DM: todoMM: this is not about firebase console, so put it into a separate file named after the topic: How to set up authentication in Firebase
* this is not about console. attention to detail please! don't waste the leads time with obvious things like this. You will set yourself apart from other Juniors who are sloppy and aren't paying attention. It is really important, not trying to be a a-hole. On the job, a boss will, over time, feel like you are not following instructions and start thinking about firing you. I should know, because it has happened to me in the past. 
 /*

Steps for authentication:
  1. Go to the Firebase console(https://console.firebase.google.com/)
  2. Click on your project.
  3. In the left-hand menu, click on "Authentication".
  4. You will now be in the "Users" tab of the "Authentication" section.
  5. To enable or configure sign-in methods, click on the "Sign-in method" tab.
*/

//(???) DM: todoMM: great, but the next line does not describe what you have, which is really about Google auth with firebase auth, so rewrite the first line below and (bump) move this info to a file named accordingly, OR, since I see the new google-firebase-app.md file, do you still want the below in this file? If so fine, you can delete this line
Set up the authentication process to the expense-tracker:
1. import functions(getAuth, GoogleAuthProvider) in your firebase-config file then declare variables that pass those functions
   1. getAuth: this function is used to manage all aspects of user authentication
   2. GoogleAuthProvider: this function is used to authenticate users using Google Sign-In. An instance of GoogleAuthProvider can be passed to Firebase's sign-in methods (like signInWithPopup or signInWithRedirect) to sign in a user with Google.
2. import the same functions from the `firebase/auth` module in the authentication component
3. import signInWithPopup from `firebase/auth` module, this function will pass two variables; those who hold the getAuth() and the GoogleAuthProvider