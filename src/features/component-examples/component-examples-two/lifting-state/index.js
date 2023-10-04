import React from 'react'

import BigCoin from './big-coin'

// DM: todoMM: add

function LiftingState() {
  //(done) DM: todoMM: write a howtoreact here, describing how to lift state DM: good job!
  // howtoreact: state:: lifting state up: remove state from children, then move it to their closest common parent, and then pass it down to them via props.
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
