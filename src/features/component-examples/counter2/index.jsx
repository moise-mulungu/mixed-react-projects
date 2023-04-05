import React from 'react'
import { ChevronUp, ChevronsUp, ChevronDown, ChevronsDown, RotateCcw, Hash } from 'react-feather'

// DM: all these rules/conventions are important. because if you don't do them, it implies that there is a reason not to, and the reader of your code will wonder why you did it. So, if you don't follow them, leave a comment explaining why not

const clamp = (val, min = 0, max = 1) => {
  if (min > max) {
    ;[min, max] = [max, min]
  }

  return Math.max(min, Math.min(max, val))
}

export default function Counter2({ initialVal = 0 }) {
  const [count, setCount] = React.useState(initialVal)

  return (
    <div className="wrapper">
      <p>
        <span>Current value:</span>
        <span className="count">{count}</span>
      </p>
      <div className="button-row">
        <button onClick={() => setCount(count + 1)}>
          <ChevronUp />
          <span className="visually-hidden">Increase slightly</span>
        </button>
        <button
          onClick={() => setCount(count + 10)}
          className="ml-2" // this is a quick way to add a little spacing
        >
          <ChevronsUp />
          <span className="visually-hidden">Increase a lot</span>
        </button>
        <button onClick={() => setCount(initialVal)}>
          <RotateCcw />
          <span className="visually-hidden">Reset</span>
        </button>
        <button
          onClick={() => {
            const nextCount = clamp(Math.ceil(Math.random() * 100), 1, 100)
            setCount(nextCount)
          }}
          // ???DM: this way of getting a random number is a bit confusing, i would like some more explanations.
          // DM: Math.random returns a random number between 0 and .99999.... a Math.ceil is how to always round UP. Why UP? because Math.random returns a value between 0 and .99999... - if you want 1-100, you need to round up.
          // DM: Math.floor to always round down. JS doesn't have a Math.round function, so you have to code your own, or use ceil or floor.
        >
          <Hash />
          <span className="visually-hidden">Set to random value</span>
        </button>
        <button onClick={() => setCount(count - 10)}>
          <ChevronsDown />
          <span className="visually-hidden">Decrease a lot</span>
        </button>
        <button onClick={() => setCount(count - 1)}>
          <ChevronDown />
          <span className="visually-hidden">Decrease slightly</span>
        </button>
      </div>
    </div>
  )
}
