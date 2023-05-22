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
You are given a string containing a sequence (list) of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an "empty value" (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL

DM: todoDM: revisit undefined VS null meaning and usage: basically uninitialized and empty but ...

*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/570597e258b58f6edc00230d/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*
n/a
*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise
function array(commaSeparatedCharacterSequencesDirty) {
  /* 5. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
inputs: a string of character sequences separated by commas 
output: a string of the same character sequences separated by spaces after removing the first and last character sequence
  */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)

  // DM: todoDM: discuss strings are 'iterable';
  // DM: todoMM: practice copy selection (shift-alt-downArrow);
  // if (!isArrayOfStrings(string)) throw new Error('array must be an array of strings')
  // DM: todoDM: string method, RegExp exercises
  // defensive
  function cleanupString(string) {
    // " 1,2,3,4 ", ""
    return string.trim() // remove any beginning and ending spaces
  }
  const commaSeparatedCharacterSequences = cleanupString(commaSeparatedCharacterSequencesDirty)

  if (commaSeparatedCharacterSequences === '') return null

  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? 
        Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, DM: yes!)
        */
  /*
I want to remove the first and last strings from the array and then join the remaining strings with spaces
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
  const characterSequences = commaSeparatedCharacterSequences.split(',')
  const characterSequencesWithoutFirstAndLast = characterSequences.slice(1, -1)
  console.log({ characterSequencesWithoutFirstAndLast })
  const empty = characterSequencesWithoutFirstAndLast.length === 0
  if (empty) return null

  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
always return a variable, or, use only variables in return statements
this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
*/
  return characterSequencesWithoutFirstAndLast.join(' ')
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// expected result
array('') // null
array('1') // null
array('A1,B2') // null
array('1,2,3') // '2'
array('1,2,3,4') // '2 3'
array('A1,B2,C3,D4,E5') // 'B2 C3 D4'
array('A,1,23,456,78,9,Z') // '1 23 456 78 9'

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

/* 15. Duncan moves the file out of this directory when it is complete */
