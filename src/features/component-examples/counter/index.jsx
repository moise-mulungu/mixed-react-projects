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

          console.log(nextCount)
        }}
      >
        Click me!
      </button>

      <button
        onClick={() => {
          const previousCount = count - 1
          setCount(previousCount)

          console.log(previousCount)
        }}
      >
        Click me!
      </button>
    </>
  )
}

export default Counter
