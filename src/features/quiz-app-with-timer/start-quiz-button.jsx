// (ok)DM: never import React from 'react' in NextJS DM: todoDM; find a ESLint config that calls this out
// import React from 'react'
//MM: DM: the nextjs styles documentation: https://nextjs.org/docs/app/building-your-application/styling/css-modules

// import React, { useState } from 'react'
// import RulesOfTheQuiz from './rules-of-the-quiz'
// import { handleStartQuizClick } from './index'

export default function StartQuizButton({ handleStartQuizClick }) {
  // const [showRules, setShowRules] = useState(false)

  // const handleStartQuizClick = () => {
  //   setShowRules(true)
  // }

  // const handleExitShowRulesClick = () => {
  //   setShowRules(false)
  // }

  /* 
  DM: good! Now, lift EVERYTHING in this component except the button tag UP to the parent component, index.jsx.
  why: this is correctly a component for the button (the button only), so the rest of the code should be moved up to the parent component. 
  remember: once you lift state up to the parent component, you'll have to pass setShowRules to StartQuizButton as a prop. 
  */

  return (
    <>
      {/* {showRules ? (
        <div className="popup">
          <RulesOfTheQuiz handleExitShowRulesClick={handleExitShowRulesClick} />
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
      )} */}
      <button
        className="bg-white text-blue-500 font-bold py-4 px-6 rounded"
        onClick={handleStartQuizClick}
      >
        Start Quiz
      </button>
    </>
  )
}
