import { useState } from 'react'

export default function Login({
  handleLogin,
  error,
  toggleAuthenticationMode,
  handleLoginWithGoogle,
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 mx-2 md:mx-0">
      <div className="bg-purple-500 text-white rounded-lg shadow-lg p-8 md:w-1/3 h-full md:h-2/3 flex items-center justify-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">Login</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="p-2 border-2 border-gray-200 rounded mb-2 w-full text-black"
            // (in progress)DM: todoMM: name attribute makes it work in windows chrome! Try adding a "name" attribute and see if it works without explicitly setting autoComplete.
            // autoComplete="email"
            name="email" //MM: this is the name attribute that the above comment is referring to, right? and below i explained the difference between Chrome and Firefox with the name attribute.
            // i tested the name attribute with type "email" on Chrome it didn't work, but on Firefox it worked. DM: I'm not sure what you mean. Question: in linux Chrome autofill doesn't work regardless of whether you use name or autoComplete attribute, correct? If this is an issue, then document it here permanently.
            //(done) DM: todoMM: do you want to use name instead of autoComplete in the signup form also? I've never used "autocomplete" specifically because I think name only is needed. MM: this is a good question, i got this from AI : The "autocomplete" attribute is used to specify whether a form should have autocomplete enabled or disabled. It does not affect the behavior of the form itself, but rather how the browser should handle autocomplete for the form. The "name" attribute, on the other hand, is used to give a form element a name that can be used to reference the element in the server-side processing of the form data.
            //MM: AI prompt: what is better between the two for a app that requires authentication?: Consider using the "autocomplete" attribute in form fields to control autofill behavior. Set it to "off" for sensitive information like login credentials in a real-time chat app to enhance security. This helps reduce the risk of unauthorized access to user accounts.
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-2 border-2 border-gray-200 rounded mb-2 w-full text-black"
            //(done) DM: likely browsers wouldn't require you to set autoComplete to "off" as that would mean the default is a security flaw, so find out if this is the case and what is the default of autoComplete for a password type. I would guess that the default is "off" for password type, but you should find out, as you correctly realized it is a serious security issue. MM: from AI and google search: The default value of the "autoComplete" attribute for a password type input is "off". This means that the browser should not automatically complete the input with previously saved values. i think it's not necessary to add autoComplete="off" below
            // autoComplete="off" // not needed, "off" is the default
          />
          {error && <p className="text-black">{error}</p>}
          <button
            onClick={() => handleLogin(email, password)}
            className="p-2 mt-4 bg-green-500 text-white rounded mb-2 w-full"
          >
            Login
          </button>
          {/* 
          (done)DM: ok, I see how you're thinking, but a button under the un/pw inputs communicate to the user that they can type in the un/pw and then click the signup button. However if I do that, I lose what I typed and I have to start over. This really happened to me a few times. UX issue. So, instead of a signup button, show it as a link, so they know they have to click the link first before entering un/pw. MM: i also added the login anchor tag link to the signup page as well. 
           */}
          {/* <button
            onClick={toggleAuthenticationMode}
            className="p-2 mt-4 bg-yellow-500 text-white rounded mb-2 w-full"
          >
            Signup
          </button> */}
          <a
            href="#"
            onClick={toggleAuthenticationMode}
            className="text-white text-xl border-b-2 border-yellow-500"
          >
            Signup
          </a>
          <button
            onClick={handleLoginWithGoogle} // Call the function when the button is clicked
            className="p-2 mt-4 bg-blue-500 text-white rounded mb-2 w-full"
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  )
}

/*
In order to fix the "login: usually when I enter email, when I put cursor into the input field and type first letter, Chrome will show previous emails I've used, but it doesn't work in the login screen. I'm curious why that is the case, as all login forms allow that default Chrome functionality to happen." task from the official-ux-review file, I did the following: 
  1. asked AI to fix the suggested task above, the answer was: 
    - To enable autofill for the email input field, you need to set the "autocomplete" attribute to "email" in your Login component

  2. I added the "autocomplete" attribute to the email input field with the value of "email" and to the password input field with the value of "off" (to avoid chrome autofill for security reasons)
  3. to test it, i found that i need to add a logout feature to the app because if i delete the account from the firebase console, i'll have to signup again and the  autofill will not display the email address.
  4. i created a signOut function in the firebase.js file.
  5. i created a handleSignOut function in the User component whee i imported the signOut function from the firebase.js file.
  I couldn't guess where to use the signOut function between User and UserProfile components, if i use it in the User it will be not possible because i wanted users to logout when they access their profile page, so i used it in the UserProfile component.
  6. i added a logout button in the UserProfile component and i passed the handleSignOut function to it.
  7. when i was clicking to the signout button, it was directing me to the chat page instead of to the login page.
  8. AI suggested to use the useHistory hook to redirect the user to the login page after signout. when i added the useHistory hook, i got an error that useHistory is not defined. i searched for the solution and i found that i need to wrap the component with the React Router component by first installing it and then importing it and wrapping the component with it.
  9. after installing the react-router-dom package, i realized that the app is configured with NextJS, so it's no use using react-router-dom package, so i searched for the solution and i found that i need to use the useRouter hook instead of the useHistory hook.
  10. the suggested code was:
    import { useRouter } from 'next/router'
    const router = useRouter()
    const handleSignOut = async () => {
      try {
        await signOut()
        setProfileVisible(false)
        router.push('/login') // Redirect to login page
      } catch (error) {
        console.error('Error signing out', error)
      }
    }

  11. when i click i got the error that the ./login page is not found. what is should was to use the create a new login.js file inside pages directory to solve the problem, when i tested it, i found that the props passed to the Login component are not defined, which is the handleLogin, error, toggleAuthenticationMode, now instead of passing them as props, i should use them directly in the Login component, and i would so with the Signup component as well.
  12. that logic was not working, AI suggested to use AuthContext to pass the props to the Login component by defining the AuthContext in the root component and then using the useContext hook in the Login component to get the props. this approach seemed to be better than the first one, but the issue was the User component could not access the Login and Signup components.
  13. the final idea was to import the User component in the UserProfile component and create a new state by creating a condition that if the signout button is clicked, the state will be set to true and the User component will be rendered, and if the state is false, the UserProfile component will be rendered.
  14. i finally fixed the issue by setting up a new Firebase auth state listener in the RealTimeChat component that check If a user is authenticated, it will set isAuthenticated to true, otherwise it will set it to false inside the useEffect hook, i also imported the auth from the firebase.js file and passed it to the useEffect hook.

  DM: thanks for the detailed explanation. it helps me kow what you did, how you're thinking and is great practice in tech communication for you. 
  DM: todoMM: put a logout button on the main app page, not just the profile page.
  (done)DM: make the signup fields autofill

  DM: it happens sometimes when you do a ton of work but later find out there was a much easier way to do it. In this case, you could have made sure you understand autofill in browsers by asking AI. It's had to tell, but often more planning/research before you start coding is helpful.
*/
