// always copy this template into each new coding challenge file
// !!! always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
/*
 */

// memorable summary: make it work, test it, make it pretty

// // // // // // // // // // // // // // start of the template
// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).


Note: side will be an integer
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully) */
/*
n/a
*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// It's OK to rename the parameter(s) in the codewars starter function if the parameter names are imprecise
function cubeChecker(volume, side) {
  /* 4. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
input: volume: number; possible values: any number
input: side: number; possible values: any number
output: boolean; possible values: true or false
  */

  // 5. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isNumber = (value) =>
    typeof value === 'number' && //
    !isNaN(value) // user may pass NaN (lodash)
  // i threw an error in a defensive coding practice.
  if (!isNumber(volume) && !isNumber(side))
    throw new Error('invalid input, both parameters must be numbers')

  const positiveSide = side > 0
  if (!positiveSide) return false // "guard clause" example

  /* 6. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? */
  /*
i want to get a boolean value that is true if the volume is equal to the positive side cubed and false if it is not
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

  const isCube = volume === Math.pow(side, 3)

  /* 8. use the named parts to create a readable solution. */

  /* 9. return the solution
        always return a variable, or, use only variables in return statements
        this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
        */
  //(done) DM: todoMM: you can leave out the "? true : false" because isCube is already a boolean
  // return isCube ? true : false
  return isCube
}
// 10. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
cubeChecker(56.3, 1) // false
cubeChecker(-1, 2) //  false
cubeChecker(8, 3) // false
cubeChecker(8, 2) // true
cubeChecker(-8, -2) // false
cubeChecker(0, 0) // false
cubeChecker(1, 5) // false
cubeChecker(125, 5) // true
cubeChecker(125, -5) // false

/* 11. Make it pretty! Review the code for conciseness and readability: clear, descriptive variable names
       note: as you are working, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time on it. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter.  */

/* 12. Final step: copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/

function cubeChecker(volume, side) {
  const isNumber = (value) => typeof value === 'number' && !isNaN(value)
  if (!isNumber(volume) && !isNumber(side))
    throw new Error('invalid input, both parameters must be numbers')

  const positiveSide = side > 0
  if (!positiveSide) return false

  const isCube = volume === Math.pow(side, 3)

  return isCube
}

cubeChecker(56.3, 1) // false
cubeChecker(-1, 2) //  false
cubeChecker(8, 3) // false
cubeChecker(8, 2) // true
cubeChecker(-8, -2) // false
cubeChecker(0, 0) // false
cubeChecker(1, 5) // false
cubeChecker(125, 5) // true
cubeChecker(125, -5) // false
cubeChecker('125', '5') // invalid input, both parameters must be numbers
