// DM: this file will get big, let's put new ones at the top so we don't have to scroll

/* 

2 guidlines for codewars solutions:
* never use 'let'
* assign all logical expressions to a well-named variable
* don't make me think!

*/

// DM: todoMM: good! now assign this logical expression: isTrue && !isFalse to a well-named variable - the goal is to make it so that I can read this more easily without having to google and refresh my memory of xor
//Exclusive "or" (xor) Logical Operator
function xor(a, b) {
  // TODO: Program Me // DM: is there still something left to do here?
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

console.log(xor(8, -4)) // DM: todoMM: put the expected result here(expected result: false)

// DM: todoMM: now, do this without 'let'. see the example at the bottom of this file where we did that. hint: string.split().map().reduce()
// ASCII Total
function uniTotal(string) {
  // total up dem unicodes!
  let total = 0 // if I change let to const, I get an error: Assignment to constant variable.

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

// MM: todoMM: some test cases are failing, I think it's because of the case sensitivity and some special characters. // DM: can you give me an example of which is failing?

// Square(n) Sum
// description: Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
  return numbers.map((num) => num * num).reduce((acc, cur) => acc + cur)
}
console.log(squareSum([1, 2, 2])) // 10
// DM: as an arrow function, concise, but it starts to feel slightly less readable, IMO
const squareSumAf = (numbers) => numbers.map((num) => num * num).reduce((acc, cur) => acc + cur)
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
