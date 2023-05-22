const obj = { foo: 'bar', baz: 42 }
console.log(Object.entries(obj)) // [ ['foo', 'bar'], ['baz', 42] ]

// howtojs: change obj to array
const arrayOfEntries = Object.entries(obj) // [ ['foo', 'bar'], ['baz', 42] ]
// howtojs: change array to obj. array must be an array of (key, value) pairs
const objWithSameProperties = Object.fromEntries(arrayOfEntries) // { foo: "bar", baz: 42 }

const objWithSamePropertiesOneLine = Object.fromEntries(Object.entries(obj)) // { foo: "bar", baz: 42 }
// MM: great!, i like this one.

// MM: i did not realize that a simple array can not be converted to an object, but an array of arrays that can be converted to an object.
const sampleArray = [1, 2, 3, 4, 5, 6]

// this does not work
const arrayToObject = Object.fromEntries(sampleArray)
// this is the error that i get from the console.log: "Iterator value 1 is not an entry object"

// but this works
const entryObject = Object.fromEntries(sampleArray.map((item) => [item, item * 2])) // {1: 2, 2: 4, 3: 6, 4: 8, 5: 10, 6: 12}
// DM: cool! yes, Object.fromEntries wants an array of 'tuples' (AKA pair)
