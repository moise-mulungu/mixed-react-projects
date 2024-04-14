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
Each word can and must be used only once. Otherwise return false.

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

// initial, partial solution:
// works ONLY if the initial order meets the conditions (does not work if the words must be reordered)
// DM: commenting out this solution because it doesn't work. see the working recursive solution below.
// function millipedeOfWords(words) {
//   /* 5. describe the inputs and outputs in detail: their types and possible values
//         note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

//         inputs:
//           parameter1: string|number|...; possible values:
//           parameter2: string|number|...; possible values:

//         output: string|number|...; possible values: */
//   /*
// input: array of words
// output: boolean(true or false) if all words can be combined into one word
//   */

//   // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
//   const isArrayOfStrings = words.every((word) => typeof word === 'string')
//   if (!isArrayOfStrings) throw new Error('parameter words must be an array of strings')

//   const arrayOfUniqueWords = [...new Set(words)]
//   if (arrayOfUniqueWords.length !== words.length) return false
//   // console.log('arrayOfUniqueWords', arrayOfUniqueWords)
//   /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
// 	  WHAT do you want to change in the input to get the output?
//         WHAT do you want to calculate based on the input?
//         Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables.)
//         */
//   /*
// I want to check if all words can be combined into one word by returning true or false
//   */

//   /* 8. break down the the 'variable' elements of the solution into the most granular (smallest) parts by
//         assigning each part (string, boolean expression, etc.) to a well-named, descriptive variable.
//         Naming variables:
//         * each logical expressions must be assigned to a variable.
// 	  * the instructions often contain words that can be used in variable names.
//         * function names verb or verb+noun (create, handleClick, handleSubmit)
//         * booleans are named with (positive) adjectives: (open, seen, isString)
//         * everything else with nouns or adjectives: (myThing, myCoolThing)
//         * variable names should express exactly what the variable contains
//         * see naming-conventions.md*/
//   const firstAndLastLetterOfEachWord = arrayOfUniqueWords.map((word, index) => {
//     const firstLetter = word[0]
//     const lastLetter = word[word.length - 1]
//     return { firstLetter, lastLetter }
//   })
//   console.log('firstAndLastLetterOfEachWord', firstAndLastLetterOfEachWord)

//   /* 9. use the named parts to create a readable solution. */

//   // howtojs: Array.every example
//   const areFirstAndLastLettersEqual = firstAndLastLetterOfEachWord.every((word, index, src) => {
//     const isNextWord = index < src.length - 1
//     if (!isNextWord) return true

//     const currentWord = src[index]
//     const nextWord = src[index + 1]
//     if (currentWord.lastLetter !== nextWord.firstLetter) return false
//     return true
//   })

//   /* 10. return the solution
//       always return a variable, or, use only variables in return statements
//       this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
//    */
//   return areFirstAndLastLettersEqual
// }

// hard algo challenge, think about the "naive", "brute force" approach, talk about it
// ['endure', 'elite', 'excess']
// ['engine', 'endure', 'elite', 'excess']
// const isMillipede = words.reduce((acc, cur, idx, src) => {
//   const isNextWord = idx < words.length - 1
//   if (!isNextWord) return acc

//   const currentWord = src[idx]
//   const nextWord = src[idx + 1]
//   if (currentWord[currentWord.length - 1] !== nextWord[0]) return false
//   return acc
// }, true)

// solution: any order
// if the last letter of the current word is the same as the first letter of the next word: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater.
/* 
    pseudocode:

    get first and last letter for each word in an object
    note: words preserves initial order
   
    return true if initial order works
  
    ??? try all different orders
    ??? how to get all the possible combinations of an array

    DM: todoDM: https://www.google.com/search?q=javascript+get+all+possible+combinations+of+array+-+of+the+same+length Duncan will research more. old code?

    # find the best algo
    1 built-in JS method
    2 lodash
    3 google
    
  
  // */
// const firstAndLastLetters = arrayOfUniqueWords.reduce(
//   (acc, cur, idx, src) => {
//     const currentWord = src[idx]
//     acc.push({
//       first: currentWord[0],
//       last: currentWord[currentWord.length - 1],
//     })
//     return acc
//   },
//   [
//     /* { first, last } */
//   ]
// )
// console.log('-------', firstAndLastLetters)

