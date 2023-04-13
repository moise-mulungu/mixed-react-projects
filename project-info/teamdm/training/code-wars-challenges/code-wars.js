/* 

//////////////////////////////////////////////////////////////////////
// Square(n) Sum
//////////////////////////////////////////////////////////////////////
// description: Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
  const squares = numbers.map((num) => num * num)
  const sumOfSquares = squares.reduce((acc, cur) => acc + cur, 0)
  // console.log('i am easy to debug by logging', { squares, sumOfSquares })
  return sumOfSquares
}
squareSum([2, 2, 2]) // 12

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
  // return `You're a(n) ${
  //   age <= 12 ? 'kid' : age <= 17 ? 'teenager' : age <= 64 ? 'adult' : 'elderly'
  // }`
  // 1. describe the inputs and outputs, their types and possible values
  //    inputs:
  //      age: number; values: any number
  //    outputs:
  //      string: string; values: 'You're a(n) kid', 'You're a(n) teenager', 'You're a(n) adult', 'You're a(n) elderly'
  // 2. describe the steps to solve the problem
  //    1. if age is less than or equal to 12, return 'You're a(n) kid'
  //    2. if age is less than or equal to 17, return 'You're a(n) teenager'
  //    3. if age is less than or equal to 64, return 'You're a(n) adult'
  //    4. if age is greater than 64, return 'You're a(n) elderly'

  // 3. defensive programming: check for invalid inputs
  //    if age is not a number, throw an error
  const isNumber = typeof age === 'number'
  const isValidAge = age >= 0
  if (!isNumber || !isValidAge) {
    // DM: super! isValidNumber - 'valid' would describe the 2nd part of the
    //     but, one of the rules is to assign each logical expression to a variable, like so:
    // isNumber = typeof age === 'number'
    // isValidAge = age >= 0
    // if (!isNumber || !isValidAge) {...}
    //  try that. Pro tip: start collecting a list of useful works for vairable names. I have my own list. Helps think of good variable names quickly.
    throw new Error('age must be a number greater than or equal to 0')
  }

  // break the problem down into small parts

  // 1. if age is less than or equal to 12, return 'You're a(n) kid'
  // 2. if age is less than or equal to 17, return 'You're a(n) teenager'
  // 3. if age is less than or equal to 64, return 'You're a(n) adult'
  // 4. if age is greater than 64, return 'You're a(n) elderly'
  // do the 'naive' solution first
  //   what's wrong with the naive solution? readability? no, it's readable if you know JS
  const ageCategory =
    age <= 12
      ? 'kid' //
      : age <= 17
      ? 'teenager'
      : age <= 64
      ? 'adult'
      : 'elderly'

  const ageCategoryToIndefiniteArticle = { kid: 'a', teenager: 'a', adult: 'an', elderly: 'an' }
  const indefiniteArticle = ageCategoryToIndefiniteArticle[ageCategory]
  const message = `You're ${indefiniteArticle} ${ageCategory}`
  // console.log({ each var here })
  return message
}

console.log(describeAge(55))
describeAge(12) // "You're a(n) kid"
describeAge(13) // "You're a(n) teenager"
describeAge(17) // "You're a(n) teenager"
describeAge(18) // "You're a(n) adult"
describeAge(64) // "You're a(n) adult"
describeAge(65) // "You're a(n) elderly"
describeAge(100) // "You're a(n) elderly"
describeAge('teen') // Error: age must be a number greater than or equal to 0

// DM: great! it works! Once you have done the suggestions above, try another code-wars challenge, using the steps and rules. BTW, work on code-wars challenges tagged 'string', 'regexp', logic, etc. rather than mathematics. WebDev and even back-end work is more about text processing and logic, rarely hard math.

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

/* 

!!!!!!!!!!!

All new code-wars challenges go in an individual file

!!!!!!!!!!!

*/
