// always copy this into each new coding challenge file

// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
*/

// 1.3 some tests from the coding challenge: ex: myFunction('', '') // expected result
/*
assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully) */
/*
n/a
*/

//  3. write tests (at the bottom of the file), then continue with step 4.

function toCamelCase(string) {
  /* 4. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
    input: string of words delimited by '-' or '_'
		output: string in camel-case
  */

  // 5. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  // note this will also throw an error if parameter is not a string
  const words = string.trim()

  /* 6. state the solution in terms of WHAT (declarative), not HOW (imperative)
	      WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? */
  /*
    Changes to the input string:
		* remove delimiters: '-', '_'
		* capitalize first letter of each word (do not change the capitalization of the first word)
  */

  /* 7. break down the the 'variable' elements of the solution into the most granular (smallest) parts by
        assigning each part (string, boolean expression, etc.) to a well-named, descriptive variable.
        * each logical expressions must be assigned to a variable. 
				* the instructions often contain words that can be used in variable names.*/

  // get an array of words. hint: String.split(param) // param can be a RegExp

  /* 8. use the named parts to create a readable solution. */

  // capitalize each word (don't change the first word)
  // join the words back into a string

  /* 9. return the solution
      always return a variable, or, use only variables in return statements
      this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
   */
  return ''
}
// 10. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
toCamelCase('abc-dash_underscore') // expected result
toCamelCase('First-word-is-capitalized') // expected result
// from the code-wars sample tests
toCamelCase('') //  ''
toCamelCase('the_stealth_warrior') // "theStealthWarrior"
toCamelCase('The-Stealth-Warrior') // "TheStealthWarrior"
toCamelCase('A-B-C') //  "ABC"

/* 11. Review the code for conciseness and readability: clear, descriptive variable names  */