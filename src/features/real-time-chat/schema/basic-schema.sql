CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  displayName VARCHAR(255) NOT NULL
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
*/