const sentence = 'i am a developer'
const matchAllLowerCharacters = /[a-z]/g
const result = sentence.match(matchAllLowerCharacters)
console.log({ result }) //  ["i", "a", "m", "a", "d", "e", "v", "e", "l", "o", "p", "e", "r"]
//(done) DM: todoMM: always write the result so that you can see it in the future without having to run the code

const matchAllUpperCharacters = /[A-Z]/g
const result2 = sentence.match(matchAllUpperCharacters)
console.log({ result2 })

const matchBothUpperAndLowerCharacters = /[A-Za-z]+/g
const result3 = sentence.match(matchBothUpperAndLowerCharacters)
console.log({ result3 }) //  ["i", "am", "a", "developer"] 
//(ok) DM: this returns null. You can find several examples in the repo already of how to do this correctly.
// MM: DM: I modified the match patter expression to /[A-Za-z]+/g instead of /[A-Z][a-z]+/g.
