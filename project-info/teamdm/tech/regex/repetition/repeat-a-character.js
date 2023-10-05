const regex = /[l{2}]/g
const string = 'hello'

console.log(string.match(regex)) // ['l', 'l']

const text = 'aaaaaa'
const reg = /[a{}]/g
const replacedText = text.replace(reg, 'x')

console.log(replacedText) // "xxxxxx"

// howtojs: regexp:: repeating characters ; to repeat a character in a string, use curly braces to specify the number of times the character should be repeated. /[a{3}]/g matches any sequence of three "a" characters.
