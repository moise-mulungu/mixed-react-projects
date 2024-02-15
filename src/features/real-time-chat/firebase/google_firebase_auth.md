# Google Authentication with Firebase in Expense Tracker

1. Import `getAuth` and `GoogleAuthProvider` functions in the `firebase-config` file then declare variables that pass those functions.
   - `getAuth`: This function is used to manage all aspects of user authentication.
   - `GoogleAuthProvider`: This function is used to authenticate users using Google Sign-In. An instance of `GoogleAuthProvider` can be passed to Firebase's sign-in methods (like `signInWithPopup` or `signInWithRedirect`) to sign in a user with Google.

2. Import the same functions from the `firebase/auth` module in the authentication component.

3. Import `signInWithPopup` from `firebase/auth` module. This function will pass two variables; those who hold the `getAuth()` and the `GoogleAuthProvider`.
// DM: todoMM: no underscores, use snake-case in filenames