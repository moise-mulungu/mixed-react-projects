import React from 'react'
// import axios from 'axios'
import Weather from './weather'
import WeatherForecastFooter from './weather-forecast-footer'
// import { fetchWeatherData } from './weather'

// const fetchWeatherData = (city) => {
//   return axios
//     .get(`/api/weather?city=${city}`)
//     .then((response) => {
//       return response.data
//     })
//     .catch((error) => {
//       console.error(error)
//       return null
//     })
// }

/* 

DM: getting this app ready for deployment to production, in case any potential employer is looking at your code, we want to make sure you're following best practices for naming directories and component functions;

DM: todoMM: have a look at the new file naming-conventions.md and apply those conventions to the directory/file naming and component function naming in this app. 

DM: note: it doesn't matter much what package (axios) you use to fetch, so I wouldn't use 'axios' in the name of the directory or component function. Name any function after what it does, not how it does it. Or, if the function is a React component, name it after what it is (what it displays), not what it does it with.

*/

const WeatherForecastWithAxios = () => {
  // axios.fetchWeatherData = fetchWeatherData
  return (
    <div class="grid top-0 w-full h-16 bg-gray-500">
      <header className="bg-blue-500 py-4">
        <h1 className="text-white text-2xl font-bold text-center">Weather Forecast</h1>
      </header>
      <Weather />
      <WeatherForecastFooter />
    </div>
  )
}

export default WeatherForecastWithAxios