// const worksInInitialOrder = firstAndLastLetters.reduce((acc, cur, idx, src) => {
//   if (cur.last !== src[idx + 1].first) return false
//   return acc
// })
// if (worksInInitialOrder) return true
// }

/*
DM: Moise, be sure to walk through this again, to refresh your memory on the key details and questions of recursion.

Moise, I'm going to walk you through my thinking in detail. With experience, you'll think of these, but notice immediately why they don't work. But, I'm showing my thinking in detail here for you.

Your above solution works if the words are already in the exact order
but, if the words are not in the right order, it doesn't work
So, think about how you could make it work:

Solution 1: brute force: generate all possible ordering of the array, then test them all using current code. Very inefficient - what if there were 1000 words in the array? THat would be an exponentially huge number of variations of the array.
* inefficient! is there a better way?

Solution 2: check each order variant programmatically, one at a time, stopping when you find the solution
* better, but still inefficient!
  * so I would try to think of some other mathematical or clever logic
  * it may not be possible, but let's try to think of a better way!

First let's have a look at what you know: (from the output of your solution in the node REPL)

> millipedeOfWords(['screen', 'desire', 'theater', 'excess', 'night']) // true
firstAndLastLetterOfEachWord [
  { firstLetter: 's', lastLetter: 'n' },
  { firstLetter: 'd', lastLetter: 'e' },
  { firstLetter: 't', lastLetter: 'r' },
  { firstLetter: 'e', lastLetter: 's' },
  { firstLetter: 'n', lastLetter: 't' }
]
false // should return "true"

Let's walk through in great detail exactly what is happening, so we can be sure to see any pitfalls in possible mathematical or clever logic solutions.

Your current solution (let's call it Solution 0) works if the array is re-ordered to:
['desire', 'excess', 'screen', 'night', 'theater']
Let's look at exactly what happens by looking at the original array that is passed to the function:
original order: ['screen', 'desire', 'theater', 'excess', 'night']
Solution 0 starts with 'screen' and looks for a word that starts with 'n'
'screen', 'night' then find a word that starts with 't'
'screen', 'night', 'theater' then find a word that starts with 'r'
whoops! there is no word left that starts with 'r', because 'desire' and 'excess' are the only remaining words

Solution 2 would work like this:
* Do Solution 0 first, as described just above.
* then try again, starting with the 2nd word: 'desire'
Do the same steps as above, and it works!
(don't try to code these, just walk through the process "manually" here, in your mind)

So, the key to solving a complex challenge is to walk through the steps 'manually' in your mind, writing the steps down in a comment
This will give an idea of what your algorithm needs to do for Solution 2 (so far, the best solution that we have):
* start with each word in the array, to see which starting word works, which implies a loop.
* search firstAndLastLetterOfEachWord for available next words
* keep track of which words are already used, because you can't use them twice - add used: true to each elem in firstAndLastLetterOfEachWord
* this is still kind of "brute force", but less so than the one before, but it can still get really difficult because there could be 2+ "next words" that match, but they have different last letters, suggesting many possible paths, where you have to stop and start over, maybe recursion is needed ... OUCH! recursion is hard and also there may be a mathematical or clever logic solution

At this point, now that you have one failed test fully understood ...
it's good to ask yourself if there is a less "brute force" solution than the ones I suggested above?
Let's look again at firstAndLastLetterOfEachWord contains very specifically the info needed:
firstAndLastLetterOfEachWord [
  { firstLetter: 's', lastLetter: 'n' },
  { firstLetter: 'd', lastLetter: 'e' },
  { firstLetter: 't', lastLetter: 'r' },
  { firstLetter: 'e', lastLetter: 's' },
  { firstLetter: 'n', lastLetter: 't' }
]
you might wonder if it is possible to:
* maybe just use a "sort callback"
* maybe count up the letters and see if there is an "odd number" (or something like that)
  * ex: 'd' and 'r' are odd (1), while the other letters are even (2)
    * 'd' is a first letter
    * 'r' is a last letter
* maybe you know that the odd number letters must be the first and last words?
* could it be true that all arrays of words that the solution should return true should have 2 letter counts that are odd? 

BTW, you can see the value of firstAndLastLetterOfEachWord, which is part of Step 8
"8. break down the the 'variable' elements of the solution into the most granular (smallest) parts
because it gives a simple view of the key elements: the first and last letters of each word"

So my next step to the "odd numbers" solution is: get the counts of each letter
* possibly need to break down the counts by first and last letter
  * uh-oh! this is getting more complicated. my "spiderman sense" is telling me the "odd numbers" solution won't work

Let's look at another example from the tests!

I'm going to "manually" walk through another test that should return true, if reordered
> millipedeOfWords(['east', 'e', 'e', 't', 't', 'e', 'time']) 
// true
false
This one doesn't have a firstAndLastLetterOfEachWord for some reason, but I can see that there are only 2 letters, 't' and 'e', so in this case the "odd numbers" solution doesn't work.

So, I could try to come up with more clever solutions, but I can't think of any immediately. I am pretending that I'm solving this challenge during a coding interview, and I don't have time to ponder every possibility.

In a coding interview, you can say, "well, I think I will use the best brute force solution. Can I assume that the number of words will always be small enough that the brute force solution will be OK?". The interviewer will either let you assume that or the interviewer will say, why don't you think about a better approach?

So, let's pretend that the interviewer let us use the best brute force solution, Solution 2 above. It will have to be recursive, since you have to keep building up a list of matching words until you run out of words, and return true, or you fail, then you have to backtrack and start over.
Example: say word1 and word2 can be combined, so you found them immediately, but word3 can't be combined with word2, so you have to consider all the remaining words (word4 and above). Then, word4 works, but then word5 can't be combined with word4, so you have to consider the remaining words (word6 and above). So, you see the repetition? And, the "remaining words" you want to check are always changing. This situation screams for a recursive solution. I added above "*recursive*" to show other issues that hint at a recursive solution.

So, now I'm going to just DO the recursive solution. You can learn by example. I've also created another challenge file where you can try using recursive logic to solve it.

*/

