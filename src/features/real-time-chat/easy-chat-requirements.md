<!-- a react chat application: https://www.youtube.com/watch?v=jcOKU9f86XE and a socket documentation: https://socket.io/docs/v4/ -->
<!-- i'll read this freecodecamp article tomorrow: https://www.freecodecamp.org/news/building-a-real-time-chat-app-with-reactjs-and-firebase/ -->
DM: good. Firebase is very useful. One of my mentors swears by it. 
DM: that article is HUGE. I imagine that the WebSocket "server" will be entirely in firebase. 

Copilot prompt answer:

To create a React Chat Application, you would typically need the following features:

## User Authentication: 
This could be simple username/password authentication or integration with OAuth providers like Google, Facebook, etc.
DM: could be version 2 (v2) as you can just let anyone chat, in the first version (make a text field where user can enter his/her name)

## Real-time Messaging: 
This is the core feature of any chat application. You would need a way to send and receive messages in real-time. This could be achieved using WebSockets or a real-time database like Firebase.

## Message History: 
You should be able to store and retrieve past messages. This could be done using a database.
DM: could be v2 since v1 could show just todays chats, or chats that have build up since the server was restarted.

## User Presence Information: 
Indicators to show whether a user is online, offline, or idle.
DM: possible v2 like the auth can be v2

## Typing Indicators: 
To show when another user is typing a message.

## Read Receipts: 
To show when a message has been read by the recipient.
DM: v2?

## Private and Group Chats: 
The ability to have one-on-one chats as well as group conversations.
DM: I won't comment on v2 anymore, because I think you get the idea. Make the most simple version for v1, then start making enhancements. You might do each new enhancement separately, as a module that can be required by the main app - this let's you write blog posts about each new enhancement.(ok) 

## Notifications: 
Users should be notified of new messages when they are not actively using the chat application.

## File Sharing: 
The ability to share files like images, videos, etc. in the chat.

## User Profile Management: 
Ability for users to manage their profiles, including changing their name, profile picture, etc.

## Security: 
Ensure that the chat data is secure and privacy is maintained.

Remember, these are just the basic features. Depending on your specific needs, you might want to add more advanced features like video calling, chatbot, etc.

## Copilot prompt sudo code: 

1. Setup the project(done)

   - Initialize a new React project using Create React App (NextJS) or a similar tool.
   - Install necessary libraries (like react-router (not in nextjs, putting file in src/pages is how routing happens), socket.io-client, axios, etc.).
  
2. Create the User Authentication system(done)

   - Create a Login/Register component. 
   - Implement user authentication logic (could be JWT, OAuth, etc.).
   - Store the authenticated user's data for later use.
  
3. Create the Chat Interface(done. may be modified when implementing the point 9)

   - Create a Chat component that displays a list of messages. 
   - Each message should display the sender's name, the message text, and the time it was sent.
   - Include a text input for sending new messages.
   - DM: I'd do this first; I think you'll have to implement the server at the same time.
  
4.  Implement Real-time Messaging(done)

    - Establish a WebSocket connection when the Chat component mounts.  
      - what does the Chat component connect TO?
    - When a new message is submitted, send it over the WebSocket connection.
    - Listen for incoming messages on the WebSocket and add them to the chat.

5. Implement Message History(done)

   - When the Chat component mounts, fetch the message history from the server and display it.
   - When a new message is sent or received, add it to the message history.

   DM: will I see history from the chat messages I wrote on previous days? MM: good question! history from the previous day? No, i need to update it.
  
6. Implement User Presence Information(done)

   - Send a status update over the WebSocket when the user goes online or offline.
   - Listen for status updates from other users and update their presence status accordingly.
  
7. Implement Typing Indicators(in progress)

   - When the user starts or stops typing, send a typing event over the WebSocket.
   - Listen for typing events from other users and display a typing indicator accordingly.
  
DM: do you still plan to implement the remainder of these? MM: yes, i think they are crucial for the app to make it complex and attractive.

8. Implement Read Receipts

   - When a message is read, send a read receipt over the WebSocket.
   - Listen for read receipts from other users and mark their messages as read.
  
9. Implement Private and Group Chats

   - Allow the user to start a new chat with any user or group of users.
   - Display a list of the user's chats and allow them to switch between them.
  
10. Implement Notifications

    - When a new message is received and the chat is not active, display a notification.
  
11. Implement File Sharing

    - Allow the user to attach files to their messages.
    - Display attached files in the chat.
  
12. Implement User Profile Management

    - Allow the user to view and edit their profile.
    - Display the user's profile picture and name in the chat.
  
13. Implement Security(done)

    - Ensure all data sent over the WebSocket is encrypted.
    - Ensure all API endpoints are secured and only accessible to authenticated users.