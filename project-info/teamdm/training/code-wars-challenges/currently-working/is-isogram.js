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
