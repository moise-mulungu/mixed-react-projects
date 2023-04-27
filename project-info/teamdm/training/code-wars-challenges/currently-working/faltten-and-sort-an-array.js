// import  isSorted from '@/utils/array/is-array-sorted.js' i wanted to import isSorted from '@/utils/array/is-array-sorted, but i was getting an error, i am trying to figure it out.
// always copy this template into each new coding challenge file
// !!! always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
// note: You can be working multiple challenges, but always address all todoMMs in the code-wars-challenges directory before moving on to a new challenge. If you get stuck on one, leave a question in the todoMM and you can do a new challenge. We just don't want to leave challenges unfinished. And, it makes for extra work to have to return to it later after memory has faded.
/*
 */

// memorable summary: make it work, test it, make it pretty

// // // // // // // // // // // // // // start of the template
// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*
n/a
*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise
function flattenAndSort(array) {
  /* 5. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
input: array of arrays of integers.
output: array of integers sorted in ascending order.
  */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isArray = Array.isArray(array)
  if (!isArray) throw new Error('input must be an array')

  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
  WHAT do you want to change in the input to get the output?
  WHAT do you want to calculate based on the input? 
        Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, DM: yes!)
        */
  /*
i want to sum or flatten all the arrays into one array, then sort the array in ascending order.
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
  const flattenedArray = array.flat()
  const sortedArray = flattenedArray.sort((a, b) => a - b)
  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
      always return a variable, or, use only variables in return statements
      this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
   */
  return sortedArray
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// expected result
flattenAndSort([2, [1, 2]]) // [1,2,2]
flattenAndSort([[], []]) // []
flattenAndSort([[], [1]]) // [1]

flattenAndSort([
  [3, 2, 1],
  [7, 9, 8],
  [6, 4, 5],
]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]) // [1, 2, 3, 4, 5, 6, 100]

/* 11. Make it pretty! Review the code for conciseness and readability: clear, descriptive variable names
       note: the entire time you are working on the solution, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time figuring out the perfect variable name. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter/better if appropriate.  */
function flattenAndSort(array) {
  const isArray = Array.isArray(array)
  if (!isArray) throw new Error('input must be an array')
  const flattenedArray = array.flat()
  const sortedArray = flattenedArray.sort((a, b) => a - b)
  return sortedArray
}

flattenAndSort([2, [1, 2]]) // []
flattenAndSort([[], []]) // []
flattenAndSort([[], [1]]) // [1]
flattenAndSort([
  [3, 2, 1],
  [7, 9, 8],
  [6, 4, 5],
]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]) // [1, 2, 3, 4, 5, 6, 100]

/* 13. code review and approval*/
/* DM: todoMM: super! do 14 and move out of the directory */

/* 14. Final step: after code review and final approval (like we do at work), I'll leave a comment here, and you can: copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/
