// DM: todoMM: add new JS vocabulary: "array literal", "object literal"
//             then, do these exercises:

// DM: todoMM: write code for each of the exercises, using array methods only, one-line only for each
// using this array literal: [1, 2, 3]
// keeping in mind:
// array.filter is to make an array into a smaller array
// array.map is to transform each element of an array into something different
// array.reduce is to transform an array into something else (ex: into a number, or an object)
// example exercise: create a new array of the same length, adding 5 to each element

// DM: todoMM: be sure to fix all errors on the page, no that we have esLint. prettier won't auto-format until you fix all JS errors on the entire pages. when prettier fails to auto-format, that is how I know that there is an error somewhere on the page. You are doing so much work lately, that I can't review quickly unless the JS syntax is correct, so be sure to ensure that each time you edit a JS file.

[1, 2, 3].map((number) => number + 5) // [6, 7, 8]

// write code to get 1 number which is the sum of the elements
;[1, 2, 5].reduce((sum, number) => sum + number, 0)  

// create a new array of the same length, multiplying each element by 10
;[1, 2, 3].map((number) => number * 10) // [10, 20, 30]

const people = [
  { name: 'Aisha', grade: 89 },
  { name: 'Bruno', grade: 55 },
  { name: 'Carlos', grade: 68 },
  { name: 'Dacian', grade: 71 },
  { name: 'Esther', grade: 40 },
]
const screamedNames = people.map((person) => {
  return person.name.toUpperCase()
})
console
  .log(screamedNames) // ['AISHA', 'BRUNO', 'CARLOS', 'DACIAN', 'ESTHER']

  // create a smaller array containing only the values that are less than 3
;[1, 2, 3].filter((number) => number < 3)
const numbers = [5, 12, 15, 31, 40]

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0
})

// great!

// All Star Code Challenge
function strCount(str, letter) {
  //code here
  const arrayOfLetters = str.split('')
  const filteredArray = arrayOfLetters.filter((char) => {
    return char === letter
  })
  return filteredArray.length

  //2. return str.split('').filter((char) => char === letter).length

  // 3. const count = 0;
  // const mappedString = str.map((char) => {
  //   if (char === letter) {
  //     count++
  //   }
  // }
  // )
  // return count
}
