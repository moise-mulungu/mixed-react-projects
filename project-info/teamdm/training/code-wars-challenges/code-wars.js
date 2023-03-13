//////////////////////////////////////////////////////////////////////
// Exclusive "or" (xor) Logical Operator
//////////////////////////////////////////////////////////////////////
// AKA "exclusive or"
function exclusive0r(a, b) {
  // describe the inputs and outputs
  // inputs: a, b: integers, values: any number
  // outputs: boolean, values: true, false
  // defensive programming: check for invalid inputs
  // if a and b are not integers, throw an error
  const isAInteger = Number.isInteger(a)
  // DM: todoMM: great, go ahead and evaluate both variables in the same IF statement, for brevity
  if (!isAInteger) {
    throw new Error('a is not an integer')
  }

  const isBInteger = Number.isInteger(b)
  if (!isBInteger) {
    throw new Error('b is not an integer')
  }

  // DM: nice var name
  const diffAB = isAInteger - isBInteger
  if (diffAB === 0) {
    throw new Error('a and b should not be the same value')
  }

  // DM: todoMM: hey, here's something you can do for me, since I don't really know: google the proper/conventional/best way to write error messages. For example, should the message be stated as a positive? "a should be ..." OR "a is not ...", see if you can find a list of "standards", "best practices"
  // MM: I searched for "error message best practices" and did not find specific details of list of standards

  // describe the steps to solve the problem
  // 1. if a and b are both true, return false
  // DM: todoMM: write a new variable noting the readme rule: "assign all logical expressions to a well-named variable" - this will help understand and self-document what
  // DM: you already know "isAInteger && isBInteger)" is true, because you threw errors if not. When you throw an error, execution stops and execution starts wherever in your code you 'catch' the error.
  if (isAInteger && isBInteger) {
    return false
  } else if (!isAInteger && !isBInteger) {
    return false
  } else {
    return true
  }
  // DM: todoMM: try to do the above IF statement using fewer characters, but still very readable. ex: in JS if the if statement clause is only one line, you can omit the {} and: if (booleanVar) return true.

  // MM: ???DM: I am doubting with this approach, can you help?
  // 2. if a and b are both false, return false
  // 3. if a and b are not both true or false, return true
  // DM: try: const isATruthy = Boolean(a) // then continue from there

  // DM: todoMM: (in project-info/team-dm/) make the file: tech/javascript/try-catch/try-catch-exercises.js look up try-catch on MDN and put a few examples (each example should be inside a function, I'll tell you why later)

  // break the problem down into small parts
  // declare a variable to hold the boolean values

  // const booleanValues = a - b
  // DM: this doesn't return false, console.log 'booleanValues' to know why

  // DM: todoMM: let's start this one over. I want you to write this in a way that teaches me
  //             what xor is. Pretend I don't know. Truly, I didn't know until I looked it up on wikipedia.
  //             break this down into small parts, using wellNamed variables so that I can understand xor by the variable names. write out the concepts of xor in detail first, each small part, it will help you plan your code, and will help come up with variable names. always break hard things down into small parts.
  //             hint: you can `Boolean(a)` or `!!a` (double negation operator) to find out if a and b are truthy or falsy
  //             also, if you attempt a solution but it doesn't work, always leave a note telling me where you got blocked, and what you were thinking so far. This is important practice because you'll do this during an interview when you get blocked, the interviewer will give hints. ALso it helps us collaborate.
  // return booleanValues ? true : false
}

console.log(exclusive0r(10, 0))

//////////////////////////////////////////////////////////////////////
// Count consonants
//////////////////////////////////////////////////////////////////////
const myConsonantCount = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  // DM: todoMM: /^[a-zA-Z0-9]+$/ is a 'regular expression' (regexp); read MDN site on regular expressions, and the methods you can use on them, such as .test()

  // most naive: /[bcdfg...BC...]/

  // input: string: any characters
  // think of ways to get from input to output
  // Moie7@
  // identify the consonants
  //   write a regex? no, naive
  //   replace non-consonants with '' , you get Moie.split.reduce
  //   Moie7@ to Moie, break it down
  //     tools: /[a-zA-Z]/
  //     tools: const vowels = ['a', 'e', 'i', 'o', 'u']
  //     tools: string.toUpperCase()
  //     tools: string.replace(//, ''); string.replace('', '')
  //     tools: regex: \w alphanumeric and _
  //     tools: regex: \W not \w
  //     tools: MDN String.methods*
  // output: number, count of consonants

  const containsAllCharacters = /^[a-zA-Z0-9]+$@/
  const charactersOfVowels = vowels.concat(containsAllCharacters.toString().split(''))
  console.log(charactersOfVowels)

  // your original solution was good, just get the total number via array.reduce()
  const selectedConsonants = str.split('').filter((char) => !charactersOfVowels.includes(char))
  /* DM: todoMM: good job! Now use array.reduce to count instead of length
                 my mentor also insists on this ... array.length works
                 but reduce explicitly communicates that your are adding up a total            
  */
  /* your code here */
  const countOfConsonants = selectedConsonants.reduce((acc, cur) => acc + cur)

  return countOfConsonants
}
console.log(myConsonantCount('moie@'))
// the output is 4 after running node, but it should be 2. why?

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

