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

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
    )
    const data = response.data
    res.status(200).json(data)
  } catch (error) {
    console.error(error)
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
