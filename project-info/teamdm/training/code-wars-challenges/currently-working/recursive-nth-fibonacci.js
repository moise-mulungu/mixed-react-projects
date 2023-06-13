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

I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

For example:

nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/522551eee9abb932420004a0/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*
n/a
*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise. pick a name using the any good words from the challenge description or from your input description in #5
function nthFibo(n) {
  /* 5. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
    input: number (integer) >= 1
    output: number (integer); will always be >= 0 (0 is the first Fibonacci number)
  */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  if (!Number.isInteger(n)) throw new Error(`the input you provided: ${n} must be an integer`)
  if (n < 1) throw new Error(`the input you provided: ${n} must be 1 or higher`)

  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? 
        Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, Yes!)
        */
  /*

 Given an integer >= 1, return the Fibonacci number at that place in the sequence

calculate the n-th number in the Fibonacci Sequence
formula to calculate the next Fibonacci number: theLastFibonacciNumber + theSecondToLastFibonacciNumber
* 0, 1 - the next number is 1 (calculated 1 + 0)
* 0, 1, 1 - the next number is 2 (calculated 1 + 1)
* 0, 1, 1, 2 - the next number is 3 = (calculated 2 + 1)
* 0, 1, 1, 2, 3 - the next number is 5 = (calculated 3 + 5)
* ... to infinity
starting info which can be hardcoded: the first 2 numbers in the Fibonacci sequence are 0, 1
the remaining numbers can be calculated using the Fibonacci formula above
 
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

  const sequenceToFibonacciNumberCache = { 1: 0, 2: 1 } // MM: I don't understand this first step of the solution. why putting declaring an object here?
  // DM: from the challenge description: "For reference, the first two numbers in the Fibonacci sequence are 0 and 1" AND you can look at how it is used

  // howtojs: recursive:: advantages of making a nested function for the recursion, instead of making the main function recursive: cache can be a closure instead of passing it to each recursive call; don't need to change the signature of the main function.
  function calculateRecursively(fibonacciSequenceNumber) {
    if (sequenceToFibonacciNumberCache[fibonacciSequenceNumber] !== undefined) {
      const fibonacciNumber = sequenceToFibonacciNumberCache[fibonacciSequenceNumber]
      return fibonacciNumber
      // MM: is this a kind of guard clause?
      // DM; Yes; and this is where the recursion ends when the sequence number is undefined! right?
    }
    const newFibonacciNumber =
      calculateRecursively(fibonacciSequenceNumber - 1) +
      calculateRecursively(fibonacciSequenceNumber - 2)
    sequenceToFibonacciNumberCache[fibonacciSequenceNumber] = newFibonacciNumber
    return newFibonacciNumber
  }

  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
      always return a variable, or, use only variables in return statements
      this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
   */
  return calculateRecursively(n)
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
nthFibo(1) // 0
nthFibo(2) // 1
nthFibo(3) // 1
nthFibo(4) // 2
nthFibo(5) // 3
nthFibo(6) // 5
nthFibo(7) // 8
nthFibo(8) // 13
nthFibo(9) // 21
nthFibo(10) // 34
nthFibo(11) // 55

/* 11. Make it pretty! Review and edit the above code for conciseness and readability: clear, descriptive variable names
       note: the entire time you are working on the solution, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time figuring out the perfect variable name. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter/better if appropriate.  */

/* 13. code review and approval*/
/* Duncan hereby approvs Duncan's code */

/* 14. AFTER code review and approval (like we do at work), copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/
// 0, 1, 1, 2, 3, 5, 8, ...
function nthFiboWithIndentedLogging(sequenceNumber) {
  if (!Number.isInteger(sequenceNumber))
    throw new Error(`the input you provided: ${sequenceNumber} must be an integer`)
  if (sequenceNumber < 1)
    throw new Error(`the input you provided: ${sequenceNumber} must be 1 or higher`)

  const indentSize = 2
  //(done) DM: todoMM: add "cache" to the programming vocab
  const sequenceToFibonacciNumberMapCache = {
    1: 0,
    2: 1,
    // 3: 2,
    // 4: 3,
    // 5: 3,
  }

  // getFibonacciNumberForSequenceNumberRecursive
  function getFibonacciNumberForSequenceNumber(fibonacciSequenceNumber, indent = '') {
    // console.log(`${indent}---------------`)
    // console.log(`${indent}sequence number: ${fibonacciSequenceNumber}`)
    if (sequenceToFibonacciNumberMapCache[fibonacciSequenceNumber] !== undefined) {
      const fibonacciNumber = sequenceToFibonacciNumberMapCache[fibonacciSequenceNumber]
      // console.log(`${indent}returning Fibonacci number from cache: ${fibonacciNumber}`)
      return fibonacciNumber
    }
    // console.log(
    //   `${indent}calculating new Fibonacci number for sequence: ${fibonacciSequenceNumber}`
    // )
    const newFibonacciNumber =
      getFibonacciNumberForSequenceNumber(
        fibonacciSequenceNumber - 1,
        indent + ' '.repeat(indentSize)
      ) +
      getFibonacciNumberForSequenceNumber(
        fibonacciSequenceNumber - 2,
        indent + ' '.repeat(indentSize)
      )
    // console.log(`${indent}adding new Fibonacci number: ${newFibonacciNumber} to the cache`)
    sequenceToFibonacciNumberMapCache[fibonacciSequenceNumber] = newFibonacciNumber
    // console.log(`${indent}returning the new Fibonacci number: ${newFibonacciNumber}`)
    return newFibonacciNumber
  }

  return getFibonacciNumberForSequenceNumber(sequenceNumber)
}
nthFiboWithIndentedLogging(5) // 3

/* 15. Copy here which of the other coders' solutions do you like the best? (Be sure in codewars.com to sort others' solutions by "Best Practices".)
       Add comments to the code, discussing why it is best, mentioning readability (and possibly efficiency).
       Note: the best solution should be readable as the highest priority, but not unnecessarily inefficient.
*/

// I used my favorite approach above, my original solution is below

/* 16. Duncan moves the file out of this directory when it is complete */

// this was my initial solution, which passed all tests; however, as noted below, it is a little confusing, so I used one of the other solutions above, which is more readable
function nthFiboDuncansFirstSolution(n) {
  function calculateRecursively(fibonacciSequenceNumber) {
    // howtocodewars:  Max Buffer Size Reached (1.5 MiB) - too many console.logs - https://docs.codewars.com/training/troubleshooting/
    // console.log({ fibonacciNumber: fibonacciSequenceNumber })
    // return any known hardcoded values
    if (fibonacciSequenceNumber === 2) return 1
    // stop the recursion (when the lowest Fibonacci sequence number is released)
    if (fibonacciSequenceNumber === 1) return 0

    // recurse; note that the number constantly goes down, ending in 1
    return (
      calculateRecursively(fibonacciSequenceNumber - 1) +
      calculateRecursively(fibonacciSequenceNumber - 2)
    )
  }
  // it's a little confusing, because n is the sequenceNumber not the fibonacciNumber
  return calculateRecursively(n)
}

// Fibonacci calculation with recursion is often used as an example because is complex: each recursive call spawns 2 more recursive calls. Also the cache is an example of a "closure".

// note: this can be solved efficiently without recursion.
function nthFibo(n) {
  var cache = [0, 0, 1, 1]
  while (cache.length <= n) {
    cache[cache.length] = cache[cache.length - 1] + cache[cache.length - 2]
  }
  return cache[n]
}
