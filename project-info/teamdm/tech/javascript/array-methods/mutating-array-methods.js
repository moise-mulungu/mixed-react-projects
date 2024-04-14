// sort: list the elements of an array in ascending order
;[2, 1].sort() // 1, 2

// reverse: reverse the order of the elements of an array
;[1, 2].reverse() // 2, 1

// push: add an element to the end of an array
;[1, 2].push(3) // 1, 2, 3

// pop: remove an element from the end of an array
;[1, 2, 3].pop() // 1, 2

// shift: remove an element from the beginning of an array
;[1, 2, 3].shift() // 2, 3

// unshift: add an element to the beginning of an array
;[2, 3].unshift(1) // 1, 2, 3

// splice: remove an element from a specific index of an array
;[1, 2, 3].splice(1, 1) // 1, 3

// split: split a string into an array of substrings
// ['1, 2, 3'].split(',') // 1, 2, 3

// join: join the elements of an array into a string
;[1, 2, 3].join(',') // '1,2,3'

// slice: copy a portion of an array
;[1, 2, 3].slice(1, 2) // 2

// note, I started omitting the const so that I don't get errors in the node REPL when I re-declare the same variable

// background information: what happens when you mutate
myArray = []
myArrayCloned = [...myArray] // a new array is created
myArrayCloned === myArray // false
myArrayCopied = myArray // the same array is copied
myArrayCopied ===
  myArray[ // true
    // DM: todoDM: great, now edit your above examples to do each operation without mutating, like this:
    (2, 1)
  ]
    .sort() // 1, 2
// typically, you'll have an existing variable that you don't want to mutate
myArray = [2, 1]
mySortedArray = [...myArray].sort() //  [1, 2]
myArray // still [2, 1]
// but..., if you
mySortedArray = myArray.sort() // [1, 2]
myArray // [1, 2]
mySortedArray === myArray // true - it is the same array, not just the same order of elements
// but, so that the examples above remain concise, we won't create a variable, but simply use an array literal in order to have each example on only one line

