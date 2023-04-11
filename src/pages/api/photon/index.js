//(done??) DM: todoMM: do a global VsCode search on "../../.." to find all instances across the repo of this, and replace them with @, and make sure you're running nextjs and the code compiles. It's not done - there is on eright here on the next line.
import clientPromise from '../../../server/lib/mongodb-client'

export async function getServerSideProps(context) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
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

export default async function handler(req, res) {
  res.status(200).json({
    ...data,
    totalSeparately: data.videoCt + data.portalsCt + data.internalAppsCt,
    allUniqueNamesCt: uniq(all.data.testCases.map((item) => item.name)).length,
  })
}
