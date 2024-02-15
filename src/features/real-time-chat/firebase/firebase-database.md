Setup the firebase database and connect it to the project.
  1. go to firebase console and opened my project.
  2. on the left sidebar, click on firebase database.
  3. click on create database.
  4. select either test mode or production mode and click on next.
  5. click on next.
  6. select the location of your database and click on Enable.
  7. a Cloud Firestore database will be created with tabs like Rules, Data, Indexes, Usage, and Get Started.
  8. in the data tab there is a collection column that is like a table in a database, and a document column that is like a row in a table.
  9. click on the + sign to add a collection, and name it whatever you want. the document can be auto-generated or you can manually add a document.
  10. in order to make the collection work, you can change the rules in the rules tab to allow read and write. the rules by default are set to allow read and write only to authenticated users; *allow read, write, if false;*, but if you want to allow read and write to anyone, just customize the rules according to your preference. to allow read and write to anyone would be like this: *allow read, write: if true;* and click on publish.
  11. back in the data tab, you'll have to add a document to the created collection that will keep track of the user's actions.
 