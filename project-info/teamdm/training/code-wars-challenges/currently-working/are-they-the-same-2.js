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
    // MM: toDM: here is where i want to check if the arrays are empty or null and then return false
    // DM: todoMM: you can do these validation before the sort (more efficient). The new test I added below may give a clue as to how to make it work. Your conditions are very specific
    //(after moving the compared null and empty parameters before sorting, all the tests pass) DM: todoMM: based on the diffs I can't tell if if works, or what issues you had. Write the current status of this exercise so that I can know without having to run it myself.
  }
  const sortedNumbers = numbers.sort((a, b) => a - b)
  const sortedSquaredNumbers = squaredNumbers.sort((a, b) => a - b)
  for (let i = 0; i < sortedNumbers.length; i++) {
    if (sortedNumbers[i] * sortedNumbers[i] !== sortedSquaredNumbers[i]) {
      return false
    }
  }
  return true
}

comp([], null) // false
//(done) DM: todoMM: make sure your solution works with this new test on the line below
comp(null, []) // false

comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]) // true
comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]) // false
comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361]) // false
comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 362]) // false
comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]) // true
comp([], []) // true
comp([1], [1]) // true
comp([1], [2]) // false

// MM: toDM: The code above works for some almost all test cases(212), except two(2) in the code wars challenge.
//(done) DM: todoMM: reproduce those 2 failed ('Attempt' button) tests here and try to solve it, so that I can see. What is the error output? Does that error message give you clues?;
// MM: toDM: yes, it does. the two only testings are to compare when array is null and array is empty or vice versa. I added the condition above to check for that, but it does not work.
// DM: todoMM: Look at the error output, both in codewars.com 'Attempt' button (looking at the "output" tab in the left pane) - OR - run in the node REPL to see error message there also. Error messages will tell you what the problem is.
