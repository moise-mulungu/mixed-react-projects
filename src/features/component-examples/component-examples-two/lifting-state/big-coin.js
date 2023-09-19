import React from 'react'
// import './BigCoin.css';

function BigCoin({
  numOfCoins,
  setNumOfCoins,
  // good. Tip: avoid "magic numbers" and "magic strings" by putting them in a variable or prop(ok)
  incrementBy = 2, // I set a default value so that it is an optional prop
}) {
  return (
    <div className="coin-wrapper">
      <button className="coin" onClick={() => setNumOfCoins(numOfCoins + incrementBy)}>
        <span className="visually-hidden">Add ${incrementBy} coins</span>
        <img
          className="coin-image"
          alt=""
          src="https://sandpack-bundler.vercel.app/img/toonie.png"
        />
      </button>
    </div>
  )
}

export default BigCoin
