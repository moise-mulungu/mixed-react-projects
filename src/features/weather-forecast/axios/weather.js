import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = () => {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your own API key
    axios
      .get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          appid: '85bd5941b66f2ecc9f970952677ab2f3',
          units: 'imperial',
          q: 'London',
        },
      })
      .then((response) => {
        setWeather(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      {/* <p>
        Temperature: {weather.main.temp}°F ({weather.main.feels_like}°F)
      </p>
      <p>Humidity: {weather.main.humidity} %</p> */}
      <div>
        {/* it does not render the data to the browser after consoling */}
        {Object.entries(weather)?.map((item) => {
          // MM: DM: i want here to get the first nested children from the weather api
          console.log('item:', { item })

          {
            //  MM: DM: i want here to get the second nested children from the weather api
            Object.entries(item)?.map((value) => {
              console.log('value:', { value })

              {
                //  MM: DM: i want here to get the third nested children from the weather api
                Object.entries(value)?.map((element) => {
                  console.log('element:', { element })
                  return <p>{element}</p>
                })
              }
            })
          }
        })}
      </div>
    </div>
  )
}
export default Weather
