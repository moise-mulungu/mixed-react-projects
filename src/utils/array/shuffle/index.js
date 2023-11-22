/*
The Fisher-Yates shuffle algorithm is a popular way to shuffle an array in JavaScript. It works by iterating through the array and swapping each element with a randomly selected element from the remaining unshuffled elements. The algorithm runs in O(n) time complexity and O(1) space complexity.
*/

// DM: the func name doesn't match the filename. Good that you created a directory for this. In this case, in the context of the utils/array directory, the dir name and func name can be just shuffle(), and this filename index.js.
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default shuffle
// module.exports = shuffle
//(done) DM: we consistently use "es modules" in this repo, not "commonjs"
// module.exports = shuffleArray;

//(done) DM: I don't have time for this kind of back and forth. I expect you to read my instructions carefully. Read them carefully again, in order, and just figure it out.

// DM: cool. add a test for this function. AI can write one. bump: ask AI to write one using "vanilla JS" as Jest not set up here.
//(done) DM: move this to the utils/array folder so it can be found and reused

/*
(you missed the last part of this todo, done!)DM: bump: ask AI to write a simple non-Jest, "vanilla JS" test, then you can put it here in this file. If AI gives you dumb answers, give AI as an example the (console.log) tests that are in the recent file of object transformations. NOTE: The code in your .test.js file doesn't work because it uses Jest functions, like "describe()". All code in src directories shlayout-modulesould work, and no code should be here that you haven't run to see if it works. So, delete that file. MM: DM: why do you want me to delete the file while you asked to write test for the shuffle() function before? 
*/

// DM: what is this for? This file needs a test to make sure the shuffle works, but I don't see shuffle called here. MM: DM: you said this above: "ask AI to write a simple non-Jest, "vanilla JS" test, then you can put it here in this file"

// In this code, testAdd is a simple test function that checks if the add function returns the correct result. If the result is not as expected, it logs a failure message; otherwise, it logs that the test passed.

// DM: good. I suppose there's not much else you can test.

// Define a test function
function testShuffle(array) {
  const shuffledArray = shuffle([...array])

  // Sort both arrays
  const sortedOriginal = [...array].sort()
  const sortedShuffled = shuffledArray.sort()

  // Check if the sorted arrays are identical
  for (let i = 0; i < sortedOriginal.length; i++) {
    if (sortedOriginal[i] !== sortedShuffled[i]) {
      console.log('Test failed: shuffled array does not contain same elements as original array')
      return false
    }
  }

  //(done) DM: test that the shuffled array is in a different order than the original array, i.e., that it was really shuffled
  // Check if the shuffled array is in a different order
  // for (let i = 0; i < array.length; i++) {
  //(done) DM: todoMM: it is possible that the first element of array is identical to the first element of shuffledArray. EX if it is a small array it is possible that after a valid shuffle, the first elements could be identical. Same could happen if there are a lot of repeated elements in the original array. Your test returns false if ANY of the elements DO match. So, write a test that checks if ANY of the elements DON'T match.
  //   if (array[i] === shuffledArray[i]) {
  //     console.log('Test failed: shuffled array is in the same order as original array')
  //     return false
  //   }
  // }

  // console.log('Test passed: shuffled array has same elements as original array')
  // return true
  // the some() method verifies if at least one element in the shuffled array is not in its original position. If so, isShuffled is set to true, else false.
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

// Run the test with an array of your choice
const testResult = testShuffle([6, 14, 65, 4, 345, 75])
console.log(testResult) // This will log true if the test passed, false otherwise
