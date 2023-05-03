// always copy this template into each new coding challenge file
// !!! always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
/*
DM: done
*/

// memorable summary: make it work, test it, make it pretty

// // // // // // // // // // // // // // start of the template
// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
g
Return as a number.
examples?
*/

// 1.2 the coding challenge URL:
/*
 */

// 1.3 some tests from the coding challenge: ex: myFunction('', '') // expected result
/*

*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully) */
/*

*/

//  3. write tests (at the bottom of the file), then continue with step 4.

// DM: btw, if the parameter name is horrible (x tells you nothing), you can rename it. it doesn't affect anything as it is internal to the function.
function divCon(x) {
  /* 4. describe the inputs and outputs in detail: their types and possible values
      note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: integer...; possible values: number and string representations of integers

        output: number...; possible values: the rest of the sum of non string integers and string integers */
  /*

  */

  // 5. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  // DM: todoMM: great! add this to multiply-all-elements-in-an-array.js and put it in src/utils/array for future use
  const allIntegers = x.every((item) => Number.isInteger(Number(item))) // good job with every!
  if (!allIntegers) throw new Error('not all items of the array argument are integers')
  /* 6. state the solution in terms of WHAT (declarative), not HOW (imperative)
  WHAT do you want to change in the input to get the output?
  WHAT do you want to calculate based on the input? */
  /*
  return the sum of non string integers minus the sum of string integers
  */

  /* 7. break down the the 'variable' elements of the solution into the most granular (smallest) parts by
        assigning each part (string, boolean expression, etc.) to a well-named, descriptive variable.
        * each logical expressions must be assigned to a variable. 
	  * the instructions often contain words that can be used in variable names.
        * function names verbs+noun (createMyThing) or adverbs: (onClick, onSubmitHandler)
        * booleans are named with (positive) adjectives: (open, seen, isString)
        * everything else with nouns or adjectives: (myThing, myCoolThing)
        * variable names should express exactly what the variable contains
        * see naming-conventions.md*/
  // DM: great job!
  // DM: nonStringInt and stringInt do not describe what is in each variable (which is a total of the integers)
  // DM: I changed some var names so that it is clear that you don't know if each elem is a num or string
  // DM: note in naming-conventions.md don't use abbreviations. they cause cognitive load. more text = faster reading
  const nonStringInt = x
    .filter((item) => typeof item === 'number')
    .reduce((acc, cur) => acc + cur, 0)
  const stringInt = x
    .filter((item) => typeof item === 'string')
    .map((item) => Number(item))
    .reduce((acc, cur) => acc + cur, 0)

  /* 8. use the named parts to create a readable solution. */

  // DM: your solution goes here. please keep doing 7 and 8 separately.
  // DM: by that I mean: for each of the 2 variables above, .filter(), .filter().map() first and assign that to a variable. that is step 7.
  // DM: step 8:  .reduce() for each and assign the result to a variable. Then, add them together and assign it to a variable which is your solution.
  // DM: step 9: return the solution variable.
  // DM: why do each step separately when it is sometimes obvious? debugging! you need to be able to console.log each piece of logic. Also makes it easier to read and easier/faster to review by someone who is not familiar with the code.

  /* 9. return the solution
        always return a variable, or, use only variables in return statements
        this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
        */
  return nonStringInt - stringInt
}
// 10. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
divCon([9, 3, '7', '3']) // 2
divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]) // 14
divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']) // 13 // expected result

/* 12. Final step: copy the solution below this line, remove all comments below this line  */
// redo this when you have completed the above changes
function divCon(x) {
  const nonStringInt = x.filter((num) => typeof num === 'number').reduce((acc, cur) => acc + cur, 0)
  const stringInt = x
    .filter((str) => typeof str === 'string')
    .map((item) => Number(item))
    .reduce((acc, cur) => acc + cur, 0)
  return nonStringInt - stringInt
}
