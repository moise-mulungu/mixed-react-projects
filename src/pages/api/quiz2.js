import axios from 'axios'

// import data from '@/features/quiz-app-with-timer/server/data'

export default async (req, res) => {
  // temporary until you get the external API working. See output at: http://localhost:3005/api/quiz
  //   return res.status(200).json(data) // the rest of the code below never runs if you return early.
  // DM: todoMM: good. use the lodash isEmpty like this: if (isEmpty(req.query)) { ... } // because is more readable and handles more situations, i.e., if req.query is undefined or {} empty object
  if (Object.keys(req.query).length === 0) {
    // DM: todoMM: good. should this be 500 (Error?). If you chose 400 specifically let me know your reasoning
    return res.status(400).send('Bad Request: No query parameters provided')
  }
  const { category } = req.query
  console.log('category:', { category })

  if (!category) {
    // return res.status(400).json({ error: 'City is not provided' })
    return res.status(400).send('Bad Request: category not specified')
  }

  const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${process.env.QUIZ_APP_WITH_TIMER_API_KEY}&category=${category}&limit=10`
  console.log('api-url:', { apiUrl })
  // https://quizapi.io/api/v1/questions?apiKey=[no secrets in the repo!]&category=sql&limit=10

  try {
    const response = await axios.get(apiUrl)
    console.log('response:', { response })

    const data = response.data
    console.log('data:', { data })

    res.status(200).json(data)
  } catch (error) {
    console.error({ error, errorMessage: error.message })
    res.status(500).json({ error: 'Unable to fetch quiz data', message: error.message })
  }
}

// http://localhost:3005/api/quiz2?category=sql&otherParam=otherValue
