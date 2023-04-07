import React from 'react'

const CORRECT_CODE = '123456'

function TwoFactor() {
  const [code, setCode] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()

    window.alert(isCorrect ? 'Correct!' : 'Incorrect')
    console.log('isCorrect', isCorrect)

    setCode(isCorrect)
  }
  // const isCorrect = code === CORRECT_CODE

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
        <button>Validate</button>
        <p>Your code is:{code}</p>
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
