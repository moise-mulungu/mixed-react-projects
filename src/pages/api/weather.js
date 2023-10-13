// import fetch from 'isomorphic-unfetch';
import axios from 'axios'

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
    res.status(500).json({ error: 'Unable to fetch weather data' })
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
