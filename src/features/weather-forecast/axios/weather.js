import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your own API key
    axios
      .get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          appid: 'YOUR_API_KEY',
          units: 'imperial',
          q: 'London',
        },
      })
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Weather in London</h1>
      <p>
        Temperature: {weather.main.temp}°F ({weather.main.feels_like}°F)
      </p>
      <p>
        Humidity: {weather.main.humidity} %
      </p>
    </div>
  );
};

export default Weather;