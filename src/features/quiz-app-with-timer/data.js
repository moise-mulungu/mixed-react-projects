// creating an array and passing the number, questions, options, and answers
const data = [
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
  },
  {
    questionId: 2,
    question: 'What does CSS stand for?',
    correctAnswer: 'Cascading Style Sheet',
    answerChoices: [
      'Common Style Sheet',
      'Colorful Style Sheet',
      'Computer Style Sheet',
      'Cascading Style Sheet',
    ],
  },
  {
    questionId: 3,
    question: 'What does PHP stand for?',
    correctAnswer: 'Hypertext Preprocessor',
    answerChoices: [
      'Hypertext Preprocessor',
      'Hypertext Programming',
      'Hypertext Preprogramming',
      'Hometext Preprocessor',
    ],
  },
  {
    questionId: 4,
    question: 'What does SQL stand for?',
    correctAnswer: 'Structured Query Language',
    answerChoices: [
      'Stylish Question Language',
      'Stylesheet Query Language',
      'Statement Question Language',
      'Structured Query Language',
    ],
  },
  {
    questionId: 5,
    question: 'What does XML stand for?',
    correctAnswer: 'eXtensible Markup Language',
    answerChoices: [
      'eXtensible Markup Language',
      'eXecutable Multiple Language',
      'eXTra Multi-Program Language',
      'eXamine Multiple Language',
    ],
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the questionId value serialize like 1,2,3,5,6,7,8,9.....

  {
    questionId: 6,
    question:
      'What the attribute that is used to define the relationship between a document and an external resource?',
    correctAnswer: 'rel',
    answerChoices: ['src', 'href', 'rel', 'link'],
  },
  {
    questionId: 7,
    question: 'What is the correct HTML for adding a background color?',
    correctAnswer: '<body style="background-color:yellow;">',
    answerChoices: [
      '<body bg="yellow">',
      '<body style="background-color:yellow;">',
      '<background>yellow</background>',
      '<body>yellow</body>',
    ],
  },
  {
    questionId: 8,
    question: 'What is an event in JavaScript?',
    correctAnswer: 'An event is a signal that something has happened',
    answerChoices: [
      'An event is a signal that something has happened',
      'An event is a signal that something will happen',
      'An event is a signal that something is happening',
      'An event is a signal that something is going to happen',
    ],
  },
  {
    questionId: 9,
    question: 'Which operator is used to assign a value to a variable?',
    correctAnswer: '=',
    answerChoices: ['*', '-', '+', '='],
  },
  {
    questionId: 10,
    question: 'How do you find the minimum of x and y using JavaScript?',
    correctAnswer: 'Math.min(x,y)',
    answerChoices: ['min(x,y)', 'Math.min(x,y)', 'Math.min(xy)', 'min(xy)'],
  },
]

export default data
