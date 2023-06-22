// DM: todoMM: interesting, but give me some contextual info so that I can understand what this is. where did you get it? what is an isogram? BTW, we gotta clean up all the exercises in currently-working/. Please put a comment at the top of each file, noting what the current status is, and what needs to happen next?
function isIsogram(str) {
  const splitStr = str.toLowerCase().split('')
  const result = true
  splitStr.forEach((letter, index) => {
    if (splitStr.indexOf(letter) !== index) {
      result = false
    }
  })
  return result
}
console.log(isIsogram('Dermatoglyphics')) // true
console.log(isIsogram('isogram')) // true
console.log(isIsogram('aba')) // false
