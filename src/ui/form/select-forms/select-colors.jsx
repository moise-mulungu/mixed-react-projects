import React from 'react'

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
