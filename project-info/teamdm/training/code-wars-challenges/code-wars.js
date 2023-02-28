//////////////////////////////////////////////////////////////////////
// Exclusive "or" (xor) Logical Operator
//////////////////////////////////////////////////////////////////////
function xor(a, b) {
  const booleanValues = a - b
  // DM: this doesn't return false, console.log 'booleanValues' to know why

  // DM: todoMM: let's start this one over. I want you to write this in a way that teaches me
  //             what xor is. Pretend I don't know. Truly, I didn't know until I looked it up on wikipedia.
  //             break this down into small parts, using wellNamed variables so that I can understand xor by the variable names. write out the concepts of xor in detail first, each small part, it will help you plan your code, and will help come up with variable names. always break hard things down into small parts.
  //             hint: you can `Boolean(a)` or `!!a` (double negation operator) to find out if a and b are truthy or falsy
  //             also, if you attempt a solution but it doesn't work, always leave a note telling me where you got blocked, and what you were thinking so far. This is important practice because you'll do this during an interview when you get blocked, the interviewer will give hints. ALso it helps us collaborate.
  return booleanValues ? true : false
}

console.log(xor(8, -4)) // false

//////////////////////////////////////////////////////////////////////
// Count consonants
//////////////////////////////////////////////////////////////////////
const myConsonantCount = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const selectedConsonants = str.split('').filter((char) => !vowels.includes(char))
  /* DM: todoMM: good job! Now use array.reduce to count instead of length
                 my mentor also insists on this ... array.length works
                 but reduce explicitly communicates that your are adding up a total            
  */
  // const countOfConsonants = selectedConsonants.reduce/* your code here */
  // return countOfConsonants
  return selectedConsonants.length
}
console.log(myConsonantCount('stationary'))

//////////////////////////////////////////////////////////////////////
// Square(n) Sum
//////////////////////////////////////////////////////////////////////
// description: Complete the square sum function so that it squares each number passed into it and then sums the results together.
// DM: good!
function squareSum(numbers) {
  const squares = numbers.map((num) => num * num)
  const sumOfSquares = squares.reduce((acc, cur) => acc + cur, 0)
  // console.log('i am easy to debug by logging', { squares, sumOfSquares })
  return sumOfSquares
}
squareSum([2, 2, 2]) // 12

// DM: offspring challenge moved to ./readme.md

//////////////////////////////////////////////////////////////////////
// Be Concise I - The Conditional (ternary) Operator
//////////////////////////////////////////////////////////////////////
// Description
// You are given a function describeAge / describe_age that takes a parameter age (which will *always* be a *positive integer*) and does the following:

// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

function describeAge(age) {
  return `You're a(n) ${
    age <= 12 ? 'kid' : age <= 17 ? 'teenager' : age <= 64 ? 'adult' : 'elderly'
  }`
  // MM: todoDM: (done) this solution has 168 characters, but the challenge is to limit to 137 characters. Any ideas on how to do that?
  // DM: age >= 13 can be removed, it has already been ruled out. can you see another condition that has been removed?
  //     warning: conciseness removes clarity. motto: "more lines makes for faster reading", so in a code review, I would NOT tell you to remove: age >= 13
  //     but for purposes of this exercise, it is a valid tactic, and your use of the "template literal" is a great way to remove repeated text.
}
// DM: todoMM: write another solution for this exercise, following the new Rules and Steps that I put into ./readme.md. Once you do that, I can show you how to make it more readable (note: deeply nesting the conditional operator is discouraged because it's hard to read), and, once you've done step 3, is't possible we can make the solution even more concise.
//             write tests that covers all the logic (i.e., all the age groups)

// DM: todoMM: be sure to finish all the todoMMs in this file before doing any more codewars exercises. Let's get those concepts/approaches completed first (they will serve as patterns for future codewars exercises)
