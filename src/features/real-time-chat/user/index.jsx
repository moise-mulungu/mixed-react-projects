// JavaScript (React)
import { useState, useContext } from 'react'
// import { useAuthState } from 'react-firebase-hooks/auth'
import {
  // auth,
  login,
  signup,
} from '../firebase'
import { updateProfile } from 'firebase/auth'
// import firebase from 'firebase/app'
// import 'firebase/auth'
import { UserContext } from './user-context-provider'
import Login from './login'
import Signup from './signup'

//(done) DM: todoMM: move to directory named user/index.jsx and add user-context.jsx to that directory. This way, as this app grows (it seems like it will be come quite large), it will be easier to keep track of what files are imported by what other files.

// todoDM: example for lesson on hoisting, const not hoisted, function declarations are hoisted
const User = ({ onAuthenticate, onConnect }) => {
  // const [email, setEmail] = useState('')
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [loading, setLoading] = useState(false)

  // const handleLogin = () => {
  //   // Handle login
  //   onAuthenticate()
  // }

  // const handleSignup = () => {
  //   // Handle signup
  //   onAuthenticate()
  // }
  // function validateEmail(email) {
  //   const re =
  //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   return re.test(String(email).toLowerCase())
  // }
  const { setUser } = useContext(UserContext)
  // const [, , authError] = useAuthState()

  // auth.onAuthStateChanged((user) => {
  //   if (!user) {
  //     return
  //   }
  //   console.log(user.displayName) // Check if displayName is updated
  //   setUser(user)
  //   setIsLoggedIn(true)
  // })

  // auth.onAuthStateChanged((user) => {
  //   if (!user) {
  //     return
  //   }
  //   if ('displayName' in user) {
  //     // Check if user has a displayName property
  //     console.log(user.displayName)
  //   } // Check if displayName is updated
  //   setUser(user)
  //   setIsLoggedIn(true)
  // })

  const handleLogin = (email, password) => {
    console.log('handleLogin called')
    // if (!validateEmail(username)) {
    //   setError('Invalid email format')
    //   return
    // }
    // const email = `${username}@dummy.com`
    login(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user.displayName)
        setUser(user)
        // ...
        onAuthenticate()
        onConnect(user) // call onConnect when a user logs in
        // setLoading(false)
      })
      .catch((error) => {
        // const errorCode = error.code
        const errorMessage = error.message
        console.log('login Error: ', error)

        // Handle errors here
        setError(errorMessage)
        setLoading(true)
      })
  }

  const handleSignup = (email, username, password) => {
    console.log('handleSignup called')
    // if (!validateEmail(username)) {
    //   setError('Invalid email format')
    //   return
    // }
    // const email = `${username}@dummy.com`
    signup(email, password)
      .then((userCredential) => {
        // Signed in
        // userCredential.user
        //   .updateProfile({
        //     displayName: username,
        //   })
        //   .then(() => {
        const user = userCredential.user
        console.log(typeof user) // DM: good, you logged it
        // setUser(user)
        // setUser({ displayName: user.displayName || email })
        // // ...
        // // onAuthenticate()
        // setIsLoggedIn(true)
        // return user.updateProfile({
        //   displayName: username, // Set displayName here
        // })
        // .then(() => {
        //   return user.reload()
        // })
        // .then(() => {
        //   // Update successful.
        //   // setUser(user)
        //   // Get the current user from Firebase again.
        //   const currentUser = firebase.auth().currentUser
        //   console.log({ currentUser })
        //   setUser(currentUser)
        //   setIsLoggedIn(true)
        // })
        // .catch((error) => {
        //   // An error occurred.
        //   setError(error.message)
        // })
        // )
        //   // })
        // })
        // .then(() => {
        //   const user = auth.currentUser
        //   console.log({ user })
        // setUser(user)
        // setIsLoggedIn(true)
        // onConnect(user) // call onConnect when a user logs in

        // DM: this line triggers the error: "user.updateProfile is not a function". What does this mean? If user.updateProfile is not a function, then what data type is it? A string? Undefined? Do a console.log to find out. If it is undefined, then something is wrong with your user object. In the console.log({user}) above the log says it is of type UserImpl so it looks like it a valid user object. Google the error message (adding "firebase signup", for example, as context for the search). Maybe someone had that problem. Also, I imagine it's possible the user object is not created using the correct package? Or, something hasn't been initialized correctly, leaving the user object without a updateProfile property?
        // DM: tomorrow be sure to push the app in the exact broken state you want me to debug, then write me what steps to reproduce the problem, what error I should see, what you tried to debug it, and what you think the problem might be. I'll try to help you debug it.
        // DM: cloud services are hard to debug in some situations. If I we're you, I would find a recent instructions/tutorial to setup exactly the functionality you have broken now (ideally at the official site, but sometimes other sites are good). Follow the instructions exactly, and get it working in a simple project (like the project you created for codesandbox (you can do it on your local machine if codesandbox doesn't work for you)). Then, once you have it working in a simple project, you can compare your code to the example code and see what is different. MM: i guessed the problem was with the user object where the updateProfile should be imported from firebase/auth, but not accessed directly from the user object.
        // howtojs: javascript: user.updateProfile is not a function; to debug this kind of error, log(typeof myObject.myProperty). if it is undefined, then find out where it is set in the code, or if myProperty is expected to exist on myObject
        // howtojs: firebase: user.updateProfile is not a function; to fix this error, you need to import the updateProfile function from firebase/auth and call it with the user object as the first argument because it is not a method of the user object or cannot be accessed directly from the user object.
        updateProfile(user, {
          displayName: username, // after implementing the changes, i am again getting the "next-dev.js:25 User or user.displayName is undefined" error, but it's weird as this issue was already solved. I'll try to debug it tomorrow.
        })
          // .then(() => {
          //   console.log('Display Name updated')
          //   setUser(user)
          //   setIsLoggedIn(true)
          //   onConnect(user) // call onConnect when a user logs in
          .then(() => {
            return user.reload()
          })
          .then(() => {
            setUser(user)
            setIsLoggedIn(true)
            onConnect(user) // call onConnect when a user logs in
          })
          .catch((error) => {
            console.error('Error updating display name', error)
          })
      })
      .catch((error) => {
        // const errorCode = error.code
        const errorMessage = error.message
        // Handle errors here
        //(in progress) DM: this error message is not very helpful. It would be better to show the user the specific error message.. You can get the specific error message or more inform from looking at the entire error object. Hmmm, looks like the error wasn't caught here for some reason. MM: firebase configuration is more complex that i am having difficulties to understand. some AI answers are not clear, and more confusing. DM: DEVs still have to use google or read docs/tutorials to figure out how to use a library. AI is not a complete replacement for that.(ok)
        // so I can see the entire error (with all its properties) in the console (browser console)
        console.log('signup Error: ', error)
        setError(errorMessage)
      })
  }

  console.log({ isLoggedIn })
  // const handleLogin = async (email, password) => {
  //   try {
  //     const userCredential = await login(email, password)
  //     const user = userCredential.user
  //     setUser(user)
  //     onAuthenticate()
  //   } catch (error) {
  //     setError(error.message)
  //   }
  // }

  // const handleSignup = async (email, username, password) => {
  //   try {
  //     const userCredential = await signup(email, password)
  //     const user = userCredential.user
  //     setUser(user)
  //     setIsLoggedIn(true)
  //   } catch (error) {
  //     setError(error.message)
  //   }
  // }

  const toggleAuthenticationMode = () => {
    setIsLoggedIn(!isLoggedIn) // Switch between Login and Signup
  }

  // JavaScript (React)

  return (
    // <div className="flex items-center justify-center h-screen bg-gray-100 mx-2">
    //   <div className="bg-purple-500 text-white rounded-lg shadow-lg p-8 w-1/3 h-2/3 flex items-center justify-center">
    //     <div>
    //       <input
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         type="email"
    //         placeholder="Email"
    //         className="p-2 border-2 border-gray-200 rounded mb-2 w-full text-black"
    //       />
    //       <input
    //         value={username}
    //         // value={email}
    //         onChange={(e) => setUsername(e.target.value)}
    //         type="text"
    //         placeholder="Username"
    //         className="p-2 border-2 border-gray-200 rounded mb-2 w-full text-black"
    //       />
    //       <input
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         type="password"
    //         placeholder="Password"
    //         className="p-2 border-2 border-gray-200 rounded mb-2 w-full text-black"
    //       />
    //       {error && <p className="text-black">{error}</p>}
    //       <button
    //         onClick={handleLogin}
    //         className="p-2 mt-4 bg-pink-500 text-white rounded mb-2 w-full"
    //       >
    //         Login
    //       </button>
    //       <button onClick={handleSignup} className="p-2 bg-yellow-500 text-white rounded w-full">
    //         Signup
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div>
      {isLoggedIn ? (
        <Login
          handleLogin={handleLogin}
          error={
            error
            // || authError
          }
          toggleAuthenticationMode={toggleAuthenticationMode}
        />
      ) : (
        <Signup
          handleSignup={handleSignup}
          error={
            error
            // || authError
          }
          toggleAuthenticationMode={toggleAuthenticationMode}
        />
      )}

      {/*(done) DM: todoMM: what does "loading" mean here? What is loading? MM: i added this loading because after setting up the real-time messaging, the login/signup was not displaying, so this indicates whether some asynchronous operation is currently in progress, it serves a network request, such as fetching data from an API. but i reverted back the previous code as the loading is not necessary here */}
      {/* {loading ? (
        <div>Loading...</div>
      ) : isLoggedIn ? (
        <Login
          handleLogin={handleLogin}
          error={error}
          toggleAuthenticationMode={toggleAuthenticationMode}
        />
      ) : (
        <Signup
          handleSignup={handleSignup}
          error={error}
          toggleAuthenticationMode={toggleAuthenticationMode}
        />
      )} */}
    </div>
  )
}

