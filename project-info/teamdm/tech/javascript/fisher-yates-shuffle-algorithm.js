/*
The Fisher-Yates shuffle algorithm is a popular way to shuffle an array in JavaScript. It works by iterating through the array and swapping each element with a randomly selected element from the remaining unshuffled elements. The algorithm runs in O(n) time complexity and O(1) space complexity.
*/

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// DM: todoMM: cool. add a test for this function. AI can write one. ask AI to write one using vanilla JS as Jest not set up here.
// DM: todoMM: move this to the utils/array folder so it can be found and reused
