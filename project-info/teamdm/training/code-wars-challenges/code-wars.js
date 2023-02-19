// converting this to JS so you can take advantage of prettier formatting
// do all future work here
// but, I left the code-wars.md file so that you can easily see the diffs

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
    // MM: ???DM: I struggle understanding the logic behind this line
    // DM: equivalent to : sum = sum + squaredNumbers
    sum += squaredNumbers
  }
  // return the sum
  return sum
}
console.log(squareSumWithLet([1, 2, 2]))

// DM: good, but I'm going to give you a permanent codewars rule going forward. Never use 'let'! It will challenge you to use JS in a more concise, idiomatic and functional way (hint, use functions. in this case array methods.)
//   so, your next exercise is to redo this without using 'let' (no loops)
//   let's do it in 2 steps first, then all together
//   step 1: square each number in the passed array
function squareThemAll(numbers) {
  return numbers.map((num) => num * num)
}
console.log(squareThemAll([1, 2, 2])) // 2, 4, 4

//   step 2: add together all the numbers in the array.
function addThemUp(numbers) {
  // check out array.reduce on MDN
  const sum = 0
  return numbers.reduce((acc, cur) => acc + cur, 0) // I removed the curly braces and return statement because it was not needed
}
console.log(addThemUp([2, 4, 4])) // 10

// DM: todoMM: great! now make this the only solution (remove the other solutions above this line, once you've read my comments/answers in them)
function squareSum(numbers) {
  return (
    numbers
      .map((num) => num * num)
      // DM: correct! But, something is missing (that is in your code above in step 2)
      // DM: but, though missing, reduce() still worked. why? todoMM: add a JS vocab entry: "type coercion"
      //     also, when you remove these comments, you'll see that the solution fits on one line, and is very readable
      .reduce((acc, cur) => acc + cur)
  )
}
console.log(squareSum([1, 2, 2])) // 10
// DM: as an arrow function, concise, but it starts to feel slightly less readable, IMO
const squareSumAf = (numbers) => numbers.map((num) => num * num).reduce((acc, cur) => acc + cur)
// DM: todoDM: write an exercise to assign the array method callbacks to variables with descriptive names
