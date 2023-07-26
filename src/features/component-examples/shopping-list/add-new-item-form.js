import React from 'react'

function AddNewItemForm({ handleAddItem }) {
  const [label, setLabel] = React.useState('')

  return (
    /* DM: remove the className if it is not used. There are a lot of unused classNames. It is distracting and makes this code difficult to read (slows down my review). */
    <div className="new-list-item-form">
      <form
        onSubmit={(event) => {
          event.preventDefault()

          handleAddItem(label)

          setLabel('')
        }}
      >
        <label htmlFor="new-list-form-input">New item:</label>

        {/* DM: style these "inline" with tailwind or plain CSS. This form is not usable, because I can't tell where the input element is and "Add" doesn't look like a button! Be sure to always make your components "usable" otherwise you are not done and it uses up my time! If these were properly styled, I would have said: Great job! */}
        <div className="row" >
          <input
            id="new-list-form-input"
            type="text"
            value={label}
            onChange={(event) => {
              setLabel(event.target.value)
            }}
          />
          <button>Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddNewItemForm
