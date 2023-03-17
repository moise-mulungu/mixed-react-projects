/* 

Example of using the steps listed in readme.md

*/

//////////////////////////////////////////////////////////////////////
// remove duplicate words
//////////////////////////////////////////////////////////////////////
/* 
//  https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
Example:
Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
Output:
'alpha beta gamma delta'
assert.strictEqual(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');
  
*/

// MM: the aim is to remove from a string but I want to overthink of an array which may contains string or integer.
// DM: todoMM: check out the readme.md and be sure to always use the exact wording of the steps in each of your code solutions. YOu'll see how this helps. I've copied them below.
/* 
  // 1. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.
  // 2. validate the input (convert types or transform if needed) (*defensive coding*)

3. break down the the 'variable' elements of the solution into the most granular (smallest) parts
   * assign each part (string, boolean expression, etc.) to a well-named, descriptive variable
4. use the named parts to create a readable solution
5. return the solution
6. list and describe anything that is unclear in the challenge description
   * these would be the questions you'd be expected to ask in a interview situation
   * practice reading the challenge description carefully
* note: via these tasks, you are essentially repeating the key elements of the challenge description in the code
7. write test(s) that cover the input variants */
function removeDuplicateWords(stringOfWords) {
  // 1. describe the inputs and outputs in detail: their types and possible values
  // inputs: a string of words, type: string
  // outputs: a string of unique words, type: string
  // note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.
  //       in this case, the order of the words is not changed

  // 2. validate the input (convert types or transform if needed) (*offensive coding*)
  const isString = typeof stringOfWords === 'string'
  if (!isString) {
    throw new Error('the parameter passed must be a string')
  }
  // 3. break down the the 'variable' elements of the solution into the most granular (smallest) parts
  //    assign each part (string, boolean expression, etc.) to a well-named, descriptive variable

  // DM: todoDM: update steps with anything helpful in the below comment
  /*   
    DM: I can tell you know what you want to do, but practice thinking/writing in a "declarative" way, rather than "imperative" way.
    
    When commenting the code, use descriptive regular English, not describing what the code does (imperative), but the "pieces of the puzzle" and how they should be put together (declarative).
    
    Really, the first step is to restate the instructions, but break it down into the smallest parts. 
    
    The instructions:
    "Your task is to remove all duplicate words from a string, leaving only single (first) words entries"
    * start with the the noun(s), which are the individual pieces your logic will operate on (each will be assigned to a variable)
    * end with the verb(s), which describe the logic (what you want to DO)

    "Your task is to 'remove' all 'duplicate words' from a 'string', leaving only 'single (first) words entries'"
    nouns: 
      "duplicate words" 
        note: best to name your variables after the words used in the instructions, ex: duplicateWords
        note: notice that "duplicate words" is plural, this implies a list (array)
              this is a big hint, right there in the instructions
              look at MDN string methods. how can you get a list (array) of words from a string of words
      "string" 
        note: you already have this as the parameter, but good to list it
      "single (first) words entries" 
        note: this is the answer you want to return
        note: instructions were not written by a native speaker of English
        note: good var name: uniqueWordsString
    verbs: 
      "remove" (all duplicate words)

    Once you have the parts taken directly from the instructions, think about any intermediate parts/variables that you'll need to get the solution. For example, before you can get duplicateWords, you need ALL the words (plural!), right? 

    DM: todoMM: ok, based on the above, try  again
  */

  // 3. break down the the 'variable' elements of the solution into the most granular (smallest) parts
  //    assign each part (string, boolean expression, etc.) to a well-named, descriptive variable

  // create a variable that will contain the single first entries
  let singleItems = []

  // 4. use the named parts to create a readable solution

  // loop through the array // DM: this is imperative, practice not thinking this way by describing what to do to the puzzle pieces
  // also, remember one of the rules: don't use 'let'
  for (let i = 0; i < stringOfWords.length; i++) {
    // I want to filter array[i] from the array and add it to the singleItems, but I am not sure!
    const filteredArray = stringOfWords.filter((item, index) =>
      stringOfWords.indexOf(item === index)
    )
    // add the filtered items to singleItems
    singleItems.push(filteredArray)
  }

  // 5. return the solution
  return singleItems

  // 6. list and describe anything that is unclear in the challenge description
  //  * these would be the questions you'd be expected to ask in a interview situation
  //  * practice reading the challenge description carefully
}

// 7. write test(s) that cover the input variants */
removeDuplicateWords('any played music in the any text of the music') // put expected result here
// DM: careful: integers wasn't in the instructions
// removeDuplicateWords[(1, 4, 6, 2, 7, 2, 5, 1, 3, 8)]
removeDuplicateWords(
  'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
) //  'alpha beta gamma delta'
