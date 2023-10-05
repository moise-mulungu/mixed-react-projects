const arrayOfNum = [0, 1, 2, 3, 4, 5, 6, 7]
//In this code, we use the join method to convert the array into a string, and then use the match method to search for all sequential numbers from 0 to 9.
const sequentialNumbers = arrayOfNum.join('').match(/\d/g) // or str.join('').match(/[0-9]/g)
console.log(sequentialNumbers) // ['0', '1', '2', '3', '4', '5', '6', '7']

const stringWithNumbers = 'My phone number is 021-987-345'
// howtojs: regexp:: matching a range of number characters: /\d/ or /[2-8]/g, this will range from 2 to 8.
const allNumChars = stringWithNumbers.match(/\d/g)
console.log({ allNumChars }) // ['0', '2', '1', '9', '8', '7', '3', '4', '5']
