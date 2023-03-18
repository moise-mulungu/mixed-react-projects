//Changing letters
// When provided with a String, capitalize all vowels
// For example:
// Input : "Hello World!"
// Output : "HEllO WOrld!"
// Notes for this kata (in case you didn't read the description) :
// Vowels are defined as: a, e, i, o, u
// Y is not a vowel

function swap(string) {
  //   const vowels = ['a', 'e', 'i', 'o', 'u']
  //   const stringArray = string.split('')
  //   const result = stringArray.map((letter) => {
  //     return vowels.includes(letter.toLowerCase()) ? letter.toUpperCase() : letter;
  //   })
  //   return result.join('') this is the same as the below, the naive approach

  // describe the inputs and outputs in detail: their types and possible values
  // inputs: a string of words, type: string
  // DM: I didn't see anything about 'unique' in the instructions above. 2 thoughts: 1) wrong assumptions is at the top of my debugging checklist, so careful with assumptions 2) copy-and-paste is efficient, but also a top origin of bugs - always be careful to check what you copy and paste is aligned with the local context
  // outputs: a string of unique words, type: string
  // validate the input (convert types or transform if needed) (*offensive coding*)
  const isString = typeof string === 'string'
  if (!isString) {
    throw new Error('the parameter passed must be a string')
  }

  // break down the the 'variable' elements of the solution into the most granular (smallest) parts
  // get vowels from string
  // DM: nice! love it, using a function!
  const isVowel = (letter) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes(letter)
  }
  // split string into array of letters
  // DM: good name! I adjusted it, since part of you training is ESL (English as a second language, 3rd, actually :) )
  const splitString = string.split('')

  // if string does not contain vowels, throw a message
  // DM: cool! I wouldn't have thought of this. benefit: saves time for users and future programmers who may use/re-use your code
  // DM: in a real app, the requirements would determine if lack of a vowel is an error, or not. If not, it is 100% acceptable to return the same value as the parameter that was passed (if there is no vowel, no change)
  // DM: I'm commenting this out, since it is not in the challenge instructions
  // if (!splitString.some(isVowel)) throw new Error('the string does not contain vowels')
  // MM: some is a new method that I just learned about, it is a great way to check if any of the elements in an array match a condition DM: cool! You'll be using .some() a lot

  // capitalize vowels
  const capitalizedVowels = splitString.map((letter) => {
    if (isVowel(letter)) return letter.toUpperCase()
    return letter
    // DM: todoMM: which do you think is more readable, the above, or the below. (they do the same thing)
    return isVowel(letter) ? letter.toUpperCase() : letter
  })

  // return the solution
  // DM: assign capitalizedVowels.join('') to a well-named variable. "withVowelsCapitalized" is fine
  const withVowelsCapitalized = capitalizedVowels.join('')
  return withVowelsCapitalized
  // DM: also an encouraging note, how to maximize your natural abilities: You are very verbal (many programmers are not), so focusing on choosing good variable names will help you stand out. I'm starting a file of sample variable names in this repo that you can add to and review periodically to keep common useful terms top-of-mind so that you can think up good variable names faster.

  // DM: always paste exactly everything from this section of the ./readme.md:
  //     "steps (in a **starter function**, which you can copy and paste each time you start a new challenge)"
  // That step would have reminded you: " 5. return the solution, always return a variable, or, use only variables in return statements ()"
}

swap('HllWrld!') // 'HllWrld!'
swap('HelloWorld!') // 'HEllOWOrld!'

// DM: this was a great first solution. I will always suggest a lot of changes (until you know everything I know), so don't be discouraged. Take some time to revel in the glory of a good solution! WE will keep perfecting your work, at a fast pace, because I want you to be great soon! As encouragement: employers/peers/tech leads will see that kind of code and assume that you are more senior as a developer than you really are!

// DM: todoDM: just for fun, write it the WRONG way. ppl like it because it seems "succinct" but our motto is: "more lines === faster reading". "succinct" can === "obfuscated code".

// DM: I copied the solution and omited all the comments, just to see what it would look like in real production code. Moise, it will be succinct and readable. Note, no comments are needed because the variable names serve as documentation.

function isVowel (letter) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return vowels.includes(letter)
}
function swapWithoutCodeComments (string) {
  const isString = typeof string === 'string'
  if (!isString) throw new Error('the parameter passed must be a string')

  const splitString = string.split('')
  const capitalizedVowels = splitString.map((letter) => {
    return isVowel(letter) ? letter.toUpperCase() : letter
  })

  const withVowelsCapitalized = capitalizedVowels.join('')
  return withVowelsCapitalized
}
swapWithoutCodeComments('HelloWorld!') // 'HEllOWOrld!'
