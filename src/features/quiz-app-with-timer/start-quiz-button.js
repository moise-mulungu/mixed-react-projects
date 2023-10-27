// (ok)DM: never import React from 'react' in NextJS
// import React from 'react'
//MM: DM: the nextjs styles documentation: https://nextjs.org/docs/app/building-your-application/styling/css-modules

import React, { useState } from 'react'
import RulesOfTheQuiz from './rules-of-the-quiz'

export default function StartQuizButton() {
  const [showRules, setShowRules] = useState(false)

  const handleStartQuizClick = () => {
    setShowRules(true)
  }

  const handleExitShowRulesClick = () => {
    setShowRules(false)
  }

  return (
    <>
      {showRules ? (
        <div className="popup">
          <RulesOfTheQuiz onClose={handleExitShowRulesClick} />
        </div>
      ) : (
        <button
          className="bg-white text-blue-500 font-bold py-4 px-6 rounded"
          // {button.start_btn}
          onClick={handleStartQuizClick}
        >
          {' '}
          Start Quiz
        </button>
      )}
    </>
  )
}
