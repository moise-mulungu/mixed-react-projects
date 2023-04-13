import React from 'react'

const CORRECT_CODE = '123456'

function TwoFactor() {
  const [code, setCode] = React.useState('')
  const [isCorrect, setIsCorrect] = React.useState('')

  // DM: todoMM: you don't need handleSubmit, because the setting of state happens via the button onClick handler, so just remove the handleSubmit function
  function handleSubmit(event) {
    // event.value holds the value entered in the text input
    event.preventDefault()

    // DM: isCorrect is not defined. you want to see if the entered code is the same as CORRECT_CODE, right?
    //     if you want access to isCorrect in the JSX, than isCorrect needs to be in React state, so make a React.useState for isCorrect

    // isCorrect = code === CORRECT_CODE
    window.alert(isCorrect ? 'Correct!' : 'Incorrect')
    console.log('isCorrect', isCorrect)

    //
    // setCode(isCorrect) // the initialValue of code is a string, not boolean: const [code, setCode] = React.useState('')
    // setIsCorrect(isCorrect)
  }

  // DM: here is the way to perform a 'side effect'. Any time isCorrect changes, the current value will be logged
  useEffect(() => {
    console.log({ isCorrect })
  }, [isCorrect])

  // DM: todoMM: make a react vocab entry for 'side effect' (search: "reactjs side effect" and prefer search result links that are official react docs, if they are shown)

  return (
    <form onSubmit={handleSubmit}>
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
