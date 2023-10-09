const sentence = 'i am a developer'
const matchAllLowerCharacters = /[a-z]/g
const result = sentence.match(matchAllLowerCharacters)
console.log({ result }) //  ["i", "a", "m", "a", "d", "e", "v", "e", "l", "o", "p", "e", "r"]

const matchAllUpperCharacters = /[A-Z]/g
const result2 = sentence.match(matchAllUpperCharacters)
// DM: todoMM: expected result? 
console.log({ result2 }) 

// DM: all this text is repetitive and doesn't provide any additional information "; To match letters in JavaScript, you can use the following regular expression". So I removed it.
// DM: todoMM: \w matches alphanumeric not just letters
// howtojs: regexp:: matching alphabetical characters: /[A-Za-z]/. /[a-zA-Z]/g splits into letters, but /[A-Za-z]+/g splits into words.
const matchBothUpperAndLowerCharacters = /[A-Za-z]+/g
const result3 = sentence.match(matchBothUpperAndLowerCharacters)
console.log({ result3 }) //  ["i", "am", "a", "developer"]


