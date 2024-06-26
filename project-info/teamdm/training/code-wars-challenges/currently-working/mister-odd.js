// always copy this template into each new coding challenge file
// !!! always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
// note: You can be working multiple challenges, but always address all todoM-Ms in the code-wars-challenges directory before moving on to a new challenge. If you get stuck on one, leave a question in the todo-MM and you can do a new challenge. We just don't want to leave challenges unfinished. And, it makes for extra work to have to return to it later after memory has faded.

/* CURRENT STATUS and NEXT STEPS (update this section before each commit of the file)
   Does the code work, i.e., do all the tests pass? If not, say you're stuck and there are questions above. 
   What help do you need from me? 
   What are the next steps for you or me?
*/
/* 

STATUS: in progress, the third test case is not passing. I am thinking on how to fix it. DM: ok, I'll look at it when you've had a chance to try to complete it. 


NEXT STEP(s):


*/

// memorable summary of the whole process: make it work, test it, make it pretty

// // // // // // // // // // // // // // start of the template
// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
Mr. Odd is my friend. Some of his common dialogues are: "Am I looking odd?", "It’s looking very odd", etc. Actually, "odd" is his favorite word. This Valentine's Day he went to meet his girlfriend, but he forgot to take a gift. So he told her that he did an odd thing. His girlfriend became angry and gave him a puzzle. She gave him a string (str) that contains only lowercase letters and told him:

Take 3 indexes i, j, k such that i < j < k and str[i] = "o", str[j] = "d", str[k] = "d" and cut them from the string to make a new string "odd". How many such new strings can you make?

Mr. Odd wants to impress his girlfriend, so he wants to make the maximum number of "odd" strings. As he is lazy, he asks you to help him and find the possible maximum.

Examples
For "oudddbo" the result should be 1:

cut one "odd": "[o]u[d][d]dbo"  -->  "_u__dbo"
no more "odd" in string
For "ooudddbd" the result should be 2:

1: "[o]ou[d][d]dbd"  -->  "_ou__dbd"
2: "_[o]u__[d]b[d]"  -->  "__u___b_"
no more "odd" in string
*/

// 1.2 the coding challenge URL: https://www.codewars.com/kata/589d74722cae97a7260000d9/train/javascript

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*
none
*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise. pick a name using the any good words from the challenge description or from your input description in #5
function extractOddFromString(inputString) {
  console.log('inputString', inputString)
  /* 5. describe the inputs and outputs in detail: their types and possible values
          note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.
  
          inputs:
            input: string...; any values:
  
          output: number...; possible values: */
  /*
  
    */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  if (typeof inputString !== 'string') {
    throw new Error('input must be a string')
  } else if (inputString.length === 0) {
    return 0
  }

  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
        WHAT do you want to change in the input to get the output?
          WHAT do you want to calculate based on the input? 
          Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, Yes!)
          */
  /*
  I want to find the maximum number of "odd" strings that can be made from the input string. 
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

  const inputStringLowercase = inputString.toLowerCase()
  console.log('inputStringLowercase', inputStringLowercase)
  const inputStringArray = inputStringLowercase.split('')
  console.log('inputStringArray', inputStringArray)

  // find the indexes of all the 'o's
  const oddIndexesOfOs = inputStringArray.reduce(
    (acc, char, i) => (char === 'o' ? [...acc, i] : acc),
    []
  )
  console.log('oddIndexesOfOs', oddIndexesOfOs)

  const oddIndexesOfDs = inputStringArray.reduce(
    (acc, char, i) => (char === 'd' ? [...acc, i] : acc),
    []
  )

  console.log('oddIndexesOfDs', oddIndexesOfDs)

  const count = oddIndexesOfOs.reduce((acc, oIndex) => {
    const validDIndex = oddIndexesOfDs.find(
      (dIndex, i) => dIndex > oIndex && oddIndexesOfDs[i + 1] > dIndex
    )
    return validDIndex ? acc + 1 : acc
  }, 0)

  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
        always return a variable, or, use only variables in return statements
        this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
     */

  return count
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// expected result
console.log(extractOddFromString('oUddDdbo')) // 1
console.log(extractOddFromString('ooudddbd')) // 2
console.log(extractOddFromString('qoddoldfoodgodnooofostorodrnvdmddddeidfoi')) // 6
console.log(extractOddFromString(' ')) // 0
extractOddFromString(123) // not a string

/* 11. Make it pretty! Review and edit the above code for conciseness and readability: clear, descriptive variable names
         note: the entire time you are working on the solution, try to write good names, so that Duncan and yourself can 
               understand easily. Don't use misleading or too-unspecific variable names.
               But, don't spend much time figuring out the perfect variable name. The trick is to describe
               what it is with lots of words. Just write exactly what the variable holds.
               Later, in this step, you can refine variable names to be shorter/better if appropriate.  */

/* 13. code review and approval*/
/* doTest("oudddbo", 1);
        doTest("ouddddbo", 1);
        doTest("ooudddbd", 2);
        doTest("qoddoldfoodgodnooofostorodrnvdmddddeidfoi", 6); */

/* 14. AFTER code review and approval (like we do at work), copy the solution below this line, remove all comments and console.log below this line  
         OK to rename variables here if it seems better while looking at the code in concise form*/

/* 15. Copy here which of the other coders' solutions do you like the best? (Be sure in codewars.com to sort others' solutions by "Best Practices".)
         Add comments to the code, discussing why it is best, mentioning readability (and possibly efficiency).
         Note: the best solution should be readable as the highest priority, but not unnecessarily inefficient.
  */

/* 16. Duncan moves the file out of this directory when it is complete */

/*
function extractOddFromString(inputString) {
  if (typeof inputString !== 'string') {
    throw new Error('input must be a string')
  } else if (inputString.length === 0) {
    return 0
  }

  const inputStringArray = inputString.toLowerCase().split('')

  const oddIndexesOfOs = inputStringArray.reduce((acc, char, i) => char === 'o' ? [...acc, i] : acc, [])
  const oddIndexesOfDs = inputStringArray.reduce((acc, char, i) => char === 'd' ? [...acc, i] : acc, [])

  const count = oddIndexesOfOs.reduce((acc, oIndex) => {
    const validDIndex = oddIndexesOfDs.find((dIndex, i) => 
      dIndex > oIndex && oddIndexesOfDs[i + 1] > dIndex
    );
    return validDIndex ? acc + 1 : acc;
  }, 0);

  return count;
}
*/
