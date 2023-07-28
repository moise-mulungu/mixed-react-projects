import React from 'react'
import { MinusIcon } from '@heroicons/react/20/solid'

import AddNewItemForm from './add-new-item-form'

function ShoppingList() {
  const [items, setItems] = React.useState([])

  function handleAddItem(label) {
    const newItem = {
      label,
      id: Math.random(),
    }

    const nextItems = [...items, newItem]
    setItems(nextItems)
  }

  function handleRemoveItem(index) {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  return (
    <div>
      <div>
        <ol>
          {items.map(({ id, label }) => (
            <li
              key={id}
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"
            >
              {label}
              <button
                onClick={() => handleRemoveItem(id)}
                // MM: DM: looking how to place the button at the end of its parent container
                className="rounded-full bg-red-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-10"
              >
                <MinusIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ol>
      </div>
      <AddNewItemForm handleAddItem={handleAddItem} />
    </div>
  )
}

export default ShoppingList
