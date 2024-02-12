  /*
  The steps i took to work on the "List all the connected users" task. to list the current users on the page, i found that i should start by 
    1. modifying the currentUsers state because i was just appending the users to the end of the connectedUsers array, so i should insert new users at the beginning of the array.
      - i modified the handleUserConnect function to insert new users once they are connected at the beginning of the connectedUsers array.
      - after modifying the code, i encountered an error of "TypeError: message.user is undefined".
      - to fix that error i changed message.user to message.sender in the onSendMessage function.
      - after fixing the first error, a second arose "TypeError: Cannot read properties of undefined (reading 'displayName')". to fix that i should make sure the user is defined before accessing its properties. so added an if statement to check if the user is defined.
    2. Also, when a new message is sent, i should move the sender to the top of the connectedUsers list.
      - when message is sent by the user, that user should be moved to the top of the connectedUsers list.

    3. to make sure that users are inserted in the connectedUsers array, i used Firefox and Chrome browser to connect with two different users. after connecting, i found that only the connected user that is connected first is inserted in the connectedUsers array, and the other user is not inserted in the array. DM: ok, good detail, thanks

    4. to fix that, AI suggested this "the issue might be in the implementation of onConnect function in the parent component. This function should update the connectedUsers state in the parent component and also update the list of connected users in your Firebase database". so i replaced the handleUserConnect function with the onConnect function that is passed from the User component to the RealTimeChat component.

    5. i checked again the users on the two browsers, but there is no change.

    6. i decided to add console.log to check first the connectedUsers array. but i found it doesn't show on the console. i then console.log the onConnect function is it's rendering, that also doesn't show on the console.

    7. i then checked the User component to see if the onConnect function is passed to the RealTimeChat component, and i found that it's passed correctly.

  From that point, i didn't know what to do next, i paused there and i decided to ask for help.
  */

  /*

DM: see my comment in message-input.jsx. same issue here.(ok) 

DM: good stuff
MM: DM: i realized that the app was responsive but it was not attractive on mobile device. i tested it on the Mobile simulator - responsive testing tool in chrome dev tools, and i found that the app was not responsive on mobile devices, so i read the document that provides the responsive design features by the framework to make the app responsive on mobile devices.(https://tailwindcss.com/docs/responsive-design)
To use media queries in Tailwind CSS, you can use the responsive design features provided by the framework. Here are the steps:

1. Understand the breakpoints: Tailwind CSS comes with five default breakpoints:

  sm: 640px
  md: 768px
  lg: 1024px
  xl: 1280px
  2xl: 1536px

2. Use the breakpoints: To apply a style only at a specific breakpoint, you prepend the breakpoint name to the utility class with a colon. For example, md:bg-red-500 will apply the bg-red-500 class only on medium screens (768px and above).

3. Apply to your elements: Here's an example of how you can use media queries in your HTML:

<div className="bg-red-500 md:bg-blue-500 lg:bg-green-500 xl:bg-yellow-500 2xl:bg-purple-500">
  This is a div with a background color that changes at different breakpoints.
</div>

MM: DM: for today's work, i added screenshots of the login, signup and chatbox components on how they look like on mobile device by using the chrome extension Mobile Simulator - Responsive Testing Tool in the src/features/real-time-chat/image folder.
*/

