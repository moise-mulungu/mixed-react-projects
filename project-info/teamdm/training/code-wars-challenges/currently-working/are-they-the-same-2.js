function compare(numbers, squaredNumbers) {
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

compare([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]) // true
compare([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]) // false
compare([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361]) // false
compare([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 362]) // false
compare([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]) // true
compare([], []) // true
compare([1], [1]) // true
compare([1], [2]) // false

// MM: toDM: The code above works for some almost all test cases(212), except two(2) in the code wars challenge.
