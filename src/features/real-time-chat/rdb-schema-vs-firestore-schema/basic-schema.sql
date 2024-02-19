-- (done)DM: totoMM: what database: Oracle, MySQL, PostgreSQL, or SQLite? or is this generic SQL? MM: The SQL code below seems to be generic for all sorts of SQL databases. However, i found that the SERIAL keyword for auto-incrementing primary keys is specific to PostgreSQL. In MySQL,AUTO_INCREMENT is used, and in SQLite, you would use AUTOINCREMENT. But Oracle has a more complex system involving sequences and triggers. The TIMESTAMP DEFAULT CURRENT_TIMESTAMP is correct for MySQL and PostgreSQL. For SQLite, you would use DEFAULT CURRENT_TIMESTAMP. Oracle would require something like DEFAULT SYSDATE.

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  displayName VARCHAR(255) NOT NULL
  -- just for instructional purposes:
  -- DM: I always add created_date and modified_date to my tables. it is VERY useful later for debugging in PROD when something gets weird
  -- (done)DM: todoMM: check if "TIMESTAMP DEFAULT CURRENT_TIMESTAMP" is correct for the DB type you are using because AI wrote that. MM: In Firestore, the equivalent of TIMESTAMP DEFAULT CURRENT_TIMESTAMP is FieldValue.serverTimestamp(), the real-time-chat uses serverTimestamp().
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  -- (done)DM: todoMM: add a trigger to update modified_date? or is this correct? Again, AI wrote it for me.
  modified_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  -- MM: i added this field to track if the user is active or not as mentioned in the Ruby code comment below.
  isActive BOOLEAN NOT NULL
);

-- MM: this seems to be more advanced in SQL database.
CREATE OR REPLACE FUNCTION update_modified_date()
RETURNS TRIGGER AS $$
BEGIN
   NEW.modified_date = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_modified_date
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE update_modified_date();

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

 (done)DM: todoMM: good. there are only these two tables`=collections in firestore for real-time-chat? where are you tracking if the user is active or not? I dont want you to write a generic schema and sql for chat app, I want to be exactly what you are using in your real-time-chat app. Later we wil be able to compare and contrast RDBMS and NoSQL databases.

 MM: as i can't differentiate with precision the different SQL database types, but Firebase uses a NoSQL database called Firestore, a document-oriented, which means it doesn't use tables, rows, and columns like SQL databases, but instead uses collections, documents, and fields. now to create a NoSQL representation of the real-chat-app Firebase database, the code would look specifically like this: 
*/
CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  displayName VARCHAR(255) NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  modified_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  isActive BOOLEAN NOT NULL
);

CREATE TABLE messages (
  id VARCHAR(255) PRIMARY KEY,
  text TEXT NOT NULL,
  sender VARCHAR(255) REFERENCES users(id),
  senderName VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP NOT NULL
);