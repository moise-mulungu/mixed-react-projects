// howtojs: array.reduce boilerplate starter template
;[].reduce((acc, cur) => {
  return acc // always return acc;
}, undefined /* always initialize the 2nd value */)

/* howtojs: array: concatenate:: (usually refers to strings, also arrays) the elements in the array */
;[([1], [2])].reduce((acc, cur) => {
  return acc.concat(cur)
}, []) // [1, 2]
;[('a', 'b')].reduce((acc, cur) => {
  return acc + cur
}, '')

/* sum the elements in the array */
;[(1, 2)].reduce((acc, cur) => {
  return acc + cur
}, 0) // 3

/* count the number of elements in the array */
;[(1, 2)].reduce((acc, cur) => {
  return acc + 1
}, 0) // 2

// DM: todoMM: Moise, have a look at the solutions above. I used the most simple data in the solutions, in order to keep them short and to not distract.
// DM: todoMM: add 2 more examples (below) that you have recently solved using the most simple data, just the bare minimum data needed to make the example work

// turn array into: object

// turn array into: complex object
