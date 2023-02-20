// Square(n) Sum
// description: Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSumWithLet(numbers) {
  // declare a variable to hold the sum
  let sum = 0
  // loop through the array
  for (let i = 0; i < numbers.length; i++) {
    // square each number
    const squaredNumbers = numbers[i] * numbers[i]
    // add the squared number to the sum
    sum += squaredNumbers
  }
  // return the sum
  return sum
}
console.log(squareSumWithLet([1, 2, 2]))


// DM: todoMM: great! now make this the only solution (remove the other solutions above this line, once you've read my comments/answers in them)
function squareSum(numbers) {
  return (
    numbers
      .map((num) => num * num)
      .reduce((acc, cur) => acc + cur)
  )
}
console.log(squareSum([1, 2, 2])) // 10
// DM: as an arrow function, concise, but it starts to feel slightly less readable, IMO
const squareSumAf = (numbers) => numbers.map((num) => num * num).reduce((acc, cur) => acc + cur)
// DM: todoDM: write an exercise to assign the array method callbacks to variables with descriptive names
