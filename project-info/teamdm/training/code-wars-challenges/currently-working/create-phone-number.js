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
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*
How do I group the numbers into the required format?
*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise. pick a name using the any good words from the challenge description or from your input description in #5
function createPhoneNumber(numbers) {
  /* 5. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
input: an array of 10 integers (between 0 and 9)
output: a string of those numbers in the form of a phone number
  */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isArrayOfNumbers = numbers.every((number) => typeof number === 'number')
  if (!isArrayOfNumbers) throw new Error('input must be an array of numbers')
  const hasTenNumbers = numbers.length === 10
  if (!hasTenNumbers) throw new Error('input must be an array of 10 numbers')
  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? 
        Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, DM: yes!)
        */
  /*
I want to return a string of numbers in the form of a phone number.
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
  const asString = numbers.join('')

  // console.log(typeof asString)
  const firstThreeNumbers = asString.slice(0, 3)
  // console.log(firstThreeNumbers)
  const secondThreeNumbers = asString.slice(3, 6)
  const lastFourNumbers = asString.slice(6, 10)
  const formattedPhoneNumber = `(${firstThreeNumbers}) ${secondThreeNumbers}-${lastFourNumbers}`
  //   console.log(formattedPhoneNumber)

  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
  always return a variable, or, use only variables in return statements
  this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
  */
  return formattedPhoneNumber
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// expected result

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // "(111) 111-1111"
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"
createPhoneNumber([6, 7, 4, 2, 8, 9, 1, 2, 3, 4]) // "(674) 289-1234"
createPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) // "(519) 555-4468"
createPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) // "(345) 501-2527"

/* 11. Make it pretty! Review and edit the above code for conciseness and readability: clear, descriptive variable names
       note: the entire time you are working on the solution, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time figuring out the perfect variable name. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter/better if appropriate.  */

/* 13. code review and approval*/
/*  */

/* 14. Final step: after code review and approval (like we do at work), copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/

function createPhoneNumber(numbers) {
  const isArrayOfNumbers = numbers.every((number) => typeof number === 'number')
  if (!isArrayOfNumbers) throw new Error('input must be an array of numbers')
  const hasTenNumbers = numbers.length === 10
  if (!hasTenNumbers) throw new Error('input must be an array of 10 numbers')

  const asString = numbers.join('')

  const firstThreeNumbers = asString.slice(0, 3)
  const secondThreeNumbers = asString.slice(3, 6)
  const lastFourNumbers = asString.slice(6, 10)
  const phoneNumber = `(${firstThreeNumbers}) ${secondThreeNumbers}-${lastFourNumbers}`

  return phoneNumber
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // "(111) 111-1111"
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"
createPhoneNumber([6, 7, 4, 2, 8, 9, 1, 2, 3, 4]) // "(674) 289-1234"
createPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) // "(519) 555-4468"
createPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) // "(345) 501-2527"

/* 15. Duncan moves the file out of this directory when it is complete */

/* CURRENT STATUS and NEXT STEPS (update this section before each commit of the file)
   Does the code work, i.e., do all the tests pass? If not, say you're stuck and there are questions above. What help do you need from me? What are the next steps for you or me?
   MM: the code works, all tests pass.
*/
