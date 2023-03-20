// DM: todoMM: step 1: read my comments in vowel-one.js, step 2: start fresh here

function vowelOne(string) {
  /*   
  1. describe the inputs and outputs in detail: their types and possible values
     sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

     inputs: any string value
       
     output: string of 1's and 0's and non-alpha characters (non alpha characters should not be omitted)
  */

  // 2. validate the input (convert types or transform if needed) (*offensive coding*)
  const isString = typeof string === 'string'
  if (!isString) throw new Error('the parameter passed must be a string')

  // 3. break down the the 'variable' elements of the solution into the most granular (smallest) parts by
  //       assigning each part (string, boolean expression, etc.) to a well-named, descriptive variable.
  //      each logical expressions must be assigned to a variable.
  // 			 the instructions often contain words that can be used in variable names

  // split string into array of letters
  const splitString = string.split('').map((c) => c.toLowerCase())
  // extract vowels from string
  const extractedVowels = splitString.filter((letter) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes(letter.toLocaleLowerCase())
  })

  // 4. use the named parts to create a readable solution. Tip: think about WHAT you want to change (declarative), NOT HOW to change it (imperative)
  /* 	
	   instructions: 
     "Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's."
		 
		 WHAT do you want to change?
     * vowels should become 1s
     * non-vowels should become 0s
  */
  // map vowels to 1 and non-vowels to 0
  const myRegExp = /[a-zA-Z]/
  const myRegExp.test('!') // false
  const vowelOneNonVowelZero = splitString.map((item) => {
    return vowels.includes(item) ? 1 : /[a-zA-Z]/.test(item) ? 0 : item
    // instead of 0, try regex to test if item is a non-letter
  })
  // join array into string
  const joinedVowelOneNonVowelZero = vowelOneNonVowelZero.join('')
  // return vowelOneNonVowelZero.join('')

  // 5. return the solution
  return joinedVowelOneNonVowelZero
  //    always return a variable, or, use only variables in return statements
  //    this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })

  // 6. list and describe anything that is unclear in the challenge description
  //    these would be the questions you'd be expected to ask in a interview situation
  //    practice reading the challenge description carefully
}
//7. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
vowelOne('Hello!!!') // '01001!!!'
// MM: toDM: I almost did the same with the first example, then I added 'toLowercase' and 'join' properties to the code flow.
