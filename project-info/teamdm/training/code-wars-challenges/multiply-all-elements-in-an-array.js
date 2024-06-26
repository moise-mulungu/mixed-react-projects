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
To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) // [2, 4, 6]
You must not mutate the original array.

function myHigherOrderFunction (arrayOfIntegers) {
  return function (integer) {
    // ...
    return []
  }
}
// as an arrow function
const myHigherOrderArrowFunction = (arrayOfIntegers) = (integer) => []

myHigherOrderFunction([1, 2, 3])(2) // [2, 4, 6]
// - OR -
const multiplyByFunction = myHigherOrderFunction([1, 2, 3])
const result = multiplyByFunction(2)
const result = multiplyByFunction(3)
const result = multiplyByFunction(4)

*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*

*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise
// return a function

function multiplyAll(arrayOfIntegers) {
  /* 5. describe the inputs and outputs in detail: their types and possible values
note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

inputs:
parameter1: string|number|...; possible values:
parameter2: string|number|...; possible values:

output: string|number|...; possible values: */
  /*
inputs: array of integers
output: function
  inputs: integer
  output: array of integers
*/

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isArray = (value) => Array.isArray(value)
  // isNumber = (value) => typeof value === 'number'
  if (!isArray(arrayOfIntegers)) throw new Error('arrayOfIntegers is not an array')

  const allIntegers = arrayOfIntegers.every((item) => Number.isInteger(item))
  if (!allIntegers(arrayOfIntegers)) throw new Error('arrayOfIntegers array should all be integers')

  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
WHAT do you want to change in the input to get the output?
WHAT do you want to calculate based on the input? 
Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, DM: yes!)
*/
  /*
  function myHigherOrderFunction (arrayOfIntegers) {
    return function (integer) {
      const calculatedIntegers = ...
      return calculatedIntegers
    }
  }
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

  /* 9. use the named parts to create a readable solution. */

  // howtojs: interview question: example: closure:: arrayOfIntegers is now 'closed over' by subFunction
  function subFunction(integer) {
    const multipliedIntegers = arrayOfIntegers.map((item) => item * integer)
    return multipliedIntegers
  }

  /* 10. return the solution
       always return a variable, or, use only variables in return statements
       this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
       */
  return subFunction
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// expected result
multiplyAll([1, 2, 3])(2) // [2, 4, 6]
multiplyAll([1, 2, 3])(1) // [1, 2, 3]
multiplyAll([1, 2, 3])(0) // [0, 0, 0]
multiplyAll([])(10) // []

/* 11. Make it pretty! Review and edit the above code for conciseness and readability: clear, descriptive variable names
       note: the entire time you are working on the solution, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time figuring out the perfect variable name. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter/better if appropriate.  */

/* 13. code review and approval*/
/* Good. once you do the todo-MM above, you can do step 14 */

/* 14. Final step: after code review and approval (like we do at work), copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/

function multiplyAll(arrayOfIntegers) {
  const isArray = (value) => Array.isArray(value)
  if (!isArray(arrayOfIntegers)) throw new Error('arrayOfIntegers is not an array')

  const allIntegers = arrayOfIntegers.every((item) => Number.isInteger(item))
  if (!allIntegers(arrayOfIntegers)) throw new Error('arrayOfIntegers array should all be integers')

  function subFunction(integer) {
    const multipliedIntegers = arrayOfIntegers.map((item) => item * integer)
    return multipliedIntegers
  }

  return subFunction
}

multiplyAll([1, 2, 3])(2) // [2, 4, 6]
multiplyAll([1, 2, 3])(1) // [1, 2, 3]
// DM: take notice of the code-wars tests how they test edge cases, like multiplying by 0 or empty array. You'll want to test edge cases when you devise tests for your own code.
multiplyAll([1, 2, 3])(0) // [0, 0, 0]
multiplyAll([])(10) // []
