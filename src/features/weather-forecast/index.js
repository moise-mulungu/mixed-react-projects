//(done) DM: todoMM: rename the directory from weather-app to weather-forecast

import React from 'react'
import Forecast from './components/forecast/forecast'
import App from './weather-forecast-example/App'

function WeatherForecast() {
  return (
    <div>
      <header>
        <h1>React Weather WeatherForecastPage</h1>
      </header>
      <main>
        <Forecast />
        <App />
      </main>
      <footer>Page created by Moise Mulungu</footer>
    </div>
  )
}

export default WeatherForecast
