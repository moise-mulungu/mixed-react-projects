// always copy this into each new coding challenge file

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
  // MM: i am getting this error: Uncaught ReferenceError: str is not defined. it's like the function is not getting the parameter. i am not sure how to fix this.
  // DM: todoMM: to solve this problem ask yourself the following questions: what is str? what should be in it? where do you expect str to be defined? where should it come from? Keep debugging this problem until you figure it out. it is a good learning point. Than continue with the solution we started yesterday.
  const alphas = str.replace(/[^a-zA-Z]/g, '')
  console.log(typeof alphas)
  // DM todoMM: rename this variable so that the name expresses what it IS rather than what it DOES. note: you can change the name fo the above variable, if it helps
  const convertToArray = alphas.split('')
  console.log(convertToArray)
  const alphaLowerCase = convertToArray.map((c) => c.toLowerCase())
  const consonants = alphaLowerCase.filter((c) => !vowels.includes(c))
  console.log(consonants) //

  /* 4. use the named parts to create a readable solution. Tip: think about what you want to change (declarative), not how to change it (imperative)
   */
  // const initialCount = 0
  // const count = consonants.reduce((acc, cur) => {
  //   console.log(acc, cur)
  //   return acc + cur
  // }, 0)
  // DM todoMM: this name could be more specific. name it after teh answer to the question above: "WHAT do you want to calculate?"
  const count = consonants.length
  console.log(count)

  // 5. return the solution
  //    always return a variable, or, use only variables in return statements
  //    this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
  return count

  // 6. list and describe anything that is unclear in the challenge description
  //    these would be the questions you'd be expected to ask in a interview situation
  //    practice reading the challenge description carefully
}

// 7. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)

myFunction('moie@')
console.log(myFunction('aei@bcd!@{}$()'))
console.log(myFunction('01234567890_'))
console.log(myFunction('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#'))
