import React from 'react'

// howtoreact:: pass an initial value to a useState as a prop

export default function MultipleCheckbox({
  initialItems = { anchovies: false, chicken: false, tomatoes: false },
  legend = 'Select toppings: ',
}) {
  const [items, setItems] = React.useState(initialItems)

  return (
    <>
      <form>
        <fieldset>
          <legend>{legend}</legend>

          {/*
            Iterate over those items, and
            create a checkbox for each one:
          */}
          {Object.entries(items) // [ ['anchovies', false], ['chicken', false] ]
            // .map(([ 'chicken', false ]) => (
            .map(([item, itemChecked]) => (
              <div key={item}>
                <input
                  type="checkbox"
                  id={item}
                  value={item}
                  checked={itemChecked}
                  onChange={(event) => {
                    // howtoreact: update state based on previous state https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state use a callback function so you can get access to prev (the previous value). Addresses "race condition" issue that is possible in a large component that may call setItems in multiple places (possible setItems is passed as a prop to children components). Always (mostly) use when the type of the React state variable is an object
                    setItems((prev) => ({
                      ...prev,
                      [item]: event.target.checked,
                    }))
                  }}
                />
                <label htmlFor={item}>{item}</label>
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
