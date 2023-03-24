// DM: I cleaned this up. learn from what I changed

const vowels = ['a', 'e', 'i', 'o', 'u']
// function removeVowels()

function myFunction(str) {
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
  const alphasOnly = str.replace(/[^a-zA-Z]/g, '')
  console.log(typeof alphasOnly)
  // DM: I renamed this variable so that the name expresses what it IS rather than what it DOES.
  const alphas = alphasOnly.split('')
  console.log(alphas)
  const alphasLowerCase = alphas.map((c) => c.toLowerCase())
  const consonants = alphasLowerCase.filter((c) => !vowels.includes(c))
  console.log(consonants) //

  /* 4. use the named parts to create a readable solution. Tip: think about what you want to change (declarative), not how to change it (imperative)
   */
  // const initialCount = 0
  // const count = consonants.reduce((acc, cur) => {
  //   console.log(acc, cur)
  //   return acc + cur
  // }, 0)
  // DM: renamed 'count' to be more specific. I named it after teh answer to the question above: "WHAT do you want to calculate?"
  const numberOfConsonants = consonants.length
  console.log(numberOfConsonants)

  // 5. return the solution
  //    always return a variable, or, use only variables in return statements
  //    this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
  return numberOfConsonants

  // 6. list and describe anything that is unclear in the challenge description
  //    these would be the questions you'd be expected to ask in a interview situation
  //    practice reading the challenge description carefully
}

// 7. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)

myFunction('moie@') // 1
console.log(myFunction('aei@bcd!@{}$()')) // 3
console.log(myFunction('01234567890_')) // 0
console.log(myFunction('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#'))
