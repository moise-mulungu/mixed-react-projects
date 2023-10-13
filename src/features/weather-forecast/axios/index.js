import React from 'react'
// import axios from 'axios'
import Weather from './weather'
//(done) DM: todoMM: the import name does not match the filename or exported component name
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
