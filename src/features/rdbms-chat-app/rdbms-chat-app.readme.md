
# next steps: build a postgres back end for the existing chat app
* WHY: after you build a postgres back end, you will understand better what is needed from a firestore back end for the chat app
* HOW: build postgres back end. Result: chat app has 2 back ends and you can switch back and forth by setting the value of a flag variable dbSource = postres|forestore in constants file.
# STEPS
* pick a database-as-a-service provider for postgres; create account there
* create the tables
* add test data
* run queries to validate the queries and the test data
* build a simple NextJS page that shows 

# database setup
* npm install pg # the postgres package
* npm install tsx # to run the server process # will self-restart when you save edits to server code
* sign up to aiven.io
* create a postgres database. You'll see a dialog with several steps
  * get password and ca secrets and put in .env.local (put the ca in "" because it is multiline)
    * from the first step shown (creating the index.ts file with password and certificate (ca))
    * or from "Quick connect" button in the page for your new datbase in the console 
  * skip the remaining steps
* create tables
* create test data
