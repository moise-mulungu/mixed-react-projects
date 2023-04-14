import React, { useEffect } from 'react'

const CORRECT_CODE = '123456'

function TwoFactor() {
  const [code, setCode] = React.useState('')
  const [isCorrect, setIsCorrect] = React.useState('')

  // DM: todoMM: you don't need handleSubmit, because the setting of state happens via the button onClick handler, so just remove the handleSubmit function
  
  // DM: here is the way to perform a 'side effect'. Any time isCorrect changes, the current value will be logged
  useEffect(() => {
    console.log({ isCorrect })
  }, [isCorrect])

  // DM: todoMM: make a react vocab entry for 'side effect' (search: "reactjs side effect" and prefer search result links that are official react docs, if they are shown)

  return (
    <form>
      {/* ???DM: the onSubmit is not necessary anymore? while the button should submit the entire form! */}
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
