import React, { useState, useEffect } from 'react'

// import data from './data'

import StartQuizButton from './start-quiz-button'
import RulesOfTheQuiz from './rules-of-the-quiz'
import QuestionBox from './question-box'
import CategorySelector from './category-selector'
import Header from './header'

export default function QuizAppWithTimer() {
  const [showRules, setShowRules] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizData, setQuizData] = useState(null)
  const [error, setError] = useState(null)
  // DM: this is correctly lowercase. See where it is used, it is only used WRT the "value" of the category select options, not the category the user sees.
  const [selectedCategory, setSelectedCategory] = useState('html')
  const [categorySelected, setCategorySelected] = useState(false)

  const loading = !quizData && !error

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

  const handleStartQuizClick = () => {
    setShowRules(true)
  }

  const handleExitShowRulesClick = () => {
    setShowRules(false)
  }

  const handleContinueFromRulesClick = () => {
    setShowQuiz(true)
    setShowRules(false)
  }

  const handleExitGame = () => {
    // Exit the game
    setShowRules(false)

    setShowQuiz(false)
  }
  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    setCategorySelected(true)
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
      {/* DM: todoMM: show category dropdown at the same time as the start button, for UX per the image I put on Slack Monday. DM: CategorySelector is always present, you just have overlays hiding it. That could be a problem later if you change the layout. Also React DEV Tools will confusingly show the CategorySelector component as always being there, even though it's not visible. So, where can you move it so that it shows only when the start button shows?(MM: DM: is this question still relevant after the changes I made? i put the category selector and the start quiz button in the same div, one on top of the other. isn't what you asked for? the dropdown displays for just selecting the category.)
                      Note: you won't need the categorySelected state in this case, because you're showing the category dropdown with the start button which already has the correct logic for both: !showRules && !showQuiz
      */}

      <CategorySelector
        setSelectedCategory={setSelectedCategory}
        handleCategorySelect={handleCategorySelect}
      />

      {selectedCategory && !showRules && !showQuiz && (
        <div className="mt-4">
          <StartQuizButton handleStartQuizClick={handleStartQuizClick} />
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
