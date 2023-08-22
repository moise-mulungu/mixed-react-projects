import React from 'react'
// import styles from './gradient-generator.module.css'

function GradientGenerator() {
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#FF0040',
    '#FF0040',
    '#FF0040',
    '#FF0040',
  ])
  const [numOfVisibleColors, setNumOfVisibleColors] = React.useState(2)

  const visibleColors = colors.slice(0, numOfVisibleColors)

  const colorStops = visibleColors.join(', ')
  const backgroundImage = `linear-gradient(${colorStops})`

  function addColor() {
    if (numOfVisibleColors >= 5) {
      window.alert('There is a maximum of 5 colors')
      return
    }

    setNumOfVisibleColors(numOfVisibleColors + 1)
  }

  function removeColor() {
    if (numOfVisibleColors <= 2) {
      window.alert('There is a minimum of 2 colors')
      return
    }

    setNumOfVisibleColors(numOfVisibleColors - 1)
  }

  return (
    <div className="wrapper">
      <div className="actions">
        <button
          onClick={addColor}
          type="button"
          className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-green-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mb-3"
        >
          Add color
        </button>
        <button
          styles={
            {
              /*(done) DM: todoMM: space them out and put a border so they look like buttons */
            }
          }
          type="button"
          className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-red-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50  ml-3"
          onClick={removeColor}
        >
          Remove color
        </button>
      </div>

      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />

      <div className="colors">
        {visibleColors.map((color, index) => {
          const colorId = `color-${index}`
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>Color {index + 1}:</label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  value={color}
                  onChange={(event) => {
                    const nextColors = [...colors]
                    nextColors[index] = event.target.value

                    setColors(nextColors)
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GradientGenerator
