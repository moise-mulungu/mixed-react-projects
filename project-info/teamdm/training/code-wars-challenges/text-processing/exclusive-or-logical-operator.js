// always copy this template into each new coding challenge file
// !!! always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
/*
 */

// memorable summary: make it work, test it, make it pretty

// // // // // // // // // // // // // // start of the template
// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:
      false xor false == false // since both are false
      true xor false == true // exactly one of the two expressions are true
      false xor true == true // exactly one of the two expressions are true
      true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c/train/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully) */
/*
n/a
*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

function xor(a, b) {
  // It's OK to rename the parameter(s) in the codewars starter function if the parameter names are imprecise
  /* 4. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
input: 2 booleans; possible values: true, false
output: boolean; possible values: true, false
  */

  // 5. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isBoolean = (value) => typeof value === 'boolean'
  if (!isBoolean(a) && !isBoolean(b)) throw new Error('both parameters must be booleans') // good!

  /* 6. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? */
  /*
get (is a verb === how) the exclusive or of the two booleans depending on their values (this is repeating the instructions. what is "exclusive or"? what are the "values")
example of how to write this section: true if one of the operands is true, otherwise false (this way, it makes it clear that you focus on "one of the operands is true" and anything else, you just return false)
  */

  /* 7. break down the the 'variable' elements of the solution into the most granular (smallest) parts by
        assigning each part (string, boolean expression, etc.) to a well-named, descriptive variable.
        Naming variables: DM todoMM: review these
        * each logical expressions must be assigned to a variable. 
	  * the instructions often contain words that can be used in variable names.
        * function names verbs+noun (createMyThing) or adverbs: (onClick, onSubmitHandler)
        * booleans are named with (positive) adjectives: (open, seen, isString)
        * everything else with nouns or adjectives: (myThing, myCoolThing)
        * variable names should express exactly what the variable contains
        * see naming-conventions.md*/

  /* 8. use the named parts to create a readable solution. */

  const areSame = a === b // DM: cool solution!

  /* 9. return the solution
      always return a variable, or, use only variables in return statements
      this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
   */

  // DM: this doesn't work (but the version below works). be sure to make it work, test, make it pretty BEFORE you do step 12
  if (!areSame) return false
  return true
}
// 10. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)

/* 11. Make it pretty! Review the code for conciseness and readability: clear, descriptive variable names
       note: as you are working, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time on it. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter.  */

/* 12. Final step: copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/

function xor(a, b) {
  const isBoolean = (value) => typeof value === 'boolean'
  if (!isBoolean(a) && !isBoolean(b)) throw new Error('both parameters must be booleans')
  const areSame = a === b
  return areSame ? false : true
}

xor(false, false) // false
xor(true, false) // true
xor(false, true) // true
xor(true, true) // false
xor(1, 2) // Error: both parameters must be booleans

/*


DM: todoDM: next: vars names that teach;
*/
