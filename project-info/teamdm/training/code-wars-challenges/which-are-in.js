//(status: incomplete) always copy this template into each new coding challenge file
// !!! always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
// note: You can be working multiple challenges, but always address all todoMMs in the code-wars-challenges directory before moving on to a new challenge. If you get stuck on one, leave a question in the todo-MM and you can do a new challenge. We just don't want to leave challenges unfinished. And, it makes for extra work to have to return to it later after memory has faded.
/*
 */

// memorable summary: make it work, test it, make it pretty

// // // // // // // // // // // // // // start of the template
// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of 
* the strings of a1 
* which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*

*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise. pick a name using the any good words from the challenge description or from your input description in #5
function sortSubstringsOfWords(array1, array2) {
  /* 5. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
inputs: two arrays of strings with possible values of any string
output: an array of strings in array1 that are substrings of the strings in the second array
  */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isArrayOfStrings = (array) => {
    return array.every((element) => typeof element === 'string')
  }
  if (!isArrayOfStrings(array1) || !isArrayOfStrings(array2))
    throw new Error('both arguments must be arrays of strings')

  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
  WHAT do you want to change in the input to get the output?
  WHAT do you want to calculate based on the input? 
  Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, DM: yes!)
  */
  /*
return a sorted array of strings that consists of the strings in the first array that are substrings of the strings in the second array
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

  // DM: great names in this solution, except the below name it is not sorted yet, so leave that part out. Also, you don't need to use the word 'array' in the name, just use a plural noun somewhere in the name: (ex: words, fish, people, birds, etc.). Also, the word 'Lexicographical' in the challenge description was superfluously written by the original author, because Lexicographical means the default sort, so you don't have to call it out. Pick a name that describes what it is: substringsOfArray2 (I based this name on your output description: "substrings of the strings in the second array")

  // howtojs: incorrect: not idiomatic JS:: avoid initializing an empty array and pushing to it. There are almost always array methods to do the job better
  // (as seen in the other file solution to this challenge). I allowed here an empty array with pushing so that you could practice loops and using the continue statement.
  const substringsOfArray2 = []

  loop1: for (let i = 0; i < array1.length; i++) {
    const currentWord = array1[i]
    for (let j = 0; j < array2.length; j++) {
      const currentWordInArray2 = array2[j]
      if (currentWordInArray2.includes(currentWord)) {
        substringsOfArray2.push(currentWord)
        // DM: since you are using 'for' loops, I assume you are concerned about efficiency, which is a correct concern in this challenge
        // 'continue' here, for efficiency, since it is no longer necessary to check the remaining words in array2. This resolves the concern about duplicates, also.
        continue loop1 // you have to name the loop you want to continue, otherwise it will 'continue' the inner loop
      }
    }
    // execution goes "here"
  }
  /* 9. use the named parts to create a readable solution. */

  const sortedSubstringsOfArray2 = substringsOfArray2.sort()

  /* 10. return the solution
always return a variable, or, use only variables in return statements
this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
*/
  return sortedSubstringsOfArray2
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// expected result:

array2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']

array1 = ['xyz', 'live', 'strong']
sortSubstringsOfWords(array1, array2) // ['live', 'strong']

array1 = ['live', 'strong', 'arp']
sortSubstringsOfWords(array1, array2) // ['arp', 'live', 'strong']

array1 = ['tarp', 'mice', 'bull']
sortSubstringsOfWords(array1, array2) // []

/* 11. Make it pretty! Review and edit the above code for conciseness and readability: clear, descriptive variable names
       note: the entire time you are working on the solution, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time figuring out the perfect variable name. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter/better if appropriate.  */

/* 13. code review and approval*/
/* 

DM: I made the above changes for you, so that I could demonstrate the "continue loop1" technique for you.

Approved with my changes.


*/

/* 14. Final step: after code review and approval (like we do at work), copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/

function sortSubstringsOfWords(array1, array2) {
  const isArrayOfStrings = (array) => {
    return array.every((element) => typeof element === 'string')
  }
  if (!isArrayOfStrings(array1) || !isArrayOfStrings(array2))
    throw new Error('both arguments must be arrays of strings')

  const substringsOfArray2 = []

  loop1: for (let i = 0; i < array1.length; i++) {
    const currentWord = array1[i]
    for (let j = 0; j < array2.length; j++) {
      const currentWordInArray2 = array2[j]
      if (currentWordInArray2.includes(currentWord)) {
        substringsOfArray2.push(currentWord)
        continue loop1
      }
    }
  }

  const sortedSubstringsOfArray2 = substringsOfArray2.sort()

  return sortedSubstringsOfArray2
}

array2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']

array1 = ['xyz', 'live', 'strong']
sortSubstringsOfWords(array1, array2) // ['live', 'strong']

array1 = ['live', 'strong', 'arp']
sortSubstringsOfWords(array1, array2) // ['arp', 'live', 'strong']

array1 = ['tarp', 'mice', 'bull']
sortSubstringsOfWords(array1, array2) // []

/* 15. Duncan moves the file out of this directory when it is complete */
