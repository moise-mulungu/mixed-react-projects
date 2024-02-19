-- To get all messages:
SELECT * FROM messages ORDER BY timestamp;

-- To get a specific user:
SELECT * FROM users WHERE id = :userId;

-- To update a message with the user's displayName:
UPDATE messages SET senderName = :displayName WHERE id = :messageId;

-- To insert a new message:
INSERT INTO messages (text, sender, senderName, timestamp) VALUES (:text, :sender, :senderName, :timestamp);

/*
MM: This is a basic schema and does not include all the features of a real-time chat app, such as handling online status, read receipts, etc. Also, it assumes that the displayName of a user does not change. but i'll work on them next time.

(done)DM: todoMM: write a query that joins user to messages so that for each message, you can also know if the user is logged in or not. MM: i first added a field named "isActive", i don't know which one is better between "isActive" and "isLogg" to the users table, now the query will be:
*/
SELECT messages.*, users.isActive
FROM messages
JOIN users ON messages.sender = users.id
ORDER BY messages.timestamp;