import React, { useState } from 'react'

// DM: todoMM: rename the filename to match the default function name
export default function Convert() {
  const [input, setInput] = useState('')
  const [isPascalToCamel, setIsPascalToCamel] = useState(true)

  const convertString = (str) => {
    if (isPascalToCamel) {
      return str.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`)
    } else {
      return str.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase())
    }
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleCheckboxChange = () => {
    setIsPascalToCamel(!isPascalToCamel)
  }

  return (
    <div>
      <h1>PascalCase to camelCase Converter</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <br />
      <label>
        <input type="checkbox" checked={isPascalToCamel} onChange={handleCheckboxChange} />
        Convert PascalCase to camelCase
      </label>
      <br />
      <label>
        <input type="checkbox" checked={!isPascalToCamel} onChange={handleCheckboxChange} />
        Convert camelCase to PascalCase
      </label>
      <br />
      <h2>Converted String:</h2>
      <p>{convertString(input)}</p>
    </div>
  )
}


