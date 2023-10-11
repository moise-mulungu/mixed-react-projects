import React from 'react'
import Weather from './weather'

const OpenWeatherMap = () => {
  return (
    <div>
      {/* <h1>Weather OpenWeatherMap</h1> */}
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Weather Forecast</h3>
      </div>
      <Weather />
    </div>
  )
}

export default OpenWeatherMap
