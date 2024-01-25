import { useState, useContext, useEffect } from 'react'
import { auth, login, signup, signOut } from '../firebase'
import { updateProfile } from 'firebase/auth'
import { UserContext } from './user-context-provider'
import Login from './login'
import Signup from './signup'

//(done) DM: todoMM: move to directory named user/index.jsx and add user-context.jsx to that directory. This way, as this app grows (it seems like it will be come quite large), it will be easier to keep track of what files are imported by what other files.

// todoDM: example for lesson on hoisting, const not hoisted, function declarations are hoisted
// DM: let's get back to function declarations not arrow functions for the main function in a file. It is a more self-documenting that way.(ok)
export default function User({ onAuthenticate, onConnect }) {
  // Inside the User component
  console.log('User props:', onAuthenticate, onConnect)

  const [error, setError] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [loading, setLoading] = useState(false)

  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    // Listen for changes to the user's authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user)
        onAuthenticate()
        onConnect(user)
      } else {
        // User is signed out
        setUser(null)
      }
    })

    // Clean up the listener on component unmount
    return () => unsubscribe()
  }, [])

  const handleLogin = (email, password) => {
    console.log('handleLogin called')

    login(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user.displayName)
        setUser(user)
        // ...
        onAuthenticate()
        onConnect(user) // call onConnect when a user logs in
      })
      .catch((error) => {
        const errorMessage = error.message
        console.log('login Error: ', error)

        // Handle errors here
        setError(errorMessage)
        setLoading(true)
      })
  }

  const handleSignup = (email, username, password) => {
    console.log('handleSignup called')

    signup(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(typeof user) // DM: good, you logged it

        // DM: this line triggers the error: "user.updateProfile is not a function". What does this mean? If user.updateProfile is not a function, then what data type is it? A string? Undefined? Do a console.log to find out. If it is undefined, then something is wrong with your user object. In the console.log({user}) above the log says it is of type UserImpl so it looks like it a valid user object. Google the error message (adding "firebase signup", for example, as context for the search). Maybe someone had that problem. Also, I imagine it's possible the user object is not created using the correct package? Or, something hasn't been initialized correctly, leaving the user object without a updateProfile property?
        // DM: tomorrow be sure to push the app in the exact broken state you want me to debug, then write me what steps to reproduce the problem, what error I should see, what you tried to debug it, and what you think the problem might be. I'll try to help you debug it.
        // DM: cloud services are hard to debug in some situations. If I we're you, I would find a recent instructions/tutorial to setup exactly the functionality you have broken now (ideally at the official site, but sometimes other sites are good). Follow the instructions exactly, and get it working in a simple project (like the project you created for codesandbox (you can do it on your local machine if codesandbox doesn't work for you)). Then, once you have it working in a simple project, you can compare your code to the example code and see what is different. MM: i guessed the problem was with the user object where the updateProfile should be imported from firebase/auth, but not accessed directly from the user object.
        // howtojs: javascript: user.updateProfile is not a function; to debug this kind of error, log(typeof myObject.myProperty). if it is undefined, then find out where it is set in the code, or if myProperty is expected to exist on myObject
        // howtojs: firebase: user.updateProfile is not a function; to fix this error, you need to import the updateProfile function from firebase/auth and call it with the user object as the first argument because it is not a method of the user object or cannot be accessed directly from the user object.
        updateProfile(user, {
          displayName: username,
        })
          .then(() => {
            //(done) DM: I'm curious,w hat does user.reload() do? Why are you're returning it because the next .then() doesn't have a parameter so why doe you need to return the result of user.reload()? DM: ah, makes sense. good answer! I'm moving some of your response below as permanent documentation

            // the user.reload() function is a Firebase Authentication method that refreshes the local user data with the latest data from the Firebase server. It's used here to ensure that the local user object is up-to-date after updating the user's profile.
            // why return response form user.reload()? because the return user.reload() line is used to chain promises. It ensures that the next .then() block, where setUser(user) is called, doesn't execute until after the user data has been reloaded. Even though user.reload() doesn't return a value used in the next .then() block, it returns a promise that resolves when the user data has been reloaded.
            return user.reload()
          })
          .then(() => {
            setUser(user)
            setIsLoggedIn(true)
            onAuthenticate()
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
        //(done) DM: this error message is not very helpful. It would be better to show the user the specific error message.. You can get the specific error message or more inform from looking at the entire error object. Hmmm, looks like the error wasn't caught here for some reason. MM: firebase configuration is more complex that i am having difficulties to understand. some AI answers are not clear, and more confusing. DM: DEVs still have to use google or read docs/tutorials to figure out how to use a library. AI is not a complete replacement for that.(ok)
        // so I can see the entire error (with all its properties) in the console (browser console)
        console.log('signup Error: ', error)
        setError(errorMessage)
      })
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
      })
      .catch((error) => {
        console.error('Error signing out', error)
      })
  }

  console.log({ isLoggedIn })

  const toggleAuthenticationMode = () => {
    setIsLoggedIn(!isLoggedIn) // Switch between Login and Signup
  }

  return (
    <div>
      {isLoggedIn ? (
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
      )}

      {/*(done) DM: what does "loading" mean here? What is loading? MM: i added this loading because after setting up the real-time messaging, the login/signup was not displaying, so this indicates whether some asynchronous operation is currently in progress, it serves a network request, such as fetching data from an API. but i reverted back the previous code as the loading is not necessary here */}
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

//(done) DM: todoMM: please move the below comment into the file where you are using the new configuration, which is firebase.js I presume?

/*
MM: DM: i faced blockers when i click a signup button of not loading and crashing the application: firebase error: next-dev.js:25 Error adding document:  FirebaseError: Function addDoc() called with invalid data. Unsupported field value: undefined (found in field user in document messages/tuCI3kKosIYNkT8UtssY). i tried all the solutions suggested by AI by adding console.log to the handleSignup function elements, but the errors still persist.
after debugging i found that displayName is undefined. i commented the code and reverted the first ones, you can uncomment and have look at the errors. DM: I can't know which of the many commented out lines in this file to uncomment in order to see what you we're doing. Either leave specific instructions about what lines to uncomment, or leave the code in the exact state it was in when you got stuck, so I can see what you tried and what the errors are. (I know I've told you in the past not to leave the code in an error state, but if you note it specifically in a comment that you're leaving it broken so that I can help debug, its ok. MM: i think i am doing my best to follow all the instructions you are providing even though i am missing out some, in this firebase config case, i tried all the necessaries approaches by googling and asking AI suggestions as well, but i found it's very hard on my level to debug it. in the previous config of keeping secrets keys in env file, i attempted all the solutions but i couldn't get it right. i described the steps that i undertaken, however on your reviews i was expecting you to give me the right hints to solve the problem, but you have not yet. for implementing real-time messaging, i tried all the possible solutions as i mentioned above, but i was having errors, so i decided to keep the code in comments so that you would check them and give me hints to follow. i mentioned that in comments, the code made crash the app, and slow down the computer. how could i keep the app crash?, because i knew you would tell me to not leave the code in the error state.) 
DM: RE secrets in the env file: see my new note in the firebase.js file
DM: RE real-time messaging in your comment above: the point of my last message in the same line is I need specific instructions about what to uncomment. There is a ton of code commented in this file. Either give me exact instructions to reproduce your issue, or push the code in the broken state (which we usually avoid, but if you call it out for the purpose of me helping debug it is ok. There is nothing wrong with what you are coding and debugging, it is just how you are communicating to me that was my difficulty yesterday. So, before you you commit, look at the diff of your today's changes, and  imagine me reading the diff and your comments, and ask yourself, will I know what to do to reproduce the issue? Make it "easy" for me to help you. Clear communication takes work and practice, but it is worth practicing as you'll need in on the job.(MM: i understand. i will try to be more specific in my comments. i will try to push the code in the broken state.)

DM: todays bugs looks like it was difficult to figure out. One possible approach: the reason I had you do the codesandbox exercise, is you can try to implement just the part that is breaking (the login/signup?) in a new clean NextJS project, and once you have it working there, it will be easier to see what is different in your chat project and get clues as to why it is not working. It is your decision. If not, maybe if you leave the code in the broken state, I can see what you tried and get clues as to what is wrong. Definitely look closer at the error object and try to determine from all the details there what went wrong, including google the error messages you get. 

*/
