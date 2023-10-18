//(done) DM: todoMM: rename the directory from weather-app to weather-forecast

import React from 'react'
// import Forecast from './components/forecast/forecast'
// import App from './weather-forecast-example/App'
//(done) DM: todoDM: revisit export and file naming conventions upon finalization of the app. DM: one of the naming convention points is you should name a component for what it is. This component is not an API, so choose a name that reflects what it is. Hint, it is a react component that displays what? Just name it after what it displays.
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
