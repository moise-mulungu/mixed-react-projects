;[1, 2, 3].map((number) => number + 5) // [6, 7, 8]

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
// howtojs: array: map:: change each item in an array(ok)
const screamedNames = people.map((person) => {
  return person.name.toUpperCase()
})
console.log(screamedNames) // ['AISHA', 'BRUNO', 'CARLOS', 'DACIAN', 'ESTHER']

// create a smaller array containing only the values that are less than 3
;[1, 2, 3].filter((number) => number < 3)

const evenNumbers = [5, 12, 15, 31, 40].filter((num) => num % 2 === 0)

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
