//(done) DM: todoMM: rename the directory from weather-app to weather-forecast

import React from 'react'
// import Forecast from './components/forecast/forecast'
// import App from './weather-forecast-example/App'
//(done) DM: todoMM: change the name of the file or the default import name so that they are the same. This gets confusing to know what something is and where it comes from
import WeatherForecastWithAxios from './axios/index'

function WeatherForecast() {
  return (
    <div>
      <main>
        <WeatherForecastWithAxios />
      </main>
    </div>
  )
}

export default WeatherForecast
