// always copy this into each new coding challenge file

// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
*/

// 1.3 some tests from the coding challenge: ex: myFunction('', '') // expected result
/*
assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully) */
/*
n/a 
*/

//  3. write tests (at the bottom of the file), then continue with step 4.

// function toCamelCase(string) {
//   /* 4. describe the inputs and outputs in detail: their types and possible values
//         note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

//         inputs:
//           parameter1: string|number|...; possible values:
//           parameter2: string|number|...; possible values:

//         output: string|number|...; possible values: */
//   /*
//     input: string of words delimited by '-' or '_'
// 		output: string in camel-case
//   */

//   // 5. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
//   const isString = typeof string === 'string'
//   if (!isString) throw new Error('parameter must be a string')
//   // note this will also throw an error if parameter is not a string

//   /* 6. state the solution in terms of WHAT (declarative), not HOW (imperative)
//   WHAT do you want to change in the input to get the output?
//   WHAT do you want to calculate based on the input? */
//   /*
//   Changes to the input string:
//   * remove delimiters: '-', '_'
//   * capitalize first letter of each word (do not change the capitalization of the first word)
//   */

//   /* 7. break down the the 'variable' elements of the solution into the most granular (smallest) parts by
//         assigning each part (string, boolean expression, etc.) to a well-named, descriptive variable.
//         * each logical expressions must be assigned to a variable.
// 				* the instructions often contain words that can be used in variable names. */

//   // DM: you don't need 'g' flag if you use String.split()
//   const delimitersRegExp = /[-_]/
//   // get array of words, omitting the delimiters
//   const words = string.split(delimitersRegExp)
//   console.log(words)

//   /* 8. use the named parts to create a readable solution. */

//   // capitalize each word. But, don't change the first word

//   // DM: todoMM: remove the first word from the array, saving it to a variable

//   // convert the first letter of each word to uppercase
//   const capitalizedWords = words.map((word) => {
//     /* this is not needed:
//     const firstLetter = word.charAt(0).toUpperCase()
//     if (word.includes(firstLetter)) {
//       return firstLetter + word.slice(1)
//     } */
//     // DM: todoMM; after you're done with the challenge, put this into a reusable function in src/utils/string/upperCaseFirst.js
//     return word.charAt(0).toUpperCase() + word.slice(1)
//   })

//   // DM: todoMM: restore the first word back to the array

//   const words = capitalizedWords.join('')
//   console.log(words)

//   /* 9. return the solution
//       always return a variable, or, use only variables in return statements
//       this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
//    */
//   return words
// }
// // 10. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// toCamelCase('abc-dash_underscore')
// toCamelCase('First-word-is-capitalized') // expected result
// // from the code-wars sample tests
// toCamelCase('') //  ''
// toCamelCase('the_stealth_warrior') // "theStealthWarrior"
// toCamelCase('The-Stealth-Warrior') // "TheStealthWarrior"
// toCamelCase('A-B-C') //  "ABC"

/* 11. Review the code for conciseness and readability: clear, descriptive variable names  */

// const regExp = /-|_/
// string.split(regExp)
// 'the_stealth_warrior'.split(/[-_]/)

/* 12. Final step: copy the final solution here, then remove all comments  */

function toCamelCase(str) {
  // describe the inputs and outputs in detail: their types and possible values
  // inputs:
  //   parameter: string...; possible values: string of words delimited by '-' or '_' (no spaces)
  // output: string...; possible values: string in camel-case by removing delimiters and capitalizing first letter of each word

  // validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isString = typeof str === 'string'
  if (!isString) throw new Error('parameter must be a string')

  // remove delimiters: '-', '_'
  // DM: use 'g' flag when String.replace() but with split you don't need it
  const removedUnderscoreAndDash = str.split(/[-_]/g)
  // console.log(removedUnderscoreAndDash)

  // declare variable to hold the string with the first letter of each word capitalized
  let capitalizedFirstLetterAfterDashAndUnderscore = ''

  // loop through the array of words and capitalize the first letter of each word
  for (let i = 0; i < removedUnderscoreAndDash.length; i++) {
    // DM: you don't need template string here
    const nextWordAfterUnderscoreAndDash = `${removedUnderscoreAndDash[i]}`
    // capitalize first letter of each word (do not change the capitalization of the first word)
    const firstLetter = nextWordAfterUnderscoreAndDash.charAt(0).toUpperCase()

    // get the rest of the word
    const restOfWord = nextWordAfterUnderscoreAndDash.slice(1)
    capitalizedFirstLetterAfterDashAndUnderscore +=
      i === 0 ? nextWordAfterUnderscoreAndDash : firstLetter + restOfWord
  }

  return capitalizedFirstLetterAfterDashAndUnderscore
  // execution will not reach the next line, because the return statement (a "control flow" statement) redirected execution back to the calling statement (i.e., below where you call the function multiple time for the tests)
  console.log(capitalizedFirstLetterAfterDashAndUnderscore)
}

toCamelCase('the-stealth_warrior')
toCamelCase('the_stealth_warrior')
toCamelCase('abc-dash_underscore')
toCamelCase('First-word-is-capitalized')
toCamelCase('')
toCamelCase('The-Stealth-Warrior')
toCamelCase('A-B-C')

// DM: todoDM: think on how much time new programmers need to practice the imperative ('let') approach, to get a firm understanding of that approach. before or simultaneous to learning the declarative approach.

/* 
DM: Moise, this was a good learning experience, always congratulate yourself for sticking with it until you figured it out. I think you understand more deeply now the concept of looping through an array and applying logic based on the index number (i) 
   Here is a declarative pattern that is very similar, try copy your code to below and 
*/
function toCamelCase2(string) {
  const delimitersRegExp = /[-_]/
  string
    .split(delimitersRegExp) // this comment is so prettier will choose multi-line formatting
    .map((word, i) => {
      console.log({ word, i })
      // try you above solution here
      return /*  */
    })
    .join('')
}
toCamelCase2('word1-word2_word3')
