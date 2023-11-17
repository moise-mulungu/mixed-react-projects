import React, { useState, useEffect } from 'react'

// import data from './data'

import StartQuizButton from './start-quiz-button'
import RulesOfTheQuiz from './rules-of-the-quiz'
import QuestionBox from './question-box'
import CategorySelector from './category-selector'
import Header from './header'

export default function QuizAppWithTimer() {

  /*
  1. State Variables: The component uses several state variables to manage the state of the application. These include showRules, showQuiz, quizData, error, and selectedCategory. These variables are used to control the display of different components and hold data for the quiz. The showRules and showQuiz variables are used to control the display of the RulesOfTheQuiz and QuestionBox components. The quizData variable holds the data for the quiz. The error variable holds any error messages that occur when fetching the quiz data. The selectedCategory variable holds the category that the user selects from the dropdown menu. The component also uses a loading variable to control the display of a loading message while the quiz data is being fetched.
  */ 
  const [showRules, setShowRules] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizData, setQuizData] = useState(null)
  const [error, setError] = useState(null)
  // DM: this is correctly lowercase. See where it is used, it is only used WRT the "value" of the category select options, not the category the user sees.
  const [selectedCategory, setSelectedCategory] = useState('html')

  const loading = !quizData && !error

  /*
  2. API Fetching: The useEffect hook is used to fetch quiz data from an API when the selectedCategory changes. The fetched data is stored in the quizData state variable. If an error occurs while fetching the data, the error state variable is set to the error message. The loading state variable is used to display a loading message while the data is being fetched.
  */
  useEffect(() => {
    // const category = 'sql' // replace with your desired category

    // const apiUrl = `/api/quiz3?category=${category}`
    const apiUrl = `/api/quiz3?category=${selectedCategory}`
    // const apiUrl = selectedCategory ? `/api/quiz3?category=${selectedCategory}` : '/api/quiz3'
    // MM: DM: i will use `/api/quiz2?category=${category}` for the external api and will render it in the question-box.jsx file.

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
  }, [selectedCategory]) // DM: nice!

  // 3. Start Quiz: The handleStartQuizClick function is used to start the quiz by setting showRules to true. This causes the RulesOfTheQuiz component to be displayed.
  const handleStartQuizClick = () => {
    setShowRules(true)
  }

  // 4. Exit Rules: The handleExitShowRulesClick function is used to exit the rules screen by setting showRules to false. This causes the RulesOfTheQuiz component to be hidden.
  const handleExitShowRulesClick = () => {
    setShowRules(false)
  }

  // 5. Continue From Rules: The handleContinueFromRulesClick function is used to continue from the rules screen to the quiz by setting showQuiz to true and showRules to false. This causes the RulesOfTheQuiz component to be hidden and the QuestionBox component to be displayed.
  const handleContinueFromRulesClick = () => {
    setShowQuiz(true)
    setShowRules(false)
  }

  // 6. Exit Game: The handleExitGame function is used to exit the game by setting showRules and showQuiz to false. This causes the RulesOfTheQuiz and QuestionBox components to be hidden.
  const handleExitGame = () => {
    // Exit the game
    setShowRules(false)

    setShowQuiz(false)
  }

  // 8. Category Selection: The handleCategorySelect function is used to select a category for the quiz. It sets selectedCategory to the selected category and categorySelected to true. This causes a selected category quiz to be fetched from the API.
  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    // setCategorySelected(true)
  }

  if (loading) {
    return <p className="text-center text-gray-500 mt-4">Loading quiz data...</p>
  }

  if (error) {
    return <div>Error fetching quiz data: {error.message}</div>
  }

  return (
    <div className="bg-blue-500 h-screen flex flex-col justify-center items-center">
      <Header />
      {/* DM: show category dropdown at the same time as the start button, for UX per the image I put on Slack Monday. DM: CategorySelector is always present, you just have overlays hiding it. That could be a problem later if you change the layout. Also React DEV Tools will confusingly show the CategorySelector component as always being there, even though it's not visible. So, where can you move it so that it shows only when the start button shows?(MM: DM: is this question still relevant after the changes I made? i put the category selector and the start quiz button in the same div, one on top of the other. isn't what you asked for? the dropdown displays for just selecting the category.) DM: No, by "show category dropdown at the same time as the start button" I mean that the category dropdown should be visible at the same time as the start button. As I mentioned: "CategorySelector is always present, you just have overlays hiding it". So, where can you move it so that it shows only when the start button shows? If you don't understand my instruction, copy my instruction and ctrl-I then ask AI how to do it. AI can also clarify what I mean. I mention this because in English my original and follow-up instruction is very clear. DM: yup!
      Note: you won't need the categorySelected state in this case. DM: good
      category dropdown with the start button which already has the correct logic for both:
      !showRules && !showQuiz */}
   
      {/* 9. Conditional Rendering: The component uses conditional rendering to display different components based on the state of the application. For example, if showRules and showQuiz are false, the CategorySelector and StartQuizButton components are displayed. If showQuiz is true, the QuestionBox component is displayed. If showRules is true, the RulesOfTheQuiz component is displayed. */}
      {!showRules && !showQuiz && (
        <div className="flex flex-col items-center justify-center w-full">
          <CategorySelector
            setSelectedCategory={setSelectedCategory}
            handleCategorySelect={handleCategorySelect}
          />
          <div className="mt-4">
            <StartQuizButton handleStartQuizClick={handleStartQuizClick} />
          </div>
        </div>
      )}
      {showQuiz && <QuestionBox handleExitGame={handleExitGame} quizData={quizData} />}
      {showRules && (
        <div className="popup bg-blue-500">
          <RulesOfTheQuiz
            handleContinueFromRulesClick={handleContinueFromRulesClick}
            handleExitShowRulesClick={handleExitShowRulesClick}
          />
        </div>
      )}
    </div>
  )
}
