// always copy this template into each new coding challenge file
// !!! always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
/*
 */

// memorable summary: make it work, test it, make it pretty

// // // // // // // // // // // // // // start of the template
// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points.

Some useful associations relevant to this kata:

1 Imperial Gallon = 4.54609188 litres
1 Mile = 1.609344 kilometres
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/557b5e0bddf29d861400005d/train/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully) */
/*

*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// It's OK to rename the parameter(s) in the codewars starter function if the parameter names are imprecise
function converter(mpg) {
  /* 4. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
input: any number
output: any decimal number with 2 decimal places
  */
 
 // 5. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
 
 const isNumber = typeof mpg === 'number'
 if (!isNumber) throw new Error('Input is not a number')
 
 /* 6. state the solution in terms of WHAT (declarative), not HOW (imperative)
 WHAT do you want to change in the input to get the output?
 WHAT do you want to calculate based on the input? 
 Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!)
 */
/*
i want to convert miles per imperial gallon to kilometers per liter, which means i need to multiply the input by 1.609344 and divide it by 4.54609188
*/

/* 7. break down the the 'variable' elements of the solution into the most granular (smallest) parts by
assigning each part (string, boolean expression, etc.) to a well-named, descriptive variable.
Naming variables: 
* each logical expressions must be assigned to a variable. 
* the instructions often contain words that can be used in variable names.
* function names verb or verb+noun (create, handleClick, handleSubmit)
* booleans are named with (positive) adjectives: (open, seen, isString)
* everything else with nouns or adjectives: (myThing, myCoolThing)
* variable names should express exactly what the variable contains
* see naming-conventions.md*/
const kilometerToMile = mpg * 1.609344
const kilometerPerLiter = kilometerToMile / 4.54609188

/* 8. use the named parts to create a readable solution. */

/* 9. return the solution
always return a variable, or, use only variables in return statements
this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
*/
return Number(kilometerPerLiter.toFixed(2))
}
// 10. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
converter(10) // 3.54
converter(20) // 7.08 
converter(30) // 10.62

/* 11. Make it pretty! Review the code for conciseness and readability: clear, descriptive variable names
       note: as you are working, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time on it. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter.  */

/* 12. Final step: copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/

function converter(mpg) {
  //code to convert miles per imperial gallon to kilometers per liter
  const kilometerPerLiter = (mpg * 1.609344) / 4.54609188
  return Number(kilometerPerLiter.toFixed(2))
}

converter(10) // 3.54
converter(20) // 7.08 
converter(30) // 10.62
