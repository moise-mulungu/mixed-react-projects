// DM: todoMM: add new JS vocabulary: "array literal", "object literal"
//             then, do these exercises:

// DM: todoMM: write code for each of the exercises, using array methods only, one-line only for each
// using this array literal: [1, 2, 3]
// keeping in mind:
// array.filter is to make an array into a smaller array
// array.map is to transform each element of an array into something different
// array.reduce is to transform an array into something else (ex: into a number, or an object)
// example exercise: create a new array of the same length, adding 5 to each element
[1, 2, 3].map((number) => number + 5) // [6, 7, 8]

  // write code to get 1 number which is the sum of the elements
[1, 2, 3].reduce((sum, number) => sum + number, 0)

// create a new array of the same length, multiplying each element by 10
[1, 2, 3].map((number) => number * 10) // [10, 20, 30]
// create a smaller array containing only the values that are less than 3
[1, 2, 3].filter((number) => number < 3)
