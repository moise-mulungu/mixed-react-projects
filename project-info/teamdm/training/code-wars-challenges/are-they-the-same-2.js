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
  // DM: just FYI, this could be done with sortedNumbers.reduce() because we're converting an array to a boolean
  // MM: ???toDM: using reduce with both arrays? or just one? and then how to get to a boolean result where both arrays are compared? am curious to find out the solution with reduce.
  // DM: you only have one loop here
  // howtojs: array to any non-array value:: Array.prototype.reduce()
  const resultWithReduce = sortedNumbers.reduce((acc, cur, idx) => {
    if (!acc) return acc
    if (cur * cur !== sortedSquaredNumbers[idx]) {
      return false
    }
    return acc
  }, true)
  // but, you'll have noticed that there are a lot of unnecessary iterations of this loop, because once you have found false, you really don't need to keep going, so, since you have an array and want a boolean, remember that Array.some() returns a boolean,. ARray.some would be more efficient (and more concise). Array.some will stop iterating the first time the callback returns false.
  // howtojs: array to boolean:: Array.prototype.some(); more efficient than array.reduce because it stops iterating when the callback returns a falsy value
  const resultWithSome = !sortedNumbers.some((number, idx) => {
    return number * number !== sortedSquaredNumbers[idx]
  })
  console.log({ resultWithReduce, resultWithSome })
  //(done)DM: todoMM: I've demonstrated an example of converting a for loop to reduce. Also, I've demonstrated how using array.some is more efficient. And, I made howtojs entries for both.
  //(done) DM: todoMM: whenever you get stuck with a hard reduce issue, do a global regexp search on the howtojs lines. Search on "howtojs.*reduce" and look at a few examples to refresh your memory. Try it now. Also, you can global regexp search on ".reduce(" to see all places you have previously used reduce(ok).
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
