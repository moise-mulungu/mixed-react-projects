//(status: complete) always copy this template into each new coding challenge file
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
function narcissistic(number) {
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
  const isNumber = typeof number === 'number'
  if (!isNumber) throw new Error('value must be a number')

  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? 
        Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, Yes!)
        */
  /*
i want to check if the number is narcissistic by checking if the sum of the digits raised to the power of the number of digits is equal to the number
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

  // DM: ok, those todoM-Ms were old. good, now I can delete them.

  // this code gets the number of digits in the value, but this one is not necessary as the value is converted to a string below. I'm leaving it here for reference.
  // howtojs: get number of digits in an integer
  /*
  const valueDigits = Math.floor(Math.log10(number)) + 1
  
  console.log('------------ calling narcissistic')
  console.log({ valueDigits, value: number })
  */

  // const lastValueDigit = value % 10
  // console.log({ lastValueDigit })

  // let sumOfDigits = 0
  // howtojs: convert a number to a string
  // DM: this was fine as a singular noun, because it is one discrete thing, a string
  const numberAsString = String(number) // also: number.toString()
  console.log({ numberAsString })
  // for (let i = 0; i < valueString.length; i++) {
  //   const digit = Number(valueString[i])
  //   console.log({ digit })
  //   const raisedPower = digit ** valueDigits
  //   console.log({ raisedPower })
  //   sumOfDigits += raisedPower
  //   console.log({ sumOfDigits })
  // }

  const digits = numberAsString.split('') //
  // DM: good job on writing the comments! I'm going to add a few todoM-Ms regarding variable naming. It may be possible to not need any comments if the variable names provide enough information.(cool!)

  // DM: I edited this a bit so you can see how to write more concise comments
  const numberOfDigits = digits.reduce((acc) => acc + 1, 0) //  also: digits.length
  console.log({ numberOfDigits })

  const digitsRaisedToPowers = digits.map((digit) => digit ** numberOfDigits)
  // const raisedPower = splitValues.map((digit) => digit ** valueDigitsNumber)
  console.log({ digitsRaisedToPowers })

  // sums the digitsRaisedToPowers
  const sumOfDigitsRaisedToPowers = digitsRaisedToPowers.reduce((acc, digit) => acc + digit, 0)
  console.log({ sumOfDigitsRaisedToPowers })

  // for (let i = 0; i < valueDigits; i++) {
  // const lastValueDigit = Number(String(value).slice(0, i)) % 10
  // console.log({ lastValueDigit })
  // const raisedPower = lastValueDigit ** valueDigits
  // sumOfDigits += raisedPower
  // DM: it is easier to read the logs if you put everything into one console.log
  // console.log('in loop', { i, lastValueDigit, valueDigits, raisedPower, sumOfDigits })
  // }

  console.log({ sumOfDigitsRaisedToPowers })

  // DM: good. Comments  go ABOVE the code that the comments refer to.
  if (sumOfDigitsRaisedToPowers === number) {
    return true
  }

  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
   always return a variable, or, use only variables in return statements
   this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
   */
  return false
  // MM: toDM: some test cases are failing. DM: can you give me mor info? why are they failing? at what point in your code does things go wrong? MM: I think I fixed the issue. DM: ok, but never say "I think I did it" - it sounds like maybe, then I start to have doubts. say something definitive so that I know what to do. I think it's 'yes' because you said all the tests pass(oh, ok. I'll keep that in mind. thanks for the feedback. the reason I say "I think" is because the file has not been reviewed yet. I appreciate it.).
}

narcissistic(7) // true
narcissistic(371) // true
narcissistic(153) // true
narcissistic(122) // false
narcissistic(487) // false

/* 13. code review and approval*/
/* approved */

/* 14. AFTER code review and approval (like we do at work), copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/

/* CURRENT STATUS and NEXT STEPS (update this section before each commit of the file)
   Does the code work, i.e., do all the tests pass? If not, say you're stuck and there are questions above. What help do you need from me? What are the next steps for you or me?
/*

STATUS: the current status of this file is that the code works, and all tests pass. what remains here is your code review and approval.
 
NEXT STEP: section 14
*/
