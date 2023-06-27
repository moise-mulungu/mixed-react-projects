// DM: going forward, add here any unintuitive or weird examples.

// unintuitive type coercion
4 + 4 === 8 // number
4 + '4' === '44' // string
'4' + 4 === '44' // string
'' + 1 === '1' // string
'' + true === 'true' // string

// unintuitive types and/or interesting syntaxes
typeof NaN // 'number'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof {}.p // 'undefined'
typeof [][0] // 'undefined'
typeof (() => {}) // 'function'
typeof function () {} // 'function'
typeof new Date() // 'object'
typeof new Date().bogusProperty // 'undefined'

// all primitive data types

// number
const myNum = 1
typeof myNum // 'number'

// big integer
const myBigInt = 1n
typeof myBigInt // 'bigint'

// string
const myStr = 'hello'
typeof myStr // 'string'

// boolean
const myBool = true
typeof myBool // 'boolean'

// null
const myNull = null
typeof myNull // 'object'

// undefined
const myUndefined = undefined
typeof myUndefined // 'undefined'

// symbol
const mySymbol = Symbol()
typeof mySymbol // 'symbol'

// examples of non-primitive data types AKA 'objects' (the generic meaning of of a JS 'object', in the sense that "all non-primitives are objects")

// object
const myObj = {}
typeof myObj // 'object'

// function
const myFunc2 = () => {}
typeof myFunc2 // 'function'

// array
const myArr = []
typeof myArr // 'object'

// date
const myDate = new Date()
typeof myDate // 'object'

// regex
const myRegex = /hello/
typeof myRegex // 'object'
