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

  //   {
  //   questionId: 6,
  //   question: "Your Question is Here",
  //   correctAnswer: "Correct answer of the question is here",
  //   answerChoices: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
]

export default data
