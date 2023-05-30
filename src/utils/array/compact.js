const { uniq } = require('lodash')

function sortLexicographicalWords(firstArray, secondArray) {
  const itemsOfArray2 = secondArray.map((item) => {
    const itemsOfArray1 = firstArray.map((subItem) => {
      if (item.includes(subItem)) {
        return subItem
      }
    })
    return itemsOfArray1.filter((item) => item !== undefined)
  })
  const flattenMapSecondArray = itemsOfArray2.flat()
  const uniqFlattenMapSecondArray = uniq(flattenMapSecondArray)
  const sortedUniqFlattenMapSecondArray = uniqFlattenMapSecondArray.sort()
  return sortedUniqFlattenMapSecondArray
}

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
