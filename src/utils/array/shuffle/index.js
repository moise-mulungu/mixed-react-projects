/*
The Fisher-Yates shuffle algorithm is a popular way to shuffle an array in JavaScript. It works by iterating through the array and swapping each element with a randomly selected element from the remaining unshuffled elements. The algorithm runs in O(n) time complexity and O(1) space complexity.
*/

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default shuffle

// tests

function testShuffle(array) {
  const shuffledArray = shuffle([...array])

  // Sort both arrays
  const sortedOriginal = [...array].sort()
  const sortedShuffled = shuffledArray.sort()

  // DM: todoMM: the comment is technically correct, but it doesn't explain what problem you are testing for. write a comment describing the practical problem you are testing for.
  // Check if the sorted arrays are identical
  for (let i = 0; i < sortedOriginal.length; i++) {
    if (sortedOriginal[i] !== sortedShuffled[i]) {
      console.log('Test failed: shuffled array does not contain same elements as original array')
      return false
    }
  }

  const isShuffled = array.some((item, index) => item !== shuffledArray[index])
  console.log({ isShuffled })

  if (!isShuffled) {
    console.log('Test failed: shuffled array is in the same order as original array')
    return false
  }

  console.log(
    'Test passed: shuffled array has same elements as original array and is not in the same order'
  )
  return true
}

const testResult = testShuffle([6, 14, 65, 4, 345, 75])
console.log({ passed: testResult })
