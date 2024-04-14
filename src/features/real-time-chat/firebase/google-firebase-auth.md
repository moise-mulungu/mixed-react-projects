# Google Authentication with Firebase in Expense Tracker

1. Import `getAuth` and `GoogleAuthProvider` functions in the `firebase-config` file then declare variables that pass those functions.
   - `getAuth`: This function is used to manage all aspects of user authentication.
   - `GoogleAuthProvider`: This function is used to authenticate users using Google Sign-In. An instance of `GoogleAuthProvider` can be passed to Firebase's sign-in methods (like `signInWithPopup` or `signInWithRedirect`) to sign in a user with Google.

2. Import the same functions from the `firebase/auth` module in the authentication component.

3. Import `signInWithPopup` from `firebase/auth` module. This function will pass two variables; those who hold the `getAuth()` and the `GoogleAuthProvider`.
//(done) DM: no underscores, use snake-case in filenames. MM: is the hyphen(-) for kebab or snake case? DM: dont ask me basic questions you can look up yourself. If you are being polite by asking, dont, just correct me. I will never feel ashamed for conflating two terms. MM: sorry, that wasn't my attention.