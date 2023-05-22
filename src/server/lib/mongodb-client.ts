import { MongoClient } from 'mongodb'
/* 
this file is the nextjs suggested usage

usage:
import clientPromise from '../lib/mongodb'

export async function getServerSideProps(context) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI_LOCALHOST
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

async function listDatabases(client){ // client, after .connect()
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}
so, DB gets you a db in the connection
so, I need a group of connections: localhost, dev, prod ... only 3 ...
each time the server starts I'd want to connect to all 3, so just do that here


*/
if (!process.env.MONGODB_URI_LOCALHOST) {
  throw new Error('Invalid environment variable: "MONGODB_URI_LOCALHOST"')
}

const uri = process.env.MONGODB_URI_LOCALHOST
const options = {
  // native_parser: true // the default?
}

// code copied from mongo-nextjs demo; todoDM: check if these let can be const and justify why let needed, if so
let client
let clientPromise: Promise<MongoClient>

if (!process.env.MONGODB_URI_LOCALHOST) {
  throw new Error('Please add your Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
