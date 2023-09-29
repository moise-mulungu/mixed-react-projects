const sentence = 'i am a developer'
const matchAllLowerCharacters = /[a-z]/g
const result = sentence.match(matchAllLowerCharacters)
console.log({ result }) // DM: todoMM: write the result so that you can see it in the future without having to run the code

const matchAllUpperCharacters = /[A-Z]/g
const result2 = sentence.match(matchAllUpperCharacters)
console.log({ result2 })

const matchBothUpperAndLowerCharacters = /[A-Z][a-z]/g
const result3 = sentence.match(matchBothUpperAndLowerCharacters)
console.log({ result3 }) // DM: this returns null. You can find several examples in the repo already of how to do this correctly.
