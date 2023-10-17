//(done) DM: todoMM: rename the directory from weather-app to weather-forecast

import React from 'react'
// import Forecast from './components/forecast/forecast'
// import App from './weather-forecast-example/App'
// DM: todoDM: revisit export and file naming conventions upon finalization of the app
import OpenWeatherMapApi from './open-weather-map-api/index'

function WeatherForecast() {
  return (
    <div>
      <main>
        <OpenWeatherMapApi />
      </main>
    </div>
  )
}

export default WeatherForecast
