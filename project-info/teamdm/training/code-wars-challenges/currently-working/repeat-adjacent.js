// node project-info/teamdm/training/code-wars-challenges/currently-working/repeat-adjacent.js
// always copy this template into each new coding challenge file
// !!! always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
// note: You can be working multiple challenges, but always address all todoM-Ms in the code-wars-challenges directory before moving on to a new challenge. If you get stuck on one, leave a question in the todo-MM and you can do a new challenge. We just don't want to leave challenges unfinished. And, it makes for extra work to have to return to it later after memory has faded.

// DM: what is this for? I had to comment out as it throws a compilation error. MM: i am not sure where it cam from, it's not necessary here. it can be removed

/* CURRENT STATUS and NEXT STEPS (update this section before each commit of the file)
   The code works and all the test cases pass
   There is no question
   The next step is just the DM's review
   I achieved the solution by:
    1. first reading the two function codes in the scratch.js 
    2. compared the splitIntoConsecutiveCharsGroups function with the characterGroups in my code
    3. combining the three first variables; splitString, removeNonAlphaCharacters and characterGroups variables into one splitIntoConsecutiveCharsGroups variable
    4. compared the concatenateConsecutiveStrings and concatenateConsecutiveStrings_withReduce functions in the scratch.js file, and used the for ... of approaches instead of the .reduce approach
    5. declaring two variables that store the count of big groups and the state of whether we are in a big group or not with a boolean value
    6. in the for ... of loop, i declared two variables that store the las t and next states of the group
    7. finally created a condition to check numbers of individual group in groups and return the counted group numbers.
*/
/* 

STATUS: in progress (in progress | blocked | done). i've extracted groups of repeating characters from the input string using a regular expression by removing the first index of the group. But there is still a test case that is failing. I'll continue working on the solution tomorrow.
DM: ok, but there are some todoMMs that you havent addressed, which you should do before continuing with the solution.
DM: also, give this code to AI to see what it says. 

if in progress: (describe what you have accomplished so far)
(done)DM: todoMM: describe what you have accomplished so far

if blocked: (describe the problem/error you're encountering in a way that allows me to help you)


if done: (say: fini! | trop simple! | quelle dommage, trop difficile, mais je suis pret pour le prochain challenge! | merde à ça!) DM: sorry for the crappy french, I was just having fun with using Copilot to write French! MM: that's fine with french expressions, i like it. but i would say in french: "fini, mais trop difficile"


NEXT STEPS:
for MM:


for DM:


*/

/* 
(done)DM: todoMM: leave this as is, I added a new "STATUS" section above. Put your status there.
* DM: this is a non-answer because it simply describes the process of solving any challenge. Can you see how it gives me no information? 

* DM: this is also a non-answer. Always say something specific.


*/

// memorable summary of the whole process: make it work, test it, make it pretty

// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
You are given a string s.

Let us call a substring of s with "2 or more" "adjacent" "identical" letters a "group" (such as "aa", "bbb", "cccc"...).

Let us call a substring of s with "2 or more" "adjacent" "groups" a big group (such as "aabb","bbccc"...).

Your task is to count the number of big groups in the given string.

Examples

EX 1
"ccccoodeffffiiighhhhhhhhhhttttttts" => 3

The groups are "cccc", "oo", "ffff", "iii", "hhhhhhhhhh", "ttttttt".

The big groups are "ccccoo", "ffffiii", "hhhhhhhhhhttttttt".

DM: "de" are not 2 or more adjacent identical, so they delimit ccccoo from ffffiii. Same for "g" and "s".
* note: "s" ... single letter at beginning or end may be an edge case to watch for


EX 2
"gztxxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmmitttttttlllllhkppppp" => 2

The big groups are :

"xxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmm" and "tttttttlllll"

DM: ppppp at the end is 2 or more adjacent identical, but it is not part of a big group ("group" implies 2 or more)

