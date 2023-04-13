import React from 'react'

//(in progress) DM: todoMM: try passing the colors, the legend, and the initial color as props, so that this is more generic
// DM: i have not read about transitioning from props to state. i will do that tomorrow as there is a lesson called "props vs state" in the joy-of-react course
function SelectColors({ colors, legend, initialColor = '' }) {
  // ???DM: after passing colors, legend, and initialColor as props, where to call the colors , and legend. the initialColor is called in the useState, what about the other two?
  // DM: sounds good, this is a hint:
  // const { colors, legend, initialColor = 'red' } = props
  const [selectedOption, setSelectedOption] = React.useState(initialColor)

  return (
    <form>
      <fieldset>
        <legend>What is your favorite color?</legend>
        {/* this is where you use legend passed as props */}

        <select
          value={selectedOption}
          onChange={(event) => {
            setSelectedOption(event.target.value)
          }}
        >
          // DM: this is where you would use the colors passed as props
          <option value="">{(colors = 'Select a color')}</option>
          <option value="red">{(colors = 'Red')}</option>
          <option value="green">{(colors = 'Green')}</option>
          <option value="blue">{(colors = 'Yellow')}</option>
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
