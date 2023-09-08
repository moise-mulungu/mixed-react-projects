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
You will be given an array of strings. The words in the array should mesh together where one or more letters at the end of one word will have the same letters (in the same order) as the next word in the array. But, there are times when all the words won't mesh.

Examples of meshed words:

"apply" and "plywood"

"apple" and "each"

"behemoth" and "mother"

Examples of words that do not mesh:

"apply" and "playground"

"apple" and "peggy"

"behemoth" and "mathematics"

If all the words in the given array mesh together, then your code should return the meshed letters in a string. You should return the longest common substring. You won't know how many letters the meshed words have in common, but it will be at least one.

If any pair of consecutive words fails to mesh, your code should return "failed to mesh".

Input: An array of strings. There will always be at least two words in the input array.

Output: Either a string of letters that mesh the words together or the string "failed to mesh".

Examples
#1:

["allow", "lowering", "ringmaster", "terror"] --> "lowringter"
because:

the letters "low" in the first two words mesh together
the letters "ring" in the second and third word mesh together
the letters "ter" in the third and fourth words mesh together.
#2:

["kingdom", "dominator", "notorious", "usual", "allegory"] --> "failed to mesh"
Although the words "dominator" and "notorious" share letters in the same order, the last letters of the first word don't mesh with the first letters of the second word.
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/5c1ae703ba76f438530000a2/train/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*
n/a
*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise. pick a name using the any good words from the challenge description or from your input description in #5
function wordMesh(arrayOfStrings) {
  console.log('--------------------------- wordMesh called:')
  console.log({ arrayOfStrings })
  /* 5. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
input: an array of strings
output: a string of letters that mesh the words together or the string "failed to mesh" when the words don't mesh
  */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isArrayOfStrings =
    Array.isArray(arrayOfStrings) && arrayOfStrings.every((item) => typeof item === 'string')
  if (!isArrayOfStrings) throw new TypeError('wordMesh: input must be an array of strings')
  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? 
        Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, Yes!)
        */
  /*
I want to find the longest common substring of the words in the array by comparing each word to the next word in the array. If the words don't mesh, I want to return "failed to mesh"
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

  // MM: the method to use is array.toString() method DM: array.reduce(). array.toString() is unpredictable and not meant to be used in production code

  const meshedWords = arrayOfStrings.reduce((acc, word, index) => {
    if (acc === 'failed to mesh') return acc
    const nextWord = arrayOfStrings[index + 1]
    console.log({ acc /* , word, index, nextWord */ })
    if (!nextWord) return acc
    // 'beacon condominium'
    const matchedCharacters = `${word} ${nextWord}`.match(/(.+) \1/)
    if (!matchedCharacters) return 'failed to mesh'

    console.log({ matchedCharacters: matchedCharacters[1] })
    return acc + matchedCharacters[1]
  }, '')
  console.log({ meshedWords })
  return meshedWords

  // let meshedWords = ''
  // for (let i = 0; i < arrayOfStrings.length - 1; i++) {
  //   const matchedCharacters = `${arrayOfStrings[i]} ${arrayOfStrings[i + 1]}`.match(/(.+) \1/)

  // const matchCharacters = `${arrayOfStrings[i]} ${arrayOfStrings[i + 1]}`.match(/(.+) \1/)
  // const match = arr[i + 1].match(new RegExp(`^${arr[i].slice(-2)}`))
  // console.log({ matchCharacters }) // DM: I moved to this line so that it will log even if 'failed to mesh'
  // console.log({ matchedCharacters })

  //   if (!matchedCharacters) return 'failed to mesh'
  //   meshedWords += matchedCharacters[0]
  // }
  //   if (!matchCharacters) return 'failed to mesh'
  //   meshedWords += matchCharacters[1]
  // }

  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
  always return a variable, or, use only variables in return statements
  this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
  */
  // return meshedWords
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// node project-info/teamdm/training/code-wars-challenges/currently-working/word-mesh.js
wordMesh(['beacon', 'condominium', 'umbilical', 'california']) // "conumcal";
wordMesh(['allow', 'lowering', 'ringmaster', 'terror']) // lowringter"
wordMesh(['abandon', 'donation', 'onion', 'ongoing']) // dononon"
wordMesh(['jamestown', 'ownership', 'hippocampus', 'pushcart', 'cartorapher', 'pheromone']) // "ownhippuscartpher"
wordMesh(['kingdom', 'dominator', 'notorious', 'usual', 'allegory']) // "failed to mesh"
wordMesh(['blame', 'much', 'return', 'on', 'me']) // "failed to mesh"
wordMesh(['exalt', 'altimeter', 'metermaid', 'maidenvoyage', 'voyageur']) // "altmetermaidvoyage"
wordMesh(['job', 'object', 'joust', 'on']) // "failed to mesh"
wordMesh(['apple', 'each', 'embark', 'cheese', 'stew', 'warp']) // "failed to mesh"

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

// DM: I'm adding this new item to the STARTER.js to make it faster for me to know what is the current status of the challenge.

/* CURRENT STATUS (update this section before each commit of the file)


CURRENT STATUS: the current status of this file is that the code is still not working. after checking if the words in the array mesh, I can not join all the meshed characters in one word. the piece of code where I am getting stuck is with the regex: const matchedCharacters = (`${arrayOfStrings[i]} ${arrayOfStrings[i + 1]}`).match


CURRENT STATUS: the solution is in progress, I have used another approach instead of using let and for loop to avoid mutating the array.

STATUS: in progress

NEXT STEP: get all tests to work

*/
