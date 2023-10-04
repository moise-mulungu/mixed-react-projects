/*

this is a function that returns an array of numbers from start to end, with a step of 1. it's the expression version of a for loop. Unfortunately, range does not exist in javascript as a method.

usage examples:

const myRange = range(0, 20)
const myRange = range(20)
const myRange = range(0, 20, 2)

*/
export default function range(start, end, step = 1) {
  const output = []

  if (typeof end === 'undefined') {
    end = start
    start = 0
  }

  // DM: converted to reduce without push
  // howtojs: array: create an empty array of a specific length so that you can perform some task that number of times: Array.from({length: 3}) // [undefined,undefined,undefined]
  return Array.from({ length: end }).reduce((acc, _, idx) => {
    return [...acc, idx]
  }, [])

  // for (let i = start; i < end; i += step) {
  //   output.push(i)
  // }
  // return output
}
// console.log(range(8)) // [0, 1, 2, 3, 4, 5, 6, 7]
