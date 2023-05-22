// DM: step 1: read my comments here; step2: start fresh in vowel-one-v2.js

// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

function vowelOne(s) {
  // ...
  //1. describe the inputs and outputs
  // inputs : any string value
  // outputs : string of 1's and 0's
  // non alpha characters should be included.
  //2. validate the input(defensive programming)
  const isString = typeof s === 'string'
  if (!isString) {
    throw new Error('the parameter passed must be a string')
  }

  //3. breakdown the problem into the most granular parts

  // include non alpha characters into the string
  // DM: I think the instruction means, "do not remove or replace non alpha characters". This would be a question to ask in an interview, because it is not clear. Based on this interpretation, I feel it is not necessary to specifically address non-alpha chars, just don't do anything to them

  const hasOnlyAlphaCharacters = new RegExp(/^[a-z0-9]+$/i).test(s) // at this step, thing seems be complex for me
  // const nonAlphaCharactersShorter = new RegExp(/^\w+$/).test(s)
  if (!hasOnlyAlphaCharacters) {
    return 'test with non alpha characters'
  }

  /* 
     Moise, you're listing imperative steps to take. Try to state (declarative) what result you want.
     Start with the instructions: 
     "// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's."
     for example:
     vowels should become 1s
     non-vowels should become 0s
  
     then code that (hint: code it using JS String methods that make use of regex, i.e., without converting the string to an array)
  
  */

  // split string into array of letters
  const splitString = s.split('')

  // extract vowels from string
  const extractedVowels = splitString.filter((letter) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes(letter)
  })

  // check if the string contains vowels
  const comparedString = extractedVowels.length > 0
  // DM: the instructions didn't say to fail with an error if the string has not vowels, just to change any vowels present to 1
  if (!splitString.includes(comparedString)) throw new Error('the string does not contain vowels')

  //4. return the solution
  const stringOfZerosAndOnes = splitString.map((item) => {
    return extractedVowels.includes(item) ? 1 : 0
  })
  return stringOfZerosAndOnes

  // DM: going forward, copy the exact contents of STARTER.js for each new challenge.
}

vowelOne('hello!') // my test case for the function vowelOne is not working DM: you returned an array, not a string

/* 

It's fine that you tried it the way you did. Certain techniques are in your mind. As you learn more techniques and practice with them, the best solution will come to your mind faster and faster. So, patiently keep trying and practicing.

*/
