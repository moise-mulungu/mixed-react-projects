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
    //(done) DM: back to 400 - don't always take my advice as gospel, esp if I give it in the form of a question, like I did above. Managers expect you to tell them when they are wrong. BTW, in an interview a manager asked me what I would do if  he we're to give me incorrect orders. MM: DM: i found that 500 status is for errors caused by server-side code, and 400 status is for errors caused by client-side code, and is more appropriate for these types of errors(AI prompt: "400 status is for client-side code, and is more appropriate for these types of errors")
    return res.status(400).send('Bad Request: No query parameters provided')
  }
  const { category } = req.query
  console.log('category:', { category })

  if (!category) {
    // return res.status(400).json({ error: 'City is not provided' })
    //(ok) DM: 400 is Bad Request. 500 is Internal Server Error. 400 is more appropriate here, and above despite what I told you yesterday (although I did ask :)
    return res.status(400).send('Bad Request: category not specified')
  }

  const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${process.env.QUIZ_APP_WITH_TIMER_API_KEY}&category=${category}&limit=10`
  console.log('api-url:', { apiUrl })
  // https://quizapi.io/api/v1/questions?apiKey=[no secrets in the repo!]&category=sql&limit=10

  try {
    const response = await axios.get(apiUrl)
    console.log('response:', { response })

    const data = response.data
    // console.log('data:', { data })

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
    //(done, but i used the above approach ?above?) DM: uncomment the next line, put cursor at the end of that line, then press Enter, and see what Copilot suggests. For me, it was a good start, but there was at least one error. Console.log it and you'll figure it out. DM: my instruction said "uncomment the next line, put cursor at the end of that line, then press Enter, and see what Copilot suggests". You didn't do that. I expect that you'll follow my instructions. If you decide on another approach, fine, but you should have first attempted what I instructed and let me know what you saw. I spend a lot of time writing these instructions. So that you can learn and learn efficiently.
    // const transformedData = data.map((question) => {

    // In my large comment above I gave AI examples of 1) a question object that works in client-side code and 2) a question object from the external API. Then I asked it to transform the 2nd object so that the properties match the first object. The property names are good enough that AI can almost get it right.
    // DM: todoMM: follow the instructions in quiz3.js and see if you get a better Copilot response. Leave this file as is and don't use it anymore, use quiz3.js going forward. (Use quiz.js in the client until you get quiz3.js returning data in the correct format.)

    // I removed this next line from quiz3.js because it will confuse AI because it is too unspecific and references info that AI doesn't have access to. AI will not understand "client-side code".
    // change property names to match the client-side code
    const transformedData = data.map((data) => {
      const {
        id: questionId,
        question,
        correct_answer: correctAnswer, // this isn't an answer, it is a property name of the answerChoices object
        answers: answerChoices, // this isn't an array of answers, it is an object with answer properties
      } = data
      return {
        questionId,
        question,
        correctAnswer,
        answerChoices,
      }
    })

    console.log('transformedData:', { transformedData })

    res.status(200).json(transformedData)
    // const datam = res.status(200).json(data)
  } catch (error) {
    console.error({ error, errorMessage: error.message })
    res.status(500).json({ error: 'Unable to fetch quiz data', message: error.message })
  }
}

// http://localhost:3005/api/quiz2?category=sql&otherParam=otherValue
