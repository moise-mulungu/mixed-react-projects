const { uniq } = require('lodash')

// DM: I'm glad you tried this. Good work on both. You will learn a lot from these.
function sortLexicographicalWords(firstArray, secondArray) {
  // DM: todoMM: naming: map is a verb, not a noun. In general, often you can add 'ed' to a verb to make it into an adjective. Ex: 'mapped' instead of 'map' because 'mapped' is an adjective describing the noun 'secondArray'. However, 'mapped' doesn't tell me much as a reader, since I can already see from the code that you used array.map(). So, taking substringsOfArray2 from the other file.
  const substringsOfArray2 = secondArray.map((word) => {
    // DM: make a rule for yourself to never use verbs (like 'map') when describing data, which are nouns. Think of verbs as for functions (which do some action)
    const substrings = firstArray.map((subWord) => {
      // DM: todoMM: 'subWord' is a well-formed name, but substring would be more precise
      if (word.includes(subWord)) {
        return subWord
      }
    })
    // DM: todoMM: good! Put this solution in utils/array/compact.js adding " && !== null" to the logical expression. BTW, you should never use the following in everyday code, but in a utils library function, it is ok: != (only one "=") matches null AND undefined. Add a note that lodash offers the equivalent compaq function.
    return substrings.filter((word) => word !== undefined)
    // DM: todoMM: add to javascript-vocabulary "strict equality (===) VS abstract equality (==)". See: https://www.pluralsight.com/blog/software-development/vs-javascript-abstract-vs-strict-equality
  })
  const flattenMapSecondArray = substringsOfArray2.flat()
  const uniqFlattenMapSecondArray = uniq(flattenMapSecondArray)
  const sortedUniqFlattenMapSecondArray = uniqFlattenMapSecondArray.sort()
  return sortedUniqFlattenMapSecondArray
}

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

// DM: todoMM: only after you get this working with the above suggestions, try using array.find() in place of the inner array.map() above. This will make it more efficient, as the array.find() function will stop scanning the array if it finds what you specify. array.find() returns undefined if it does not find anything. With array.find(), you wouldn't need array.flat(), since array.find() returns a single item (or undefined).
