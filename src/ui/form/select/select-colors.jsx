import React from 'react'

//(in progress) DM: todoMM: try passing the colors, the legend, and the initial color as props, so that this is more generic
// DM: i have not read about transitioning from props to state. i will do that tomorrow as there is a lesson called "props vs state" in the joy-of-react course
function SelectColors({ colors, legend, initialColor = '' }) {
  // ???DM: after passing colors, legend, and initialColor as props, where to call the colors , and legend. the initialColor is called in the useState, what about the other two? I did it for 'legend' and put comments about doing it for 'colors' below
  // DM: sounds good, this is a hint:
  // const { colors, legend, initialColor = 'red' } = props
  const [selectedOption, setSelectedOption] = React.useState(initialColor)

  return (
    <form>
      <fieldset>
        {/* this is where you use legend passed as props */}
        <legend>{legend}</legend>

        <select
          value={selectedOption}
          onChange={(event) => {
            setSelectedOption(event.target.value)
          }}
        >
          // DM: todoMM: hey, I'm not sure of the current status of this. finish it up, or put a
          "MM: todoMM:" note to yourself to finish later (but add a short instructions for you
          future self of what you need to do) I just passed props to colors as an array.
          {colors.map((color) => {
            return (
              <option value={color} key={color}>
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

/* 

wherever you call <SelectColors /> it will look like this. You can fill in the values where I put "..."
<SelectColors colors={ ... } legend={ ... } initialColor={ ... } />
S
Look at your other examples of using a component and passing props
<Hello name="Moïse" />
      <Link href="/">Internal</Link>

*/
