/* 
DM: I want you to make this approach work separately from the other 2 approaches.
*/
function comp(numbers, squaredNumbers) {
  // DM: good! this is what I would have done.
  // howtojs: performance:: sorting avoids having a nested loop (a loop inside a loop), which is exponentially expensive. Sorting has it's costs, but you can assume that the JS Engine is efficient at sorting.
  const sortedNumbers = numbers.sort((a, b) => a - b)
  const sortedSquaredNumbers = squaredNumbers.sort((a, b) => a - b)
  if (
    (sortedNumbers === null && sortedSquaredNumbers.length === 0) ||
    (sortedNumbers.length === 0 && sortedSquaredNumbers === null)
  ) {
    return false
  }
  for (let i = 0; i < sortedNumbers.length; i++) {
    if (sortedNumbers[i] * sortedNumbers[i] !== sortedSquaredNumbers[i]) {
      return false
    }
  }
  return true
}

comp([], null) // false

comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]) // true
comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]) // false
comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361]) // false
comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 362]) // false
comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]) // true
comp([], []) // true
comp([1], [1]) // true
comp([1], [2]) // false

// MM: toDM: The code above works for some almost all test cases(212), except two(2) in the code wars challenge.
// DM: todoMM: reproduce those 2 failed ('Attempt' button) tests here and try to solve it, so that I can see. What is the error output? Does that error message give you clues?
