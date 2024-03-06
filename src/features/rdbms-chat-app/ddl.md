```sql

-- drop tables if they exist
drop table if exists messages;
drop table if exists users;

-- create users table
create table users
(
    users_id serial primary key,
    users_user_name varchar(100) unique not null,
    users_display_name varchar(100) not null,
    users_profile_image_url varchar(100) not null, -- for storing images, consider using external storage and saving the URL here
    users_last_active_date date default current_date,
    users_create_date date default current_date,
    users_last_modified_date date default current_date
);

-- create messages table
create table messages
(
    messages_id serial primary key,
    messages_users_id int not null,
    messages_text varchar(4000) not null,
    messages_create_date date default current_date,
    foreign key (messages_users_id) references users(users_id)
);


-- trigger to update users_last_active_date when a new message is inserted
create or replace function update_users_last_active_date()
returns trigger as
$$
begin
    update users
    set users_last_active_date = current_date
    where users_id = new.messages_users_id;
    return new;
end;
$$
language plpgsql;

create trigger messages_after_insert_or_delete
after insert or delete on messages
for each row
execute procedure update_users_last_active_date();

-- test data for users
insert into users (users_id, users_user_name, users_display_name, users_profile_image_url) values (1, 'geny', 'Geny', 'url');
insert into users (users_id, users_user_name, users_display_name, users_profile_image_url) values (2, 'mike', 'Mike', 'url');

-- updates to users table
update users 
set users_user_name = 'GenyIsCool', 
    users_last_modified_date = current_date 
where users_id = 1;

-- messages data
insert into messages (messages_id, messages_users_id, messages_text) values (1, 1, 'Hello, Mike!');
insert into messages (messages_id, messages_users_id, messages_text) values (2, 2, 'Hello, Geny!');

-- queries
-- list all users who have written a message in the last 24 hours or who have updated their profile
select * from users
where users_last_active_date > current_date - interval '1 day'
   or users_last_modified_date > current_date - interval '1 day'
order by users_last_active_date desc;

-- list all messages written in the last 24 hours; join with the users table
select m.*, u.users_display_name from messages m
join users u on m.messages_users_id = u.users_id
where m.messages_create_date > current_date - interval '1 day'
order by m.messages_create_date desc;

-- list all users sorted by last-updated
select * from users
order by users_last_modified_date desc;

-- ----------------------------------------------------------------
-- ----------------------------------------------------------------
-- Listening for inserts, updates, and deletes

-- ----------------------------------------------------------------
-- Function for new user insertions
CREATE OR REPLACE FUNCTION notify_new_user()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM pg_notify('new_user', row_to_json(NEW)::text);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for new user insertion
CREATE TRIGGER new_user_trigger
AFTER INSERT ON users
FOR EACH ROW EXECUTE FUNCTION notify_new_user();

-- Function for user updates
CREATE OR REPLACE FUNCTION notify_user_update()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM pg_notify('user_update', row_to_json(NEW)::text);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for user updates
CREATE TRIGGER user_update_trigger
AFTER UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION notify_user_update();

-- --------------------------------------------------------------
-- Function for new message insertions
CREATE OR REPLACE FUNCTION notify_new_message()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM pg_notify('new_message', row_to_json(NEW)::text);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for new message insertion
CREATE TRIGGER new_message_trigger
AFTER INSERT ON messages
FOR EACH ROW EXECUTE FUNCTION notify_new_message();

-- Function for message deletions
CREATE OR REPLACE FUNCTION notify_message_deletion()
RETURNS TRIGGER AS $$
BEGIN
  IF (OLD.last_modified > (CURRENT_TIMESTAMP - INTERVAL '24 hours')) THEN
    PERFORM pg_notify('message_deletion', row_to_json(OLD)::text);
  END IF;  
  RETURN OLD;
END;
$$ LANGUAGE plpgsql;

-- Trigger for message deletion
CREATE TRIGGER message_deletion_trigger
AFTER DELETE ON messages
FOR EACH ROW EXECUTE FUNCTION notify_message_deletion();




```