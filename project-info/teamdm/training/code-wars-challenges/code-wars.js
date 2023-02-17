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
    sum += squareNumbers //I struggle understanding the logic behind this line
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
	return numbers.map./* your code goes here */
}
console.log(squareThemAll([1, 2, 2])) // 2, 4, 4

//   step 2: add together all the numbers in the array. 
function addThemUp(numbers) {
	// check out array.reduce on MDN
	return numbers.reduce.((acc, cur) => {
		/* your code goes here */
	}, 0)
}
console.log(addThemUp([2, 4, 4])) // 10

//   step 3: combine both into one function
function squareSum(numbers) {
	return numbers./* your code goes here. chain the array methods numbers.map(...).reduce(...) so they are on the same line */
}
console.log(addThemUp([2, 4, 4])) // 10


