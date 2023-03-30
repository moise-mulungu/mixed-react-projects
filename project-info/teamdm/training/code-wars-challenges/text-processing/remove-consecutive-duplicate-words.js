// DM: good it works! and it is declarative. Now, you can do step 11

// always copy this template into each new coding challenge file
// always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
/*

*/

// // // // // // // // // // // // // // start of the template
// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript
*/

// 1.3 some tests from the coding challenge: ex: myFunction('', '') // expected result
/*

*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully) */
/*

*/

//  3. write tests (at the bottom of the file), then continue with step 4.

function removeConsecutiveDuplicates(string) {
  /* 4. describe the inputs and outputs in detail: their types and possible values
    note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.
    
        inputs:
          string: string...; possible values:

        output: string...; possible values: any string but without a repeated word twice*/
  /*
    DM: todoMM: always be sure to describe inputs/outputs. it may seem obvious, but it will save you time by being sure you think carefully at the beginning about inputs/outputs(i already did this, then removed the comments.)
  */

  // 5. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isString = typeof string === 'string'
  if (!isString) throw new Error('parameter or input must be a string')

  /* 6. state the solution in terms of WHAT (declarative), not HOW (imperative)
  WHAT do you want to change in the input to get the output?
  WHAT do you want to calculate based on the input? */
  /*
  i want to remove all consecutive duplicate words from a string, leaving only first words entries.
  */

  /* 7. break down the the 'variable' elements of the solution into the most granular (smallest) parts by
        assigning each part (string, boolean expression, etc.) to a well-named, descriptive variable.
        * each logical expressions must be assigned to a variable. 
        * the instructions often contain words that can be used in variable names.
        * functions are named with verbs+noun (createMyThing) or adverbs: (onClick, onSubmitHandler)
        * booleans are named with (positive) adjectives: (open, seen, isString)
        * everything else with nouns or adjectives: (myThing)*/
  // DM: todoMM: name the variable exactly what it is (declarative), not what you are doing (imperative). in this case it is just the words of the string
  const words = string.split(' ')
  console.log(words)
  // DM: todoMM: rename: 'mapped' doesn't describe what it is. you can use something like cleanedWords, adjustedWords ... it's kind of hard to name, but the function is small, so the name doesn't have to be perfect, but it is a list so the name should be a plural noun.
  const noConsecutiveDuplicateWords = words.map((word, index) => {
    if (word === words[index + 1]) {
      return ''
    }
    return word
  })

  console.log(noConsecutiveDuplicateWords)
  return noConsecutiveDuplicateWords.join(' ')

  /* 8. use the named parts to create a readable solution. */

  /* 9. return the solution
       always return a variable, or, use only variables in return statements
       this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
       */

  // 10. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)

  // DM todoMM: removeConsecutiveDuplicates only takes one argument, see doTest() in the codewars Sample Tests. but you are passing 2 arguments. the 2nd arg is ignored, but you should remove the 2nd argument from here to avoid confusion
  removeConsecutiveDuplicates('alpha alpha alpha alpha')
  removeConsecutiveDuplicates('alpha beta alpha')
  removeConsecutiveDuplicates('alpha alphabeta alphagamma')
  removeConsecutiveDuplicates('alpha alpha beta alpha alpha')
  removeConsecutiveDuplicates('alpha beta beta')

  /* 11. Review the code for conciseness and readability: clear, descriptive variable names
    note: as you are working, try to write good names, so that Duncan and yourself can 
    understand easily. Don't use misleading or too-unspecific variable names.
    But, don't spend much time on it. The trick is to describe
    what it is with lots of words. Just write exactly what the variable holds.
    Later, in this step, you can refine variable names to be shorter.  */

  /* 12. Final step: copy the solution here, remove all comments  */
}
