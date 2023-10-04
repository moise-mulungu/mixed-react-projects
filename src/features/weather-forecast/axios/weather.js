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
      {/* DM: this is a good way to get what you want, no? */}
      <p>
        Temperature: {weather.main.temp}°F ({weather.main.feels_like}°F)
      </p>
      <p>Humidity: {weather.main.humidity} %</p>
      <div>
        {/* it does not render the data to the browser after consoling */}
        {Object.entries(weather)?.map((item) => {
          // MM: DM: i want here to get the first nested children from the weather api
          console.log('item:', { item, typeof: typeof item })

          {
            //  MM: DM: i want here to get the second nested children from the weather api
            //(ok) DM: you can't render an object or your'll get that error you mentioned
            // DM: you can render a primitive
            //(done) DM: so, if the primitive value you want is inside the object, how do you access it?
            /*
            howtojs: object: access object properties:: You can access the properties of an object in JavaScript in 3 ways: 1. Dot property accessor: 2. object. property.Square brackets property accessor: 3. object['property']Object destructuring: const { property } = object.
            */ 
            Object.entries(item)?.map((value) => {
              console.log('value:', { value, typeof: typeof value, isArray: Array.isArray(value) })

              {
                //  MM: DM: i want here to get the third nested children from the weather api
                Object.entries(value)?.map((element) => {
                  console.log('element:', { element, typeof: typeof element })
                  console.log('element:', { weather, item, value })
                  return <p>{element}</p>
                })
              }
            })
          }
        })}
      </div>
      <pre>
        For viewing the entire object in the browser:
        <br />
        {JSON.stringify(weather, null, 2)}
      </pre>
    </div>
  )
}
export default Weather
