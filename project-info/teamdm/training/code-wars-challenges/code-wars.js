// DM: this file will get big, let's put new ones at the top so we don't have to scroll
/* 
2 guidlines for codewars solutions:
* never use 'let'
* assign all logical expressions to a well-named variable
* don't make me think!
*/

//Exclusive "or" (xor) Logical Operator
function xor(a, b) {
  const isTrue = a || b
  const isFalse = a && b

  // DM: todoMM: good! now assign this logical expression: isTrue && !isFalse to a well-named variable - the goal is to make it so that I can read this more easily without having to google and refresh my memory of xor
  // DM: todoMM: what does isTrue && !isFalse mean? describe it in the variable name
  const truthyValue = isTrue && !isFalse
  const falsyValue = !isTrue && isFalse

  if (truthyValue) {
    return true
    // do the same for this logical expression
  } else if (falsyValue) {
    return true
  } else {
    return false
  }
  // return (a || b) && !(a && b); this is the short version
}

console.log(xor(8, -4)) // false

// DM: todoMM: that was a good start!, I showed the rest in ./imperative-to-declarative-transformation.js
// DM:: todoMM once you understand that, do similar for consonantCount()

// DM: todoMM: same, do it without let
// Count consonants
function consonantCount(str) {
  // declare an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u']
  // declare a variable to hold the count
  let count = 0 // the same error as above: Assignment to constant variable.
  // loop through the string
  for (let i = 0; i < str.length; i++) {
    // if the current character is not a vowel, increment the count
    if (!vowels.includes(str[i])) {
      count++
    }
  }
  // return the count
  return count
}

console.log(consonantCount('ahddbsa'))

const myConsonantCount = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0
  const selectedConsonants = str.split('').filter((char) => !vowels.includes(char))

  return (count = selectedConsonants.length)
}

console.log(myConsonantCount('arestationary'))
// MM: todoMM: some test cases are failing, I think it's because of the case sensitivity and some special characters. // DM: can you give me an example of which is failing?

// Square(n) Sum
// description: Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
  return numbers.map((num) => num * num).reduce((acc, cur) => acc + cur, 0)
}
console.log(squareSum([1, 2, 2])) // 10
// DM: as an arrow function, concise, but it starts to feel slightly less readable, IMO
const squareSumAf = (numbers) => numbers.map((num) => num * num).reduce((acc, cur) => acc + cur, 0)
// DM: todoDM: write an exercise to assign the array method callbacks to variables with descriptive names
// DM: todoDM: clean up this page of my comments or extra stuff

/* 
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
*/
