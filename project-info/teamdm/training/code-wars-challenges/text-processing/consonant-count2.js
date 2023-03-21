// always copy this into each new coding challenge file

const vowels = ['a', 'e', 'i', 'o', 'u']
// function removeVowels()

function myFunction(parameter1, parameter2) {
  /*
  1. describe the inputs and outputs in detail: their types and possible values
     sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

     inputs: 
       string of any character

     output: number of consonants
  */

  // 2. validate the input (convert types or transform if needed) (*offensive coding*)

  /* 3. break down the the 'variable' elements of the solution into the most granular (smallest) parts by
        assigning each part (string, boolean expression, etc.) to a well-named, descriptive variable.
        * each logical expressions must be assigned to a variable. 
				* the instructions often contain words that can be used in variable names.

		WHAT do you want to calculate? number of consonants
	  WHAT do you want to change?
	*/

  // "js remove non-letters from string"
  /*
	google searches:
	mdn regular expressions
	mdn string.replace
	mdn regexp.test
	*/
  const alphas = str.replace(/[^a-zA-Z]/, '') // i am getting this error: Uncaught ReferenceError: str is not defined. it's like the function is not getting the parameter. i am not sure how to fix this.
  const alphaLowerCase = alphas.map((c) => c.toLowerCase)
  const consonants = alphaLowerCase.filter((c) => !vowels.includes(c))

  /* 4. use the named parts to create a readable solution. Tip: think about what you want to change (declarative), not how to change it (imperative)
   */

  const count = consonants.reduce((acc, cur) => acc + cur, 0)

  // 5. return the solution
  //    always return a variable, or, use only variables in return statements
  //    this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
  return count

  // 6. list and describe anything that is unclear in the challenge description
  //    these would be the questions you'd be expected to ask in a interview situation
  //    practice reading the challenge description carefully
}

// 7. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)

myFunction('moie@') // 1
myFunction('aei@bcd!@{}$()') // 3

// i proposed this approach to the challenge:
function consonantCount(str) {
  // i define the consonants as all the letters that are not vowels
  const consonants = 'bcdfghjklmpqrstvwxyz'

  // i want to count the number of consonants in the string
  const count = 0

  // i split the string into an array of characters
  const splitStr = str.split('')

  // i iterate through the array of characters
  const strLoop = splitStr.forEach((char) => {
    // i check if the character is a consonant
    if (consonants.includes(char)) {
      count = count + 1
    }
  })
  //   const alphaChar = str.replace(/[aeiouAEIOU123456789]/gi, '')
  //   console.log({alphaChar})
  //   const alphaLowerCase = str.map((c) => c.toLowerCase())
  //   const consonants = alphaLowerCase.filter((c) => !vowels.includes(c))

  // const count = consonants.reduce((acc, cur) => acc + cur, 0)

  return strLoop
}

consonantCount('')