import React, { useState } from 'react'
export default function RulesOfTheQuiz({ onClose }) {
//   const [quizInProgress, setQuizInProgress] = useState(false)
const [showQuestion, setShowQuestion] = useState(false);

  const handleContinueClick = () => {
    setShowQuestion(true)
  }

  const handleExitClick = () => {
    onClose()
    // setQuizInProgress(false)
  }

  if (showQuestion) {
    // Render the question box if the quiz is in progress
    return <div>Question Box</div>
  }
  return (
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
        <button className="bg-red-500 text-white py-2 px-4 rounded mr-2" onClick={handleExitClick}>
          Exit Quiz
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={handleContinueClick}>
          Continue
        </button>
      </div>
    </div>
  )
}
