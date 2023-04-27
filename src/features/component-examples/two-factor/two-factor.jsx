import React, { useEffect } from 'react'

const CORRECT_CODE = '123456'

function TwoFactor() {
  const [code, setCode] = React.useState('')
  const [isCorrect, setIsCorrect] = React.useState('')

  // howtoreact: to perform a 'side effect'. Any time isCorrect changes, the current value will be logged
  useEffect(() => {
    console.log({ isCorrect })
  }, [isCorrect])

  //(done) DM: todoMM: (in progress) make a react vocab entry for 'side effect' (search: "reactjs side effect" and prefer search result links that are official react docs, if they are shown)

  return (
    <form>
      {/* 
      (done)DM: todoMM: is the below comments issue complete(yes, it is)?
      MM: the onSubmit is not necessary anymore? while the button should submit the entire form! 
      DM: the onClick event handler:
      () => setIsCorrect(isCorrect)
      does what you want, it selects the color
      what else is there to do? In an example page, showing select-colors reusable component
      you don't need to have a fully-working form that submits something, going to the next page, etc.
      you just need to show that the select input works */}
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
