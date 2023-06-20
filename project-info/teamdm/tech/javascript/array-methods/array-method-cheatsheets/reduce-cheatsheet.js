// howtojs: array.reduce boilerplate starter template
;[].reduce((acc, cur) => {
  return acc // always return acc;
}, undefined /* always initialize the 2nd value */)

/* howtojs: array: reduce: concatenate:: (usually refers to strings, also arrays) the elements in the array */
;[[1], [2]].reduce((acc, cur) => {
  // MM: this code [([1], [2])] returns [2], but i think it should be an array with nested arrays like this [[1], [2]] to get the desired result. DM: correct. I removed the () from the array - those must have been injected at some point by prettier, because I didn't intend them.
  console.log({ acc, cur })
  return acc.concat(cur)
}, []) // [1, 2]
;['a', 'b'].reduce((acc, cur) => {
  // the same here - this code [('a', 'b')] returns ['b'], but i think it should be an array of strings without parentheses like this ['a', 'b'] to get the desired result. DM: correct
  return acc + cur
}, '') // 'ab'

/* howtojs: array: reduce: sum:: the elements in the array */
;[1, 2].reduce((acc, cur) => {
  console.log({ acc, cur })
  return acc + cur
}, 0) // 3

/* howtojs: array: reduce:: count the number of elements in the array */
;[(1, 2)].reduce((acc, cur) => {
  console.log({ acc, cur })
  return acc + 1
}, 0) // 2

// DM: todoMM: Moise, have a look at the solutions above. I used the most simple data in the solutions, in order to keep them short and to not distract.
// DM: todoMM: add 2 more examples (below) that you have recently solved using the most simple data, just the bare minimum data needed to make the example work

// DM: todoMM: good! now add the howtojs stuff
// turn array into: object
;['a', 'b', 'c', 'a', 'b'].reduce((acc, cur) => {
  console.log({ cur, acc })
  if (acc[cur]) {
    acc[cur]++
  } else {
    acc[cur] = 1
  }
  console.log({ cur, acc })
  return acc
}, {}) // { a: 2, b: 2, c: 1 }
/* 
DM: todoMM: make a demo video explaining how this works. Vocab:
property access operator ("." as in array.reduce)
callback function AKA callback
initialize
empty object
shorthand property names (as in { cur, acc } is 'shorthand' for { cur: cur, acc: acc })
increment
array literal
parameters
accumulator
current value
computed property access operator ("[]" as in acc[cur])

*/
// howtojs: array: reduce:: turn array into: complex object; group by property
;['a', 'b', 'c', 'a', 'b'].reduce(
  (acc, cur, idx) => {
    acc[cur].count++
    acc[cur].indexes.push(idx)
    // console.log({ acc, cur, idx })
    console.log({ cur, idx })
    return acc
  },
  {
    a: {
      count: 0,
      indexes: [],
    },
    b: {
      count: 0,
      indexes: [],
    },
    c: {
      count: 0,
      indexes: [],
    },
  }
)
/*
result:
{
  a: { count: 2, indexes: [ 0, 3 ] },       
  b: { count: 2, indexes: [ 1, 4 ] },
  c: { count: 1, indexes: [ 2 ] }
},
*/
