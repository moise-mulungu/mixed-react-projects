import React from 'react'

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

  return (
    /*(done) DM: these classNames don't exist, so remove them */
    <div>
      <div>
        <ol>
          {items.map(({ id, label }) => (
            <li
              key={id}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
            >
              {label}
            </li>
          ))}
        </ol>
      </div>
      <AddNewItemForm handleAddItem={handleAddItem} />
    </div>
  )
}

export default ShoppingList
