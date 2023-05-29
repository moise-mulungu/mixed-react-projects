const { uniq } = require('lodash')

function sortLexicographicalWords(firstArray, secondArray) {
  const mapSecondArray = secondArray.map((word) => {
    const mapFirstArray = firstArray.map((subWord) => {
      if (word.includes(subWord)) {
        return subWord
      }
    })
    return mapFirstArray.filter((word) => word !== undefined)
  })
  const flattenMapSecondArray = mapSecondArray.flat()
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
) // ['ar', 'cod', 'code', 'ewar', 'wars']
sortLexicographicalWords(
  ['cod', 'code', 'wars', 'ewar', 'ar'],
  ['cod', 'code', 'wars', 'ewar', 'ar']
) // ['ar', 'cod', 'code', 'ewar', 'wars']
