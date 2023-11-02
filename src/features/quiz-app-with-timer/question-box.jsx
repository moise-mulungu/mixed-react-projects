import { useState, useEffect } from 'react'
//src: how to fetch data from json file in react-js: https://akhtarvahid.medium.com/how-to-access-fetch-the-local-json-file-to-react-5ce07c43731d

// src: how to set timer with react: https://www.geeksforgeeks.org/how-to-create-a-countdown-timer-using-reactjs/
import QuizScore from './quiz-score.js'

// DM: putting magic numbers into a constant
const defaultSecondsToAnswerQuestion = 15

export default function QuestionBox({ handleExitGame, quizData }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [timer, setTimer] = useState(defaultSecondsToAnswerQuestion)
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [showScorePopup, setShowScorePopup] = useState(false)

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1 || selectedAnswer) {
          clearInterval(countdown)
          setShowCorrectAnswer(true)
          // handleGotoNextQuestion()
          return defaultSecondsToAnswerQuestion // Reset timer
        } else {
          return prevTimer - 1
        }
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [currentQuestionIndex, selectedAnswer])

  //   const handleAnswerSelection = (event) => {
  //     setSelectedOption(event.target.value)
  //     // setShowAnswer(false)
  //   }

  const handleAnswerSelection = (event) => {
    setSelectedAnswer(event.target.value)
    if (event.target.value === correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleGotoNextQuestion = () => {
    // DM: todoMM: assign the expression in the if clause to a variable with a meaningful name. General rule: assign all logical expressions to a variable
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowCorrectAnswer(false)
    } else {
      setShowScorePopup(true)
    }
  }

  const handleGotoPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedAnswer(null)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowCorrectAnswer(false)
    setScore(0)
    setShowScorePopup(false)
    setTimer(defaultSecondsToAnswerQuestion)
  }

  //
  //   return (
  //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  //       {data.map(({ number, question, answer, answerChoices }) => {
  //         return (
  //           <div key={number} className="bg-white p-6 rounded shadow-md w-full max-w-md  ">
  //             <div className="text-2xl font-bold   text-blue-600">{question}</div>
  //
  //             <div className="text-sm">
  //               {options.map((option) => {
  //                 return (
  //                   <div key={option} className="flex items-center mb-2">
  //                     <input type="radio" id={option} name={option} value={option} className="mr-2" />
  //                     <label htmlFor={option} className="ml-2 text-gray-600">
  //                       {option}
  //                     </label>
  //                   </div>
  //                 )
  //               })}
  //             </div>
  //           </div>
  //         )
  //       })}
  //     </div>
  //   )

  //   const handleGotoNextQuestion = () => {
  //     if (currentQuestionIndex < data.length - 1) {
  //       setCurrentQuestionIndex(currentQuestionIndex + 1)
  //       setSelectedOption(null)
  //     }
  //   }

  //   const handleGotoPreviousQuestion = () => {
  //     if (currentQuestionIndex > 0) {
  //       setCurrentQuestionIndex(currentQuestionIndex - 1)
  //       setSelectedOption(null)
  //     }
  //   }

  // the difference between {boolean && (<></>)} and  {boolean ? (<></>)} is

  //(done) DM: now I see what options means. this is a case where the DEV who wrote the article chose poor names. You can fix that right here easily by renaming options to choices. Note renaming a deconstructed property is called "aliasing". See the image in this dir which shows how I asked AI for better names. So, change EVERY related variable and function name in your app to reflect the changes I made to the property names in this object.; Use the VSCode global search and replace feature to do it quickly.
  const { questionId, question, correctAnswer, answerChoices } = quizData[currentQuestionIndex]

  //   return (
  //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  //       {data.map(({ number, question, answer, options }) => {
  //         return (
  //           <div key={number} className="bg-white p-6 rounded shadow-md w-full max-w-md  ">
  //             <div className="text-2xl font-bold   text-blue-600">{question}</div>
  //             {showAnswer && <div className="text-lg mb-2 text-gray-700">{answer}</div>}
  //             <div className="text-sm">
  //               {options.map((option) => {
  //                 return (
  //                   <div key={option} className="flex items-center mb-2">
  //                     <input
  //                       type="radio"
  //                       id={option}
  //                       name={option}
  //                       value={option}
  //                       className="mr-2"
  //                       onChange={handleAnswerSelection}
  //                     />
  //                     <label htmlFor={option} className="ml-2 text-gray-600">
  //                       {option}
  //                     </label>
  //                   </div>
  //                 )
  //               })}
  //             </div>
  //             <button
  //               onClick={validateAnswer}
  //               className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
  //             >
  //               Validate Answer
  //             </button>
  //           </div>
  //         )
  //       })}
  //     </div>
  //   )

  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      // DM: why do you need a key here?
      key={questionId} // number wasn't a property in the data.js file, so it would have been undefined and you'd get the usual warning about keys needing to be unique
      className="bg-white p-6 rounded shadow-md w-3/5 h-3/5 m-auto flex flex-col space-y-4"
    >
      {/* 
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">{question}</div>
        <div className="text-lg font-bold text-red-60 px-2 py-1 rounded">
          Time remaining: {timer} seconds
        </div>
      </div>
      <hr className="my-4" />
      {showCorrectAnswer && <p className="text-green-500">Answer: {correctAnswer}</p>}

      <div className="text-base mb-4">
        {answerChoices.map((answerChoice) => {
          //(done) DM: todoMM: "option" is vague; rename to answerChoice; rule of thumb: use the singular of the array name EX myItems.map(myItem ... )
          const isCorrect = answerChoice === correctAnswer
          const isSelected = answerChoice === selectedAnswer
          return (
            <div
              key={answerChoice}
              className={`flex items-center mb-2 border border-blue-500 rounded p-2 ${
                isSelected ? (isCorrect ? 'text-green-500' : 'text-red-500') : 'text-gray-600'
              }`}
            >
              <input
                type="radio"
                id={answerChoice}
                name="answerChoice"
                value={answerChoice}
                className="mr-2"
                onChange={handleAnswerSelection}
                checked={isSelected}
              />
              <label htmlFor={answerChoice} className="ml-2">
                {answerChoice}
              </label>
              {showCorrectAnswer && isCorrect && (
                <span className="text-green-500 ml-2 text-2xl">✓</span>
              )}
            </div>
          )
        })}
      </div>

      <div className="flex justify-between">
      DM: tip: do you want to display button if currentQuestionIndex < 1 DM: please address "tips" by either doing it or explaining why you don't want to do it or starting a discussion (such as asking me why i think it is important)
        <button
          onClick={handleGotoPreviousQuestion}
          className="bg-blue-500 text-white rounded px-4 py-2 mr-2"
        >
          Previous
          </button>
          <button
          onClick={handleGotoNextQuestion}
          className="bg-blue-500 text-white rounded px-4 py-2"
          >
          Next
          </button>
          </div>
      <QuizScore score={score} />
    */}
      {/* DM: todoMM: use the conditional operator here for readability */}
      {!showScorePopup && (
        <>
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">{question}</div>
            <div className="text-lg font-bold text-red-60 px-2 py-1 rounded">
              Time remaining: {timer} seconds
            </div>
          </div>
          <hr className="my-4" />
          {showCorrectAnswer && <p className="text-green-500">Answer: {correctAnswer}</p>}
          <div className="text-base mb-4">
            {answerChoices.map((answerChoice) => {
              const isCorrect = answerChoice === correctAnswer
              const isSelected = answerChoice === selectedAnswer
              return (
                <div
                  key={answerChoice}
                  className={`flex items-center mb-2 border border-blue-500 rounded p-2 ${
                    isSelected ? (isCorrect ? 'text-green-500' : 'text-red-500') : 'text-gray-600'
                  }`}
                >
                  <input
                    type="radio"
                    id={answerChoice}
                    name="answerChoice"
                    value={answerChoice}
                    className="mr-2"
                    onChange={handleAnswerSelection}
                    checked={isSelected}
                  />
                  <label htmlFor={answerChoice} className="ml-2">
                    {answerChoice}
                  </label>
                  {showCorrectAnswer && isCorrect && (
                    <span className="text-green-500 ml-2 text-2xl">✓</span>
                  )}
                </div>
              )
            })}
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleGotoPreviousQuestion}
              className="bg-blue-500 text-white rounded px-4 py-2 mr-2"
            >
              Previous
            </button>
            <button
              onClick={handleGotoNextQuestion}
              className="bg-blue-500 text-white rounded px-4 py-2"
            >
              Next
            </button>
          </div>
        </>
      )}
      {showScorePopup && (
        <QuizScore
          score={score}
          totalQuestions={quizData.length}
          handleRestartQuiz={handleRestartQuiz}
          handleExitGame={handleExitGame}
        />
      )}
    </div>
  )
}
