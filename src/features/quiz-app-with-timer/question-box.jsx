import { useState, useEffect } from 'react'
//src: how to fetch data from json file in react-js: https://akhtarvahid.medium.com/how-to-access-fetch-the-local-json-file-to-react-5ce07c43731d

// src: how to set timer with react: https://www.geeksforgeeks.org/how-to-create-a-countdown-timer-using-reactjs/
import data from './data.js'

// DM: putting magic numbers into a constant
const defaultSecondsToAnswerQuestion = 15

export default function QuestionBox() {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [timer, setTimer] = useState(defaultSecondsToAnswerQuestion)
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(countdown)
          setShowCorrectAnswer(true)
          // handleNextQuestion()
          return defaultSecondsToAnswerQuestion // Reset timer
        } else {
          return prevTimer - 1
        }
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [currentQuestionIndex])
  //   const handleOptionChange = (event) => {
  //     setSelectedOption(event.target.value)
  //     // setShowAnswer(false)
  //   }

  // DM: todoMM: rename more clearly to what it is. i don't know what "option" means
  const handleOptionChange = (event) => {
    setSelectedAnswer(event.target.value)
  }

  /* 
    (?) DM: todoMM: this component is not doing anything with selectedAnswer and currentQuestionIndex and these 3 handlers. Also, they are not being shared with any other component. So, move them all into the QuestionBox component. That way, they are all together and it is clear that they are only used in that component.
 */
  // DM: todoMM: rename to handleGotoNextQuestion
  const handleNextQuestion = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowCorrectAnswer(false)
    }
  }

  // DM: todoMM: rename to handleGotoPreviousQuestion
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedAnswer(null)
    }
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

  //   const handleNextQuestion = () => {
  //     if (currentQuestionIndex < data.length - 1) {
  //       setCurrentQuestionIndex(currentQuestionIndex + 1)
  //       setSelectedOption(null)
  //     }
  //   }

  //   const handlePreviousQuestion = () => {
  //     if (currentQuestionIndex > 0) {
  //       setCurrentQuestionIndex(currentQuestionIndex - 1)
  //       setSelectedOption(null)
  //     }
  //   }

  // the difference between {boolean && (<></>)} and  {boolean ? (<></>)} is

  //(done) DM: now I see what options means. this is a case where the DEV who wrote the article chose poor names. You can fix that right here easily by renaming options to choices. Note renaming a deconstructed property is called "aliasing". See the image in this dir which shows how I asked AI for better names. So, change EVERY related variable and function name in your app to reflect the changes I made to the property names in this object.; Use the VSCode global search and replace feature to do it quickly.
  const { questionId, question, correctAnswer, answerChoices } = data[currentQuestionIndex]

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
  //                       onChange={handleOptionChange}
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
      key={questionId} // number wasn't a property in the data.js file, so it would have been undefined and you'd get the usual warning about keys needing to be unique
      className="bg-white p-6 rounded shadow-md w-3/5 h-3/5 m-auto flex flex-col space-y-4"
    >
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">{question}</div>
        <div className="text-lg font-bold text-red-60 px-2 py-1 rounded">
          Time remaining: {timer} seconds
        </div>
      </div>
      <hr className="my-4" />
      {showCorrectAnswer && <p className="text-green-500">Answer: {correctAnswer}</p>}

      <div className="text-base mb-4">
        {answerChoices.map((option) => {
          // DM: todoMM: "option" is vague; rename to answerChoice; rule of thumb: use the singular of the array name EX myItems.map(myItem ... )
          const isCorrect = option === correctAnswer
          const isSelected = option === selectedAnswer
          return (
            <div
              key={option}
              className={`flex items-center mb-2 border border-blue-500 rounded p-2 ${
                isSelected ? (isCorrect ? 'text-green-500' : 'text-red-500') : 'text-gray-600'
              }`}
            >
              <input
                type="radio"
                id={option}
                name="option"
                value={option}
                className="mr-2"
                onChange={handleOptionChange}
                checked={isSelected}
              />
              <label htmlFor={option} className="ml-2">
                {option}
              </label>
              {showCorrectAnswer && isCorrect && (
                <span className="text-green-500 ml-2 text-2xl">✓</span>
              )}
            </div>
          )
        })}
      </div>

      <div className="flex justify-between">
        {/* DM: tip: do you want to display button if currentQuestionIndex < 1 */}
        <button
          onClick={handlePreviousQuestion}
          className="bg-blue-500 text-white rounded px-4 py-2 mr-2"
        >
          Previous
        </button>
        <button onClick={handleNextQuestion} className="bg-blue-500 text-white rounded px-4 py-2">
          Next
        </button>
      </div>
    </div>
    // </div>
  )
}
