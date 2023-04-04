import React from 'react'

// DM: todoMM: try passing the colors, the legend, and the initial color as props, so that this is more generic

function SelectColors() {
  const [selectedOption, setSelectedOption] = React.useState('red')

  return (
    <form>
      <fieldset>
        <legend>What is your favorite color?</legend>

        <select
          value={selectedOption}
          onChange={(event) => {
            setSelectedOption(event.target.value)
          }}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
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
