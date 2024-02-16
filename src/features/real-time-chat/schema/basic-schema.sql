--DM: totoMM: what database: Oracle, MySQL, PostgreSQL, or SQLite? or is this generic SQL?

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  displayName VARCHAR(255) NOT NULL
  -- just for instructional purposes:
  -- DM: I always add created_date and modified_date to my tables. it is VERY useful later for debugging in PROD when something gets weird
  -- DM: todoMM: check if "TIMESTAMP DEFAULT CURRENT_TIMESTAMP" is correct for the DB type you are using because AI wrote that
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  -- DM: todoMM: add a trigger to update modified_date? or is this correct? Again, AI wrote it for me.
  modified_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  sender INTEGER REFERENCES users(id),
  senderName VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP NOT NULL
);



/*
In a Ruby/Rails application, the relationship between users and messages would be defined in the models as follows:
 class User < ApplicationRecord
   has_many :messages
 end

 class Message < ApplicationRecord
   belongs_to :user
 end
 
 This is called a "one-to-many" relationship, because one user can have many messages, but each message can only have one user:
 User.hasMany(Message, { as: 'messages' });
 Message.belongsTo(User, { as: 'user', foreignKey: 'userId' });

 DM: todoMM: good. there are only these two tables`=collections in firestore for real-time-chat? where are you tracking if the user is active or not? I dont want you to write a generic schema and sql for chat app, I want to be exactly what you are using in your real-time-chat app. Later we wil be able to compare and contrast RDBMS and NoSQL databases.
*/