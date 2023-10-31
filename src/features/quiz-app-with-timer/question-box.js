// import { useState } from 'react'
//src: hpw to fetch data from json file in react-js: https://akhtarvahid.medium.com/how-to-access-fetch-the-local-json-file-to-react-5ce07c43731d
import data from './data.js'

export default function QuestionBox({
  selectedOption,
  handleOptionChange,
  currentQuestionIndex,
  handleNextQuestion,
  handlePreviousQuestion,
}) {
  //   const [selectedOption, setSelectedOption] = useState(null)
  //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  //   const handleOptionChange = (event) => {
  //     setSelectedOption(event.target.value)
  //     // setShowAnswer(false)
  //   }

  //
  //   return (
  //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  //       {data.map(({ number, question, answer, options }) => {
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

  const { number, question, answer, options } = data[currentQuestionIndex]

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
    <div key={number} className="bg-white p-6 rounded shadow-md w-full max-w-md ">
      <div className="text-2xl font-bold   text-blue-600">{question}</div>
      <hr className="my-4" />

      <div className="text-sm">
        {options.map((option) => {
          const isCorrect = option === answer
          const isSelected = option === selectedOption
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
