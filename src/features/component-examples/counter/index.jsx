import React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <p>You've clicked {count} times.</p>
      <button
        className="px-4 py-2 text-sm font-medium text-white bg-orange-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={() => {
          const previousCount = count - 1
          setCount(previousCount)

          console.log({ previousCount })
        }}
      >
        Decrease!
      </button>
      <button
        className="px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={() => {
          const nextCount = count + 1
          setCount(nextCount)

          console.log({ nextCount })
        }}
      >
        Increase!
      </button>
    </>
  )
}

export default Counter
