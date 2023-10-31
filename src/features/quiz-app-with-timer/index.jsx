import React, { useState, useEffect } from 'react'

import data from './data'

import StartQuizButton from './start-quiz-button'
import RulesOfTheQuiz from './rules-of-the-quiz'
// import { set } from 'react-hook-form'
// import RulesOfTheQuiz from './rules-of-the-quiz'

//(done) DM: all files that contain JSX should have the .jsx extension

export default function QuizAppWithTimer() {
  //   return (
  //     <div className="bg-blue-500 h-screen flex justify-center items-center">
  //       <StartQuizButton />
  //     </div>
  //   )
  const [showRules, setShowRules] = useState(false)
  const [showQuestion, setShowQuestion] = useState(false)
  const [quizData, setQuizData] = useState(null)
  const [error, setError] = useState(null)

  const loading = !quizData && !error

  useEffect(() => {
    // DM: let's wait until later to worry about the API endpoint. Right now, you're still "translating" the example Vanilla JS app into React. So do just that, i.e., use the same data that the Vanilla JS app was build with. Using different quiz data should be a later step WHY because it is better to "refactor" apps gradually. So, what this line does is it just sets your data immediately without fetching.
    setQuizData(data)
    return

    const category = 'sql' // replace with your desired category

    const apiUrl = `/api/quiz?category=${category}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('data:', data)
        setQuizData(data)
      })
      .catch((error) => {
        console.error('Error fetching quiz data:', error)
        setError(error)
      })
  }, [])

  const handleStartQuizClick = () => {
    setShowRules(true)
  }

  const handleExitShowRulesClick = () => {
    setShowRules(false)
  }

  // DM: todoMM: always put conditionally shown JSX just above the return statement. This makes it easier to see what is being rendered conditionally. Put this just before the if(error) block
  if (loading) {
    return <p className="text-center text-gray-500 mt-4">Loading quiz data...</p>
  }

  //(done) DM: todoMM: I like that you created this handler; now, give it a more descriptive name that expresses where/for what purpose it is used. I recommend handleContinueFromRulesClick, that way, we know which component is is for: RulesOfTheQuiz and not StartQuizButton
  const handleContinueFromRulesClick = () => {
    setShowQuestion(true)
    setShowRules(false)
  }
  // DM: benefits of more descriptive names. Not only so humans can quickly understand your intent, but AI can also comprehend better what you want and make better suggestions.

  // DM: todoMM: the function name is also not clear that it will be used only in RulesOfTheQuiz, so one might think "exit from what?". However, in this case there is no reason to create this function (which is an alias of handleExitShowRulesClick). So, delete this function and pass handleExitShowRulesClick to RulesOfTheQuiz as a prop.
  // const handleExitClick = () => {
  //   handleExitShowRulesClick()
  // }

  // DM: good, this should be right here, along with the if (loading) block
  if (error) {
    return <div>Error fetching quiz data: {error.message}</div>
  }

  // DM: as an example, I'm moving this into the return statement below. It belongs there - you'll see why later. One reason is, it can share the styling of the top-level DIV in the return statement

  // DM: todoMM: move this into the JSX in the return statement below after my comment at the bottom of the JSX, showing it conditionally similar to how I conditionally showed <div>Question Box</div>
  if (showRules) {
    return (
      <div className="popup bg-blue-500">
        <RulesOfTheQuiz
          // not used in the component: handleExitShowRulesClick={handleExitShowRulesClick}
          handleContinueFromRulesClick={handleContinueFromRulesClick}
          // handleExitClick={handleExitClick}
          handleExitShowRulesClick={handleExitShowRulesClick}
        />
      </div>
    )
  }

  return (
    <div className="bg-blue-500 h-screen flex justify-center items-center">
      {/* DM: study this carefully. The pseudocode here is a hint for Copilot AAI, as well as for me to think "out loud", and documentation.
         if showQuestion, render the question box
         else render the start quiz button  
     */}
      {showQuestion ? ( // DM: todoMM: this is a good place to use the conditional operator (ternary operator)
        <div>Question Box</div>
      ) : (
        <StartQuizButton handleStartQuizClick={handleStartQuizClick} />
      )}
      {/* 
         since it is a popup, it can go anywhere, so it can be here at the end of the JSX, but
         notice that is inside the div that sets the background. That way, you'll still have the 
         nice background and any future Look and Feel (L&F) that you might add. This is an advantage of s
         showing it conditionally here (along with the top-level DIV) instead of above before the return statement.

         If you put a newline after this comment, then type "{" to start, Copilot will suggest the proper way to do it.

         if showRules, render RulesOfTheQuiz
       */}
    </div>
  )
}

/*
MM: DM: here is the HTML from the tutorial
<!-- Created By CodingNepal - www.codingnepalweb.com  -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Awesome Quiz App | CodingNepal</title>
    <link rel="stylesheet" href="style.css">
    <!-- FontAweome CDN Link for Icons-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
</head>
<body>
    <!-- start Quiz button -->
    <div className="start_btn"><button>Start Quiz</button></div>

    <!-- Info Box -->
    <div className="info_box">
        <div className="info-title"><span>Some Rules of this Quiz</span></div>
        <div className="info-list">
            <div className="info">1. You will have only <span>15 seconds</span> per each question.</div>
            <div className="info">2. Once you select your answer, it can't be undone.</div>
            <div className="info">3. You can't select any option once time goes off.</div>
            <div className="info">4. You can't exit from the Quiz while you're playing.</div>
            <div className="info">5. You'll get points on the basis of your correct answers.</div>
        </div>
        <div className="buttons">
            <button className="quit">Exit Quiz</button>
            <button className="restart">Continue</button>
        </div>
    </div>

    <!-- Quiz Box -->
    <div className="quiz_box">
        <header>
            <div className="title">Awesome Quiz Application</div>
            <div className="timer">
                <div className="time_left_txt">Time Left</div>
                <div className="timer_sec">15</div>
            </div>
            <div className="time_line"></div>
        </header>
        <section>
            <div className="que_text">
                <!-- Here I've inserted question from JavaScript -->
            </div>
            <div className="option_list">
                <!-- Here I've inserted options from JavaScript -->
            </div>
        </section>

        <!-- footer of Quiz Box -->
        <footer>
            <div className="total_que">
                <!-- Here I've inserted Question Count Number from JavaScript -->
            </div>
            <button className="next_btn">Next Que</button>
        </footer>
    </div>

    <!-- Result Box -->
    <div className="result_box">
        <div className="icon">
            <i className="fas fa-crown"></i>
        </div>
        <div className="complete_text">You've completed the Quiz!</div>
        <div className="score_text">
            <!-- Here I've inserted Score Result from JavaScript -->
        </div>
        <div className="buttons">
            <button className="restart">Replay Quiz</button>
            <button className="quit">Quit Quiz</button>
        </div>
    </div>

    <!-- Inside this JavaScript file I've inserted Questions and Options only -->
    <script src="js/questions.js"></script>

    <!-- Inside this JavaScript file I've coded all Quiz Codes -->
    <script src="js/script.js"></script>

</body>
</html>
*/
