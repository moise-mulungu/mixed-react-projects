import { useState, useEffect } from 'react'
//src: how to fetch data from json file in react-js: https://akhtarvahid.medium.com/how-to-access-fetch-the-local-json-file-to-react-5ce07c43731d

// src: how to set timer with react: https://www.geeksforgeeks.org/how-to-create-a-countdown-timer-using-reactjs/
import QuizScore from './quiz-score'

// DM: putting magic numbers into a constant
const defaultSecondsToAnswerQuestion = 15

export default function QuestionBox({ handleExitGame, quizData }) {

  /*
  1. State Variables: The component uses several state variables to manage the state of the quiz. These include selectedAnswer, currentQuestionIndex, timer, showCorrectAnswer, score, and showScorePopup. The selectedAnswer variable holds the answer that the user selects. The currentQuestionIndex variable holds the index of the current question. The timer variable holds the number of seconds remaining to answer the current question. The showCorrectAnswer variable is used to control the display of the correct answer. The score variable holds the number of correct answers. The showScorePopup variable is used to control the display of the QuizScore component.
  Lifting state up: The handleExitGame, and quizData functions are also passed down as props from the QuizAppWithTimer component. The handleExitGame function is used to exit the game. The quizData variable holds the data for the quiz.
  */
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [timer, setTimer] = useState(defaultSecondsToAnswerQuestion)
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [showScorePopup, setShowScorePopup] = useState(false)

  useEffect(() => {
    setTimer(defaultSecondsToAnswerQuestion)
  }, [currentQuestionIndex])

  /*
 2. Timer: The useEffect hooks are used to manage a countdown timer for each question. The timer resets to defaultSecondsToAnswerQuestion whenever the currentQuestionIndex changes. The timer decreases by 1 every second until it reaches 1 or an answer is selected. When the timer reaches 1 or an answer is selected, the showCorrectAnswer variable is set to true. The timer is cleared when the component unmounts.
  */
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1 || selectedAnswer) {
          clearInterval(countdown)
          setShowCorrectAnswer(true)

          // DM: tried the below, didn't like the UX.
          // // DM: what you return here is used to setTimer, so if you want the timer to stop where it was when the user selected an answer, then return prevTimer. If you want the timer to reset to 15 seconds, then return defaultSecondsToAnswerQuestion. MM: if i return either prevTimer or defaultSecondsToAnswerQuestion, the timer does not reset to 15 unless i keep the first useEffect that sets the timer to 15 and return defaultSecondsToAnswerQuestion to the second useEffect.
          // return prevTimer

          return defaultSecondsToAnswerQuestion // Reset timer
        } else {
          return prevTimer - 1
        }
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [currentQuestionIndex, selectedAnswer])

  // 3. Answer Selection: The handleAnswerSelection function is used to select an answer for the current question. If the selected answer is correct, the score is increased by 1. The selected answer is stored in the selectedAnswer state variable.
  const handleAnswerSelection = (event) => {
    setSelectedAnswer(event.target.value)
    if (event.target.value === correctAnswer) {
      setScore(score + 1)
    }
  }

  // 4. Next Question: The handleGotoNextQuestion function is used to go to the next question. If there are no more questions, it shows the score popup. Otherwise, it increases the currentQuestionIndex by 1 and resets the selectedAnswer and showCorrectAnswer state variables.
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

  // 5. Restart Quiz: The handleRestartQuiz function is used to restart the quiz. It resets all state variables to their initial values. The handleExitGame function is used to exit the quiz.
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowCorrectAnswer(false)
    setScore(0)
    setShowScorePopup(false)
    setTimer(defaultSecondsToAnswerQuestion)
  }

  // 6. Array destructuring: The question, correctAnswer, and answerChoices variables are destructured from the current question object in quizData. These are displayed to the user, and the user can select an answer choice by clicking on the corresponding radio button.
  const { question, correctAnswer, answerChoices } = quizData[currentQuestionIndex]

  return (
    <>
    {/* 7. Conditional Rendering: The component uses conditional rendering to display different elements based on the state of the quiz. For example, if showScorePopup is true, the QuizScore component is displayed. If showScorePopup is false, the current question and answer choices are displayed. */}
      {!showScorePopup && (
      
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md flex flex-col w-full max-w-[100vh] max-h-[80vh] overflow-auto">
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
                    <span>
                      {' '}
                      Time remaining:{' '}
                      <span className="font-mono inline-block w-6 text-right">
                        {String(timer).padStart(2, ' ')}
                      </span>{' '}
                      seconds
                    </span>
                  )}
                </div>
              </div>
              <hr className="my-4" />

              <div className="text-base mb-4">
                {/* 8. Question and Answer Choices: The question and answerChoices are destructured from the current question object in quizData. These are displayed to the user, and the user can select an answer choice by clicking on the corresponding radio button. */}
                {answerChoices.map((answerChoice) => {
                  const isCorrect = answerChoice === correctAnswer
                  const isSelected = answerChoice === selectedAnswer
                  return (
                    <div
                      key={answerChoice}
                      className={`flex items-center mb-2 border-2 rounded-lg shadow-sm p-2 hover:bg-blue-100 transition-colors duration-200 ease-in-out ${
                        isSelected
                          ? isCorrect
                            ? 'border-green-500 text-green-500'
                            : 'border-red-500 text-red-500'
                          : 'border-gray-300 text-gray-600'
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
                        <svg
                          className="h-6 w-6 text-green-500 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : null}
                    </div>
                  )
                })}
              </div>
              <div className="flex justify-between">
                {/*(it think this is done!) DM: todoMM: Good. The Next button is on the left in the first question, but on the right in all other questions. UX is better if the Next box stays in the same place always (on the right). So, adjust the styling so that it stays in the same place on the right during the first question (when Previous button is not shown) 
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
                {/* DM: good! 9. Correct Answer Indicator: If showCorrectAnswer is true, a checkmark is displayed next to the correct answer.*/}
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
            <QuizScore
              score={score}
              totalQuestions={quizData.length}
              handleRestartQuiz={handleRestartQuiz}
              handleExitGame={handleExitGame}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}

