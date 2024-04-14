import React from 'react'
// DM: todoDM: plan for implementing the ui/dropdown component here
// DM: todoDM: plan lesson for "controlled components" (VS ?)
function SelectColors({ colors, legend, initialColor }) {
  const [selectedOption, setSelectedOption] = React.useState(initialColor)

  return (
    <form>
      <fieldset>
        <legend>{legend}</legend>

        <select
          onChange={(event) => {
            setSelectedOption(event.target.value)
          }}
        >
          {colors.map((color) => {
            return (
              <option value={color} key={color} selected={initialColor === color}>
                {color}
              </option>
            )
          })}
        </select>
      </fieldset>

      <p>
        Selected value:
        <br />
        {selectedOption}
      </p>
    </form>
  )
}

export default SelectColors
