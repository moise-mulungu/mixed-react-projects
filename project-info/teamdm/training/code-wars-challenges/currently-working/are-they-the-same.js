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
Given two arrays a and b write a function comp(a, b) (or compSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

Note for C
The two arrays have the same size (> 0) given as parameter in function comp.
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*

This challenge has a poorly-written description. Repeating it here with annotations:

Given
* two arrays: a and b 
write a function comp(a, b) (or compSame(a, b)) that:
* checks whether the two arrays have 
  * the "same" elements, 
  * with the same multiplicities,
    * (the multiplicity of a member is the number of times it appears). 
    * DM: see my new entry in tech-vocabulary.md
  * "Same" means, here, that the elements in b are the elements ~~in a~~ squared , regardless of the order.
    * ex: 11 is the "same" as 121 (which is 11 squared, 11 * 11 === 121)
* from the remarks: a or b might be nil or null or None or nothing, the problem doesn't make sense so return false

Question for interviewer: if both arrays are empty, return false or throw error?

*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise. pick a name using the any good words from the challenge description or from your input description in #5
function comp(numbers, squaredNumbers) {
  /* 5. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
input: two arrays of numbers
output: boolean 
  */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const areArrays = (firstArray, secondArray) => {
    // DM: super!
    return Array.isArray(firstArray) && Array.isArray(secondArray)
  }
  const areNumbers = (firstArray, secondArray) => {
    // DM: super duper!
    return (
      firstArray.every((element) => typeof element === 'number') &&
      secondArray.every((element) => typeof element === 'number')
    )
  }
  // DM: I think areSameLength is valid. It ensures the multiplicity, afaikt.
  const areSameLength = (firstArray, secondArray) => {
    return firstArray.length === secondArray.length
  }

  if (!areArrays(numbers, squaredNumbers)) return false
  if (!areNumbers(numbers, squaredNumbers)) throw new Error('The inputs must be arrays of num')
  // return false (not throw) if the arrays are not of the same multiplicity
  if (!areSameLength(numbers, squaredNumbers)) return false
  //   throw new Error('The inputs must be arrays of the same length')

  // DM: based on the expected test results, if both are empty, should return true
  // if (numbers.length === 0 && numbersSquared.length === 0) return false
  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? 
        Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, DM: yes!)
        */
  /*
I want to check if all the elements in the second array are the square of the elements in the first array then return true, otherwise return false
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
  for (let i = 0; i < numbers.length; i++) {
    const elementOne = numbers[i]
    for (let j = 0; j < squaredNumbers.length; j++) {
      const elementTwo = squaredNumbers[j]
      // returning here means execution leaves the function, so you don't check ALL the numbers, just the first one
      // DM: todoMM: your overall approach will work for many cases, but not all. I think it is good to make this approach work as well as possible: first step, improve this approach a bit: find a way to not return the answer until you've checked all the numbers (note: you can use 'let' just this one time :) )
      // DM: for Duncan only: eff: drugoy vid petli; snach vernoot losh; snachala sartirovat? (secret code, notes to myself of next steps after you solve it using this method)
      if (elementTwo === Math.pow(elementOne, 2)) return true
    }
  }
  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
      always return a variable, or, use only variables in return statements
      this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
   */
  // DM: if you have no return statement that is executed, a func will return 'undefined' which may not pass the tests bk likely the tests expect false, not undefined (which is falsy but not false)
  return false
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// expected result
// DM: todoMM: what are the expected results?
const a1 = [121, 144, 19, 161, 19, 144, 19, 11]
const a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]
comp(a1, a2)
const b1 = [121, 144, 19, 161, 19, 144, 19, 11, 1008]
const b2 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(b1, b2)
const c1 = [121, 144, 19, 161, 19, 144, 19, 11]
const c2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(c1, c2)
const d1 = []
const d2 = []
comp(d1, d2)
const e1 = []
const e2 = null
comp(e1, e2)
const f1 = [121, 144, 19, 161, 19, 144, 19, 11, 1008]
const f2 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(f1, f2)

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
