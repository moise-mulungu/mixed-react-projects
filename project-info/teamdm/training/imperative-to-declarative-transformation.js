
// DM: if any of the array methods is unclear, study the MDN documentation for the method: google "MDN array reduce"

function uniTotalImperative(string) {
  let total = 0 
  for (let i = 0; i < string.length; i++) {
     total += string.charCodeAt(i)
  }
  return total
}
console.log(uniTotalImperative('aloha'))

// replace for(let ...) and use of string index with:
// string.split - replaces use of string index 
// array.forEach - loops through an array without for() - more readable
function uniTotalTransformationStep1(string) {
  let total = 0 
  const stringArray = string.split('')
  stringArray.forEach((char) => {
    total += char.charCodeAt(0)
  })
  return total
}
console.log(uniTotalTransformationStep1('aloha'))

// chain the two array methods
function uniTotalTransformationStep2(string) {
  let total = 0 
  string.split('').forEach((char) =>  {
    total += char.charCodeAt(0)
  })
  return total
}
console.log(uniTotalTransformationStep2('aloha'))

// use array.map to transform array of characters to an array of charCodes
// use array.reduce to perform the calculation and remove the need for 'let'
// use array.filter is to make an array into a smaller array - "smaller array" is the key concept, not the nature of the filter




function uniTotalTransformationStep3(string) {
	const chars = string.split('') // ['a', 'l', 'o', 'h', 'a', ]
	const charCodes = chars.map((char) =>  {
    return char.charCodeAt(0)
  }) // array of numbers
  const total = charCodes.reduce(
		(acc, cur) => {
			// cur is the current elem of the array for this loop
			// return the new value of acc
			return acc + cur 
		}, 
		0 // initialize the value of acc (accumulator)
	)
  return total
}
console.log(uniTotalTransformationStep3('aloha'))

// use more concise (readable) syntax by
function uniTotal(string) {
  return string.split('')
	  .map((char) => char.charCodeAt(0))
	  .reduce((acc, cur) => acc + cur, 0)
}
console.log(uniTotal('aloha'))

// DM: todoDM: set up a structure for working examples of React techniques so Moise can put new/interesting/useful/hard components from Joy of React and components we use in the portfolio and apps

