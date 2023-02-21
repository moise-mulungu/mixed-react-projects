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

function squareSum(numbers) {
  return numbers.map((num) => num * num).reduce((acc, cur) => acc + cur)
}
console.log(squareSum([1, 2, 2])) // 10
// DM: as an arrow function, concise, but it starts to feel slightly less readable, IMO
const squareSumAf = (numbers) => numbers.map((num) => num * num).reduce((acc, cur) => acc + cur)
// DM: todoDM: write an exercise to assign the array method callbacks to variables with descriptive names
// DM: todoDM: clean up this page of my comments or extra stuff

//Exclusive "or" (xor) Logical Operator

function xor(a, b) {
  // TODO: Program Me
  const isTrue = a || b
  const isFalse = a && b

  if (isTrue && !isFalse) {
    return true
  } else if (!isTrue && isFalse) {
    return true
  } else {
    return false
  }
  // return (a || b) && !(a && b); this is the short version
  
}

console.log(xor(8, -4));


// ASCII Total
function uniTotal(string) {
  // total up dem unicodes!
  let total = 0

  // declare a variable to hold the array of characters
  const stringArray = string.split('')
  console.log(stringArray)
  // map over the array of characters and add the unicode value to the total
  stringArray.map((char) => {
    total += char.charCodeAt(0)
  })
  // for (let i = 0; i < string.length; i++) {
  //   total += string.charCodeAt(i)
  // }
  // return the total
  return total
}
console.log(uniTotal('aloha'))