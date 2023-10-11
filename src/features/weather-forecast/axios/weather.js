import React, { useState, useEffect } from 'react'
import axios from 'axios'

/* 
DM: if you look at the diff from my last commit to your last commit on Tuesday, look at weather.js and pascal-to-camel-case-cleaned.md. I have no way of seeing what you changed, which wastes a lot of my time and makes it hard to review. So, as a rule, don't make a separate cleaned version, just update the code. If we want to see the old version, we can check out an older commit and look at it. 
MM: DM: the pascalToCamelCaseCleaned function is for string converter app not for the weather app. 
DM: If you want to do a side-by-side, then take the OLD version and put it into a new file, then make your changes to the new version, so I can see the changes.
Also, don't comment copy the old code then comment it out, because in the new code I can't see what you changed.(ok)

DM: weather app throws an error in the browser. "TypeError: Cannot read properties of undefined (reading 'feels_like')". Don't leave errors or I can't review. Comment them out and put a note about what is wrong.

If you are careful about all these things before you commit, I will have time to answer questions and do some questaion-and-answer teaching like we did that day last week. Otherwise, i have to spend all of my time writing these notes and correcting your code and I don't have time to teach. 



 */

const Weather = () => {
  // DM: there is a short period of time, before the API fetch is complete, when weather === {}, so if you try to access weather.main, main is not yet a property on weather.
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

  // const mainObject = weather.main.temp ; if i define it here it throws an error: ReferenceError: mainObject is not defined DM: see my comment above the useState line above.(ok)
  /*
     example of how to document steps taken to debug an error message:

     follow the clues in the error message: "ReferenceError: mainObject is not defined"
       global RegExp search of howtos: "howtojs.*ReferenceError: .* is not defined"
         no matches, so try a shorter string: "howtojs.*ReferenceError:.*defined"
         no matches, so try a shorter string: "howtojs.*ReferenceError"
         no matches, so try without howtojs: "ReferenceError.*defined"
         since there is no howtojs for ReferenceError, be sure to make one after you solve this error, either here or in react-errors.md
       Google search: "ReferenceError is not defined" - read a few stackoverflow and see what you learn (make some )
       Ask AI to find errors in your code and explain them

     tip: ask AI to "explain the React Lifecycle using this component as an example"
       AI will explain things such as how the value in the state variable 'weather' is {} until setWeather is called
       you could also ask AI: "explain the React Lifecycle using the example of a simple component"
  */
  // console.log('main-object:', { mainObject })
  // MM: DM: this way of converting an object to an array is not important after asking Sider AI prop?
  // const weatherObjectToArray = Object.entries(weather).map((item) => {
  //   console.log({ item, typeof: typeof item }) // i successfully get the first nested children of the weather object here
  //   const mainObject = weather.main.temp
  //   console.log('main-object:', { mainObject }) // But here it works. DM; Is this a problem?
  //   // return (
  //   //   <p key={item[0]}>
  //   //     {item[0]}: {item[1]}
  //   //   </p>
  //   // )
  //   Object.entries(item).map((e) => {
  //     console.log({ e, typeof: typeof e }) // the same here, i successfully get the second nested children of the weather object here
  //     // DM: good!
  //     return (
  //       <p key={e[0]}>
  //         {e[0]}: {e[1]}
  //       </p>
  //     )
  //   })
  // })
  return (
    <div>
      {' '}
      {/* DM: this is a good way to get what you want, no?
      MM: i fixed this by asking SIderAI prompt on how to fix the Error: Objects are not valid as a React child (found: object with keys {lon, lat}). If you meant to render a collection of children, use an array instead." all the steps undertaken are listed in the src/features/weather-forecast/axios/debugging-weather-app.md fi */}
      <p>Temperature: {weather.main?.temp}°F</p>
      <p>Approximate: ({weather.main?.feels_like}°F)</p>
      <p>Humidity: {weather.main?.humidity}%</p>
      <p>Description: {weather.weather?.[0]?.description}</p>
      <p>Wind Speed: {weather.wind?.speed} mph</p>
      <div>
        {/* MM: DM: all these below are no more necessary */}
        {Object.entries(weather)?.map((item) => {
          // MM: DM: i want here to get the first nested children from the weather api
          console.log('item:', { item, typeof: typeof item })

          {
            //  MM: DM: i want here to get the second nested children from the weather api
            //(ok) DM: you can't render an object or your'll get that error you mentioned
            // DM: you can render a primitive
            //(done) DM: so, if the primitive value you want is inside the object, how do you access it?
            // DM: given that the comments refer to the code below the comment, we are talking about the 'value' variable. Therefore, what kind of object does the 'value' variable contain? Your howtojs is good, but it shows how to access the properties of objects, not an array.
            /*
            howtojs: object: access object properties:: You can access the properties of an object in JavaScript in 3 ways:
            1. Dot property accessor:
            2. object. property.Square brackets property accessor: object['property']
            3. Object destructuring: const { property } = object.
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

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const Weather = () => {
//   const [weather, setWeather] = useState({})

//   useEffect(() => {
//     axios
//       .get('https://api.openweathermap.org/data/2.5/weather', {
//         params: {
//           appid: '85bd5941b66f2ecc9f970952677ab2f3',
//           units: 'imperial',
//           q: 'London',
//         },
//       })
//       .then((response) => {
//         setWeather(response.data)
//       })
//       .catch((error) => {
//         console.error(error)
//       })
//   }, [])

//   return (
//     <div>
//       <div>
//         <p>
//           Temperature: {weather.main?.temp}°F ({weather.main.feels_like}°F)
//         </p>
//         <p>Humidity: {weather.main?.humidity}%</p>
//         <p>Description: {weather.weather?.[0]?.description}</p>
//         <p>Wind Speed: {weather.wind?.speed} mph</p>
//       </div>

//       <pre>
//         For viewing the entire object in the browser:
//         <br />
//         {JSON.stringify(weather, null, 2)}
//       </pre>
//     </div>
//   )
// }

// export default Weather

// (done)DM: todoMM: revert this to the commented out original, then based on t9 suggestions, see if you can fix the errors. Select a specific part of the code, then ask 09 to suggest changes that the selected code only. Also, is this task part of the weather app, or just outputting those variables. You can do that better by just using the JSON.stringify approach I mentioned
