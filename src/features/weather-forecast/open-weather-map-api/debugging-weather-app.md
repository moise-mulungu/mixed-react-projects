
## AI Prompt: fix the code Weather function
- i used Sider AI to correct the weather function with the following prompt: "how to fix the *** Error: Objects are not valid as a React child (found: object with keys {lon, lat}). If you meant to render a collection of children, use an array instead***.
- the SiderAI responded to: 
  - The error is caused by trying to render the entire "weather" object as a child element. To fix this, we need to remove the following code:
  ```js
  <div>
    {Object.keys(weather).map((key) => (
      <p key={key}>
        {key}: {weather[key]}
      </p>
    ))}
  </div> 
  ```
  - Instead, we can render each weather property individually, like this:
    ```js
    <div>
    <p>Temperature: {weather.main?.temp}°F</p>
    <p>Humidity: {weather.main?.humidity}%</p>
    <p>Description: {weather.weather?.[0]?.description}</p>
    <p>Wind Speed: {weather.wind?.speed} mph</p>
  </div>
  ```