/*


React Firebase Hooks:
1. installations process:
  * i installed this the package: npm install react-firebase-hooks

2. import:
i imported { useAuth } from 'react-firebase-hooks/auth'

3. usage:
i declared a const [, , authError] = useAuth() state variable that i passed the toggleAuthenticationMode function as a prop to both components. i didn't declare a const [user] = useAuth() state variable because i'm using the UserContextProvider to manage the user state. when i tried to run i got the following error: 
(done)DM: check the import syntax is it a named import or a default import? (give me an answer to this question); Also, you imported useAuthState above which is a different name that you have here. MM: the above export is named export because it's inside curly braces. i commented out the import { useAuthState } from 'react-firebase-hooks/auth'. AI copilot answer: useAuthState and useAuth are both named exports from the 'react-firebase-hooks/auth' module, but they serve different purposes:

useAuthState: This is a hook that allows you to access the state of the current Firebase authentication. It returns an array containing the currently authenticated user (or null if no user is authenticated), a loading boolean, and an error object.
useAuth: This hook does not exist in the 'react-firebase-hooks/auth' module. If you're trying to use it, you might be confusing it with another hook or a hook from a different library. Always make sure to check the library's documentation to see what hooks and functions are available for use.

TypeError: (0 , react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuth) is not a function. 

4. solution:
AI prompt: The 'react-firebase-hooks' library has been deprecated and is no longer maintained. It's possible that the version you're using doesn't include the useAuth function.

You might want to consider using the 'react-firebase-hooks' successor library, 'reactfire', which is currently maintained by Firebase. It provides a similar set of hooks for Firebase services.

But the google search didn't mention that the 'react-firebase-hooks' has been deprecated. i paused there, and i'll continue with the tutorial to understand more. DM: yeah AI may be confused, you can check the GitHub page for react-firebase-hooks to see if it is currently being maintained.(ok)
*/

