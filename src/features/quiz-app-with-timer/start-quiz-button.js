// (ok)DM: never import React from 'react' in NextJS
// import React from 'react'
//MM: DM: the nextjs styles documentation: https://nextjs.org/docs/app/building-your-application/styling/css-modules
// import button from './styles/button.module.css'
// import React, { useState } from 'react'
// import RulesOfTheQuiz from './rules-of-the-quiz'

// export default function StartQuizButton() {
//   const [showRules, setShowRules] = useState(false)
//   const handleStartQuizClick = () => {
//     setShowRules(true)
//   }
//   return (
//     <>
//       <button
//         className="bg-white text-blue-500 font-bold py-4 px-6 rounded"
//         // {button.start_btn}
//         onClick={handleStartQuizClick}
//       >
//         {' '}
//         Start Quiz
//       </button>
//       {showRules && (
//         <div className="popup">
//           <RulesOfTheQuiz />
//           {/* <button
//             className="bg-red-500 text-white py-2 px-4 rounded mr-2"
//             onClick={() => setShowRules(false)}
//           >
//             Exit
//           </button>
//           <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">Continue</button> */}
//         </div>
//       )}
//     </>
//   )
// }

import React, { useState } from 'react';
import RulesOfTheQuiz from './rules-of-the-quiz';

export default function StartQuizButton() {
  const [showRules, setShowRules] = useState(false);

  const handleStartQuizClick = () => {
    setShowRules(true);
  };

  const handleExitShowRulesClick = () => {
    setShowRules(false);
  };

  return (
    <>
      {showRules ? (
        <div className="popup">
          <RulesOfTheQuiz onClose={handleExitShowRulesClick}/>
          {/* <button
            className="bg-red-500 text-white py-2 px-4 rounded mr-2"
            onClick={() => setShowRules(false)}
          >
            Exit
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">Continue</button> */}
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
  );
}