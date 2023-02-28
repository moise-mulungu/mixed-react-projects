//Exclusive "or" (xor) Logical Operator
function xor(a, b) {
  // const isTrue = a || b
  // const isFalse = a && b

  const booleanValues = a - b;

  // DM: todoMM: let's finish the exercises on this page before doing any more new code-wars exercises

  // DM: todoMM: good! now assign this logical expression: isTrue && !isFalse to a well-named variable - the goal is to make it so that I can read this more easily without having to google and refresh my memory of xor
  // DM: todoMM: what does "isTrue && !isFalse" mean? describe it in the variable name
  // DM: the names truthyValue and falsyValue don't help me understand the XOR logic
  //     Name these variables according to what they mean in the context of XOR logic
  //     honestly, right now, I don't remember what XOR is. A rule of clear programming: "don't make me think" - explain XOR logic to me with good variable names) - if you need to write long explanatory comments above each statement, that is OK, also. You can do that as a  first step, then we can pick a good variable name as the next step
  //     it's OK if you need to research about XOR in order to choose a good name
  // const truthyValue = isTrue && !isFalse
  // const falsyValue = !isTrue && isFalse

  // if (truthyValue) {
  //   return true
  //   // do the same for this logical expression
  // } else if (falsyValue) {
  //   return true
  // } else {
  //   return false
  // }
  // return (a || b) && !(a && b); this is the short version
  return booleanValues ? true : false;
}

console.log(xor(8, -4)) // false

// DM: that was a good start!, I showed the rest in ./imperative-to-declarative-transformation.js
// DM:: todoMM once you understand that, do similar for consonantCount()

//////////////////////////////////////////////////////////////////////
// Count consonants
function consonantCountWithLet(str) {
  // declare an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u']
  // declare a variable to hold the count
  let count = 0 // the same error as above: Assignment to constant variable.
  // loop through the string
  for (let i = 0; i < str.length; i++) {
    // if the current character is not a vowel, increment the count
    if (!vowels.includes(str[i])) {
      count++
    }
  }
  // return the count
  return count
}

console.log(consonantCountWithLet('ahddbsa'))

const myConsonantCount = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  // let count = 0
  const selectedConsonants = str.split('').filter((char) => !vowels.includes(char))

  // DM: todoMM: excellent! you;re almost there!
  // write the 'return' statement like this:
  // return selectedConsonants.length
  // and you can get rid of the variable count (and the 'let')
  // can you see how you don't even need a variable to hold the "return value"?
  // because the desired return value is right there in selectedConsonants.length
  // you just have to return that and you're done
  return selectedConsonants.length
}
console.log(myConsonantCount('stationary'))

// MM: todoMM: some test cases are failing, I think it's because of the case sensitivity and some special characters. // DM: todoMM: can you give me an example of which is failing?

//////////////////////////////////////////////////////////////////////
// Square(n) Sum
// description: Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
  return numbers.map((num) => num * num).reduce((acc, cur) => acc + cur, 0)
}
console.log(squareSum([1, 2, 2])) // 10
// DM: as an arrow function, concise, but it starts to feel slightly less readable, IMO
const squareSumAf = (numbers) => numbers.map((num) => num * num).reduce((acc, cur) => acc + cur, 0)
// DM: todoMM: assign the array method callbacks to variables with descriptive names
function squareSumPrev(numbers) {
  // const squares = numbers.your code goes here
  const squares = numbers.map((num) => num * num)
  // const sumOfSquares = squares.your code goes here
  const sumOfSquares = squares.reduce((acc, cur) => acc + cur, 0)
  // console.log('i am easy to debug by logging', { squares, sumOfSquares })
  return sumOfSquares
}
console.log(squareSumPrev([2, 2, 2]))

//////////////////////////////////////////////////////////////////////
// Determine offspring sex based on genes XX and XY chromosomes
// Description
// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

