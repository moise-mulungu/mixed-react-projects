function toCamelCase(str) {
  // describe the inputs and outputs in detail: their types and possible values
  // inputs:
  //   parameter: string...; possible values: string of words delimited by '-' or '_' (no spaces)
  // output: string...; possible values: string in camel-case by removing delimiters and capitalizing first letter of each word

  // validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isString = typeof str === 'string'
  if (!isString) throw new Error('parameter must be a string')

  // remove delimiters: '-', '_'
  const removedUnderscoreAndDash = str.split(/[-_]/g)
  // console.log(removedUnderscoreAndDash)

  // declare variable to hold the string with the first letter of each word capitalized
  let capitalizedFirstLetterAfterDashAndUnderscore = ''

  // loop through the array of words and capitalize the first letter of each word
  for (let i = 0; i < removedUnderscoreAndDash.length; i++) {
    const nextWordAfterUnderscoreAndDash = `${removedUnderscoreAndDash[i]}`
    // capitalize first letter of each word (do not change the capitalization of the first word)
    const firstLetter = nextWordAfterUnderscoreAndDash.charAt(0).toUpperCase()

    // get the rest of the word
    const restOfWord = nextWordAfterUnderscoreAndDash.slice(1)
    capitalizedFirstLetterAfterDashAndUnderscore +=
      i === 0 ? nextWordAfterUnderscoreAndDash : firstLetter + restOfWord
  }

  return capitalizedFirstLetterAfterDashAndUnderscore
  console.log(capitalizedFirstLetterAfterDashAndUnderscore)
}

toCamelCase('the-stealth_warrior')
toCamelCase('the_stealth_warrior')
toCamelCase('abc-dash_underscore')
toCamelCase('First-word-is-capitalized')
toCamelCase('')
toCamelCase('The-Stealth-Warrior')
toCamelCase('A-B-C')
