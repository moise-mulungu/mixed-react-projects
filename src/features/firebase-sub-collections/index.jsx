// import './style.css'
import { collection } from '@firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { db } from './firebase-config'
import ChildrenList from './children-list'
import AddNewSubCollections from './add-new-subcollections'

export default function FirebaseSubCollections() {
  const query = collection(db, 'oses')
  const [docs, loading, error] = useCollectionData(query)

  console.log('docs', docs)

  // Log any errors
  if (error) {
    console.error('Error fetching documents: ', error)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Operating Systems</h1>

      {loading && <p className="text-lg text-gray-500">Loading...</p>}

      <ul className="space-y-4">
        {docs?.map((doc) => (
          <div key={Math.random()} className="border p-4 rounded shadow">
            <li className="text-lg font-semibold">{doc.name}</li>
            <ChildrenList path={`oses/${doc.name}/children`} />
          </div>
        ))}
        <AddNewSubCollections path="oses" />
      </ul>
    </div>
  )
}
