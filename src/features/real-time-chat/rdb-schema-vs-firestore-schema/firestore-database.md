(done)DM: todoMM: good. there are only these two tables`=collections in firestore for real-time-chat? where are you tracking if the user is active or not? I dont want you to write a generic schema and sql for chat app, I want to be exactly what you are using in your real-time-chat app. Later we wil be able to compare and contrast RDBMS and NoSQL databases.
   DM: I dont see an answer to the question, are there more collections in your chat app that contain data used by the chat app that you should more tables here?

DM: todoMM: 

   MM: Yes, there are only the two collections in the real-time-chat app, but for the user is active  or not, it is tracked in the firebase realtime database, not in the firestore database. for further explanation, here is it: 
    - In Firestore Database, data is organized into collections (similar to tables in SQL databases) which contain documents (similar to rows in SQL databases).
    - In Firebase Realtime Database, the data is stored as JSON and organized into a tree-like structure. Here, the top-level nodes in the JSON tree are considered as tables or collections, and the child nodes under each top-level node can be seen as columns or fields.
      - DM: todoMM: what real-time-chat data is in here other than isActive (which you already have in the users table)
      - DM: todoMM: describe the structure of the data you have in chat app realtime database(in progress)
    MM: i found that firebase/realtime database is more complex than firebase when trying to connect it to the app. it worth learning about it.
