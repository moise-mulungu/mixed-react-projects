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
You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and "template literals". You can, however, use the String constructor and any related functions.
You cannot use the following:

"Hello, World!"
'Hello, World!'
`Hello, World!`

DM: todoDM: vocab entry on literals

*/
// examples of creating an array from 1) array literal, 2) array constructor
const myArrayFromLiteral = [1, 2] // array literal
const myArrayFromArrayConstructor = new Array(1, 2) // array constructor (google "mdn array constructor")

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/584c7b1e2cb5e1a727000047/train/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*
I have used the .replace() character and set the parameter to "hello world", which is not intended to be used as i could not figure out another solution.

DM: good to be resourceful, but changing the "function signature" evades the purpose of the test. So, read the example of arrays I put above, and try again.
I could not create a string of hello world without quotes with the String constructor. I had to look up the solution on how to fix it. I got this solution on using the String.fromCharCode() method to create a string of hello world without quotes.
DM: good!
*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)
// no tests are provided here

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise
// const helloWorld = () => { // from the challenge
function helloWorld() {
  // consistency: we use functions, not arrow functions

  /* 5. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
    input: none
    output: a string of hello world
  */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)

  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? 
        Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, DM: yes!)
        */
  /*
I want to return a non-string of hello world
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

  // howtojs: create a character based on an ascii number (character code) (without using raw strings)
  const noRawString = String.fromCharCode(
    72, // H
    101, // e
    108, // l
    108, // l
    111, // o
    44, // ,
    32, // space
    87, // W
    111, // o
    114, // r
    108, // l
    100, // d
    33 // !
  )
  console.log(noRawString)

  /* 10. return the solution
      always return a variable, or, use only variables in return statements
      this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
   */
  return noRawString
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
helloWorld('hello world') //
// expected result

/* 11. Make it pretty! Review and edit the above code for conciseness and readability: clear, descriptive variable names
       note: the entire time you are working on the solution, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time figuring out the perfect variable name. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter/better if appropriate.  */

/* 13. code review and approval*/
/* approved. but wait for approval before doing step 14 */

/* 14. Final step: after code review and final approval (like we do at work), I'll leave a comment here, and you can: copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/

function helloWorld() {
  const noRawString = String.fromCharCode(
    72,
    101,
    108,
    108,
    111,
    44,
    32,
    87,
    111,
    114,
    108,
    100,
    33
  )
  return noRawString
}
