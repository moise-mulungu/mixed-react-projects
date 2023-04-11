import React from 'react'

const CORRECT_CODE = '123456'

function TwoFactor() {
  const [code, setCode] = React.useState('')
  const [isCorrect, setIsCorrect] = React.useState('')

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
        <button onClick={() => setIsCorrect(isCorrect)}>Validate</button> {/* The <button type="submit"> specifies a submit button. */}
        <p>Your code is: {isCorrect ? 'correct' : 'incorrect'}</p>
        {/* i want to get the result of isCorrect instead of the one from the code as from window.alert. how can i fix that? 
        with conditional rendering. you can use the ternary operator just like you did in the alert. just put it into {}
        in JSX anything in {} is JavaScript, not JSX

        */}
        {/* {isCorrect ? 'Correct!' : 'Incorrect'} */}
      </div>
    </form>
  )
}

export default TwoFactor
