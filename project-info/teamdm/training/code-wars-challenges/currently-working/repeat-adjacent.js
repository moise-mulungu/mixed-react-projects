// node project-info/teamdm/training/code-wars-challenges/currently-working/repeat-adjacent.js
// always copy this template into each new coding challenge file
// !!! always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
// note: You can be working multiple challenges, but always address all todoM-Ms in the code-wars-challenges directory before moving on to a new challenge. If you get stuck on one, leave a question in the todo-MM and you can do a new challenge. We just don't want to leave challenges unfinished. And, it makes for extra work to have to return to it later after memory has faded.

import { group } from 'console'

/* CURRENT STATUS and NEXT STEPS (update this section before each commit of the file)
   Does the code work, i.e., do all the tests pass? If not, say you're stuck and there are questions above. 
   What help do you need from me? 
   What are the next steps for you or me?
*/
/* 

STATUS: the code is not working yet as i am still working on the solution. i have written the tests, the "function signature"(good vocab!), and the first part of the solution.
After updating the code, i'll need to test each line of newly implemented code for testing first. i'll continue with it tomorrow.


NEXT STEP(s): i'll continue working on the solution by writing the rest of the solution and then testing it


*/

// memorable summary of the whole process: make it work, test it, make it pretty

// // // // // // // // // // // // // // start of the template
// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
You are given a string s.

Let us call a substring of s with 2 or more adjacent identical letters a group (such as "aa", "bbb", "cccc"...).

Let us call a substring of s with 2 or more adjacent groups a big group (such as "aabb","bbccc"...).

Your task is to count the number of big groups in the given string.

Examples
"ccccoodeffffiiighhhhhhhhhhttttttts" => 3

The groups are "cccc", "oo", "ffff", "iii", "hhhhhhhhhh", "ttttttt".

The big groups are "ccccoo", "ffffiii", "hhhhhhhhhhttttttt".

"gztxxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmmitttttttlllllhkppppp" => 2

The big groups are :

"xxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmm" and "tttttttlllll"

"soooooldieeeeeer" => 0

There is no big group.
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/58b8dccecf49e57a5a00000e/train/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully). Really take a minute to review the requirements (challenge description) and see if there are any ambiguities. Say out-loud to yourself what you understand the task to be, pretending that you are saying this to an interviewer. This is very important to practice. */
/*
none
*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// 4. Rename the parameter(s) in the codewars starter function if the parameter names are imprecise. pick a name using the any good words from the challenge description or from your input description in #5
function repeatAdjacent(string) {
  /* 5. describe the inputs and outputs in detail: their types and possible values
          note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.
  
          inputs:
            parameter1: string|number|...; possible values:
            parameter2: string|number|...; possible values:
  
          output: string|number|...; possible values: */
  /*
    input: string; possible values: any string
    output: number; possible values: 0 or more
  
    */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)

  const isString = typeof string === 'string'
  if (!isString) {
    throw new Error('input must be a string')
  }

  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
        WHAT do you want to change in the input to get the output?
          WHAT do you want to calculate based on the input? 
          Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, Yes!)
          */
  /*
  I want to count the number of big groups in the given string. A big group is a substring of the parameter string with 2 or more adjacent groups.
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

  const splitString = string.split('')
  console.log({ splitString })
  const removeNonAlphaCharacters = splitString.filter((char) => char.match(/[a-z]/i)) // i used this in case the string has non-alphabetic characters
  console.log({ removeNonAlphaCharacters })

  const characterGroups = removeNonAlphaCharacters.join('').match(/([a-z])\1+/gi)
  console.log({ characterGroups })

  // const bigCharacterGroups = characterGroups.filter((group) => group.length > 1)
  // console.log({ bigCharacterGroups })

  const bigGroupCounts = characterGroups.reduce((acc, group, i, arr) => {
    const prevGroup = arr[i - 1]
    console.log({ prevGroup })

    const isPrevGroupExist = Boolean(prevGroup)
    console.log({ isPrevGroupExist })

    const isSameGroup = isPrevGroupExist && prevGroup[0] === group[0]
    console.log({ isSameGroup })

    if (isSameGroup) {
      acc[acc.length - 1].push(group)
    } else {
      acc.push([group])
    }
    return acc
  }, [])

  const bigGroupCount = bigGroupCounts.filter((groups) => groups.length > 1).length
  console.log({ bigGroupCount })

  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
        always return a variable, or, use only variables in return statements
        this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
     */
  return bigGroupCount
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
repeatAdjacent('ccccoodeffffiiighhhhhhhhhhttttttts') // 3
repeatAdjacent('soooooldieeeeeer') // 0
repeatAdjacent('') // 0
repeatAdjacent('aaaa') // 1
repeatAdjacent('ccccoooooooooooooooooooooooddee') // 1
repeatAdjacent('chaaallengee') // 0
repeatAdjacent('wwwwaaaarrioooorrrrr') // 1
repeatAdjacent('gztxxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmmitttttttlllllhkppppp') // 2

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
