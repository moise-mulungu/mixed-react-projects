import React from 'react'

import BigCoin from './big-coin'

// DM: todoMM: add

function LiftingState() {
  //(done) DM: todoMM: write a howtoreact here, describing how to lift state
  // howtoreact: useState(hooks):: lifting state up: to lift up a state in react you need to remove state from children, then move it to their closest common parent, and then pass it down to them via props.
  const [numOfCoins, setNumOfCoins] = React.useState(0)

  return (
    <div className="wrapper">
      <main>
        <BigCoin numOfCoins={numOfCoins} setNumOfCoins={setNumOfCoins} />
      </main>
      <footer>
        Your coin balance:
        <strong>{numOfCoins}</strong>
      </footer>
    </div>
  )
}

export default LiftingState
