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

///////////////////////////////////////////////////////////////////////////////////////////////////
// Strings Mix https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript
///////////////////////////////////////////////////////////////////////////////////////////////////
/* 

// MM: toDM: I found that this challenge is 5kyu(code-wars difficulty levels). I started with 8kyu, and now I am at 7kyu. 
Description: 

In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore

*/
// function alphanumeric(string) {
function isAlphanumeric(stringDirty) {
  /*   
  1) describe the inputs and outputs, their types and possible values
     inputs: 
       string: string|number; values: any string   
     output:
       boolean
  */

  // 2) validate the input or convert if possible
  // defensive coding
  const string = typeof stringDirty === 'number' ? Number.parseInt(stringDirty) : stringDirty
  if (typeof string !== 'string')
    throw new Error('alphanumeric() requires an argument of type string')

  // 3) break down the the 'variable' elements of the solution into the most granular (smallest) parts; assign each to a well-named, descriptive variable (rename input if needed)
  // At least one character ("" is not valid)
  const stringLength = string.length
  // Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9, No whitespaces / underscore
  const allowedCharactersRegExp = /^[a-zA-Z0-9]+$/

  // 4) code the solution (logical expressions)
  const emptyString = stringLength < 1
  const containsBadCharacters = !allowedCharactersRegExp.test(string)

  // 5) return the solution
  // always return a variable, or, use only variables in return statements (all logical expressions must be assigned to a variable)
  // This makes it easy to debug by logging
  // console.log('i am easy to debug by logging', { var1, var2 })
  if (emptyString || containsBadCharacters) return false
  return true

  // 6) list and describe anything that is unclear in the challenge description
  // none
}
// 7) test input variants
isAlphanumeric('') // false
isAlphanumeric(123) // throw error
isAlphanumeric('123') // true
isAlphanumeric('abc') // true
isAlphanumeric('abc123') // true
isAlphanumeric('abc 123') // false
isAlphanumeric('abc_123') // false
