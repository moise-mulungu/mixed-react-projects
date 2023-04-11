import React from 'react'

//(in progress) DM: todoMM: try passing the colors, the legend, and the initial color as props, so that this is more generic
// MM: i have not read about transitioning from props to state. i will do that tomorrow as there is a lesson called "props vs state" in the joy-of-react course (ok)
function SelectColors(props) {
  // DM: sounds good, this is a hint:
  const { colors, legend, initialColor = 'red' } = props
  const [selectedOption, setSelectedOption] = React.useState(initialColor)

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
