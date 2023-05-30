const { uniq } = require('lodash')

// DM: I'm glad you tried this. Good work on both. You will learn a lot from these.
function sortLexicographicalWords(firstArray, secondArray) {
  // DM: todoMM: naming: map is a verb, not a noun. In general, often you can add 'ed' to a verb to make it into an adjective. Ex: 'mapped' instead of 'map' because 'mapped' is an adjective describing the noun 'secondArray'. However, 'mapped' doesn't tell me much as a reader, since I can already see from the code that you used array.map(). So, taking substringsOfArray2 from the other file.

  // filter, some, includes
  /* 
    Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of 
    * the strings of a1 which are substrings of strings of a2
    * unique not mentioned
return a sorted array of strings that consists of the strings in the first array that are substrings of the strings in the second array
    KEY INFO:
    return value is a subset of firstArray 
    * subset implies array.filter()
    filter: is substring of at least one string in secondArray 
    * at least one implies array.find -OR- Array.some 
    * is substring implies String.includes
 */

  return firstArray
    .filter((substring) => {
      return secondArray.some((string) => string.includes(substring)) // Array.some() returns a Boolean
    })
    .sort()
  // also works:
  return firstArray
    .filter((substring) => {
      return secondArray.find((string) => string.includes(substring))
      /*
        'harp' || undefined || '' || '0' || 0
        Boolean('harp') === true // string to true
        Boolean(undefined) === false // undefined to false
        if (undefined) console.log('this will never be logged')
        if ('harp') console.log('this WILL be logged')
      */
    })
    .sort()
  Boolean('harp') // converts 'harp' to Boolean "explicitly"; "explicit conversion"
  'harp' === true // false
  // THE NEXT LINE I WAS WRONG DURING OUR LESSON:
  'harp' == true //  true - "==" "implicitly" coerces 'harp' to Boolean; "implicit conversion"
  // THIS IS CORRECT: (I got "falsy" and "==" mixed up during our lesson, see the 'type coercion' vocab entry for more clarification). JAVASCRIPT is WEIRD. This is why we never use "==" and always use "==="; why we prefer ?? over ||
  Boolean('harp') == true // true
}
// console.log({itemsOfArray1})
// I did not resolve this challenge as it seems confusing for me. I copied the solution from the solution from other resources where they use lodash.

sortLexicographicalWords(
  ['arp', 'live', 'strong'],
  ['lively', 'alive', 'harp', 'sharp', 'armstrong']
) // ['arp', 'live', 'strong']
sortLexicographicalWords(
  ['tarp', 'mice', 'bull'],
  ['lively', 'alive', 'harp', 'sharp', 'armstrong']
) // []
sortLexicographicalWords(
  ['live', 'strong', 'arp'],
  ['lively', 'alive', 'harp', 'sharp', 'armstrong']
) // ['arp', 'live', 'strong']
sortLexicographicalWords(
  ['cod', 'code', 'wars', 'ewar', 'ar'],
  ['lively', 'alive', 'harp', 'sharp', 'armstrong']
) // ['ar']
sortLexicographicalWords(
  ['cod', 'code', 'wars', 'ewar', 'ar'],
  ['cod', 'code', 'wars', 'ewar', 'ar']
) // ['ar', 'cod', 'code', 'ewar', 'wars']
