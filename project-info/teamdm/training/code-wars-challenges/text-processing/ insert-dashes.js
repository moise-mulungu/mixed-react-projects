/*

*/

// always copy this template into each new coding challenge file
// !!! always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
/*

*/

// memorable summary: make it work, test it, make it pretty

// // // // // // // // // // // // // // start of the template
// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/55960bbb182094bc4800007b/train/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully) */
/*
n/a
*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

function insertDash(num) {
  //code me

  /* 4. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: number...; possible values: numbers >= 0

        output: number...; possible values: numbers with dashes between odd numbers */
  /*
    input: number
    output: string
  */

  // 5. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isNumber = typeof num === 'number'
  if (!isNumber) throw new Error('The input must be a number')

  /* 6. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? */
  /*
    how (imperative): i want to *add* a dash between odd numbers
    what (declarative - no verbs!!!): string with dashes between the odd numbers
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

  const characters = num.toString().split('')

  const charactersAndDashes = characters.map((character, index) => {
    // each logical expressions must be assigned to a variable
    const currentCharacterIsOdd = character % 2 === 1
    const nextCharacterIsOdd = characters[index + 1] % 2 === 1
    // console.log({ currentCharacterIsOdd, nextCharacterIsOdd })
    if (currentCharacterIsOdd && nextCharacterIsOdd) {
      // console.log('dash')
      return character + '-'
    }
    return character
  })

  /* 8. use the named parts to create a readable solution. */

  /* 9. return the solution
      always return a variable, or, use only variables in return statements
      this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
   */
  return charactersAndDashes.join('')
}

insertDash(454793) // 4547-9-3
insertDash(123456) // 123456
insertDash(1003567) // 1003-567
insertDash(2468) // 2468
insertDash(13579) // 1-3-5-7-9

// 10. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// expected result

/* 11. Make it pretty! Review the code for conciseness and readability: clear, descriptive variable names
       note: as you are working, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time on it. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter.  */

/* 12. Final step: copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/

function insertDash(num) {
  const isNumber = typeof num === 'number'
  if (!isNumber) throw new Error('The input must be a number')

  const characters = num.toString().split('')

  const charactersAndDashes = characters.map((character, index) => {
    const currentCharacterIsOdd = character % 2 === 1
    const nextCharacterIsOdd = characters[index + 1] % 2 === 1
    if (currentCharacterIsOdd && nextCharacterIsOdd) {
      return character + '-'
    }
    return character
  })

  return charactersAndDashes.join('')
}

insertDash(454793)
insertDash(123456)
insertDash(1003567)
insertDash(2468)
insertDash(13579)
