import React from 'react'
import Weather from './weather'
//(done) DM: todoMM: the import name does not match the filename or exported component name
import WeatherForecastFooter from './weather-forecast-footer'

const WeatherForecastWithAxios = () => {
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
