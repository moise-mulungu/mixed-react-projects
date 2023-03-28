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

function toCamelCase(str) {
  // validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isString = typeof str === 'string'
  if (!isString) throw new Error('parameter must be a string')

  // remove delimiters: '-', '_'
  const removedUnderscoreAndDash = str.split(/[-_]/)

  // declare variable to hold the string with the first letter of each word capitalized
  let capitalizedFirstLetterAfterDashAndUnderscore = ''

  // loop through the array of words and capitalize the first letter of each word
  for (let i = 0; i < removedUnderscoreAndDash.length; i++) {
    const nextWordAfterUnderscoreAndDash = removedUnderscoreAndDash[i] + ''

    // capitalize first letter of each word (do not change the capitalization of the first word)
    const firstLetter = nextWordAfterUnderscoreAndDash.charAt(0).toUpperCase()

    // get the rest of the word
    const restOfWord = nextWordAfterUnderscoreAndDash.slice(1)
    capitalizedFirstLetterAfterDashAndUnderscore +=
      i === 0 ? nextWordAfterUnderscoreAndDash : firstLetter + restOfWord
  }
  return capitalizedFirstLetterAfterDashAndUnderscore
}

toCamelCase('the-stealth_warrior')
toCamelCase('the_stealth_warrior')
toCamelCase('abc-dash_underscore')
toCamelCase('First-word-is-capitalized')
toCamelCase('')
toCamelCase('The-Stealth-Warrior')
toCamelCase('A-B-C')

// DM: todoDM: think on how much time new programmers need to practice the imperative ('let') approach, to get a firm understanding of that approach. before or simultaneous to learning the declarative approach.

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
