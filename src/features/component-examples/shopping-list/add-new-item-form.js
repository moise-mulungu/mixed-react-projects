import React from 'react'
import { PlusIcon } from '@heroicons/react/20/solid'

function AddNewItemForm({ handleAddItem }) {
  const [label, setLabel] = React.useState('')

  return (
    <div className="space-y-12">
      <form
        className="border-b border-white/10 pb-12"
        onSubmit={(event) => {
          event.preventDefault()

          handleAddItem(label)

          setLabel('')
        }}
      >
        <label
          htmlFor="new-list-form-input"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          New item:
        </label>

        {/* DM: Great job! */}
        <div className="mt-2">
          <input
            id="new-list-form-input"
            type="text"
            value={label}
            onChange={(event) => {
              setLabel(event.target.value)
            }}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Add item"
          />
          <button className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2">
            Add
            <PlusIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddNewItemForm
