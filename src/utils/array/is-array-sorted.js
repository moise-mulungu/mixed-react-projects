// MM: ???DM: I just noticed that when I created the isArraySorted function using arrow function, the import did not work(the function is not recognized as function) in the index.js file, I had to change it to a simple function then it worked. What is the reason for this?

// export default isArraySorted = (array) =>
//   array.every((value, index) => index === 0 || array[index - 1] <= value)

export default function isArraySorted(array) {
  return array.every((value, index) => index === 0 || array[index - 1] <= value)
}
