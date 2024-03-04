// node scratch.js

function splitIntoConsecutiveCharsGroups(s) {
  return s.match(/(.)\1*/g)
}
const splitResult = splitIntoConsecutiveCharsGroups('abbbcccdddefffgghiiiz')

console.log('splitIntoConsecutiveCharsGroups', splitResult)
/* 
[
  'a',   'bbb', 'ccc',
  'ddd', 'e',   'fff',
  'gg',  'h',   'iii',
  'z'
]
*/

function concatenateConsecutiveStrings({ strings }) {
  const result = []
  let currentGroup = []

  for (const string of strings) {
    if (string.length > 1) {
      currentGroup.push(string)
      continue
    }
    if (currentGroup.length > 1) {
      result.push(currentGroup.join(''))
      currentGroup = []
    }
  }

  if (currentGroup.length > 1) {
    result.push(currentGroup.join(''))
  }

  return result
}

console.log(
  'concatenateConsecutiveStrings',
  concatenateConsecutiveStrings({ strings: splitResult })
)
// [ 'bbbcccddd', 'fffgg' ]

//

// DM: todoMM: I asked AI to "convert concatenateConsecutiveStrings to use .reduce". here is the result. have a look. which do you think is easier to read, with .reduce or with for...of as in concatenateConsecutiveStrings?
function concatenateConsecutiveStrings_withReduce({ strings }) {
  return strings.reduce(
    ({ result, currentGroup }, string) => {
      if (string.length > 1) {
        currentGroup.push(string)
        return { result, currentGroup }
      }
      if (currentGroup.length > 1) {
        result.push(currentGroup.join(''))
        currentGroup = []
      }
      return { result, currentGroup }
    },
    { result: [], currentGroup: [] }
  ).result
}
// DM: note: some experts advise against using .reduce, but as a junior, you need to know how/why to use it. That is why I insisted previously on using .reduce and never using "let". However, from now on, choose which is the best solution. If both reduce and for...of work, then which is easier to read. Readability uber alles! However, I dont want you to use `for (let i = 0; i < arr.length; i++) { ... }` because it is messy to read and you can just use .map, .filter, .forEach (for side effects), or, in some cases, use for...of (as in the 2nd function above.)
