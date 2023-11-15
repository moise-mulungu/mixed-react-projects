/*
The Fisher-Yates shuffle algorithm is a popular way to shuffle an array in JavaScript. It works by iterating through the array and swapping each element with a randomly selected element from the remaining unshuffled elements. The algorithm runs in O(n) time complexity and O(1) space complexity.
*/

// DM: todoMM: the func name doesn't match the filename. Good that you created a directory for this. In this case, in the context of the utils/array directory, the dir name and func name can be just shuffle(), and this filename index.js.
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// export default shuffle
module.exports = shuffle
// DM: todoMM: we consistently use "es modules" in this repo, not "commonjs"
// module.exports = shuffleArray;

//(done) DM: cool. add a test for this function. AI can write one. ask AI to write one using "vanilla JS" as Jest not set up here.
//(done) DM: move this to the utils/array folder so it can be found and reused

/*
(you missed the last part of this todo)DM: todoMM: ask AI to write a simple non-Jest, "vanilla JS" test, then you can put it here in this file. If AI gives you dumb answers, give AI as an example the (console.log) tests that are in the recent file of object transformations. NOTE: The code in your .test.js file doesn't work because it uses Jest functions, like "describe()". All code in src directories should work, and no code should be here that you haven't run to see if it works. So, delete that file.  
*/

{
  // In this code, testAdd is a simple test function that checks if the add function returns the correct result. If the result is not as expected, it logs a failure message; otherwise, it logs that the test passed.

  function add(a, b) {
    return a + b
  }

  function testAdd() {
    const result = add(1, 2)
    if (result !== 3) {
      console.log(`Test failed: Expected 3 but got ${result}`)
    } else {
      console.log('Test passed')
    }
  }

  testAdd()
}
