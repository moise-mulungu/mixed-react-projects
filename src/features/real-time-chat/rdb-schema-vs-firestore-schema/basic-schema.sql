-- (done) DM: what database: Oracle, MySQL, PostgreSQL, or SQLite? or is this generic SQL? 
--   MM: The SQL code below seems to be generic for all sorts of SQL databases. However, i found that the SERIAL keyword for auto-incrementing primary keys is specific to PostgreSQL. In MySQL,AUTO_INCREMENT is used, and in SQLite, you would use AUTOINCREMENT. But Oracle has a more complex system involving sequences and triggers. The TIMESTAMP DEFAULT CURRENT_TIMESTAMP is correct for MySQL and PostgreSQL. For SQLite, you would use DEFAULT CURRENT_TIMESTAMP. Oracle would require something like DEFAULT SYSDATE.
--  DM: try to never say "seems to be", always be sure
-- MM: alright, i will be more careful with my words.

-- (done)DM: todoMM: verify all the below code for Postgres (just ask AI to ensure it is all good postgres sql, dont spend much time on itf). Dont bother learning about all relational databases, it will just get mixed up in your mind. Pick one relational database, Postgres is good, and learn it well. After that, how to do stuff in each other variant of relational database will be easy to find out with a search.
-- MM: alright, i will focus on PostgreSQL for now.

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  displayName VARCHAR(255) NOT NULL
  -- DM: I always add created_date and modified_date to my tables. it is VERY useful later for debugging in PROD when something gets weird
  -- (done)DM: check if "TIMESTAMP DEFAULT CURRENT_TIMESTAMP" is correct for the DB type you are using because AI wrote that. MM: In Firestore, the equivalent of TIMESTAMP DEFAULT CURRENT_TIMESTAMP is FieldValue.serverTimestamp(), the real-time-chat uses serverTimestamp().
    -- DM: ok, for now just focus on the SQL database you are using. Later when this is completely done, we'll compare to Firestore.
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  modified_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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

-- CREATE TABLE messages (
--   id SERIAL PRIMARY KEY,
--   text TEXT NOT NULL,
--   sender INTEGER REFERENCES users(id),
--   senderName VARCHAR(255) NOT NULL,
--   timestamp TIMESTAMP NOT NULL
-- );



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

 
 MM: as i can't differentiate with precision the different SQL database types, but Firebase uses a NoSQL database called Firestore, a document-oriented, which means it doesn't use tables, rows, and columns like SQL databases, but instead uses collections, documents, and fields. now to create a NoSQL representation of the real-chat-app Firebase database, the code would look specifically like this: 

*/
CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  displayname VARCHAR(255) NOT NULL,
  -- this is a timestamp with time zone, which is equivalent to TIMESTAMP DEFAULT CURRENT_TIMESTAMP in SQL databases
  created_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  modified_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  isactive BOOLEAN NOT NULL
);

-- (done)DM: todoMM: just have one message table in this file, not two. Focusing on prosgres. The Ruby comments are helpful, but clean up this file moving the firestore-specific info to a new file in this directory. Be careful to not overthink this. Allocate only 30 minutes to my todoMMs in this directory.
CREATE TABLE messages (
  id VARCHAR(255) PRIMARY KEY,
  text TEXT NOT NULL,
  sender VARCHAR(255) REFERENCES users(id),
  sendername VARCHAR(255) NOT NULL,
  timestamp TIMESTAMPTZ NOT NULL
);
