import axios from 'axios'

// import data from '@/features/quiz-app-with-timer/server/data'

export default async (req, res) => {
  // temporary until you get the external API working. See output at: http://localhost:3005/api/quiz
  //   return res.status(200).json(data) // the rest of the code below never runs if you return early.
  //(done) DM: good. use the lodash isEmpty like this: if (isEmpty(req.query)) { ... } // because is more readable and handles more situations, i.e., if req.query is undefined or {} empty object
  // if (Object.keys(req.query).length === 0) {
  const isEmpty = require('lodash/isEmpty')
  if (isEmpty(req.query)) {
    //(done) DM: good. should this be 500 (Error?). If you chose 400 specifically let me know your reasoning
    // DM: todoMM: back to 400 - don't always take my advice as gospel, esp if I give it in the form of a question, like I did above. Managers expect you to tell them when they are wrong. BTW, in an interview a manager asked me what I would do if  he we're to give me incorrect orders.
    return res.status(500).send('Bad Request: No query parameters provided')
  }
  const { category } = req.query
  console.log('category:', { category })

  if (!category) {
    // return res.status(400).json({ error: 'City is not provided' })
    // DM: 400 is Bad Request. 500 is Internal Server Error. 400 is more appropriate here, and above despite what I told you yesterday (although I did ask :)
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

    /* 
      data transformation 

      FROM
      {
        id: 351,
        question: 'What is a composite key?',
        description: null,
        answers: {
          answer_a: 'its is a key that is defined as the primary key in another table',
          answer_b: 'it is a key that uniquely identifies a record in a database',
          answer_c: 'its is an optional key and allows null values',
          answer_d:
            'it is a primary key that consists of more than one field that uniquely identifies a record',
          answer_e: null,
          answer_f: null,
        },
        multiple_correct_answers: 'false',
        correct_answers: {
          answer_a_correct: 'false',
          answer_b_correct: 'false',
          answer_c_correct: 'false',
          answer_d_correct: 'true',
          answer_e_correct: 'false',
          answer_f_correct: 'false',
        },
        correct_answer: 'answer_a',
        explanation: null,
        tip: null,
        tags: [
          {
            name: 'MySQL',
          },
        ],
        category: 'SQL',
        difficulty: 'Easy',
      }

      TO (you want to return the SQL questions in the following format)

      {
        questionId: 1,
        question: 'What does HTML stand for?',
        correctAnswer: 'Hyper Text Markup Language',
        answerChoices: [
          'Hyper Text Preprocessor',
          'Hyper Text Markup Language',
          'Hyper Text Multiple Language',
          'Hyper Tool Multi Language',
        ],
      }
    */
    // DM: todoMM: uncomment the next line, put cursor at the end of that line, then press Enter, and see what Copilot suggests. For me, it was a good start, but there was at least one error. Console.log it and you'll figure it out.
    // const transformedData = data.map((question) => {

    const datam = res.status(200).json(data)
  } catch (error) {
    console.error({ error, errorMessage: error.message })
    res.status(500).json({ error: 'Unable to fetch quiz data', message: error.message })
  }
}

// http://localhost:3005/api/quiz2?category=sql&otherParam=otherValue