// DM: todoMM: please move the below comment into the file where you are using the new configuration, which is firebase.js I presume?
/*
the first project i created on firebase was called react-firebase-chat-app. The project was set up to use Cloud Firestore in Datastore mode. This mode can only be accessed from the Google Cloud Console. i could not create a normal database from the firebase console. i decided to create a second project called app-chat where i created a normal database. i replaced the previous project firebaseConfig with the ew one, but the authentication doesn't work.
i got the following error: Firebase: Error (auth/operation-not-allowed).
DM: ok, things can get tricky when you have existing code that does things in a certain way, then you make a configuration change like you describe here. The way to solve it is: whatever instructions you follow to set up app-chat, test out app-chat in a super-basic sample project, using any sample code that the instructions provided. You could try it real quickly in a codesandbox react instance: https://codesandbox.io/examples/package/react Once you are sure it works in a simple environment per the exact instructions you followed, only then try it in your chat project. If it doesn't work, check that the code in your chat project is doing the same thing as the example code provided. 
DM: todoMM: edit the next 2 lines to be sure you're using the correct Google Cloud/Firestore terminology:
before: real-time-chat Google Cloud Firestore in Datastore mode? OR Google Cloud Datastore?
after: app-chat: normal database? or Firebase Firestore Database?

*/

