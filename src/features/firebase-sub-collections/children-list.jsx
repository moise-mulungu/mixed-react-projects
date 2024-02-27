import { collection } from '@firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import AddNewSubCollections from './add-new-subcollections'
import { db } from './firebase-config'

export default function ChildrenList({ path }) {
  const query = collection(db, path)
  const [docs, loading, error] = useCollectionData(query)

  if (error) {
    console.error('Error fetching documents: ', error)
  }

  return (
    <ul className="space-y-2 mt-2">
      {loading && <p className="text-sm text-gray-500">Loading...</p>}

      {docs?.map((doc) => (
        <li key={Math.random()} className="text-sm">
          {doc.name}
        </li>
      ))}
      <AddNewSubCollections path={path} />
    </ul>
  )
}
