const stringExample =
  'This is a string with sequential characters from a to z in both lower and upper case'
// This will match all the sequential characters from a to z in both lower and upper case and return them as an array
//(ok) DM: make your howtos as concise as possible so they are faster to read
// howtojs: regexp:: matching a range of letters: /[A-Za-z0-9]/g.
const matchingChars = stringExample.match(/[a-zA-Z]/g)
console.log(matchingChars) // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] // DM: todoMM: show the eatual expected output here. This output is misleading still, as there will be no sequential letter matches.

