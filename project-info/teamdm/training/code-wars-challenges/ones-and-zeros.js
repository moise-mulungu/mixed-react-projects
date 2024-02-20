// always copy this template into each new coding challenge file
// !!! always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
// note: You can be working multiple challenges, but always address all todoMMs in the code-wars-challenges directory before moving on to a new challenge. If you get stuck on one, leave a question in the todo-MM and you can do a new challenge. We just don't want to leave challenges unfinished. And, it makes for extra work to have to return to it later after memory has faded.
/*
 */

// memorable summary: make it work, test it, make it pretty

// // // // // // // // // // // // // // start of the template
// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/578553c3a1b8d5c40300037c/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*
n/a
*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise. pick a name using the any good words from the challenge description or from your input description in #5
function binaryArrayToNumber(binaryNumbers) {
  /* 5. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
input: array of 0s and 1s
output: number (yes, but not a decimal number, which implies decimal places, because the challenge description says "integer" specifically)
  */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  if (!Array.isArray(binaryNumbers)) throw new Error('input must be an array')
  const isBinaryArray = (binaryNumbers) => {
    // DM: good!
    // DM: binaryNumbers.every will fail if binaryNumbers is not an array (only arrays have a .every property and a .join property). So, I added the isArray test above
    return binaryNumbers.every((num) => num === 0 || num === 1)
  }
  if (!isBinaryArray) throw new Error('input must be an array of 0s and 1s')

  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? 
        Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, DM: yes!)
        */
  /*
I want to convert the binary array to a number
  */

  /* 8. break down the the 'variable' elements of the solution into the most granular (smallest) parts by
        assigning each part (string, boolean expression, etc.) to a well-named, descriptive variable.
        Naming variables: 
        * each logical expressions must be assigned to a variable. 
	  * the instructions often contain words that can be used in variable names.
        * function names verb or verb+noun (create, handleClick, handleSubmit)
        * booleans are named with (positive) adjectives: (open, seen, isString)
        * everything else with nouns or adjectives: (myThing, myCoolThing)
        * variable names should express exactly what the variable contains
        * see naming-conventions.md*/
  // "join" is a verb, so I'm changing it to "joined"
  const joinedBinaryNumbers = binaryNumbers.join('')
  const inBaseTwo = 2 // good name
  // decimal is inaccurate because the challenge description says integer and parseInt returns an integer
  // "binaryToDecimal" sounds like a function (that converts something "To" something)
  // always just name a thing most simply for what it is: "integer" is fine
  const integer = parseInt(joinedBinaryNumbers, inBaseTwo)
  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
      always return a variable, or, use only variables in return statements
      this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
   */
  return integer
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// expected result
binaryArrayToNumber('not array') // throw error
binaryArrayToNumber([0, 0, 0, 1]) // 1
binaryArrayToNumber([0, 0, 1, 0]) // 2
binaryArrayToNumber([0, 1, 0, 1]) // 5
binaryArrayToNumber([1, 0, 0, 1]) // 9
binaryArrayToNumber([0, 0, 1, 0]) // 2
binaryArrayToNumber([0, 1, 1, 0]) // 6
binaryArrayToNumber([1, 1, 1, 1]) // 15
binaryArrayToNumber([1, 0, 1, 1]) // 11

/* 11. Make it pretty! Review and edit the above code for conciseness and readability: clear, descriptive variable names
       note: the entire time you are working on the solution, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time figuring out the perfect variable name. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter/better if appropriate.  */

/* 13. code review and approval*/

/* Approved, with my changes above */

/* 14. AFTER code review and approval (like we do at work), copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/

//(done) DM: you can do step 14 now
function binaryArrayToNumber(binaryNumbers) {
  if (!Array.isArray(binaryNumbers)) throw new Error('input must be an array')
  const isBinaryArray = (binaryNumbers) => {
    return binaryNumbers.every((num) => num === 0 || num === 1)
  }
  if (!isBinaryArray) throw new Error('input must be an array of 0s and 1s')

  const joinedBinaryNumbers = binaryNumbers.join('')
  const inBaseTwo = 2

  const integer = parseInt(joinedBinaryNumbers, inBaseTwo)

  return integer
}
binaryArrayToNumber('not array') // throw error
binaryArrayToNumber([0, 0, 0, 1]) // 1
binaryArrayToNumber([0, 0, 1, 0]) // 2
binaryArrayToNumber([0, 1, 0, 1]) // 5
binaryArrayToNumber([1, 0, 0, 1]) // 9
binaryArrayToNumber([0, 0, 1, 0]) // 2
binaryArrayToNumber([0, 1, 1, 0]) // 6
binaryArrayToNumber([1, 1, 1, 1]) // 15
binaryArrayToNumber([1, 0, 1, 1]) // 11

/* 15. Copy here which of the other coders' solutions do you like the best? (Be sure in codewars.com to sort others' solutions by "Best Practices".)
       Add comments to the code, discussing why it is best, mentioning readability (and possibly efficiency).
       Note: the best solution should be readable as the highest priority, but not unnecessarily inefficient.
*/

/* 16. Duncan moves the file out of this directory when it is complete */

/* CURRENT STATUS (update this section before each commit of the file)


*/
