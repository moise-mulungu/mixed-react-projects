import React from 'react'
import countriesData from './components/countries-data/countries-data'

const countryNames = Object.entries(countriesData) // to convert object to array
console.log({ countryNames })

export default function WeatherForecast() {
  return (
    <div>
      <h1>Weather Forecast</h1>
      <main>
        {countryNames.map((idx, continents) => {
          const allContinents = Object.entries(continents)
          return (
            <div key={idx}>
              <h2>{continents[0]}</h2>
              <ul>
                {allContinents.map((country, idx) => {
                  console.log({ continents }) // MM: DM: it does not display the list of countries???
                  return <li key={idx}>{country}</li>
                })}
              </ul>
            </div>
          )
        })}
      </main>
      <footer>Page created by Moîse Mulungu</footer>
    </div>
  )
}
