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
"A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, usually by examining its digits."

When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

1, 10, 9, 12, 3, 4 because:

10 ^ 0 ->  1 (mod 13)
10 ^ 1 -> 10 (mod 13)
10 ^ 2 ->  9 (mod 13)
10 ^ 3 -> 12 (mod 13)
10 ^ 4 ->  3 (mod 13)
10 ^ 5 ->  4 (mod 13)
(For "mod" you can see: https://en.wikipedia.org/wiki/Modulo_operation)

Then the whole pattern repeats. Hence the following method:

Multiply

the right most digit of the number with the left most number in the sequence shown above,
the second right most digit with the second left most digit of the number in the sequence.
The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.

Example:
What is the remainder when 1234567 is divided by 13?

7      6     5      4     3     2     1  (digits of 1234567 from the right)
×      ×     ×      ×     ×     ×     ×  (multiplication)
1     10     9     12     3     4     1  (the repeating sequence)
Therefore following the method we get:

 7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

We repeat the process with the number 178:

8x1 + 7x10 + 1x9 = 87

and again with 87:

7x1 + 8x10 = 87

From now on the sequence is stationary (we always get 87) and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13 ( i.e 9).

Task:
Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.

thirt(1234567) calculates 178, then 87, then 87 and returns 87.

thirt(321) calculates 48, 48 and returns 48
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*

*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise. pick a name using the any good words from the challenge description or from your input description in #5
function divisibleBy13(number) {
  /* 5. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
input: number
output: number
  */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  // const isNumber = typeof num === 'number';
  if (typeof number !== 'number') throw new Error('input must be a number')
  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? 
        Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, Yes!)
        */
  /*
I want to get the stationary number of the input number, which is the remainder of the input number divided by 13.
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
  // 1. convert the number to string
  const numberToStrings = number.toString()
  console.log({ numberToStrings })

  // 2. split the string into an array of numbers
  const arrayOfStringNumbers = numberToStrings.split('')
  console.log({ arrayOfStringNumbers })

  // 3. reverse the array
  const reversedArrayOfStringNumbers = arrayOfStringNumbers.reverse()
  console.log({ reversedArrayOfStringNumbers })

  // 4. create a sequence of numbers
  const sequence = [1, 10, 9, 12, 3, 4]
  console.log({ sequence })

  // 5. multiply the numbers in the sequence with the numbers in the reversed array
  const productOfSequenceAndNumbers = reversedArrayOfStringNumbers.map((number, index) => {
    return number * sequence[index % sequence.length]
  })
  console.log({ productOfSequenceAndNumbers })

  // 6. sum the multiplied numbers
  const sumOfMultipliedNumbers = productOfSequenceAndNumbers.reduce((acc, number) => {
    return acc + number
  }, 0)
  console.log({ sumOfMultipliedNumbers })

  // 7. check if the sumOfMultipliedNumbers is equal to the input number
  if (sumOfMultipliedNumbers === number) return sumOfMultipliedNumbers

  // 8. if not, repeat the process with the sum
  const repeatedProcess = divisibleBy13(sumOfMultipliedNumbers)
  console.log({ repeatedProcess })

  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
always return a variable, or, use only variables in return statements
this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
*/
  // 9. return the new sum
  return repeatedProcess
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// expected result
divisibleBy13(8529) // 79
divisibleBy13(85_299_258) // 31
divisibleBy13(5634) // 57
divisibleBy13(1_111_111_111) // 71
divisibleBy13(987_654_321) // 30
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

/* CURRENT STATUS and NEXT STEPS (update this section before each commit of the file)
   Does the code work, i.e., do all the tests pass? If not, say you're stuck and there are questions above. What help do you need from me? What are the next steps for you or me?
   MM: the solution works, and all test cases are passing.
*/
/*  */
