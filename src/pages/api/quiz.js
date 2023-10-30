import axios from 'axios'

export default async (req, res) => {
  const { category } = req.query

  if (!category) {
    // return res.status(400).json({ error: 'City is not provided' })
    return res.status(400).send('Bad Request: category not specified')
  }
  const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${process.env.QUIZ_APP_WITH_TIMER_API_KEY}&category=${category}&limit=10`
  console.log('api-url:', { apiUrl })
  // https://quizapi.io/api/v1/questions?apiKey=[no secrets in the repo!]&category=sql&limit=10

  try {
    const response = await axios.get(apiUrl)

    const data = response.data
    console.log('data:', { data })

    res.status(200).json(data)
  } catch (error) {
    console.error({ error, errorMessage: error.message })
    res.status(500).json({ error: 'Unable to fetch quiz data', message: error.message })
  }
}

/*
MM: DM: api route: http://localhost:3005/api/quiz.

AI prompt: after running http://localhost:3000/api/quiz. i am getting an "unable to fetch weather data" error
Ai response:
    Here are some possible reasons why the error message might still be appearing:

    1. The QUIZ_APP_WITH_TIMER_API_KEY environment variable is not set correctly. Make sure that the environment variable is set to a valid API key for the quiz app endpoint.

    2. The category query parameter is not set correctly. Make sure that the category parameter is set to a valid category for the quiz app endpoint.

    3. There is an issue with the axios library. Try updating the axios library to the latest version and see if that resolves the issue.

    4. There is an issue with the quizapi.io API. Try accessing the API directly using a tool like Postman to see if the API is returning the expected data.


* blockers: i tried to test the endpoint on browser http://localhost:3005/api/quiz?category=html, but i got a{"error":"Unable to fetch quiz data","message":"Request failed with status code 401"}:
  * i use this copilot prompt: after running http://localhost:3000/api/quiz. i am getting an "unable to fetch weather data" error
  * answer was to check if one the following are well fixed: the api authentication, the parameter of the endpoint, the axios library version, and to test on an API test platform
  * i went through all these steps above for verification, but the error still persists.
  * i added console.logs to get different data.
  * i created a fetch() function in the client-side code where i set the category parameter. but the error still persists.
* i paused there.
DM: todoMM: what does http status code 401 mean? what do the console.logs tell you (i.e., apiUrl is logged)? What does the logged error object tell you?
*/
