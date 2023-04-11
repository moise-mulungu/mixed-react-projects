import React from 'react'
// DM: this is great. Below are some comments about
//(done) DM: todoMM: this is implementation-specific. src/ui components should work with any page, any project - they are generic. So, adjust your Component to accept this data as a prop.(i don't know what the prop name should be, you want me to pass the initialItems as a prop?) Yes
const initialItems = {
  anchovies: false,
  chicken: false,
  tomatoes: false,
}

export default function MultipleCheckbox() {
  //(done) DM: todoMM: these names are implementation-specific. You can call them 'items' please put (done) or a questions for each todo, so I can go faster
  const [items, setItems] = React.useState(initialItems)

  // Get a list of all toppings.
  // ['anchovies', 'chicken', 'tomato'];
  const itemsList = Object.keys(initialItems)

  return (
    <>
      <form>
        <fieldset>
          <legend>Select toppings (make this a prop):</legend>
          {/* don't understand what should i pass as prop here, please need more explanation*/}

          {/*
            Iterate over those toppings, and
            create a checkbox for each one:
          */}
          {itemsList.map((option) => (
            <div key={option}>
              <input
                type="checkbox"
                id={option}
                value={option}
                checked={items[option] === true}
                onChange={(event) => {
                  //(read, but did not get the idea behind) DM: todoMM: if you need the current value, use a callback function so you can get access to prev (the previous value). In larger components what if something else called setItems and ... better: just add a tech-vocabulary item "race condition" - it is a common interview question
                  setItems((prev) => ({
                    ...prev,
                    [option]: event.target.checked,
                  }))
                }}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </fieldset>
      </form>
      <p>
        <strong>Stored state:</strong>
      </p>
      <p className="output">{JSON.stringify(items, null, 2)}</p>
    </>
  )
}
