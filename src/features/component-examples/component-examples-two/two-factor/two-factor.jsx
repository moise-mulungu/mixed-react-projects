import React, { useEffect } from 'react'

const CORRECT_CODE = '123456'

function TwoFactor() {
  const [code, setCode] = React.useState('')
  const [isCorrect, setIsCorrect] = React.useState('')

  // howtoreact: to perform a 'side effect'. Any time isCorrect changes, the current value will be logged
  useEffect(() => {
    console.log({ isCorrect })
  }, [isCorrect])

  return (
    <form>
      <label htmlFor="auth-code">Enter authorization code:</label>
      <div className="row">
        <input
          id="auth-code"
          type="text"
          required={true}
          maxLength={6}
          value={code}
          onChange={(event) => {
            setCode(event.target.value)
          }}
        />
        <button onClick={() => setIsCorrect(isCorrect)}>Validate</button>
        {/* conditional rendering */}
        <p>Your code is: {isCorrect ? 'correct' : 'incorrect'}</p>
      </div>
    </form>
  )
}

export default TwoFactor
