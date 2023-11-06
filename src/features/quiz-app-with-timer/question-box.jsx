import { useState, useEffect } from 'react'
//src: how to fetch data from json file in react-js: https://akhtarvahid.medium.com/how-to-access-fetch-the-local-json-file-to-react-5ce07c43731d

// src: how to set timer with react: https://www.geeksforgeeks.org/how-to-create-a-countdown-timer-using-reactjs/
import QuizScore from './quiz-score'

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
    setTimer(defaultSecondsToAnswerQuestion)
  }, [currentQuestionIndex])

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1 || selectedAnswer) {
          clearInterval(countdown)
          setShowCorrectAnswer(true)

          // DM: tried the below, didn't like the UX.
          // // DM: what you return here is used to setTimer, so if you want the timer to stop where it was when the user selected an answer, then return prevTimer. If you want the timer to reset to 15 seconds, then return defaultSecondsToAnswerQuestion
          // return prevTimer

          return defaultSecondsToAnswerQuestion // Reset timer
        } else {
          return prevTimer - 1
        }
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [currentQuestionIndex, selectedAnswer])

  const handleAnswerSelection = (event) => {
    setSelectedAnswer(event.target.value)
    if (event.target.value === correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleGotoNextQuestion = () => {
    const hasMoreQuestions = currentQuestionIndex < quizData.length - 1

    // DM: todoDM: think about only setting setCurrentQuestionIndex here and put all the other logic into the new useEffect that has only [currentQuestionIndex] as the dependency. PRO: puts the "respond to change in currentQuestionIndex" logic in one place. PRO: more 'reactive' and seems better to keep business logic out of handlers. PRO: similar code in handleRestartQuiz, so if you want to change the business logic, you don't have to change it in two places.
    if (hasMoreQuestions) {
      const nextQuestionIndex = currentQuestionIndex + 1
      setCurrentQuestionIndex(nextQuestionIndex)
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

  const { question, correctAnswer, answerChoices } = quizData[currentQuestionIndex]

  return (
    <>
      {!showScorePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md w-11/12 h-11/12 sm:w-3/4 sm:h-3/4 md:w-1/2 md:h-1/2 lg:w-2/3 lg:h-2/3 xl:w-1/2 xl:h-1/2 overflow-auto">
            <>
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-blue-600">{question}</div>
                <div
                  // DM: I like using `` for className, and I often put each type of TW utility class on its own line, so it is easier to read and edit
                  // DM: some disagree, and they say better to use classNames utility in ui/utils; see EX in src/features/portfolio/content/grid-example/index.js
                  className={`
                    text-lg font-bold text-center whitespace-nowrap
                    px-2 py-1 
                    rounded 
                    w-62 
                    ${
                      timer > 10 ? 'text-green-500' : timer > 5 ? 'text-orange-500' : 'text-red-500'
                    }
                  `}
                >
                  {/* DM: do you like the UX? */}
                  {timer === defaultSecondsToAnswerQuestion ? null : (
                    <span> Time remaining: {timer} seconds</span>
                  )}
                </div>
              </div>
              <hr className="my-4" />

              <div className="text-base mb-4">
                {answerChoices.map((answerChoice) => {
                  const isCorrect = answerChoice === correctAnswer
                  const isSelected = answerChoice === selectedAnswer
                  return (
                    <div
                      key={answerChoice}
                      className={`flex items-center mb-2 border border-blue-500 rounded p-2 ${
                        isSelected
                          ? isCorrect
                            ? 'text-green-500'
                            : 'text-red-500'
                          : 'text-gray-600'
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
                      {showCorrectAnswer && isCorrect ? (
                        <span className="text-green-500 ml-2 text-2xl">✓</span>
                      ) : null}
                    </div>
                  )
                })}
              </div>
              <div className="flex justify-between">
                {/* DM: todoMM: Good. The Next button is on the left in the first question, but on the right in all other questions. UX is better if the Next box stays in the same place always (on the right). So, adjust the styling so that it stays in the same place on the right during the first question (when Previous button is not shown) 
                DM: I did it for you, because I wanted to show you the quickest way. flex justify-between wants SOMETHING to be there to maintain the layout of the , but you left nothing. so I wrapped it in a DIV outside the conditionally rendered part. Now, when not show Previous button, there is an empty div to occupy that space where the Previous button would be.
                */}
                <div>
                  {currentQuestionIndex > 0 ? (
                    <button
                      onClick={handleGotoPreviousQuestion}
                      className="bg-blue-500 text-white rounded px-4 py-2 mr-2"
                    >
                      Previous
                    </button>
                  ) : null}
                </div>
                {/* DM: good! */}
                {showCorrectAnswer && selectedAnswer !== correctAnswer && (
                  <p className="text-green-500">Answer: {correctAnswer}</p>
                )}
                <button
                  onClick={handleGotoNextQuestion}
                  className="bg-blue-500 text-white rounded px-4 py-2"
                >
                  Next
                </button>
              </div>
            </>
          </div>
        </div>
      )}
      {showScorePopup ? (
        <div className="fixed top-0 left-0 w-full flex items-center justify-center">
          <div className="modal-overlay">
            {/* <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto"> */}
            <QuizScore
              score={score}
              totalQuestions={quizData.length}
              handleRestartQuiz={handleRestartQuiz}
              handleExitGame={handleExitGame}
            />
            {/* </div> */}
          </div>
        </div>
      ) : null}
    </>
  )
}
