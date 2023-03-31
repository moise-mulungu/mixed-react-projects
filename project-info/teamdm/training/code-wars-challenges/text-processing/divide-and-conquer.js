// always copy this template into each new coding challenge file
// !!! always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
/*

*/

// memorable summary: make it work, test it, make it pretty

// // // // // // // // // // // // // // start of the template
// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
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

function divCon(x) {
  /* 4. describe the inputs and outputs in detail: their types and possible values
      note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: integer...; possible values: number and string representations of integers

        output: number...; possible values: the rest of the sum of non string integers and string integers */
  /*

  */

  // 5. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
const isIntegers = x.every((item) => Number.isInteger(item))
      if (!isIntegers) throw new Error('not all items are integers')
  /* 6. state the solution in terms of WHAT (declarative), not HOW (imperative)
  WHAT do you want to change in the input to get the output?
  WHAT do you want to calculate based on the input? */
  /*
  return the sum of non string integers minus the sum of string integers
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
  const nonStringInt = x.filter((num) => typeof num === 'number').reduce((acc, cur) => acc + cur, 0)
  const stringInt = x
    .filter((str) => typeof str === 'string')
    .map((item) => Number(item))
    .reduce((acc, cur) => acc + cur, 0)

  /* 8. use the named parts to create a readable solution. */

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

function divCon(x) {
  const nonStringInt = x.filter((num) => typeof num === 'number').reduce((acc, cur) => acc + cur, 0)
  const stringInt = x
    .filter((str) => typeof str === 'string')
    .map((item) => Number(item))
    .reduce((acc, cur) => acc + cur, 0)
  return nonStringInt - stringInt
}
