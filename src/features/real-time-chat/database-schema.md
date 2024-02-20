(done)DM: list your database "schema" here for my reference (not necessarily to include in the blog post). 
# schema collections:
* messages
  * field names (I copied these from above. validate they are exactly correct by looking in the Firebase console)
    * text 
    * sender 
    * senderName  
    * timestamp
* users
  * field names
    * email
    * username
    * profileImageURL
* status
  * field names
    * userID
    * isOnline
    * lastOnlineTimestamp
* typing
  * field names
    * userID
    * isTyping
  
According to AI answer : the schema in Firebase is flexible and can change as you add more data. It's not fixed like in a traditional SQL database