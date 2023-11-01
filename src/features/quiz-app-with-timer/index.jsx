import React, { useState, useEffect } from 'react'

import data from './data'

import StartQuizButton from './start-quiz-button'
import RulesOfTheQuiz from './rules-of-the-quiz'
import QuestionBox from './question-box'

//(done) DM: all files that contain JSX should have the .jsx extension

export default function QuizAppWithTimer() {
  const [showRules, setShowRules] = useState(false)
  const [showQuestion, setShowQuestion] = useState(false)
  const [quizData, setQuizData] = useState(null)
  const [error, setError] = useState(null)
 

  // const [timer, setTimer] = useState(15)
  //(done) DM: todoMM: "option" is a little vague, so rename this to something more specific (see my comment in question-box.js); at this point, I know there are questions, but I have no idea what options. Clear, specific names are VERY, VERY important so that you don't slow me down (and, on-the-job, other DEVs on your team don't say you write confusing code)
  // const [selectedAnswer, setSelectedAnswer] = useState(null)
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const loading = !quizData && !error

  useEffect(() => {
    // DM: let's wait until later to worry about the API endpoint. Right now, you're still "translating" the example Vanilla JS app into React. So do just that, i.e., use the same data that the Vanilla JS app was build with. Using different quiz data should be a later step WHY because it is better to "refactor" apps gradually. So, what this line does is it just sets your data immediately without fetching.
    setQuizData(data)
    return

    // const category = 'sql' // replace with your desired category

    // const apiUrl = `/api/quiz?category=${category}`

    // fetch(apiUrl)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('data:', data)
    //     setQuizData(data)
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching quiz data:', error)
    //     setError(error)
    //   })
  }, [])

  const handleStartQuizClick = () => {
    setShowRules(true)
  }

  const handleExitShowRulesClick = () => {
    setShowRules(false)
  }

  // DM: todoMM: always put conditionally shown JSX just above the return statement. This makes it easier to see what is being rendered conditionally. Put this just before the if(error) block DM: all handlers should be above this if block(done)
  const handleContinueFromRulesClick = () => {
    setShowQuestion(true)
    setShowRules(false)
  }
  // const handleOptionChange = (event) => {
  //   setSelectedAnswer(event.target.value)
  // }

  /* 
    (done)DM: todoMM: this component is not doing anything with selectedAnswer and currentQuestionIndex and these 3 handlers. Also, they are not being shared with any other component. So, move them all into the QuestionBox component. That way, they are all together and it is clear that they are only used in that component.
 */
  // const handleNextQuestion = () => {
  //   if (currentQuestionIndex < data.length - 1) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1)
  //     setSelectedAnswer(null)
  //   }
  // }

  // const handlePreviousQuestion = () => {
  //   if (currentQuestionIndex > 0) {
  //     setCurrentQuestionIndex(currentQuestionIndex - 1)
  //     setSelectedAnswer(null)
  //   }
  // }
  if (loading) {
    // return <p className="text-center text-gray-500 mt-4">Loading quiz data...</p>
    return <p className="text-center text-gray-500 mt-4">Loading quiz data...</p>
    //(ok) DM: typically, when load complete, just show the content of the page, not a message that the data has loaded. users expect that the data just gets loaded, they don't care how/when it gets done.
    // return loading ? (
    //   <p className="text-center text-gray-500 mt-4">Loading quiz data...</p>
    // ) : (
    //   <p className="text-center text-gray-500 mt-4">Quiz data loaded!</p>
    // )
  }

  //(done) DM: I like that you created this handler; now, give it a more descriptive name that expresses where/for what purpose it is used. I recommend handleContinueFromRulesClick, that way, we know which component is is for: RulesOfTheQuiz and not StartQuizButton
  // DM: benefits of more descriptive names. Not only so humans can quickly understand your intent, but AI can also comprehend better what you want and make better suggestions.

  //(done) DM: todoMM: the function name is also not clear that it will be used only in RulesOfTheQuiz, so one might think "exit from what?". However, in this case there is no reason to create this function (which is an alias of handleExitShowRulesClick). So, delete this function and pass handleExitShowRulesClick to RulesOfTheQuiz as a prop.
  // const handleExitClick = () => {
  //   handleExitShowRulesClick()
  // }

  // DM: good, this should be right here, along with the if (loading) block
  if (error) {
    return <div>Error fetching quiz data: {error.message}</div>
  }

  // DM: as an example, I'm moving this into the return statement below. It belongs there - you'll see why later. One reason is, it can share the styling of the top-level DIV in the return statement

  //(done) DM: todoMM: move this into the JSX in the return statement below after my comment at the bottom of the JSX, showing it conditionally similar to how I conditionally showed <div>Question Box</div> bump

  //  boolean && doSomething() is example of  short-circuiting
  return (
    <div className="bg-blue-500 h-screen flex justify-center items-center">
      {/* DM: study this carefully. The pseudocode here is a hint for Copilot AAI, as well as for me to think "out loud", and documentation.
         if showQuestion, render the question box
         else render the start quiz button  
     */}
      {showQuestion && <QuestionBox />}

      {!showRules && !showQuestion && (
        <StartQuizButton handleStartQuizClick={handleStartQuizClick} />
      )}

      {/* <StartQuizButton handleStartQuizClick={handleStartQuizClick} /> */}
      {/* {showQuestion ? ( // DM: todoMM: this is a good place to use the conditional operator (ternary operator)
        // <div>Question Box</div>
        // data.map(({ number, question, answer, options }) => {
        //   return (
        //     <div key={number} className="bg-white p-6 rounded shadow-md w-1/2">
        //       <div className="text-xl font-bold mb-4">{question}</div>
        //       <div className="text-lg mb-2">{answer}</div>
        //       <div className="text-sm">
        //         {options.map((option) => {
        //           return (
        //             <div key={option} className="flex items-center">
        //               <input type="radio" id={option} name={option} value={option} />
        //               <label htmlFor={option} className="ml-2">
        //                 {option}
        //               </label>
        //             </div>
        //           )
        //         })}
        //       </div>
        //     </div>
        //   )
        // })
        // <QuestionBox />
        <QuestionBox
          // selectedAnswer={selectedAnswer}
          // handleOptionChange={handleOptionChange}
          // currentQuestionIndex={currentQuestionIndex}
          // handleNextQuestion={handleNextQuestion}
          // handlePreviousQuestion={handlePreviousQuestion}
        />
      ) : (
        <StartQuizButton handleStartQuizClick={handleStartQuizClick} />
      )} */}
      {/* 
         since it is a popup, it can go anywhere, so it can be here at the end of the JSX, but
         notice that is inside the div that sets the background. That way, you'll still have the 
         nice background and any future Look and Feel (L&F) that you might add. This is an advantage of s
         showing it conditionally here (along with the top-level DIV) instead of above before the return statement.

         If you put a newline after this comment, then type "{showRules" to start, Copilot will suggest the proper way to do it.

         if showRules, render RulesOfTheQuiz
        
       */}
      {showRules && (
        <div className="popup bg-blue-500">
          <RulesOfTheQuiz
            // not used in the component: handleExitShowRulesClick={handleExitShowRulesClick}
            handleContinueFromRulesClick={handleContinueFromRulesClick}
            // handleExitClick={handleExitClick}
            handleExitShowRulesClick={handleExitShowRulesClick}
          />
        </div>
      )}
    </div>
  )
}