/*


challenge: return true if all the words can be combined into one word. May require re-ordering the words
assumption: the only way to solve this is by "brute force", i.e., there is no mathematical formula or clever solution
* start with the first word, then check if all of the remaining words (in any order) can be combined into one word
  * if not, try again, starting with the 2nd word
  * keep trying until there are no more words
* why recursive?: use recursive when you need to repeat the same operation, but a loop doesn't work
  * see above for more reasons to use a recursive approach
      
recursive approach:
* try first word: check if subsequent words

*/
// DM: moise, try not to comment out working code because it might never get uncommented, causing confusion in the future. if the console logs are bothering you, comment out just the console.log lines.
// Final, recursive, solution: (this solution works)
function millipedeOfWords(words) {
  function recursiveSolution(
    words,
    // keep in mind what happens the FIRST time recurse() runs (2nd parameter is not passed)
    previousLastLetter = ''
  ) {
    // recursive functions need a way to know when to no longer "recurse", i.e., there are no more words
    if (words.length === 0) return true
    // can ANY of the words combine? Array.some  implements a loop that stops when a true result is found
    return words.some((word, i) => {
      const wordCombinesWithPreviousWord = word.startsWith(previousLastLetter)
      const allRemainingWords = words.slice(0, i).concat(words.slice(i + 1))
      const lastLetterOfCurrentWord = word.slice(-1) // also: word.at(-1)
      // here is where it recurses, i.e., the "recurse" function calls itself
      return (
        wordCombinesWithPreviousWord &&
        recursiveSolution(allRemainingWords, lastLetterOfCurrentWord) // this where things get tricky, on how to pass these two parameters
      )
    })
  }
  // this is the FIRST time recursiveSolution is called
  const result = recursiveSolution(words)
  console.log({ result })
  return result

  // MM: the recursive code works, but I need to understand it better.
  // DM: add console logs, with indents, similar to how I did it with recursive-nth-fibonacci, so that I can see the order of the recursion by running the function. Then you can also understand it thoroughly and be able to explain it to me.
}

