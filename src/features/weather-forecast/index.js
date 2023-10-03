//(done) DM: todoMM: rename the directory from weather-app to weather-forecast

import React from 'react'
import Forecast from './components/forecast/forecast'
import App from './weather-forecast-example/App'
import Divider from '@/ui/divider'
// DM: todoMM: change the name of the file or the default import name so that they are the same. This gets confusing to know what something is and where it comes from
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
