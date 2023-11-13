import React, { useState, useEffect } from 'react'

// import data from './data'

import StartQuizButton from './start-quiz-button'
import RulesOfTheQuiz from './rules-of-the-quiz'
import QuestionBox from './question-box'
import CategorySelector from './category-selector'

export default function QuizAppWithTimer() {
  const [showRules, setShowRules] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizData, setQuizData] = useState(null)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('sql')
  const [categorySelected, setCategorySelected] = useState(false)

  const loading = !quizData && !error

  useEffect(() => {
    // const category = 'sql' // replace with your desired category

    // const apiUrl = `/api/quiz3?category=${category}`
    const apiUrl = `/api/quiz3?category=${selectedCategory}`
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
  }, [selectedCategory])

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
    <div className="bg-blue-500 h-screen flex justify-center items-center">
      {!categorySelected && (
        <CategorySelector
          setSelectedCategory={setSelectedCategory}
          handleCategorySelect={handleCategorySelect}
        />
      )}

      {categorySelected && !showRules && !showQuiz && (
        <StartQuizButton handleStartQuizClick={handleStartQuizClick} />
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
