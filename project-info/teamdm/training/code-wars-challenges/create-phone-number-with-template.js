// always copy this template into each new coding challenge file
// !!! always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
// note: You can be working multiple challenges, but always address all todo-MMs in the code-wars-challenges directory before moving on to a new challenge. If you get stuck on one, leave a question in the todo-MM and you can do a new challenge. We just don't want to leave challenges unfinished. And, it makes for extra work to have to return to it later after memory has faded.
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

Pass a template that allows for multiple formats. Example: 
"123 456 7890"



Duncan will implement the first solution in this StackOverflow answer:
https://stackoverflow.com/a/61634647


*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript + enhancements by Duncan

DM: toMM: check out my solution, we'll do a Q&A when we review it together.

I expect it is a good thing to know how to pass a string formatting template to a function, so I added it to my knowledge base.

*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*
How do I group the numbers into the required format?
*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise. pick a name using the any good words from the challenge description or from your input description in #5
function createPhoneNumber(
  numbers,
  template = '{firstThreeNumbers} {secondThreeNumbers} {lastFourNumbers}' // delimiters: '{', '}'
) {
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
  console.log(firstThreeNumbers)

  const secondThreeNumbers = asString.slice(3, 6)
  const lastFourNumbers = asString.slice(6, 10)

  const replacements = { firstThreeNumbers, secondThreeNumbers, lastFourNumbers }
  console.log({ replacements })

  // howtojs: customize String.replace()
  const formattedPhoneNumber = template.replace(
    /{(\w+)}/g,
    // the 2nd argument to String.replace() can be a function of which first parameter is each {replacementString} and which returns the replacement
    (
      placeholderWithDelimiters, //  {firstThreeNumbers}
      placeholderWithoutDelimiters //  firstThreeNumbers // what is matched inside the ()
    ) => {
      return replacements.hasOwnProperty(placeholderWithoutDelimiters)
        ? replacements[placeholderWithoutDelimiters]
        : placeholderWithDelimiters
    }
  )

  console.log(formattedPhoneNumber)

  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
  always return a variable, or, use only variables in return statements
  this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
  */
  return formattedPhoneNumber
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// expected result

createPhoneNumber(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  '({firstThreeNumbers}) {secondThreeNumbers}-{lastFourNumbers}'
) // "(123) 456-7890"
createPhoneNumber(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  '{firstThreeNumbers} {secondThreeNumbers} {lastFourNumbers}'
) // "123 456 7890"

/* 11. Make it pretty! Review and edit the above code for conciseness and readability: clear, descriptive variable names
       note: the entire time you are working on the solution, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time figuring out the perfect variable name. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter/better if appropriate.  */

/* 13. code review and approval */
/* great, approved */

/* 14. Final step: after code review and approval (like we do at work), copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/

function createPhoneNumber(
  numbers,
  template = '{firstThreeNumbers} {secondThreeNumbers} {lastFourNumbers}'
) {
  const isArrayOfNumbers = numbers.every((number) => typeof number === 'number')
  if (!isArrayOfNumbers) throw new Error('input must be an array of numbers')
  const hasTenNumbers = numbers.length === 10
  if (!hasTenNumbers) throw new Error('input must be an array of 10 numbers')

  const asString = numbers.join('')

  const firstThreeNumbers = asString.slice(0, 3)

  const secondThreeNumbers = asString.slice(3, 6)
  const lastFourNumbers = asString.slice(6, 10)

  const replacements = { firstThreeNumbers, secondThreeNumbers, lastFourNumbers }

  // howtojs: customize String.replace()
  const formattedPhoneNumber = template.replace(
    /{(\w+)}/g,

    (placeholderWithDelimiters, placeholderWithoutDelimiters) => {
      return replacements.hasOwnProperty(placeholderWithoutDelimiters)
        ? replacements[placeholderWithoutDelimiters]
        : placeholderWithDelimiters
    }
  )
  return formattedPhoneNumber
}

createPhoneNumber(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  '({firstThreeNumbers}) {secondThreeNumbers}-{lastFourNumbers}'
) // "(123) 456-7890"
createPhoneNumber(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  '{firstThreeNumbers} {secondThreeNumbers} {lastFourNumbers}'
) // "123 456 7890

/* 15. Copy here which of the other coders' solutions do you like the best? (Be sure in codewars.com to sort others' solutions by "Best Practices".)
       Add comments to the code, discussing why it is best, mentioning readability (and possibly efficiency).
       Note: the best solution should be readable as the highest priority, but not unnecessarily inefficient.
MM: I like this code because it looks clean and easy to read.
DM: I like it, too. (even though it uses let)
*/
function createPhoneNumber(numbers) {
  let format = '(xxx) xxx-xxxx'

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i])
  }

  return format
}
// check this out: (not using let)
function createPhoneNumber(numbers) {
  return '(xxx) xxx-xxxx'
    .split('')
    .map((char) => {
      if (char === 'x') return numbers.shift()
      return char
    })
    .join('')
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

/* CURRENT STATUS and NEXT STEPS (update this section before each commit of the file)
   Does the code work, i.e., do all the tests pass? If not, say you're stuck and there are questions above. What help do you need from me? What are the next steps for you or me?

   STATUS: the status of this file is that the code works and all test cases pass. your code review and approval are requested here. 
   DM: it looks like I had already approved. (cool!)
   
   //(done) DM: what is my next step? Every time you edit a challenge file, update he status section. (even if the next step seems obvious to you.) I want to come in to a file, read next step, then just do it, no guessing. This will save me time I can instead devote to teaching you.(I am a bit confused when you are asking about the next step. on line 213 i gave the current status of this file and provide clarity on the next step which is your review and approval, I don't know if I gave enough or less information on that point as you suggested me to do so! would you mind helping me with how to write current status of a file, please?.)
   
   next step: move out of directory
   
*/
