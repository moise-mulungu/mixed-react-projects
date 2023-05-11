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
The set of words is given. 
Words are joined if the last letter of one word and the first letter of another word are the same. (* OK to re-order the words)
Return: true if all words of the set can be combined into one word. 
Guard clause, early return: Each word can and must be used only once. Otherwise return false.

Input
Array of 3 to 7 words of random length. No capital letters.

Example true
Set: excavate, endure, desire, screen, theater, excess, night.
Millipede: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater.

Example false
Set: trade, pole, view, grave, ladder, mushroom, president.
Millipede: presidenT Trade.
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/6344701cd748a12b99c0dbc4
*/

/* 2. list and describe anything that is unclear in the challenge description
these would be the questions you'd be expected to ask in a interview situation
(practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*

*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise. pick a name using the any good words from the challenge description or from your input description in #5

function millipedeOfWords(words) {
  /* 5. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.
        
        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
input: array of words
output: boolean(true or false) if all words can be combined into one word
  */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isArrayOfStrings = words.every((word) => typeof word === 'string')
  if (!isArrayOfStrings) throw new Error('parameter words must be an array of strings')

  //(done) DM: todoMM: return false if the words are not unique
  const arrayOfUniqueWords = [...new Set(words)]
  if (arrayOfUniqueWords.length !== words.length) return false
  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? 
        Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, DM: yes!)
        */
  /*
I want to check if all words can be combined into one word by returning true or false
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
  const firstLettersOfWords = arrayOfUniqueWords.map((word) => word[0])
  //   console.log('getFirstLetterOfEachWord', getFirstLetterOfEachWord)
  const lastLettersOfWords = arrayOfUniqueWords.map((word) => word[word.length - 1])

  //   console.log('lastLettersOfWords', lastLettersOfWords)

  // ['endure', 'elite', 'excess']
  // ['engine', 'endure', 'elite', 'excess']

  // words.length

  //  we want: true or false
  // we have: array
  // array to something else --> reduce!

  const isMillipede = words.reduce((acc, cur, idx, src) => {
    // if idx < words.length - 1 OR check if next word exists
    // MM: this challenge is still unsolved. I'm not sure how to check if the last letter of the current word is the same as the first letter of the next word.

    const nextWord = src[idx + 1]
    if (nextWord) {
      // if the last letter of the current word is the same as the first letter of the next word
      // return true
      // else return false
      return cur[cur.length - 1] === nextWord[0]
    }

    // get the last letter of the current word
    // get the last letter of the next word
    ;(words[9999] === src[9999]) === undefined // undefined if nothing at index 9999
    return acc
  }, true)

  // if (
  //   lastLettersOfWords[0] === firstLettersOfWords[1] &&
  //   lastLettersOfWords[1] === firstLettersOfWords[2]
  // ) {
  //   return true
  // } else if (firstLettersOfWords[0] === lastLettersOfWords[1]) {
  //   return true
  // } else {
  //   return false
  // }

  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
      always return a variable, or, use only variables in return statements
      this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
   */

  return isMillipede
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// first step: make it work without re-ordering
millipedeOfWords(['engine', 'endure', 'elite', 'excess']) // true
millipedeOfWords(['endure', 'elite', 'excess']) // true

// second step: with word re-ordering
millipedeOfWords(['excavate', 'endure', 'desire', 'screen', 'theater', 'excess', 'night']) // true
millipedeOfWords(['trade', 'pole', 'view', 'grave', 'ladder', 'mushroom', 'president']) // false
millipedeOfWords(['screen', 'desire', 'theater', 'excess', 'night']) // true
millipedeOfWords(['east', 'e', 'e', 't', 't', 'e', 'time']) // true
millipedeOfWords(['no', 'dog', 'on', 'good']) // false

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

// MM: some tests are still not passing