/*
To list all connected users in the chatbox, i:
  1. console.logged the connectedUsers array to check if the users are inserted in the array.
  2. i found that the users are not inserted in the array, apart from the one that is connected first.
  ---
  3. i suspected that the issue might be related to real-time updates of the connectedUsers state across different browser instances. so i checked the connectedUsers array on the two browsers, but there is no change.
  4. AI suggested to listen for changes in the connected users in the Firebase database and update the connectedUsers state accordingly. i'll have to create a reference to the location in the database where the status of connected users is stored and listen for changes.
  5. i created a useEffect hook that will update the connectedUsers state in real-time whenever a user connects or disconnects, regardless of the browser instance.
  6. i then checked the connectedUsers array on the two browsers, but there is no change.
  7. AI suggested one thing to the issue might be due to the fact that the useEffect hook that listens for changes in the status node in your Firebase Realtime Database is only triggered when the connectedUsers state changes. This means that if a user's status changes in another browser, your current browser won't know about it unless the connectedUsers state changes.

  8. To fix this, i can remove the dependency on connectedUsers from the useEffect hook that listens for changes in the status node
  9. i checked the console.log again, but no change.
  10. AI suggested to change my Firebase Realtime Database rules from this: 
    {
    "rules": {
      ".read": "auth != null",
      ".write": "auth != null"
      }
    }
      to this:
    {
    "rules": {
      "typing": {
        ".read": true,
        ".write": false
      },
      "status": {
        ".read": true,
        ".write": "auth != null"
      }
    }
    This approach worked worked and the connected users are listed in the chatbox.

  11. But the displayName of the connected users is not displayed, so i checked the console.log of the connectedUsers array, and i found that the displayName is undefined.
  12. to solve i should i need to include the displayName in the updatedUsers array. after adding the displayName with the console.log, the userStatus.displayName was undefined
  13. another solution was this: f the displayName property is not present or has an invalid value, you'll need to update the code that sets the user status in the Firebase Realtime Database to include the displayName.
  14. the code that sets the user status in the Firebase Realtime Database is in the user-context-provider.jsx file, so i updated the code and added console.log to check the displayName, but it was undefined.
  15. the next approach was this: if the displayName is null or undefined, it means that it's not set for the user. You need to set it when you create the user or update the user's profile. i configured the signup function in the firebase config file to include the displayName, after that the displayName showed on the console.log, but it was not displayed on the chatbox.

I paused here for today and i am asking for help.


*/

/*
I found something when i delete a user from firebase database, his messages still remains in the ChatBox, so i decided to figure out how i could fix it. i started by: 
  1. updating the async function fetchUser by declaring an existUser variable and assigning the value of userSnapshot.exists() to it. i then added an if statement to check if existUser is true, and if it is, i returned the userSnapshot.data(). if it's false, i console.logged an error message and returned null.
  2. i then added a new function to handle the user connection, and i updated the handleUserConnect function to insert new users at the beginning of the connectedUsers array.
  3. i then checked if the user is online and if the user exists, and if both conditions are true, i added the user to the connectedUsers array.

But after all the changes, the user's messages still remains in the ChatBox after the user is deleted from the firebase database.
I asked for AI to fix the issue, so it suggested the following:
DM: going forward, please show me your AI prompt, so that I can know what you asked.(ok) 
  1. Install Firebase CLI: If you haven't done so already, install the Firebase CLI by running npm install -g firebase-tools in your terminal.

  2. Initialize Firebase Functions: In your project directory, run firebase init functions. This will create a new functions directory.

  3. Navigate to the Functions Directory: Change your current directory to the functions directory by running cd functions.

  4. Write the Cloud Function: In the functions directory, you'll find an index.js file. This is where you write your Cloud Functions. Write the function to delete user messages when a user is deleted.

  5. Deploy the Function: Once you've written your function, you can deploy it to Firebase by running firebase deploy --only functions from the root of your project directory. This command uploads your function to Firebase's servers.

  6. Test the Function: Delete a user from the Firebase Authentication console and check if their messages are also deleted from the Firestore database.

Remember, Firebase Cloud Functions run on Firebase's servers, not in the user's app. This means they can execute even when the user's app is not running, which is ideal for tasks like cleaning up data when a user is deleted.

I tried to install the first package, but i found it will a long procedure, i decided to pause here.
* I would try to use the firebase console (WEb UI) to view data. 
*/
/*
In order to fix the connected users in the connectedUsers array, i started by:
  1. i noticed that the connectedUsers array was empty, even though it was expected to contain the currently connected users. i found that this could be due to the asynchronous nature of state updates in React, which means that the updated state might not be immediately available after calling the state update function.

  2. Logging the State: To confirm that the connectedUsers state was being updated, i updated a useEffect hook that logs the connectedUsers state every time it changes. This allowed us to see the updated state when it was applied.

  3. Identifying the Discrepancy: for this step, i noticed a discrepancy between the number of users in connectedUsers and another array, updatedUsers. this could be due to the timing of when these arrays are logged and updated.

  4. Clearing the Array: to ensure that connectedUsers only contains the currently connected users, i assumed of clearing connectedUsers before adding the connected users to it. This was done by initializing updatedUsers as an empty array at the start of the callback function passed to listenToDatabaseValueChanges, and then setting connectedUsers to updatedUsers after the snapshot.forEach loop.

  5. Updating the useEffect Hook: Finally, i updated the useEffect hook to implement the changes. This involved modifying the callback function passed to listenToDatabaseValueChanges to clear updatedUsers before adding the connected users to it, and then setting connectedUsers to updatedUsers after the loop.

After those changes, the connected users array was updated, but the discrepancy still persists. i paused again here.
*/

