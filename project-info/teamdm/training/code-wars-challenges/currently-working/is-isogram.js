//(status: in progress) DM: todoMM: BTW, we gotta clean up all the exercises in currently-working/. Please put a comment at the top of each file, noting what the current status is, and what needs to happen next.

// always copy this template into each new coding challenge file
// !!! always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
// note: You can be working multiple challenges, but always address all todoM-Ms in the code-wars-challenges directory before moving on to a new challenge. If you get stuck on one, leave a question in the todo-MM and you can do a new challenge. We just don't want to leave challenges unfinished. And, it makes for extra work to have to return to it later after memory has faded.(good)
/*
 */

// memorable summary: make it work, test it, make it pretty

// // // // // // // // // // // // // // start of the template
// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true 
"aba" --> false 
"moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/54ba84be607a92aa900000f1
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*
n/a
*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise. pick a name using the any good words from the challenge description or from your input description in #5
function isIsogram(word) {
  /* 5. describe the inputs and outputs in detail: their types and possible values
  note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.
  
        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
input: string
output: boolean
  */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  if (typeof word !== 'string') throw new Error('input of isIsogram must be a string')
  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
 WHAT do you want to change in the input to get the output?
 WHAT do you want to calculate based on the input? 
 Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, Yes!)
 */
  /*
I want to return a boolean based on whether the input string is an isogram(a word that has no repeating letters, consecutive or non-consecutive) or not.
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
  const splitString = word.toLowerCase().split('')

  // let isogram = true
  // splitString.forEach((letter, index) => {
  //   if (splitString.indexOf(letter) !== index) {
  //     isogram = false
  //   }
  // })

  // DM: super; readable; uses === instead of !== which is easier to understand; concise;
  // DM: todoMM: all variable names should be camel case (i.e., the first letter is lower case(oh, I forgot about that. I just fix it.))
  const areIsograms = splitString.every((letter, index) => splitString.indexOf(letter) === index)
  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
  always return a variable, or, use only variables in return statements
  this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
  */
  return areIsograms
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// expected result
console.log(isIsogram('Dermatoglyphics')) // true
console.log(isIsogram('isogram')) // true
console.log(isIsogram('aba')) // false
console.log(isIsogram('moOse')) // false
console.log(isIsogram('isIsogram')) // false
console.log(isIsogram('')) // true

/* 11. Make it pretty! Review and edit the above code for conciseness and readability: clear, descriptive variable names
       note: the entire time you are working on the solution, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time figuring out the perfect variable name. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter/better if appropriate.  */

/* 13. code review and approval*/
/*  */

/* 14. AFTER code review and approval (like we do at work), copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/

/* 15. Copy here which of the other coders' solutions do you like the best? (Be sure in codewars.com to sort others' solutions by "Best Practices".)
       Add comments to the code, discussing why it is best, mentioning readability (and possibly efficiency).
       Note: the best solution should be readable as the highest priority, but not unnecessarily inefficient.
*/

/* 16. Duncan moves the file out of this directory when it is complete */

/* CURRENT STATUS (update this section before each commit of the file); MM: the code works, and all tests pass.
//(not done) DM: todoMM: hey Moise, I spend way too much time figuring out where you are at in these files. It would save time if you update the status each time you commit, so that I can more quickly know what to do and how to help. you didn't update the status before you commit. do all the tests pass? what is my next step?

STATUS: the current status of this file is that the code works and all tests pass. 
DM: the first thing AI do in a review is to search the file for todoMMs. If they are marked "(done)", then I can delete them. 


NEXT STEP:code review and approval

*/
