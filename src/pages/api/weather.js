// import fetch from 'isomorphic-unfetch';
import axios from 'axios'

// DM: direct URL to the endpoint 
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
const API_KEY = '85bd5941b66f2ecc9f970952677ab2f3' // Replace with your OpenWeatherMap API key

export default async (req, res) => {
  const { city } = req.query // Get the city parameter from the query string

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
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
import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

export default async (req, res) => {
  const { city } = req.query; // Get the city parameter from the query string

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
};

*/
