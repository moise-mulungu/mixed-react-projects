// DM: moise, I cleaned this one up. check out a few changes I made.

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

  // 4. use the named parts to create a readable solution. Tip: think about WHAT you want to change (declarative), NOT HOW to change it (imperative)
  /* 	
	   instructions: 
     "Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's."
		 
		 WHAT do you want to change?
     * vowels should become 1s
     * non-vowels should become 0s
  */
  // map vowels to 1 and non-vowels to 0
  const isAlphaRegExp = /[a-zA-Z]/
  myRegExp.test('!') // false
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const vowelOneNonVowelZero = splitString.map((item) => {
    return vowels.includes(item) ? 1 : isAlphaRegExp.test(item) ? 0 : item
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

// without comments:

function vowelOneWithoutComments(string) {
  const isString = typeof string === 'string'
  if (!isString) throw new Error('the parameter passed must be a string')

  const splitString = string.split('').map((c) => c.toLowerCase())

  const isAlphaRegExp = /[a-zA-Z]/
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const vowelOneNonVowelZero = splitString.map((item) => {
    return vowels.includes(item) ? 1 : isAlphaRegExp.test(item) ? 0 : item
  })

  const joinedVowelOneNonVowelZero = vowelOneNonVowelZero.join('')
  return joinedVowelOneNonVowelZero
}
