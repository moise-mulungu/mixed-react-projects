// import React from 'react';

const CategorySelector = ({
  // setSelectedCategory,
  handleCategorySelect,
  // DM: now you can pass in the categories as a prop if needed. ok
  // DM: cool, lots of quizzes, some from local files, some from external API.
  categories = ['HTML', 'JavaScript', 'CSS', 'SQL', 'Linux', 'Bash', 'Code'],
}) => {
  // const categories = ['sql', 'linux', 'bash', 'code'] // Replace with your actual categories

  const handleCategoryChange = (event) => {
    //(done) DM: handleCategorySelect can call setSelectedCategory, so you don't need to pass it as a prop to this component
    // setSelectedCategory(event.target.value)
    handleCategorySelect(event.target.value)
  }

  return (
    <div className="w-full max-w-xs mx-auto mt-4">
      <select
        onChange={handleCategoryChange}
        className="block w-full bg-white border border-gray-300 focus:border-indigo-500 text-2xl leading-6 shadow-sm py-2 pl-3 pr-10 rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm sm:leading-5"
      >
        <option value="">Select a category</option>
        {/* DM: all params should be lower-case, so here you can show the mixed-case category to the user, but the value should be lower-case. This is because the external API requires lower-case (see my comment in quiz3.js) DM: you also need to avoid sending upper- or mixed-case to the API. Where does the value that is passed to the API URL come from? Hint, it comes from the value of the select option. Make it lower case. WHY many times separate teams work on the back end and front end, so it is typically expected that params will be normalized to lowercase to avoid issues.(done)
         */}
        {categories.map((category) => (
          <option
            key={category}
            value={category.toLowerCase()}
            className="bg-white text-gray-900 font-bold py-4 px-6 rounded"
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CategorySelector
