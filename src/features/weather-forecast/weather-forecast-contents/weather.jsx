import React, { useState, useEffect } from 'react'
import axios from 'axios'

/* 

DM: this looks good! I wasn't able to input a 2nd city or use the radio button after the first time I clicked the button. So, work on figuring out what makes all the inputs unusable after you click the button. 

DM: if you look at the diff from my last commit to your last commit on Tuesday, look at weather.js and pascal-to-camel-case-cleaned.md. I have no way of seeing what you changed, which wastes a lot of my time and makes it hard to review. So, as a rule, don't make a separate cleaned version, just update the code. If we want to see the old version, we can check out an older commit and look at it. 
MM: DM: the pascalToCamelCaseCleaned function is for string converter app not for the weather app. DM: of course, and I'm mentioning it here.
DM: If you want to do a side-by-side, then take the OLD version and put it into a new file, then make your changes to the new version, so I can see the changes.
Also, don't comment copy the old code then comment it out, because in the new code I can't see what you changed.(ok)

DM: weather app throws an error in the browser. "TypeError: Cannot read properties of undefined (reading 'feels_like')". Don't leave errors or I can't review. Comment them out and put a note about what is wrong.

If you are careful about all these things before you commit, I will have time to answer questions and do some question-and-answer teaching like we did that day last week. Otherwise, i have to spend all of my time writing these notes and correcting your code and I don't have time to teach. 
 */

