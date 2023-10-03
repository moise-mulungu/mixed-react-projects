//(done) DM: todoMM: rename the directory from weather-app to weather-forecast

import React from 'react'
import Forecast from './components/forecast/forecast'
import App from './weather-forecast-example/App'
import Divider from '@/ui/divider'
import OpenWeatherMap from './axios/index'

function WeatherForecast() {
  return (
    <div>
      <header>
        <h1>React Weather WeatherForecastPage</h1>
      </header>
      <main>
        <Forecast />
        <Divider />
        <App />
        <Divider />
        <OpenWeatherMap />
      </main>
      <footer>Page created by Moise Mulungu</footer>
    </div>
  )
}

export default WeatherForecast
