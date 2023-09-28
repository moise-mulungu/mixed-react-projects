const sentence = 'i am a developer'
const matchAllLowerCharacters = /[a-z]/g
const result = sentence.match(matchAllLowerCharacters)
console.log({ result })

const matchAllUpperCharacters = /[A-Z]/g
const result2 = sentence.match(matchAllUpperCharacters)
console.log({ result2 })

const matchBothUpperAndLowerCharacters = /[A-Z][a-z]/g
const result3 = sentence.match(matchBothUpperAndLowerCharacters)
console.log({ result3 })
