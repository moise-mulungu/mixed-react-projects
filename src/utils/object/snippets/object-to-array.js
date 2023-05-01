const obj = { foo: 'bar', baz: 42 }
console.log(Object.entries(obj)) // [ ['foo', 'bar'], ['baz', 42] ]

// howtojs: change obj to array
const arrayOfEntries = Object.entries(obj) // [ ['foo', 'bar'], ['baz', 42] ]
// howtojs: change array to obj. array must be an array of (key, value) pairs
const objWithSameProperties = Object.fromEntries(arrayOfEntries) // { foo: "bar", baz: 42 }

const objWithSamePropertiesOneLine = Object.fromEntries(Object.entries(obj)) // { foo: "bar", baz: 42 }
