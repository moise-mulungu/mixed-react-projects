// import React, { useState, useEffect } from 'react'

// export default function RulesOfTheQuiz({ handleExitShowRulesClick }) {
export default function RulesOfTheQuiz({
  handleExitShowRulesClick,
  handleContinueFromRulesClick,
  // handleExitClick,
  // showQuestion,
}) {
  //   const [quizInProgress, setQuizInProgress] = useState(false)
  //(done) DM: good! Now lift to index.jsx all lines from here through the comment below: // END of lines to move
  // important!: before you lift these lines, lift the code I mentioned in the parent component, StartQuizButton, up to index.jsx. Then lift the lines from this component up to index.jsx. Doing it in that order will make a lot more sense.
  // the reason to lift these lines is because this component is for the rules of the quiz only, not the quiz itself. See the SOLID single-responsibility principle at https://en.wikipedia.org/wiki/SOLID

  // const [showQuestion, setShowQuestion] = useState(false)
  // const [quizData, setQuizData] = useState(null)
  // const [error, setError] = useState(null) // DM: good! you're handling errors

  // const loading = !quizData && !error

  // useEffect(() => {
  //   const category = 'sql' // replace with your desired category

  //   const apiUrl = `/api/quiz?category=${category}`

  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('data:', data)
  //       setQuizData(data)
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching quiz data:', error)
  //       setError(error)
  //     })
  // }, [])

  // if (error) {
  //   return <div>Error fetching quiz data: {error.message}</div>
  // }

  // if (showQuestion) {
  //   // Render the question box if the quiz is in progress
  //   return <div>Question Box</div>
  // }

  // if (loading) {
  //   return <div>Loading quiz data...</div>
  // }

  // END of lines to move

  // const handleContinueFromRulesClick = () => {
  //   // DM: after you lift the above lines to index.jsx, you'll need to pass setShowQuestion to RulesOfTheQuiz as a prop
  //   setShowQuestion(true)
  // }

  // const handleExitClick = () => {
  //   handleExitShowRulesClick()
  //   // setQuizInProgress(false)
  // }

  /*
 import React, { useState } from 'react';
import data from './data.js';

function QuizAppWithTimer() {
  const [showData, setShowData] = useState(false);

  const handleContinueClick = () => {
    setShowData(true);
  };

  return (
    <div>
      <button onClick={handleContinueClick}>Continue</button>
      {showQuestion && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default QuizAppWithTimer;
 */

  // DM: looks nice. I see you converted all this to tailwindcss.
  return (
    // <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
    //   <div className="text-lg font-bold mb-4">Some Rules of this Quiz</div>
    //   <div className="text-sm mb-4">
    //     <div className="mb-2">
    //       1. You will have only <span className="font-bold">15 seconds</span> per each question.
    //     </div>
    //     <div className="mb-2">2. Once you select your answer, it can't be undone.</div>
    //     <div className="mb-2">3. You can't select any option once time goes off.</div>
    //     <div className="mb-2">4. You can't exit from the Quiz while you're playing.</div>
    //     <div className="mb-2">5. You'll get points on the basis of your correct answers.</div>
    //   </div>
    //   <div className="flex justify-between">
    //     <button className="bg-red-500 text-white py-2 px-4 rounded mr-2" onClick={handleExitClick}>
    //       Exit Quiz
    //     </button>
    //     <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={handleContinueFromRulesClick}>
    //       Continue
    //     </button>
    //   </div>
    // </div>
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="modal-overlay">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="text-lg font-bold mb-4">Some Rules of this Quiz</div>
          <div className="text-sm mb-4">
            <div className="mb-2">
              1. You will have only <span className="font-bold">15 seconds</span> per each question.
            </div>
            <div className="mb-2">2. Once you select your answer, it can't be undone.</div>
            <div className="mb-2">3. You can't select any option once time goes off.</div>
            <div className="mb-2">4. You can't exit from the Quiz while you're playing.</div>
            <div className="mb-2">5. You'll get points on the basis of your correct answers.</div>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded mr-2"
              onClick={handleExitShowRulesClick}
            >
              Exit Quiz
            </button>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded"
              onClick={handleContinueFromRulesClick}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
