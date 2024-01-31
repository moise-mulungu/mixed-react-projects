
How to create a realtime database in Firebase:
To create a Realtime Database in Firebase, follow these steps:

  1. Go to the Firebase console.
  2. Click on your project.
  3. In the left-hand menu, click on "Realtime Database" under the "Build" section.
  4. Click on the "Create database" button in the middle of the screen.
  5. In the "Security rules for Realtime Database" dialog that appears, you can choose to start in either "Locked mode" or "Test mode".

    "Test mode" means that read and write access to your database will be open to everyone for 30 days. This can be useful for testing, but you should switch to "Locked mode" before launching your app to prevent unauthorized access.

    "Locked mode" means that read and write access to your database will be denied to everyone except you. You'll need to set up security rules to allow users to access your database.

  6. Click "Enable".
  7. You'll be taken to the data view of your new Realtime Database. Here, you can manually add, edit, and delete data.

Remember to replace the databaseURL in your Firebase configuration with the URL of your new Realtime Database. The URL should look something like this: https://your-project-id-default-rtdb.firebaseio.com/. 
You can find this URL in the Realtime Database section of the Firebase console, at the top of the data view.


