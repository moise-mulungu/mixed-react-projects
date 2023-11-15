import axios from 'axios'
import isEmpty from 'lodash/isEmpty'

//(done) DM: todoMM: test this at localhost:3005/api/quiz3 until the property names and values match what you get in localhost:3005/api/quiz

// import htmlData from '@/features/quiz-app-with-timer/server/html-data'
// import jsData from '@/features/quiz-app-with-timer/server/js-data'
// import cssData from '@/features/quiz-app-with-timer/server/css-data'

export default async (req, res) => {
  // temporary until you get the external API working. See output at: http://localhost:3005/api/quiz
  //   return res.status(200).json(data) // the rest of the code below never runs if you return early.
  //(done) DM: good. use the lodash isEmpty like this: if (isEmpty(req.query)) { ... } // because is more readable and handles more situations, i.e., if req.query is undefined or {} empty object
  // if (Object.keys(req.query).length === 0) {
  // const isEmpty = require('lodash/isEmpty')
  if (isEmpty(req.query)) {
    //(done) DM: good. should this be 500 (Error?). If you chose 400 specifically let me know your reasoning
    //(done) DM: todoMM: back to 400 - don't always take my advice as gospel, esp if I give it in the form of a question, like I did above. Managers expect you to tell them when they are wrong. BTW, in an interview a manager asked me what I would do if  he we're to give me incorrect orders. MM: DM: i found that 500 status is for errors caused by server-side code, and 400 status is for errors caused by client-side code, and is more appropriate for these types of errors(AI prompt: "400 status is for client-side code, and is more appropriate for these types of errors")
    return res.status(400).send('Bad Request: No query parameters provided')
  }
  const { category } = req.query
  console.log('category:', { category })

  if (!category) {
    // return res.status(400).json({ error: 'City is not provided' })
    //(ok) DM: 400 is Bad Request. 500 is Internal Server Error. 400 is more appropriate here, and above despite what I told you yesterday (although I did ask :)
    return res.status(400).send('Bad Request: category not specified')
  }

  //(done) DM: allow category=html to be selected in the UI and passed to this API. Copy the import of "data" from quiz.js. If category=html, return data here. Otherwise, continue with the axios code below. DM: good job!

  /* 
    (done)DM: todoMM: advanced task, since you're doing well. You don't need to import all 3 data files. You can import only the one you need by using "dynamic imports". Read https://nextjs.org/learn-pages-router/seo/improve/dynamic-imports see the example and the line after "// Dynamically load libraries". note you cannot use "@" imports with dynamic imports, so you'll need to use the exact, full relative path.
    DM: todoDM: follow-up with talk about vercel serverless functions (lambdas). Are they constantly running, or are they fired off on demand?MM: DM: the import with "@" works here! DM: cool!
  */

  //(done) DM: todoMM: change all parameter values to be lowercase. It is a (naming) convention so that there is never confusion about case. DM: good

  // if (category.toLowerCase() === 'html') {
  //   return res.status(200).json(htmlData)
  // } else if (category.toLowerCase() === 'javascript') {
  //   return res.status(200).json(jsData)
  // } else if (category.toLowerCase() === 'css') {
  //   return res.status(200).json(cssData)
  // }
  // let data // avoid let
  if (category.toLowerCase() === 'html') {
    const data = await import('@/features/quiz-app-with-timer/server/html-data')
    return res.status(200).json(data.default)
  }
  if (category.toLowerCase() === 'javascript') {
    const data = await import('@/features/quiz-app-with-timer/server/js-data')
    return res.status(200).json(data.default)
  }
  if (category.toLowerCase() === 'css') {
    const data = await import('@/features/quiz-app-with-timer/server/css-data')
    return res.status(200).json(data.default)
  }

  //(done) DM: todoMM: because of  the return statements in the if/else statements above, you don't need an else here because execution will never get here if one of the above conditions was met. So, delete this else statement. it's more readable and there is not the big indent, which makes the code look more complicated and makes the Git diff harder to read, because Git diff shows that ALL the code below has changed (but its only because of the indent caused by else)
  // else {
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
        multiple_correct_answers: 'false', // DM: could cause a problem if true; maybe filter out questions with multiple_correct_answers === 'true'
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

     (done) DM: todoMM: uncomment the next line, put cursor at the end of that line, then press Enter, and see what Copilot suggests. For me, it was a good start, but there was at least one error (because the object values weren't the same as quiz.js). Console.log it and figure out how to change the values. Note: sometimes the Copilot Chat in the left panel will give a better answer than the suggestions that you see as-you-type in the editor. 
    */
    const transformedData = data.map((questionObj) => {
      console.log({ questionObj })

      /*
      DM: I agree that code is confusing but only because it is poorly named (and not correct). AI isn't perfect. The deconstructing of the question object is good because you can rename poorly named property names, but the names AI chose we're confusing.
      MM: DM: this is the code that Copilot suggested, found it a bit confusing. but i used mine below after resolving the provided exercises.
      DM: I deleted the suggested code so that it doesn't confuse us or AI.
      */

      // DM: I'll code part of the solution I'd use. You can use it as a starting point. I'll leave the rest to you.

      // DM: I'm going to paste here the object structure of the questionObj so that I can see it while I code the solution.
      /* DM: I removed some properties, leaving only the ones we need
      {
        id: 351,
        question: 'What is a composite key?',
        answers: {
          answer_a: 'its is a key that is defined as the primary key in another table',
          answer_b: 'it is a key that uniquely identifies a record in a database',
          answer_c: 'its is an optional key and allows null values',
          answer_d:
            'it is a primary key that consists of more than one field that uniquely identifies a record',
          answer_e: null,
          answer_f: null,
        },
        // multiple_correct_answers: 'false', // DM: could cause a problem if true; Should we filter out questions with multiple_correct_answers === 'true'?
        correct_answer: 'answer_a',
      } */
      // DM: note: I'll use deconstructing, so freshen your knowledge by asking AI chat "explain deconstructing an object while renaming properties with a brief example"
      // DM: note; I'll use shorthand property names, so freshen your knowledge by asking AI chat "explain shorthand property names with a brief example"
      // DM: first, for the fields that contain the correct values without transformation, I rename them to the property names needed in the returned JSON object
      // howtojs:: "deconstructing assignment" with renaming WHY: to rename properties/variables to make them more readable (data property names are often poorly named)
      const {
        id: questionId, // the correct property name is questionID so I rename "id" to that
        question, // same property name in both data sets
        // DM: renaming these for readability
        correct_answer: correctAnswerKey, // my new name correctAnswerKey describes the value better than correct_answer
        answers: answersLookup, // my new name answersLookup describes the value better than "answers"
      } = questionObj

      // DM: so, why did I go to so much trouble to rename these properties? Because: 1) helps you and I understand the code, 2) helps AI understand the code. It is also self-documenting as easy to read by us later or by someone else.

      /* DM: it's always good to paste the desired object structure to keep it front of mind (and helps AI)
         // this is what we want to return, because the front-end code is expecting this structure
         {
          "questionId": 1,
          "question": "What does HTML stand for?",
          "correctAnswer": "Hyper Text Markup Language",
          "answerChoices": [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
          ],
        }
      */

      // const correctAnswer = 'to be computed'
      // const answerChoices = 'to be computed'
      const correctAnswer = answersLookup[correctAnswerKey]
      console.log({ correctAnswer })

      // DM: todoMM: cool. move this to utils/array folder and import it in this file. This is a clearly a file that will be reused, so it should be in utils.
      function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5)
      }

      const answerChoices = Object.values(answersLookup).filter((answer) => answer !== null)
      shuffleArray(answerChoices)
      console.log({ answerChoices })

      console.log('questionObject:', { questionId, question, correctAnswer, answersLookup })
      // DM: example of how I quickly changed the below comment into a howtojs
      // howtojs:: using "shorthand property names" to create a new JSON object
      return {
        questionId, // shorthand property name
        question, // shorthand property name

        // temporary put local variables here so that you can see them in the returned JSON object in the browser: http:://localhost:3005/api/quiz3?category=sql
        // correctAnswerKey,
        // answersLookup: questionObj.correct_answers.map(
        //   (answer) => console.log({ answer }),
        //   answer === 'answer_a' ? 'true' : 'false'
        // ),
        // originalQuestionObj: questionObj,

        // setting to "to be computed" temporarily until you code a solution
        correctAnswer, // shorthand property name
        answerChoices, // shorthand property name
      }

      // DM: remember, upon a return statement, execution goes to the next array item or to the end of the map statement. Therefore, the code from here through the end of the [].map callback never runs.

      // DM: observable is not a good place to debug. You can debug here by putting console.logs and then looking at the terminal where you "npm run dev" OR you can add temporary properties to the returned JSON object and look at it in http:://localhost:3005/api/quiz3?category=sql
      // i tested it on observable: https://observablehq.com/d/81ab9293d17d3d5e
      // return {
      //   questionId: questionObj.id,
      //   question: questionObj.question,
      //   correctAnswer: questionObj.correct_answer,
      //   answers: Object.values(questionObj.correct_answers),
      // }
    })

    console.log({ transformedData })

    res.status(200).json(transformedData)
    // const datam = res.status(200).json(data)
  } catch (error) {
    console.error({ error, errorMessage: error.message })
    res.status(500).json({ error: 'Unable to fetch quiz data', message: error.message })
  }
  // }
}

