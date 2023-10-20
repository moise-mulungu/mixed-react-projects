// import fetch from 'isomorphic-unfetch';
import axios from 'axios'

// DM: direct URL to the endpoint for use in your browser while debugging the code in this file(cool)
// http://localhost:3005/api/weather?city=London

/*

DM: todoMM: 
secrets shouldn't be in GitHub/GitLab in order to protect them from being exposed.
So, put API_KEY in the .env.local file in the root of the project
see in .gitignore that .env.local is excluded from being committed to GitHub/GitLab
for an example of how to use it, see ETHEREAL_EMAIL_USERNAME and ETHEREAL_EMAIL_PASSWORD in the env.local file
search the repo to see how ETHEREAL_EMAIL_USERNAME and ETHEREAL_EMAIL_PASSWORD are used in the code

note: you can ask T9 to review your code for security, error handling, etc. 

*/
//(ok) DM: todoMM: you don't need to reassign this to a new variable, just use it directly in the URL
// const MY_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY // MM: DM: the key is in the .env.local file in the root of the project
// '85bd5941b66f2ecc9f970952677ab2f3' // Replace with your OpenWeatherMap API key

export default async (req, res) => {
  const { city } = req.query // Get the city parameter from the query string

  /*
  Sider AI prompt: "how to fix: GET http://localhost:3005/api/weather?city=undefined 500 (Internal Server Error)".
  answer: 
  if (!req.query.city) {
    return res.status(400).send('Bad Request: city not specified')
  } 
  */
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
  console.log({ apiUrl })
  try {
    const response = await axios.get(
      // console.log('axios-value:', {
      //   axios,
      // })
      // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
      apiUrl
    )
    const data = response.data
    res.status(200).json(data)
  } catch (error) {
    // this is "server-side" code, so the console.error will be in the terminal, not in the browser
    console.error(error, error.message)
    // DM: I added error message so that you can see what the error is in the browser at http://localhost:3005/api/weather?city=London
    // DM: I see mention of EAI_AGAIN in the error message
    // DM: you can google, or look at the openweathermap web site for the meaning of EAI_AGAIN code
    // DM: check that you're calling the api here exactly as you are calling it in the browser
    res.status(500).json({ error: 'Unable to fetch weather data', message: error.message })
  }
}

