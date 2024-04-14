const sentence = 'i am a developer'
const matchAllLowerCharacters = /[a-z]/g
const result = sentence.match(matchAllLowerCharacters)
console.log({ result }) //  ["i", "a", "m", "a", "d", "e", "v", "e", "l", "o", "p", "e", "r"]

const matchAllUpperCharacters = /[A-Z]/g
const result2 = sentence.match(matchAllUpperCharacters)
console.log({ result2 }) // null; because there are no upper case letters in the sentence.

const sentenceTwo = 'I am a developer with 100% of 56 attempts of #^ space _'

const matchAllAlphaNumerics = /\w+/g
const result4 = sentenceTwo.match(matchAllAlphaNumerics)
// DM: todoMM: expected result?
console.log({ result4 }) // ["I", "am", "a", "developer", "with", "100", "of", "56", "attempts", "of", "space", "_"]
// DM: all this text is repetitive and doesn't provide any additional information "; To match letters in JavaScript, you can use the following regular expression". So I removed it.(ok)
// howtojs: regexp:: matching alphabetical characters: /[A-Za-z]/. /[a-zA-Z]/g splits into letters, but /[A-Za-z]+/g splits into words.
const matchBothUpperAndLowerCharacters = /[A-Za-z]+/g
const result3 = sentence.match(matchBothUpperAndLowerCharacters)
console.log({ result3 }) //  ["i", "am", "a", "developer"]
