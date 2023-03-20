const range = (start, end, step = 1) => {
  const output = []

  if (typeof end === 'undefined') {
    end = start
    start = 0
  }

  for (let i = start; i < end; i += step) {
    output.push(i)
  }

  return output
}
console.log(range(8)) // [0, 1, 2, 3, 4, 5, 6, 7]
// this is a function that returns an array of numbers from start to end, with a step of 1. it's the expression version of a for loop. Unfortunately, range does not exist in javascript as a method.