/*
Sider prompt: how to make an API route in NextJS:
  1. to create a new file "weather.js" in src/pages/api/ directory
  2. to add the provided code
  3. to replace "YOUR_API_KEY" with my actual OpenWeatherMap API key
  4. to replace the fetchWeatherData function in src/features/weather-forecast/axios/weather.js  with the provided code
  5. to import the fetchWeatherData function in the src/features/weather-forecast/axios/index.js and add it to the axios object
  6. Replace "YOUR_API_KEY" with your actual OpenWeatherMap API key
  7. test on the browser by making a request to http://localhost:3005/api/weather?city=London
   
* i order to keep the API key secret, i first started moving it into .env.local file and used in the src/pages/api/weather.js file by using process.env.[API_KEY] object.
  * i used this SiderAI prompt for more clarity "is this declaration correct when using a secret code in the .env.local: const API_KEY = process.env.MY_API_KEY" 
  * the answer was: "The declaration is correct assuming that the `MY_API_KEY` variable is defined in the `.env.local` file and contains the actual API key as its value. The `process.env` object in Node.js is used to access environment variables, which are set in the `.env.local` file. When you define an environment variable in the `.env.local` file, you can access its value in your code using the `process.env` object. So, in this case, the `API_KEY` constant is being assigned the value of the `MY_API_KEY` environment variable using the `process.env` object."

 * Sider prompt: "what is the better way to declare a variable that holds an API key used in the .env.local file in NextJS project?"
   * answer: 
     1. Install the dotenv package by running the following command in your project directory: `npm install dotenv` 
     2. Create a .env.local file in the root of your Next.js project. Add the following line to the .env.local file, replacing YOUR_API_KEY with your actual API key: NEXT_PUBLIC_API_KEY=YOUR_API_KEY. 
     3. It's recommended to prefix your environment variables with NEXT_PUBLIC_ to make them available on the client-side as well. (DM: no, it is not a secret if it is in the code that runs in the client!)
     4. In your Next.js code, require the dotenv package and call the config() method to load the environment variables from the .env.local file. Add the following lines at the top of your next.config.js file: `require('dotenv').config()`

   * i did not install dotenv dependencies because they were already installed. so i just changed the name "OPEN_WEATHER_MAP_API_KEY" to "NEXT_PUBLIC_API_KEY" variable in the .env.file.
   * i reverted the NEXT_PUBLIC_API_KEY to OPEN_WEATHER_MAP_API_KEY variable
* i paused there after many unsuccess attempts. the code is in the src/features/weather-forecast/axios/weather.js file

* TabNine prompt: "what is the better way to declare a variable that holds an API key used in the .env.local file in NextJS project?"
   * answer: 
     1. Install the dotenv package by running the following command in your project directory: `npm install dotenv` 
     2. Create a .env.local file in the root of your Next.js project. Add the following line to the .env.local file, replacing YOUR_API_KEY with your actual API key: NEXT_PUBLIC_API_KEY=YOUR_API_KEY. 
     3. It's recommended to prefix your environment variables with NEXT_PUBLIC_ to make them available on the client-side as well. (DM: no, it is not a secret if it is in the code that runs in the client!)
     4. In your Next.js code, require the dotenv package and call the config() method to load the environment variables from the .env.local file. Add the following lines at the top of your next.config.js file: `require('dotenv').config()`

*/
/*
    Sider prompt: why am i getting "AxiosError: Request failed with status code 500" in this code
    * answer:
      A 500 error indicates a server-side issue, suggesting a problem with the server the request is being sent to, not your application itself.

      In this case, you're trying to request data from the OpenWeather API and the request failed. Here are a couple possible issues:

        1. The API endpoint you're trying to reach might be down or having some issues. To check, try accessing the URL directly in your browser or in tools like Postman.

        2. The OpenWeatherMap API Key is missing, or invalid: Check the `process.env.OPEN_WEATHER_MAP_API_KEY` in your environment variables. Ensure it's present and correct. 

        3. Incorrect city name or the OpenWeatherMap API doesn't have data for the given city name. Ensure you are passing a valid city name.

        4. Make sure there are no restrictions set in OpenWeatherMap API in terms of the number of requests per day or for specific IP addresses.

      It's also good practice to log your errors for better debugging. In your catch block, you can do `console.error(error.response)` or `console.error(error.request)` to get more details about the issue.

      Consider contacting OpenWeather's support if you're continuing to receive this error as it might be an issue on their end.

      blockers: i tried to change the fetchWeatherData function from the src/features/weather-forecast/weather.js and the async function in this file, but the error still persists.

   * i attempted to fix the "Unhandled Runtime Error : AxiosError: Request failed with status code 500"  with this Sider prompt: "how to fix: Unhandled Runtime Error : AxiosError: Request failed with status code 500".
      * i searched for probable restrictions suggested in the Sider AI prompt response of "Make sure there are no restrictions set in OpenWeatherMap API in terms of the number of requests per day or for specific IP addresses"
        * i read the page related to the use of the open-weather-map-api(https://openweathermap.org/api/one-call-3), and i am not sure if the free plan that has some restrictions that cause the "Unhandled Runtime Error : AxiosError: Request failed with status code 500" error 
        * blockers: the error persisted after trying all the approaches. all details are in the src/features/weather-forecast/weather-forecast-contents/weather.jsx file.
        * DM: fix the API first, so look at http://localhost:3005/api/weather?city=London and debug this code in this file first, before you try to use it in the client code. 
      * I paused there.
    */
