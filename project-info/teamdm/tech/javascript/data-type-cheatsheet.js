// DM: todoMM: finish these. in the future, when you encounter any data-type issues, record them here; I added the different data types below, but I think you meant to add the data types to the examples above.

4 + 4 === 8 // number
4 + '4' === '44' // string
'4' + 4 === '44' // string
'' + 1 === '1' // string

// understand what the typeof operator provides
typeof null // 'object'
const myFunc = () => {}
typeof myFunc // 'function'
typeof {}.p // 'undefined'
typeof new Date() // 'object'
typeof [] // 'object'
typeof {} // 'object'

typeof NaN
;('number')

// primitive data types
// number
const myNum = 1
typeof myNum // 'number'

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

// non-primitive data types
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

