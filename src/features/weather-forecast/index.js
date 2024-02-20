//(done) DM: rename the directory from weather-app to weather-forecast

import React from 'react'
// import Forecast from './components/forecast/forecast'
// import App from './weather-forecast-example/App'
import WeatherForecastContents from './weather-forecast-contents/index'

function WeatherForecast() {
  return (
    <div>
      <main>
        <WeatherForecastContents />
      </main>
    </div>
  )
}

export default WeatherForecast
