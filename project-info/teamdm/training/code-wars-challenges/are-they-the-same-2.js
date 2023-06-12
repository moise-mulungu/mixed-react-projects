/* 
DM: I want you to make this approach work separately from the other 2 approaches.
*/
function comp(numbers, squaredNumbers) {
  // DM: good! this is what I would have done.
  // howtojs: performance:: sorting avoids having a nested loop (a loop inside a loop), which is exponentially expensive. Sorting has it's costs, but you can assume that the JS Engine is efficient at sorting.

  if (
    (numbers === null && squaredNumbers.length === 0) ||
    (numbers.length === 0 && squaredNumbers === null)
  ) {
    return false
  }
  const sortedNumbers = numbers.sort((a, b) => a - b)
  const sortedSquaredNumbers = squaredNumbers.sort((a, b) => a - b)
  // DM: just FYI, this could be dont with sortedNumbers.reduce() because we're converting an array to a boolean
  for (let i = 0; i < sortedNumbers.length; i++) {
    if (sortedNumbers[i] * sortedNumbers[i] !== sortedSquaredNumbers[i]) {
      return false
    }
  }
  return true
}

comp([], null) // false
comp(null, []) // false

comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]) // true
comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]) // false
comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361]) // false
comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 362]) // false
comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]) // true
comp([], []) // true
comp([1], [1]) // true
comp([1], [2]) // false
