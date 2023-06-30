//(status complete, but with no reduce approach) always copy this template into each new coding challenge file
// !!! always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
// note: You can be working multiple challenges, but always address all todoMMs in the code-wars-challenges directory before moving on to a new challenge. If you get stuck on one, leave a question in the todo-MM and you can do a new challenge. We just don't want to leave challenges unfinished. And, it makes for extra work to have to return to it later after memory has faded.
/*
 */

// memorable summary: make it work, test it, make it pretty

// // // // // // // // // // // // // // start of the template
// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

    and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*

*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise. pick a name using the any good words from the challenge description or from your input description in #5
function narcissistic(value) {
  /* 5. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
input: a number
output: boolean(true or false)
  */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isNumber = typeof value === 'number'
  if (!isNumber) throw new Error('value must be a number')

  // const isPositive = value > 0
  // const isInteger = Number.isInteger(value)
  // const isNarcissistic = isNumber && isPositive && isInteger
  // if (!isNarcissistic) {
  //       throw new Error('value must be a positive integer')
  //       }

  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? 
        Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, Yes!)
        */
  /*
i want to check if the number is narcissistic by checking if the sum of each digits raised to the power of the number of digits is equal to the number
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

  // MM: toDM: I did it on the other way as the first approach did not work, but can you figure out how to resolve it with the first approach.

  // const valueDigits = Math.floor(Math.log10(value)) + 1
  // console.log(valueDigits)

  // const lastValueDigit = value % 10
  // console.log(lastValueDigit)

  // let sumOfDigits = 0
  // for (let i = 0; i < valueDigits; i++) {
  //   sumOfDigits += lastValueDigit ** valueDigits
  //   console.log(sumOfDigits)
  // }
  // if (sumOfDigits === value) {
  //   return true
  // }

  const valueToString = value.toString()
  // MM: toDM: the value is converted to a string like this '153'
  console.log({ valueToString })

  const digitsOfValue = valueToString.length
  console.log({ digitsOfValue })
  //(done) DM: todoMM: this doesn't work, so put some console.logs inside the reduce callback so you can see where the problem is. Get the for loop solution to work first, then worry about converting it to reduce later.

  // DM: curToThePowerOfDigitsOfValue logged NaN, which means an error in the calculation - so I added digitsOfValue to the console.log because digitsOfValue is used to calculate curToThePowerOfDigitsOfValue
  //(done) DM: todoMM: what is missing here? look at the logged values, does it give you a clue? DM: todoMM: I don't think you answered the question, "what's missing here?"; MM: I said done because I think the same challenge was solved in the other file. DM: IC, however be sure to address specifically each todoMM because the overall goal is to learn, not just to solve the challenge. In this file there is different code, different things to learn, and I want the code in each file to work before we move it outside this directory. DM: todoMM: So, get this code working and see if you answer the original question at the beginning of this line.
  let sumOfDigits = 0

  for (let i = 0; i < digitsOfValue; i++) {
    sumOfDigits += valueToString[i] ** digitsOfValue
  }

  //(done) DM: definitely convert this to a reduce, you can write code with reduce just as fast as you can do let/for loop. Hint: String(number).split().reduce(). This hint technique may be new to you, but in the future if you run into a situation where you need to use let or `const emptyArray = []`, stop and figure out how to do it without let or empty array. This is just as important as getting the solution; MM: I can't resolve this with reduce. DM: OK, let's walk through this tomorrow on Zoom.(ok)

  // MM: toDM: I tried with .split().reduce() but it does not work. Do you think this approach can fix the issue?.

  // DM: todoMM: log ALL the values used in the for loop, then you can debug. Try it.

  // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 === 153
  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
  always return a variable, or, use only variables in return statements
  this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
  */
  // return false

  // MM: toDM: some test cases are failing.
  //(done) DM: todoMM: why? which line is where things go wrong?? Put some console.logs and try to see if the console.log output shows you what went wrong.
  // this solution is not working for all the test cases with reduce, but it works with for loop. I am figuring out how to fix it.
  return sumOfDigits === value
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// expected result:
console.log(narcissistic(7)) // true
console.log(narcissistic(371)) // true
console.log(narcissistic(122)) // false
console.log(narcissistic(487)) // false

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

/* CURRENT STATUS (update this section before each commit of the file)

DM: get the for loop solution working, I'll approve it, then convert the for loop to a reduce

*/
