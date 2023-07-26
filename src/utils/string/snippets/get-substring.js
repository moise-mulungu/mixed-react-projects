const { get } = require('lodash')

function getSameSubstrings(string1, string2) {
  const sameSubstrings = []
  for (let i = 0; i < string1.length; i++) {
    const string1Substring = string1.substring(i)
    const string2Substring = string2.substring(0, string1Substring.length)
    if (string1Substring === string2Substring) {
      sameSubstrings.push(string1Substring)
    }
  }
  return sameSubstrings
}

console.log(getSameSubstrings('allow', 'lowering')) // ['low']
console.log(getSameSubstrings('lowering', 'ringmaster')) // ['ring']
