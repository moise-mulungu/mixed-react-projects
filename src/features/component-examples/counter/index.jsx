import React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <p>You've clicked {count} times.</p>
      <button
        onClick={() => {
          const nextCount = count + 1
          setCount(nextCount)

          console.log({ nextCount })
        }}
      >
        Click me!
      </button>
      {/* DM: todoMM: give this some styling, so that it looks like a button. It looks like plain
      text in the browser. */}
      <button
        onClick={() => {
          const previousCount = count - 1
          setCount(previousCount)

          console.log({ previousCount })
        }}
      >
        {/* DM: todoMM: give this button a different value so that it is clear in the browser the difference between the two buttons, e.e, this button decrements, the other increments */}
        Click me!
      </button>
    </>
  )
}

export default Counter
