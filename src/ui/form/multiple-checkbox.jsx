import React from 'react'
// DM: this is great. Below are some comments about
// DM: todoMM: this is implementation-specific. src/ui components should work with any page, any project - they are generic. So, adjust your Component to accept this data as a prop.
const initialToppings = {
  anchovies: false,
  chicken: false,
  tomatoes: false,
}

export default function MultipleCheckbox() {
  // DM: todoMM: these names are implementation-specific. You can call them 'items'
  const [pizzaToppings, setPizzaToppings] = React.useState(initialToppings)

  // Get a list of all toppings.
  // ['anchovies', 'chicken', 'tomato'];
  const toppingsList = Object.keys(initialToppings)

  return (
    <>
      <form>
        <fieldset>
          <legend>Select toppings (make this a prop):</legend>

          {/*
            Iterate over those toppings, and
            create a checkbox for each one:
          */}
          {toppingsList.map((option) => (
            <div key={option}>
              <input
                type="checkbox"
                id={option}
                value={option}
                checked={pizzaToppings[option] === true}
                onChange={(event) => {
                  // DM: if you need the current value, use a callback function so you can get access to prev (the previous value). In larger components what if something else called setPizzaToppings and ... better: just add a tech-vocabulary item "race condition" - it is a common interview question
                  setPizzaToppings((prev) => ({
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
      <p className="output">{JSON.stringify(pizzaToppings, null, 2)}</p>
    </>
  )
}
