import { useState } from 'react'
//src: hpw to fetch data from json file in react-js: https://akhtarvahid.medium.com/how-to-access-fetch-the-local-json-file-to-react-5ce07c43731d
import data from './data.js'

export default function QuestionBox() {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  //   const handleOptionChange = (event) => {
  //     setSelectedOption(event.target.value)
  //     // setShowAnswer(false)
  //   }

  const handleOptionChange = (event) => {
    setSelectedAnswer(event.target.value)
  }

  /* 
    DM: todoMM: this component is not doing anything with selectedAnswer and currentQuestionIndex and these 3 handlers. Also, they are not being shared with any other component. So, move them all into the QuestionBox component. That way, they are all together and it is clear that they are only used in that component.
 */
  const handleNextQuestion = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
    }
  }

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

  //(done) DM: todoMM: now I see what options means. this is a case where the DEV who wrote the article chose poor names. You can fix that right here easily by renaming options to choices. Note renaming a deconstructed property is called "aliasing". See the image in this dir which shows how I asked AI for better names. So, change EVERY related variable and function name in your app to reflect the changes I made to the property names in this object.; Use the VSCode global search and replace feature to do it quickly.
  const {
    questionId,
    question, // DM: I think 'question' is better than 'prompt'
    correctAnswer,
    answerChoices,
  } = data[currentQuestionIndex]

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
      className="bg-white p-6 rounded shadow-md w-full max-w-md "
    >
      <div className="text-2xl font-bold   text-blue-600">{question}</div>
      <hr className="my-4" />

      <div className="text-sm">
        {answerChoices.map((option) => {
          const isCorrect = option === correctAnswer
          const isSelected = option === selectedAnswer
          return (
            <div
              key={option}
              className={`flex items-center mb-2 ${
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
            </div>
          )
        })}
      </div>

      <div className="flex justify-between mt-4">
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