//////////////////////////////////////////////////////////////////////
// remove duplicate words
//////////////////////////////////////////////////////////////////////
/* 
//  https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
Example:
Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
Output:
'alpha beta gamma delta'
assert.strictEqual(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');
  
*/

// the aim is to remove from a string but I want to overthink of an array which may contains string or integer.
// DM: todoMM: check out the readme.md and be sure to always use the exact wording of the steps in each of your code solutions. YOu'll see how this helps. I've copied them below.
/* 
  // 1. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.
  // 2. validate the input (convert types or transform if needed) (*defensive coding*)

3. break down the the 'variable' elements of the solution into the most granular (smallest) parts
   * assign each part (string, boolean expression, etc.) to a well-named, descriptive variable
4. use the named parts to create a readable solution
5. return the solution
6. list and describe anything that is unclear in the challenge description
   * these would be the questions you'd be expected to ask in a interview situation
   * practice reading the challenge description carefully
* note: via these tasks, you are essentially repeating the key elements of the challenge description in the code
7. write test(s) that cover the input variants */
function removeDuplicateWords(stringOfWords) {
  // your perfect code...

  // 1. describe the inputs and outputs in detail: their types and possible values
  // inputs: a string of words, type: string
  // outputs: a string of unique words, type: string
  // note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.
  //       in this case, the order of the words is not changed

  // 2. validate the input (convert types or transform if needed) (*defensive coding*)
  const isString = typeof stringOfWords === 'string'
  if (!isString) {
    throw new Error('the parameter passed must be a string')
  }
  // 3. break down the the 'variable' elements of the solution into the most granular (smallest) parts
  //    assign each part (string, boolean expression, etc.) to a well-named, descriptive variable

  // DM: todoDM: update steps with anything helpful in the below comment
  /*   
    DM: I can tell you know what you want to do, but practice thinking/writing in a "declarative" way, rather than "imperative" way.
    
    When commenting the code, use descriptive regular English, not describing what the code does (imperative), but the "pieces of the puzzle" and how they should be put together (declarative).
    
    Really, the first step is to restate the instructions, but break it down into the smallest parts. 
    
    The instructions:
    "Your task is to remove all duplicate words from a string, leaving only single (first) words entries"
    * start with the the noun(s), which are the individual pieces your logic will operate on (each will be assigned to a variable)
    * end with the verb(s), which describe the logic (what you want to DO)

    "Your task is to 'remove' all 'duplicate words' from a 'string', leaving only 'single (first) words entries'"
    nouns: 
      "duplicate words" 
        note: best to name your variables after the words used in the instructions, ex: duplicateWords
        note: notice that "duplicate words" is plural, this implies a list (array)
              this is a big hint, right there in the instructions
              look at MDN string methods. how can you get a list (array) of words from a string of words
      "string" 
        note: you already have this as the parameter, but good to list it
      "single (first) words entries" 
        note: this is the answer you want to return
        note: instructions were not written by a native speaker of English
        note: good var name: uniqueWordsString
    verbs: 
      "remove" (all duplicate words)

    Once you have the parts taken directly from the instructions, think about any intermediate parts/variables that you'll need to get the solution. For example, before you can get duplicateWords, you need ALL the words (plural!), right? 

    DM: todoMM: ok, based on the above, try  again
  */

  // 3. break down the the 'variable' elements of the solution into the most granular (smallest) parts
  //    assign each part (string, boolean expression, etc.) to a well-named, descriptive variable

  // create a variable that will contain the single first entries
  let singleItems = []

  // 4. use the named parts to create a readable solution

  // loop through the array // DM: this is imperative, practice not thinking this way by describing what to do to the puzzle pieces
  // also, remember one of the rules: don't use 'let'
  for (let i = 0; i < stringOfWords.length; i++) {
    // I want to filter array[i] from the array and add it to the singleItems, but I am not sure!
    const filteredArray = stringOfWords.filter((item, index) =>
      stringOfWords.indexOf(item === index)
    )
    // add the filtered items to singleItems
    singleItems.push(filteredArray)
  }

  // 5. return the solution
  return singleItems

  // 6. list and describe anything that is unclear in the challenge description
  //  * these would be the questions you'd be expected to ask in a interview situation
  //  * practice reading the challenge description carefully
}

// 7. write test(s) that cover the input variants */
removeDuplicateWords('any played music in the any text of the music') // put expected result here
// DM: carefule: integers wasn't in the instructions
// removeDuplicateWords[(1, 4, 6, 2, 7, 2, 5, 1, 3, 8)]
removeDuplicateWords(
  'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
) //  'alpha beta gamma delta'