// 11. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// without re-ordering
millipedeOfWords(['engine', 'endure', 'elite', 'excess']) // true
millipedeOfWords(['endure', 'elite', 'excess']) // true

// with re-ordering
millipedeOfWords(['excavate', 'endure', 'desire', 'screen', 'theater', 'excess', 'night']) // true
millipedeOfWords(['screen', 'desire', 'theater', 'excess', 'night']) // true
millipedeOfWords(['east', 'e', 'e', 't', 't', 'e', 'time']) // true
millipedeOfWords(['trade', 'pole', 'view', 'grave', 'ladder', 'mushroom', 'president']) // false
millipedeOfWords(['no', 'dog', 'on', 'good']) // false

/* 11. Make it pretty! Review and edit the above code for conciseness and readability: clear, descriptive variable names
       note: the entire time you are working on the solution, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time figuring out the perfect variable name. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter/better if appropriate.  */

/* 13. code review and approval*/
/* approved */

/* 14. Final step: after code review and approval (like we do at work), copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/

// NOTE: we are breaking the rules of section #14 by leaving comments because indented comments are crucial to understanding how recursion works.

// !!! MOVED to the programming/recursive directory(cool)

// DM: console.logs are not necessary when calling millipedeOfWords()
// a shorter one with only 2 elements
millipedeOfWordsWithIndenting(['engine', 'endure']) // true
// DM: you can uncomment after you get the indenting to work above.

// DM: let's agree that we always run these challenge files using node (not the REPL). That way we'll be on the same page about what to comment out or not.

// DM: after you get the portfolio publishes, return to recursion. It is a must-have skill.

// // without re-ordering
// console.log(millipedeOfWords(['engine', 'endure', 'elite', 'excess'])) // true
// console.log(millipedeOfWords(['endure', 'elite', 'excess'])) // true
// // with re-ordering
// console.log(
//   millipedeOfWords(['excavate', 'endure', 'desire', 'screen', 'theater', 'excess', 'night'])
// ) // true
// console.log(millipedeOfWords(['screen', 'desire', 'theater', 'excess', 'night'])) // true
// console.log(millipedeOfWords(['east', 'e', 'e', 't', 't', 'e', 'time'])) // true
// console.log(millipedeOfWords(['trade', 'pole', 'view', 'grave', 'ladder', 'mushroom', 'president'])) // false
// console.log(millipedeOfWords(['no', 'dog', 'on', 'good'])) // false

/* 15. Duncan moves the file out of this directory when it is complete */

/* CURRENT STATUS (update this section before each commit of the file)

DM: solution works. 
DM: next step: the logging in section 14 should show the recursion via indenting.

MM: DM: the current status of this file is not complete yet, I am still figuring out how to come up with the solution using indent.

next steps:
* DM: see my comments above in section 14, then fix the indenting in that code

*/

/* 
Moise, I'm going to comment this out because it not necessary to completely redo the solution. The solution works. You just need to add some indented logging.
If you like to later experiment with recursive approaches here, that's great. For now, it's best to learn recursion by studying carefully all 4 examples in the repo, paying close attention to what the logging shows you. 
*/
// function millipedeOfWords2(word, count = 1) {
//   if (count > word.length) {
//     return true
//   }
//   const segment = word.slice(0, count)
//   return millipedeOfWords2(word.slice(count), count + 1) && millipedeOfWords2(segment)
// }

// // without re-ordering
// console.log(millipedeOfWords2(['engine', 'endure', 'elite', 'excess'])) // true
// console.log(millipedeOfWords2(['endure', 'elite', 'excess'])) // true

// // with re-ordering
// console.log(
//   millipedeOfWords2(['excavate', 'endure', 'desire', 'screen', 'theater', 'excess', 'night'])
// ) // true
// console.log(millipedeOfWords2(['screen', 'desire', 'theater', 'excess', 'night'])) // true
// console.log(millipedeOfWords2(['east', 'e', 'e', 't', 't', 'e', 'time'])) // true
// console.log(millipedeOfWords2(['trade', 'pole', 'view', 'grave', 'ladder', 'mushroom', 'president'])) // false
// console.log(millipedeOfWords2(['no', 'dog', 'on', 'good'])) // false
