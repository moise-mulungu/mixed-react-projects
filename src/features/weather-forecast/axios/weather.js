// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const Weather = () => {
//   // DM: there is a short period of time, before the API fetch is complete, when weather === {}, so if you try to access weather.main, main is not yet a property on weather.
//   const [weather, setWeather] = useState({})

//   useEffect(() => {
//     // Replace 'YOUR_API_KEY' with your own API key
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

//   // const mainObject = weather.main.temp ; if i define it here it throws an error: ReferenceError: mainObject is not defined DM: see my comment above the useState line above.(ok)
//   /*
//      example of how to document steps taken to debug an error message:

//      follow the clues in the error message: "ReferenceError: mainObject is not defined"
//        global RegExp search of howtos: "howtojs.*ReferenceError: .* is not defined"
//          no matches, so try a shorter string: "howtojs.*ReferenceError:.*defined"
//          no matches, so try a shorter string: "howtojs.*ReferenceError"
//          no matches, so try without howtojs: "ReferenceError.*defined"
//          since there is no howtojs for ReferenceError, be sure to make one after you solve this error, either here or in react-errors.md
//        Google search: "ReferenceError is not defined" - read a few stackoverflow and see what you learn (make some )
//        Ask AI to find errors in your code and explain them

//      tip: ask AI to "explain the React Lifecycle using this component as an example"
//        AI will explain things such as how the value in the state variable 'weather' is {} until setWeather is called
//        you could also ask AI: "explain the React Lifecycle using the example of a simple component"
//   */
//   // console.log('main-object:', { mainObject })
//   const weatherObjectToArray = Object.entries(weather).map((item) => {
//     console.log({ item, typeof: typeof item }) // i successfully get the first nested children of the weather object here
//     const mainObject = weather.main.temp
//     console.log('main-object:', { mainObject }) // But here it works. DM; Is this a problem?
//     // return (
//     //   <p key={item[0]}>
//     //     {item[0]}: {item[1]}
//     //   </p>
//     // )
//     Object.entries(item).map((e) => {
//       console.log({ e, typeof: typeof e }) // the same here, i successfully get the second nested children of the weather object here
//       // DM: good!
//       return (
//         <p key={e[0]}>
//           {e[0]}: {e[1]}
//         </p>
//       )
//     })
//   })
//   return (
//     <div>
//       {' '}
//       {/* DM: this is a good way to get what you want, no? */}
//       <p>
//         {/* MM: DM: these line below are throwing error: "TypeError: Cannot read properties of undefined (reading 'temp')", i then commented them out to get the code to compile */}
//         {/* DM: todoMM: console.log weather.main. Does it have a te property? */}
//         {/* Temperature: {weather.main.temp}°F ({weather.main.feels_like}°F) */}
//         {/* MM: DM: i still can get data of  the main object  */}
//         {/* where'e your console.log? What is typeof weatherObjectToArray.main and what is typeof weatherObjectToArray (is there a .main property on it?) */}
//         {/* Temperature: {mainObject}°F */}
//         {/* ({weatherObjectToArray.main}°F) */}
//       </p>
//       {/* <p>Humidity: {weather.main.humidity} %</p> */}
//       <div>
//         {/* it does not render the data to the browser after consoling */}
//         {Object.entries(weather)?.map((item) => {
//           // MM: DM: i want here to get the first nested children from the weather api
//           console.log('item:', { item, typeof: typeof item })

//           {
//             //  MM: DM: i want here to get the second nested children from the weather api
//             //(ok) DM: you can't render an object or your'll get that error you mentioned
//             // DM: you can render a primitive
//             //(done) DM: so, if the primitive value you want is inside the object, how do you access it?
//             // DM: given that the comments refer to the code below the comment, we are talking about the 'value' variable. Therefore, what kind of object does the 'value' variable contain? Your howtojs is good, but it shows how to access the properties of objects, not an array.
//             /*
//             howtojs: object: access object properties:: You can access the properties of an object in JavaScript in 3 ways:
//             1. Dot property accessor:
//             2. object. property.Square brackets property accessor: object['property']
//             3. Object destructuring: const { property } = object.
//             */
//             Object.entries(item)?.map((value) => {
//               console.log('value:', { value, typeof: typeof value, isArray: Array.isArray(value) })

//               {
//                 //  MM: DM: i want here to get the third nested children from the weather api
//                 Object.entries(value)?.map((element) => {
//                   console.log('element:', { element, typeof: typeof element })
//                   console.log('element:', { weather, item, value })
//                   return <p>{element}</p>
//                 })
//               }
//             })
//           }
//         })}
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

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = () => {
  const [weather, setWeather] = useState({})

  useEffect(() => {
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

  const weatherObjectToArray = Object.entries(weather).map((item) => {
    console.log({ item: item })
    const weatherSubObjectToArray = Object.entries(item).map((e) => {
      return (
        <p key={e[0]}>
          {e[0]}: {e[1]}
        </p>
      )
    })
  })

  return (
    <div>
      <p>
        Temperature: {weather.main.temp}°F ({weather.main}°F)
      </p>
      <p>Humidity: {weather.main.humidity} %</p>
      <div>{weatherObjectToArray}</div>
      <pre>
        For viewing the entire object in the browser:
        <br />
        {JSON.stringify(weather, null, 2)}
      </pre>
    </div>
  )
}

export default Weather
