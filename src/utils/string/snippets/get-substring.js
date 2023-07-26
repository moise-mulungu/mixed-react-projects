// DM: what is this about?
const { get } = require('lodash')

// DM: I would not keep this as a snippet because it is very specific. It is really about meshing last letters to first letters, and the function name and the var names are not fully accurate. I'd remove this file, and perhaps put a very specific howtojs in the challenge file.
function getSameSubstrings(string1, string2) {
  const sameSubstrings = [] // todo: reduce?
  for (let i = 0; i < string1.length; i++) {
    const string1Substring = string1.substring(i)
    const string2Substring = string2.substring(0, string1Substring.length)
    if (string1Substring === string2Substring) {
      sameSubstrings.push(string1Substring)
    }
  }
  return sameSubstrings
}

/* 
console.log(getSameSubstrings('allow', 'lowering')) // ['low']
console.log(getSameSubstrings('lowering', 'ringmaster')) // ['ring']
 */