/*
MM: DM: i faced blockers when i click a signup button of not loading and crashing the application: firebase error: next-dev.js:25 Error adding document:  FirebaseError: Function addDoc() called with invalid data. Unsupported field value: undefined (found in field user in document messages/tuCI3kKosIYNkT8UtssY). i tried all the solutions suggested by AI by adding console.log to the handleSignup function elements, but the errors still persist.
after debugging i found that displayName is undefined. i commented the code and reverted the first ones, you can uncomment and have look at the errors. DM: I can't know which of the many commented out lines in this file to uncomment in order to see what you we're doing. Either leave specific instructions about what lines to uncomment, or leave the code in the exact state it was in when you got stuck, so I can see what you tried and what the errors are. (I know I've told you in the past not to leave the code in an error state, but if you note it specifically in a comment that you're leaving it broken so that I can help debug, its ok. MM: i think i am doing my best to follow all the instructions you are providing even though i am missing out some, in this firebase config case, i tried all the necessaries approaches by googling and asking AI suggestions as well, but i found it's very hard on my level to debug it. in the previous config of keeping secrets keys in env file, i attempted all the solutions but i couldn't get it right. i described the steps that i undertaken, however on your reviews i was expecting you to give me the right hints to solve the problem, but you have not yet. for implementing real-time messaging, i tried all the possible solutions as i mentioned above, but i was having errors, so i decided to keep the code in comments so that you would check them and give me hints to follow. i mentioned that in comments, the code made crash the app, and slow down the computer. how could i keep the app crash?, because i knew you would tell me to not leave the code in the error state.) 
DM: RE secrets in the env file: see my new note in the firebase.js file
DM: RE real-time messaging in your comment above: the point of my last message in the same line is I need specific instructions about what to uncomment. There is a ton of code commented in this file. Either give me exact instructions to reproduce your issue, or push the code in the broken state (which we usually avoid, but if you call it out for the purpose of me helping debug it is ok. There is nothing wrong with what you are coding and debugging, it is just how you are communicating to me that was my difficulty yesterday. So, before you you commit, look at the diff of your today's changes, and  imagine me reading the diff and your comments, and ask yourself, will I know what to do to reproduce the issue? Make it "easy" for me to help you. Clear communication takes work and practice, but it is worth practicing as you'll need in on the job.(MM: i understand. i will try to be more specific in my comments. i will try to push the code in the broken state.)

DM: todays bugs looks like it was difficult to figure out. One possible approach: the reason I had you do the codesandbox exercise, is you can try to implement just the part that is breaking (the login/signup?) in a new clean NextJS project, and once you have it working there, it will be easier to see what is different in your chat project and get clues as to why it is not working. It is your decision. If not, maybe if you leave the code in the broken state, I can see what you tried and get clues as to what is wrong. Definitely look closer at the error object and try to determine from all the details there what went wrong, including google the error messages you get. 

*/

export default User
