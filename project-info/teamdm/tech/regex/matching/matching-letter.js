const sentence = 'i am a developer'
const matchAllLowerCharacters = /[a-z]/g
const result = sentence.match(matchAllLowerCharacters)
console.log({ result }) //  ["i", "a", "m", "a", "d", "e", "v", "e", "l", "o", "p", "e", "r"]

const matchAllUpperCharacters = /[A-Z]/g
const result2 = sentence.match(matchAllUpperCharacters)
console.log({ result2 })

const matchBothUpperAndLowerCharacters = /[A-Za-z]+/g
const result3 = sentence.match(matchBothUpperAndLowerCharacters)
console.log({ result3 }) //  ["i", "am", "a", "developer"]

// howtojs: regexp:: matching letters characters; To match letters in JavaScript, you can use the following regular expression: /\w/ or /[A-Za-z]/
