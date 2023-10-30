// example: lifting state up
// before: These two inputs are independent.
// after: Make them stay in sync: editing one input should update the other input with the same text, and vice versa.
import { useState } from 'react'

/* DM: I liked the way you documented the before and after by adding comments for each numbered step and leaving the "before" code in comments. It is really clear. note: I updated some of the comments. */

/*
steps:
    1. detect the child or children components with the state to be lifted up
    2. declare state variable in the parent component
    3. pass that state as props to the child(ren) component
    4. update the state via callback
*/

// parent component
export default function SyncedInputs() {
  // 2. declare state variable in the parent component
  const [text, setText] = useState('')

  return (
    <>
      {/* <Input label="First input" />
      <Input label="Second input" /> */}

      {/* 3. pass that state as props to the child(ren) component */}
      <Input label="First input" text={text} setText={setText} />
      <Input label="Second input" text={text} setText={setText} />
    </>
  )
}

// child component
// function Input( label ) {
function Input({ label, text, setText }) {
  // 1. detect the child or children components with the state to be lifted up
  //   const [text, setText] = useState('')

  function handleChange(e) {
    {
      /*  4. update the state via callback (setter passed as a prop) */
    }
    setText(e.target.value)
  }

  return (
    <label>
      {label} <input value={text} onChange={handleChange} />
    </label>
  )
}
