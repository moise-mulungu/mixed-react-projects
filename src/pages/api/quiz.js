import axios from 'axios'

export default async (req, res) => {
  const { category } = req.query

  if (!category) {
    // return res.status(400).json({ error: 'City is not provided' })
    return res.status(400).send('Bad Request: category not specified')
  }
  const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${process.env.QUIZ_APP_WITH_TIMER_API_KEY}&category=${category}&limit=10`
  console.log('api-url:', { apiUrl })
  // https://quizapi.io/api/v1/questions?apiKey=UxNSqnjQwb1BlV5B6AHWqdrNehdxZjsxfcpX4wJH&category=sql&limit=10

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
*/