// http://localhost:3005/api/quiz2?category=sql&otherParam=otherValue

/*
import axios from 'axios'
import isEmpty from 'lodash/isEmpty'

export default async (req, res) => {
  if (isEmpty(req.query)) {
    return res.status(400).send('Bad Request: No query parameters provided')
  }
  const { category } = req.query
  console.log('category:', { category })

  if (!category) {
    return res.status(400).send('Bad Request: category not specified')
  }

  const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${process.env.QUIZ_APP_WITH_TIMER_API_KEY}&category=${category}&limit=10`
  console.log('api-url:', { apiUrl })

  try {
    const response = await axios.get(apiUrl)
    console.log('response:', { response })

    const data = response.data
    const transformedData = data.map((questionObj) => {
      console.log({ questionObj })

      const {
        id: questionId,
        question,
        correct_answer: correctAnswerKey,
        answers: answersLookup,
      } = questionObj

      console.log({ questionId, question, correctAnswerKey, answersLookup })

      const correctAnswer = answersLookup[correctAnswerKey]
      const answerChoices = Object.values(answersLookup).filter(answer => answer !== null)

      return {
        questionId,
        question,
        correctAnswer,
        answerChoices,
      }
    })

    console.log({ transformedData })

    res.status(200).json(transformedData)
  } catch (error) {
    console.error({ error, errorMessage: error.message })
    res.status(500).json({ error: 'Unable to fetch quiz data', message: error.message })
  }
}
*/
