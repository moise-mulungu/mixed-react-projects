// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

function vowelOne(s) {
  // ...
  //1. describe the inputs and outputs
    // inputs : any string values
    // outputs : strings of 1's and 0's
    // non alpha characters should be included.
  //2. validate the input(defensive programming)
const validateString = typeof s === 'string'
if(!validateString) {
    throw new Error('the parameter passed must be a string')
}

//3. breakdown the problem into the most granular parts
// include non alpha characters into the string

const nonAlphaCharacters = new RegExp(/^[a-z0-9]+$/i).test(s)

if(!nonAlphaCharacters) {
    return 'test with non alpha characters'
}
// split string into array of letters
const splitString = s.split('')

// extract vowels from string
const extractedVowels = splitString.filter((letter) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes(letter)
})

// check if the string contains vowels
const comparedString = extractedVowels.length > 0
if (!splitString.includes(comparedString)) throw new Error('the string does not contain vowels')

//4. return the solution
const stringOfZerosAndOnes = splitString.map((item) => {
    return extractedVowels.includes(item) ? 1 : 0
})
return stringOfZerosAndOnes

}

vowelOne('hello')