/*
To fix the displayName not showing up in the connected users list, i
1. added console.log to check the user,and the user.displayName, so the result was the values of the user and the user.displayName were showing up on the console.

2. i declared a variable with a descriptive name called "formattedDisplayName" which is assigned the value of user.displayName[0].toUpperCase() + user.displayName.slice(1). i then used the formattedDisplayName variable to display the user's displayName in the jsx return statement of the connected users list. but the displayName was not displayed.

3. Checked the Firestore Data: i checked the Firestore console to see if the displayName field was set in the user documents. i found that the displayName field was not present, but there was a senderName field instead.

4. Checked the fetchUser Function: i reviewed the fetchUser function by replacing displayName with senderName in the return statement.

5. Updated the Code to Use senderName: i updated the fetchUser function to return senderName as displayName. i also updated the console logs and the line where formattedDisplayName is defined to use user.senderName instead of user.displayName.

After following these steps, i wasn't able to resolve the issue with displayName not showing up. There was an error that the User doesn't have a senderName property. i was obliged to comment the updated code and revert the displayName.
*/

/*
for today's work about debugging the displayName not showing up in the connected users list, i:

  1. Identify the issue The initial problem was identified as the displayName of online users not being displayed in the real-time chat application.

  2. the displayName was stored in a separate users node in the Firebase Realtime Database, while the online status was stored in the status node.

  3. Modify the code to read from users node The code was modified to create a reference to the user's node in the users node and read the data at this reference once, in addition to reading from the status node.

  4. Encounter a permission error After modifying the code, a "Permission denied" error was encountered. This was because the Firebase Realtime Database rules did not allow reading from the users node.

  5. Update Firebase Realtime Database rules The Firebase Realtime Database rules were updated to allow reading from the users node.

  6. Verify the solution After updating the rules, the code was not able to display the displayName of online users, th issue is still there.
    * DM: todoMM: "the code was not able to display the displayName of online users" is not helpful because it contains no new information. It contains nothing that helps me help you. You said "The Firebase Realtime Database rules were updated to allow reading from the users node". That sounds good, so where did you verify that username was being returned by Firebase from your user node query/reference? If the query is working, then follow the displayName values through the code from the query to displaying in the JSX. Where did it break? MM: in the code i pointed where the code broke, i said where i declared the variable formattedDisplayName, the console result was the connected user, now in the jsx that where the formattedDisplayName was not showing up. DM: I was addressing what your wrote here just above, which did not help. I did not find any helpful info in the location you mentioned, see my comments yesterday there.

MM: I want to know what can be done in a work environment when one is stuck on an issue for longer time, even after trying all the possibilities suggested by other team mates or even the Lead? i mentioned for help because this task has taken more time than expected.
  * DM: you have to try to debug in order to find out exactly where in the code the problem starts. Then you can read the docs to make sure you used firebase or JS correctly in the code just before the problem starts. If you are still stuck, then you can ask for help. If you don't know exactly where the problem starts and you ask for help, you are asking whoever helps you to do basic, junior-level debugging for you, and that will make you look bad or like you can't do basic programming. So, always you should be able to find out exactly where the problem is so that you always have good, hard questions to ask teammates or the lead.

*/