EX 3
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
    input: string; possible values: string
    output: number; possible values: 0 or more (non-negative integer)
  
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
  (done)DM: todoMM: explain also what is a group? (I know you know, but it's good to explain it explicitly here, like you did for "big group". MM: a group here is a concatenate of one or more substrings of identical characters. e.g : this are groups ; "cccc", "oo", "ffff", "iii", from this string: 'ccccooffffiii'

        DM: you would benefit from listing the "parts" involved in the problem and the solution:
        * a group -repeating identical letters
        * a big group - 2 or more adjacent groups
        * the "delimiter" that defines the beginning and end of a big group
          * (done)DM: todoMM: describe the delimiter here
          * MM: delimiter are characters that are between two big groups. eg: this string gztxxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmmitttttttlllllhkppppp" has the character "i" as delimiter because it's between this big group 'xxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmm' and that one 'tttttttlllllhkppppp'
           
    DM: todoMM: fill in this below is a new section that I added to the STARTER template.

    input: string

    the intermediate things neededto be added before the output are:
    Boolean, 
    
    output: number
  
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
          * see naming-conventions.md
  */

  // DM: todoMM: good thinking but this is a validation, so move it to the validation section and throw an error if there are non-letter characters. By removing non-letters then continuing to process corrupt data you are setting yourself up for confusing bugs in production, bugs that will not surface until too late. Better to "fail fast" by throwing immediately. Better just throw the error and stop processing the data.
  // const splitString = string.split('')
  // console.log({ splitString })
  // DM: todoMM: rename this to reflect that you are creating a "thing", i.e. an array,which should use noun form, not the verb form of "remove".
  // const removeNonAlphaCharacters = splitString.filter((char) => char.match(/[a-z]/i)) // i used this in case the string has non-alphabetic characters
  // console.log({ removeNonAlphaCharacters })

  // const splitIntoConsecutiveCharsGroups =
  //   removeNonAlphaCharacters.join('').match(/([a-z])\1{3,}(?![a-z]\1*)/gi) || []
  // console.log({ splitIntoConsecutiveCharsGroups })

  const splitIntoConsecutiveCharsGroups = string.match(/(.)\1*/g) // MM: i replaced the above code with this one as it is more concise and it does the same thing
  console.log(splitIntoConsecutiveCharsGroups)
  /* DM:

  I took a little time to think about how AI can help coding challenges
  
  It is OK to use copilot if you want. The skill of programming is how to use AI copilots to be productive. If you above have described the problem well, then Copilot suggestions will be very good. But keep in mind that AI will not handle too many steps at once, so you have to have a plan. EX: I tried copilot here and it doesnt "big groups" well, so I needed to tell it more specifically how to get there, which is what im suggesting to you below.

  that said ... this is a challenge that AI is really stupid at. Check out my transcript https://chat.openai.com/c/c43a4baa-25d2-4068-8e49-a7d6559193ae just read my prompts and eyeball the code. AI just could not understand the problem. ...
  What I DID get from AI is the 1st function in scratch.js
  * I did learn that .match is better than .split for splitting the way I wanted.
  * sometimes you have to start over in a new AI chat because AI will confuse itself with previous prompts from same chat
  * (in progress)DM: todoMM: shoot me an email if you can't see either of the chat.openai.com links.
  * MM: i'll open this link later as my connection is not stable

  This AI chat resulted in the 2nd function in scratch.js
  https://chat.openai.com/c/023e731f-3b4b-4b28-9990-d5aafbb52e70
  * I only asked AI to do PART of the solution, because it could not handle the entire problem in the previous chat

  (done)DM: todoMM: use the code in ./scratch.js to finish the challenge. Dont copy the functions, because they are not a complete solution. I got the functions from specific chats with AI that solve only part of the challenge problem. You can copy multiple lines of code from scratch JS into here. It is similar to your started solution in some ways, but it uses a for...of loop and "let" - which is OK in some cases (see my note at the bottom of scratch.js)

*/

  /* DM:
  output of the next console.log:
  {
    characterGroups: [ 'cccc', 'oo', 'ffff', 'iii', 'hhhhhhhhhh', 'ttttttt' ],
    string: 'ccccoodeffffiiighhhhhhhhhhttttttts'
  }
  you have a list of the repeating identical letters, but, you dont know where the "delimiters" are (ie delimiters are non-repeating characters that separate the repeating characters into groups).
  
  The approach of splitting the string into an array is very good. I would split, but use the regexp found in scratch.js

  */

  // const characterGroups = removeNonAlphaCharacters.join('').match(/([a-z])\1+/gi)
  // console.log({ characterGroups, string })

  // const bigCharacterGroups = characterGroups.filter((group) => group.length > 1)
  // console.log({ bigCharacterGroups })

  // DM: reduce! nice. Good variable names.
  // (in progress)DM: todoMM: as an exercise, explain here why you used reduce instead of map. (hot tip: search the repo on "howtojs.*reduce" for past lessons on tis). I'm not implying that .reduce is wrong here, just asking. Ill review this code in detail when you have it working.
  // (in progress)DM: todoMM: what are you doing with the reduce? Above the start of the reduce block, describe it briefly in terms of using JS to process the input, using general JS terms, without using specifics from the challenge.
  // (in progress)DM: todoMM: also, document the lines in this .reduce if what/why you are doing is not already expressed in the variable names.
  // const bigGroupCounts = characterGroups.reduce((acc, group, i, arr) => {
  //   const prevGroup = arr[i - 1]
  //   console.log({ prevGroup })

  //   const isPrevGroupExist = Boolean(prevGroup)
  //   console.log({ isPrevGroupExist })

  //   // const isSameGroup = isPrevGroupExist && prevGroup[0] === group[0]
  //   const isSameGroup = isPrevGroupExist && prevGroup === group
  //   console.log({ isSameGroup })

  //   if (isSameGroup) {
  //     acc[acc.length - 1].push(group)
  //   } else {
  //     acc.push([group])
  //   }
  //   return acc
  // }, [])

  // const bigGroupCount = bigGroupCounts.filter((groups) => groups.length > 1).length
  // console.log({ bigGroupCount })
  let bigGroupCount = 0 // this line stores the count of big groups
  let inBigGroup = false // this line stores the state of whether we are in a big group or not with a boolean value

  for (const group of splitIntoConsecutiveCharsGroups) {
    const isLastGroup =
      group === splitIntoConsecutiveCharsGroups[splitIntoConsecutiveCharsGroups.length - 1] // this line stores the state of whether we are in the last group or not with a boolean value
    const isNextGroupSingle =
      splitIntoConsecutiveCharsGroups[splitIntoConsecutiveCharsGroups.indexOf(group) + 1]?.length <
      2 // this line stores the state of whether the next group is single or not with a boolean value

    // this checks if the group in groups has a length bigger than two and count all the group individually
    if (group.length >= 2) {
      if (!inBigGroup) {
        inBigGroup = true
      } else if (isLastGroup || isNextGroupSingle) {
        bigGroupCount++
        inBigGroup = false
      }
    } else {
      inBigGroup = false
    }
  }

  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
        always return a variable, or, use only variables in return statements
        this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
     */
  console.log({ bigGroupCount })
  return bigGroupCount
}
// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
repeatAdjacent('ccccoodeffffiiighhhhhhhhhhttttttts') // 3
repeatAdjacent('soooooldieeeeeer') // 0
// repeatAdjacent('') // 0
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
