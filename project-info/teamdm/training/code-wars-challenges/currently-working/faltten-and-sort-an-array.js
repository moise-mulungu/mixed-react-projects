/* 14. Final step: after code review and final approval (like we do at work), I'll leave a comment here, and you can: copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/

function flattenAndSort(array) {
  const isArray = Array.isArray(array)
  if (!isArray) throw new Error('input must be an array')
  const flattenedArray = array.flat()
  const sortedArray = flattenedArray.sort((a, b) => a - b)
  return sortedArray
}

flattenAndSort([2, [1, 2]]) // []
flattenAndSort([[], []]) // []
flattenAndSort([[], [1]]) // [1]
flattenAndSort([
  [3, 2, 1],
  [7, 9, 8],
  [6, 4, 5],
]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]) // [1, 2, 3, 4, 5, 6, 100]
