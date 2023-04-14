import React from 'react'
// import style from './click-ball.module.css'

import VisuallyHidden from '../visually-hidden'

export default function ClickBallGame() {
  function handleClick(type) {
    if (type === 'win') {
      alert('You win!')
    } else {
      alert('You lose!')
    }
  }

  return (
    <div className="wrapper">
      <button className="ball" onClick={() => handleClick('win')}>
        <VisuallyHidden>Ball</VisuallyHidden>
      </button>
      <button className="bomb" onClick={() => handleClick('lose')}>
        <span role="img" aria-label="bomb">
          💣
        </span>
      </button>
    </div>
  )
}