function chromosomeCheck(sperm) {
  // 1) describe the inputs and outputs
  // inputs: string: sperm sex chromosome: X (girl) || Y(boy)
  // output: "Congratulations! You're going to have a daughter|son."

  // 2) validate the input or convert if possible
  if (typeof sperm !== 'string') throw new Error('parameter to chromosomeCheck() must be a string')
  if (sperm.length !== 1) throw new Error('parameter to chromosomeCheck() must be one character')
  // 'sperm' is technically "dirty input" because it could be in either case
  const spermCleaned = sperm.toLowerCase() // convention: always normalize TO lowercase, not uppercase

  // 3) break down the the 'variable' elements of the solution into the most granular (smallest) parts; assign each to a well-named, descriptive variable (rename input if needed)

  // a better name - the given function used 'sperm' which wasn't clear
  const spermSexChromosome = spermCleaned
  const zygoteGender = spermSexChromosome === 'x' ? 'female' : 'male'
  const daughterOrSon = { female: 'daughter', male: 'son' }[zygoteGender]

  // 4) code the solution

  const message = `Congratulations! You're going to have a ${daughterOrSon}.`

  return message

  // 5) list and describe anything that is unclear in the challenge description
  //

  //  if (sperm === 'XY') {
  //   return "Congratulations! You're going to have a son."
  // } else {
  //   return "Congratulations! You're going to have a daughter."
  // }
}
// 6) test input variants
chromosomeCheck('Y') // "Congratulations! You're going to have a son."
chromosomeCheck('y') // "Congratulations! You're going to have a son."
chromosomeCheck('X') // "Congratulations! You're going to have a daughter."

//////////////////////////////////////////////////////////////////////
// Be Concise I - The Conditional (ternary) Operator
// Description
// You are given a function describeAge / describe_age that takes a parameter age (which will *always* be a *positive integer*) and does the following:

// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

function describeAge(age) {
  return `You're a(n) ${
    age <= 12
      ? 'kid'
      : age <= 17
      ? 'teenager'
      : age <= 64
      ? 'adult'
      : 'elderly'
  }`
  // MM: todoDM: (done) this solution has 168 characters, but the challenge is to limit to 137 characters. Any ideas on how to do that?
  // DM: age >= 13 can be removed, it has already been ruled out. can you see another condition that has been removed?
  //     warning: conciseness removes clarity. motto: "more lines makes for faster reading", so in a code review, I would NOT tell you to remove: age >= 13
  //     but for purposes of this exercise, it is a valid tactic, and your use of the "template literal" is a great way to remove repeated text.
  // DM: todoMM: write another solution for this exercise, following the new Rules and Steps that I put into ./readme.md. Once you do that, I can show you how to make it more readable (note: deeply nesting the conditional operator is discouraged because it's hard to read), and, once you've done step 3, is't possible we can make the solution even more concise.

  // return age <= 12
  //   ? "You're a(n) kid"
  //   : age >= 13 && age <= 17
  //   ? "You're a(n) teenager"
  //   : age >= 18 && age <= 64
  //   ? "You're a(n) adult"
  //   : "You're a(n) elderly"
  //   if (age <= 12) {
  //   if (age <= 12) {
  //     return "You're a(n) kid";
  //   } else if (age >= 13 && age <= 17) {
  //     return "You're a(n) teenager";
  //   } else if (age >= 18 && age <= 64) {
  //     return "You're a(n) adult";
  //   } else {
  //     return "You're a(n) elderly";
  //   }
}

// DM: todoMM: be sure to finish all the todoMMs in this file before doing any more codewars exercises. Let's get those concepts/approaches completed first (they will serve as patterns for future codewars exercises)

/* 


Moise, for 2023-02-28, focus on these two:

1) understanding how to add component examples to the structure I set up yesterday. Start with the repo homepage pages/index.jsx and follow the code. Get familiar with it and ask questions. It's really important that you be able to reproduce Joy of React examples in the repo in features/component-examples

2) training/code-wars-challenges/
* check out the new readme.md 
* finish all the todoMM in codewars.js before getting new codewars exercises. It's super-important that you get these techniques firmly mastered.



*/