const Weather = () => {
  // DM: there is a short period of time, before the API fetch is complete, when weather === {}, so if you try to access weather.main, main is not yet a property on weather.
  const [weather, setWeather] = useState({})
  const [city, setCity] = useState('') // i initialized the city state with the default value of "London"
  const [modalOpen, setModalOpen] = useState(false)
  const [degree, setDegree] = useState('')

  /*
  useEffect(() => {
    fetchWeatherData() // The fetchWeatherData function is called when the component mounts and whenever the button is clicked
  }, [])
  */
  useEffect(() => {
    fetchWeatherData()
  }, [city])

  // useEffect(() => {
  //   // Replace 'YOUR_API_KEY' with your own API key
  //   axios
  //     .get('https://api.openweathermap.org/data/2.5/weather', {
  //       params: {
  //         appid: '85bd5941b66f2ecc9f970952677ab2f3',
  //         units: 'imperial',
  //         q: 'London',
  //       },
  //     })
  //     .then((response) => {
  //       setWeather(response.data)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }, [])

  // const fetchWeatherData = () => {
  //   axios
  //     .get(
  //       'https://api.openweathermap.org/data/2.5/weather',
  //       //MM: DM: here is weather-api that i tested to fetch data from "weatherApi": https://www.weatherapi.com/docs/
  //       // 'https://api.weatherapi.com/v1/current.json?key=fdcd3787290f409facc104541231310&q=London&aqi=no',
  //       {
  //         params: {
  //           appid: '85bd5941b66f2ecc9f970952677ab2f3',
  //           // 'fdcd3787290f409facc104541231310',
  //           units: 'imperial',
  //           q: city,
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       setWeather(response.data)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }
  // const fetchWeatherData = async (city) => {
  // DM: Don't use secrets here. If the API key is in the code that runs in the browser (as does all code stemming from src/pages) it is not secure, because it can be seen in the network tab of browser dev tools. That is the reason we are moving your fetch from openweathermap.org to src/pages/api/weather.js because that code runs on the server only. So, here you want to fetch from your own API URL at /api/weather?city=London.
  // const API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY // MM: DM: my API key is in the.env.local file in the root of the project where i declared the OPEN_WEATHER_MAP_API_KEY variable that i assigned my API key.
  /*
  const fetchWeatherData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        throw error
      })
    //   try {
    //     const response = await axios.get(url)
    //     setWeather(response.data)
    //   } catch (error) {
    //     throw error
    //   }
    // }
    */
  const fetchWeatherData = async (city) => {
    // const url = `/api/weather?city=${city}`
    // // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_MAP_API_KEY}`

    // try {
    //   const response = await axios.get(url)
    //   setWeather(response.data)
    // } catch (error) {
    //   throw error
    // }

    try {
      const response = await axios.get(`/api/weather?city=${city}`)
      setWeather(response.data) // Set the weather state with the fetched data.
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  // const fetchWeatherData = () => {
  //   const url = `/api/weather?city=${city}`

  //   return axios
  //     .get(url)
  //     .then((response) => setWeather(response.data))
  //     .catch((error) => {
  //       throw error
  //     })

  //   /*

  //     MM: DM: I faced a blocker of "Unhandled Runtime Error
  //     AxiosError: Request failed with status code 401".
  //     1. Sider AI prompt: "how to fix Unhandled Runtime Error
  //     AxiosError: Request failed with status code 401."
  //       answer: This is because the API key is not valid. Please check your API key and try again.

  //     2. i fixed my API_key in the .env.local file, but the error still persists.
  //     */
  // }

  const convertFahrenheitToCelsius = (fahrenheit) => {
    console.log('fahrenheit:', { fahrenheit })
    return Math.round(((fahrenheit - 32) * 5) / 9)
    /*
    MM: DM: SiderAi prompt:
    * i tried to fix the NAN error by asking the Sider AI prompt:
  * "how to fix the NAN for the celsius degree value in the following code (src/features/weather-forecast/axios/weather.js file)?"
  * the answer was: 
    1. Update the fetchWeatherData function to pass the city parameter from the state:
    ```js
    const fetchWeatherData = () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

      return axios
        .get(url)
        .then((response) => response.data)
        .catch((error) => {
          throw error;
        });
    };
    ```
    2. Add the city parameter to the useEffect dependency array to re-fetch the weather data whenever the city changes:
   ```js
       useEffect(() => {
         fetchWeatherData();
       }, [city]);
   ```
    3. In the handleButtonClick function, pass the city parameter to the fetchWeatherData function:
   ```js
       const handleButtonClick = () => {
         fetchWeatherData(city);
         setModalOpen(true);
       };
   ```

(MM: the endpoint is working already)DM: todoMM: Get the API endpoint working before you spend time on errors you see in the client code. Note: "client code" means the React code that runs in the browser, the browser being a "client" of the "back end service" which is your API endpoint at http://localhost:3005/api/weather?city=London. So paste http://localhost:3005/api/weather?city=London into your browser address bar to debug your API endpoint first. If you can't get the API endpoint to work, then the client code will never work. So, debug the API endpoint in src/pages/weather.js first, then work on the client code here. 

DM: todoMM: ok, and what did you do next to debug/resolve this error? Asking AI is only one of the items in the debugging checklist. I need you to tell me what you tried in order for me to help you. Debugging errors like this is a very important skill you need to develop, so I shouldn't do it for you. So, what will you do next? 
blockers: after following these steps, i faced an error : "Unhandled Runtime Error
AxiosError: Request failed with status code 401" 

TabNine prompt : "what does NAN signify when doing a math calculation in JS for this code:  
  ```js
  * const convertFahrenheitToCelsius = (fahrenheit) => {
      return Math.round(((fahrenheit - 32) * 5) / 9)
    }
    ```
    * the prompt answer was: "In JavaScript, NaN (Not a Number) is a special value used to represent a value that is not a number. It is a result of an invalid mathematical operation or an operation that involves a value that is not a number. So, in the context of the code you provided, NaN would be returned if the fahrenheit value is not a number, which could happen if the value is a string or a boolean value."

(in progress)DM: todoMM: The T9 response gave you some ideas. So, work on it and write here what you tried and learned. Also, apply the steps in the debugging checklist - one or several of those will help you diagnose the problem. Asking AI is only one of the debugging-checklist items.
MM: DM: the NAN error has gone, i didn't fix it. a new error arose, the value of the degree is over the expected. in order to debug it, i:
  - console.log(fahrenheit) values, but it didn't show anything on the console tab on the browser. i am suspecting it could be prevented by the Axios internal error.
  - i checked the function convertFahrenheitToCelsius, i found that it was correct, but the value of the degree does not change
  - i used another Sider prompt: "the degree values are still the same as before after applying the changes in the code above."
  - answer: 

    If the degree values are not changing after applying the code changes, then it might be possible that the API you are using to fetch the weather data does not provide temperatures in Fahrenheit, or there is an error in decoding the response from the API.

    Keep in mind that the code posted assumes that:

    1. The endpoint `/api/weather?city=${city}` is returning valid data
    2. This data includes a `main` object which contains `temp` and `feels_like` properties
    3. The temperature values are provided in Fahrenheit

    First, please verify that above assumptions are true:
    1. API endpoint is correct 
    2. Response object structure contains a `main` object with `temp` and `feels_like` properties
    3. Then check the temperature unit in the API response or API documentation.

    If in case they return the temperature in Celsius and you want to convert it in Fahrenheit, then you need to modify the `convertFahrenheitToCelsius` and `convertCelsiusToFahrenheit` function.
    ```jsx
    const convertCelsiusToFahrenheit = (celsius) => {
        return Math.round((celsius * 9 / 5) + 32)
    }

    const convertFahrenheitToCelsius = (fahrenheit) => {
        return Math.round(((fahrenheit - 32) * 5 / 9))
    }
    ```
    In the `handleButtonClick` function, call `setWeather` after calling `fetchWeatherData`, because `fetchWeatherData` is async and it takes some time for the data to come from the API.
    Replace just this one method from the entire component:
    ```jsx
    const handleButtonClick = async () => {
          setWeather(await fetchWeatherData(city))
          setModalOpen(true)
    }
    ```
    Now, use this two functions inside your temperature display like this:

    ```jsx
      <p>
        Temperature:{' '}
        {degree === 'celsius'
          ? weather.main?.temp
          : convertCelsiusToFahrenheit(weather.main?.temp)}
        °{degree.toLowerCase()}
      </p>
      <p>
        Approximate: (
        {degree === 'celsius'
          ? weather.main?.feels_like
          : convertCelsiusToFahrenheit(weather.main?.feels_like)}
        °{degree.toLowerCase()})
      </p>
    ```
    In the updated code, if the user chooses Fahrenheit, then it will convert the temperature (which is given by our API in Celsius) to Fahrenheit.

    Hopefully this experiment should help you uncover the issue. But if you are still unable to resolve this and can provide us with the majority structure of the JSON received from the API, we would be happy to help you further.
 - after trying the above suggestions, the app broke, then i reverted the previous code.
*/
  } // end of convertFahrenheitToCelsius()

  // -------------------------------------------------------

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

  // The handleCityChange function updates the city state whenever the input field value changes
  const handleCityChange = (e) => {
    setCity(e.target.value)
  }

  // The handleButtonClick function triggers the fetchWeatherData function to fetch weather data for the selected city
  /*
  const handleButtonClick = () => {
    fetchWeatherData(city)
    setModalOpen(true)
  }
  */
  const handleButtonClick = () => {
    fetchWeatherData(city)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleDegreeChange = (e) => {
    setDegree(e.target.value)
  }
  return (
    <div className="h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" /> */}
        <div className="flex mb-0">
          <input
            type="text"
            className="border border-gray-300 rounded-l py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            placeholder="Enter city"
            value={city}
            onChange={handleCityChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white ml-1 py-2 px-4 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleButtonClick}
          >
            Get Weather
          </button>
        </div>
        <div className="flex mt-4 items-center">
          <input
            type="radio"
            id="celsius"
            name="degree"
            value="celsius"
            checked={degree === 'celsius'}
            onChange={handleDegreeChange}
          />
          <label htmlFor="celsius" className="ml-2 mr-4">
            Celsius
          </label>
          <input
            type="radio"
            id="fahrenheit"
            name="degree"
            value="fahrenheit"
            checked={degree === 'fahrenheit'}
            onChange={handleDegreeChange}
          />
          <label htmlFor="fahrenheit" className="ml-2">
            Fahrenheit
          </label>
        </div>
        <div className={`fixed inset-12 grid place-items-center ${modalOpen ? '' : 'hidden'}`}>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-800 text-lg font-semibold mb-4">Weather Information</p>

            <p>
              Temperature:{' '}
              {degree === 'celsius'
                ? convertFahrenheitToCelsius(weather.main?.temp)
                : weather.main?.temp}
              °{degree.toLowerCase()}
            </p>
            <p>
              Approximate: (
              {degree === 'celsius'
                ? convertFahrenheitToCelsius(weather.main?.feels_like)
                : weather.main?.feels_like}
              °{degree.toLowerCase()})
            </p>
            <p>Humidity: {weather.main?.humidity}%</p>
            <p>Description: {weather.weather?.[0]?.description}</p>
            <p>Wind Speed: {weather.wind?.speed} mph</p>
            <p>Country:{weather.sys?.country}</p>
            {/* <p>country: {weather.location?.country}</p>
            <p>celsius: {weather.current?.temp_c}</p> */}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
  //   <div>
  //     {' '}
  //     {/* DM: this is a good way to get what you want, no?
  //     MM: i fixed this by asking SIderAI prompt on how to fix the Error: Objects are not valid as a React child (found: object with keys {lon, lat}). If you meant to render a collection of children, use an array instead." all the steps undertaken are listed in the src/features/weather-forecast/axios/debugging-weather-app.md fi */}
  //     <p>Temperature: {weather.main?.temp}°F</p>
  //     <p>Approximate: ({weather.main?.feels_like}°F)</p>
  //     <p>Humidity: {weather.main?.humidity}%</p>
  //     <p>Description: {weather.weather?.[0]?.description}</p>
  //     <p>Wind Speed: {weather.wind?.speed} mph</p>
  //     <div>
  //       {/* MM: DM: all these below are no more necessary */}
  //       {Object.entries(weather)?.map((item) => {
  //         // MM: DM: i want here to get the first nested children from the weather api
  //         console.log('item:', { item, typeof: typeof item })

  //         {
  //           //  MM: DM: i want here to get the second nested children from the weather api
  //           //(ok) DM: you can't render an object or your'll get that error you mentioned
  //           // DM: you can render a primitive
  //           //(done) DM: so, if the primitive value you want is inside the object, how do you access it?
  //           // DM: given that the comments refer to the code below the comment, we are talking about the 'value' variable. Therefore, what kind of object does the 'value' variable contain? Your howtojs is good, but it shows how to access the properties of objects, not an array.
  //           /*
  //           howtojs: object: access object properties:: You can access the properties of an object in JavaScript in 3 ways:
  //           1. Dot property accessor:
  //           2. object. property.Square brackets pro']
  //           3. Object destructuring: const { property } = object.
  //           */
  //           Object.entries(item)?.map((value) => {
  //             console.log('value:', { value, typeof: typeof value, isArray: Array.isArray(value) })

  //             {
  //               //  MM: DM: i want here to get the third nested children from the weather api
  //               Object.entries(value)?.map((element) => {
  //                 console.log('element:', { element, typeof: typeof element })
  //                 console.log('element:', { weather, item, value })
  //                 return <p>{element}</p>
  //               })
  //             }
  //           })
  //         }
  //       })}
  //     </div>
  //     <pre>
  //       For viewing the entire object in the browser:
  //       <br />
  //       {JSON.stringify(weather, null, 2)}
  //     </pre>
  //   </div>
}
export default Weather

// (done)DM: todoMM: revert this to the commented out original, then based on t9 suggestions, see if you can fix the errors. Select a specific part of the code, then ask 09 to suggest changes that the selected code only. Also, is this task part of the weather app, or just outputting those variables. You can do that better by just using the JSON.stringify approach I mentioned

// MM: DM: after your review, i am thinking of enhancing the modal style to be more attractive. DM: OK, but remember to develop all the functionality first, then make it pretty. You don't want to have to spend a lot of time re-doing the look & feel (UI) each time you change the functionality.(MM: at this stage, all the functionalities are complete. after working on the UI, this app is complete now)