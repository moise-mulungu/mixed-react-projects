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
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*
n/a
*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise. pick a name using the any good words from the challenge description or from your input description in #5
function getCount(stringOfLetters) {
  /* 5. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
input: string of letters
output: number of vowels in the string
  */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isStringOfLetters = typeof stringOfLetters === 'string'
  if (!isStringOfLetters) throw new Error('input must be a string of letters')
  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? 
        Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, DM: yes!)
        */
  /*
i want to count the number of vowels in the string
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
  const vowels = ['a', 'e', 'i', 'o', 'u']
  // DM: used the name 'characters' (ASCII characters) because the test data contains spaces and empty string, not just letter
  const characters = stringOfLetters.split('')

  /* 9. use the named parts to create a readable solution. */

  // DM: I'm sure your initial solution works correctly and completely, but declaring an empty array, then array.push inside a .map or .forEach is not using JS properly, so that approach wouldn't pass a code review. After you solve the challenge using the method I suggest, you'll see that the empty-array-push code is less readable.
  const sumOfAllVowels = characters.reduce((acc, curr) => {
    /* your code goes here */
    if (vowels.includes(curr)) {
      return acc + 1
    }
    return acc
  }, 0)

  // pervious solution:
  // const sumOfAllVowels = []
  // const splitString = stringOfLetters.split('').map((element) => {
  //   if (vowels.includes(element)) { // this logic is good
  //     sumOfAllVowels.push(element)
  //   }
  // })

  /* 10. return the solution
      always return a variable, or, use only variables in return statements
      this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
   */

  //(done) DM: todoMM: I want you to debug the problem as an exercise (although you won't need the below line using the solution I'm suggesting above). Remember to always use console.log so that you have visibility to what the data is. You can console.log({curr}) to see what is in curr and what you are adding to acc. Then the answer will be obvious. This is the sort of thing that in a work situation, you can't say that you can't solve it, because you should as a first debugging step console.log to see what data is in the variables.
  //   return sumOfAllVowels.reduce((acc, curr) => acc + curr, 0); // this is weird, the reduce method doesn't work here

  return sumOfAllVowels
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// expected result
console.log(getCount('abracadabra')) // 5
console.log(getCount('my pyx')) // 0
getCount('o a kak ushakov lil vo kashu kakao') // 13
getCount('hello world') // 3
getCount('h') // 0
getCount('') // 0

/* 11. Make it pretty! Review and edit the above code for conciseness and readability: clear, descriptive variable names
       note: the entire time you are working on the solution, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time figuring out the perfect variable name. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter/better if appropriate.  */

/* 13. code review and approval*/
/* approved, good job */

/* 14. AFTER code review and approval (like we do at work), copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/

/* 15. Copy here which of the other coders' solutions do you like the best? (Be sure in codewars.com to sort others' solutions by "Best Practices".)
       Add comments to the code, discussing why it is best, mentioning readability (and possibly efficiency).
       Note: the best solution should be readable as the highest priority, but not unnecessarily inefficient.
*/

/* 16. Duncan moves the file out of this directory when it is complete */

function getCount(stringOfLetters) {
  const isStringOfLetters = typeof stringOfLetters === 'string'
  if (!isStringOfLetters) throw new Error('input must be a string of letters')

  const vowels = ['a', 'e', 'i', 'o', 'u']

  const characters = stringOfLetters.split('')

  const sumOfAllVowels = characters.reduce((acc, curr) => {
    if (vowels.includes(curr)) {
      return acc + 1
    }
    return acc
  }, 0)

  return sumOfAllVowels
}

console.log(getCount('abracadabra')) // 5
console.log(getCount('my pyx')) // 0
getCount('o a kak ushakov lil vo kashu kakao') // 13
getCount('hello world') // 3
getCount('h') // 0
getCount('') // 0

/* 16. Duncan moves the file out of this directory when it is complete */
