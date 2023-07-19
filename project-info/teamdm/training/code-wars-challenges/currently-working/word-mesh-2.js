/*

Moise, I didn't fix the issue, you can figure out for yourself where the logic breaks. (note: don't do any major changes to your code. The existing code below is an excellent approach. You just need to debug it and make small changes. Only two lines need to be changed/moved for the code to work.)

What I changed below is a few things that make it easier to debug the logic
* I extracted some values to variables so that logging shows the logic more clearly.
* I also adjusted the logs to be more clear.
Now, you can see more clearly where/why the logic doesn't work.

My advice: First, re-read the challenge instructions again, then write out what you want each iteration of each loop to do. 
note: use bullet points and indenting to denote being inside a loop and inside an if/else block
example:

array: ['allow', 'lowering', 'ringmaster', 'terror']
expected result // 'lowringter'
loop through each word in the 
* FIRST WORD
  * get the current word: allow
  * get the next word: lowering
  * loop through each letter of the current word
    * <-- DM: what letters do you need to get from currentWord and nextWord? Write it out here exactly; what do you do to each letter; write it out here exactly -->
    * ...
* SECOND WORD
  ...

*/

function wordMesh(arrayOfStrings) {
  console.log('--------------------------- wordMesh called:')
  const isArrayOfStrings =
    Array.isArray(arrayOfStrings) && arrayOfStrings.every((element) => typeof element === 'string')
  if (!isArrayOfStrings) throw new TypeError('wordMesh: input must be an array of strings')

  for (let i = 0; i < arrayOfStrings.length - 1; i++) {
    // DM: I renamed this to "current" word because it is not the "first" word when i >= 2
    const currentWord = arrayOfStrings[i]
    const nextWord = arrayOfStrings[i + 1]
    console.log({ i, word: currentWord, nextWord })

    // note: ok for now, but empty array is no longer allowed under the "no mutations" rule
    const meshedLetters = []
    for (let j = 0; j < currentWord.length; j++) {
      const currentWordLetter = currentWord[j]
      const nextWordLetter = nextWord[j]
      if (currentWordLetter === nextWordLetter) {
        meshedLetters.push(currentWord[j])
      }
      // DM: I added a '--' to indent the log so that you can tell when you are inside this inner loop
      console.log('-----', {
        j,
        firstWordLetter: currentWordLetter,
        secondWordLetter: nextWordLetter,
        meshedLetters,
      })
    }
    console.log({ meshedLetters })
    if (meshedLetters.length === 0) return 'failed to mesh'
    return meshedLetters.join('')
    // put a console.log here, so that you can see what is going on for each iteration of the outer loop
    // DM: remember, each comment in code refers to the line BELOW the comment, so in the comment above I was literally telling you to put a console.log on a new line below this comment line. This is a major hint! :)
  }

  //  MM: this is my solution, but it doesn't work for the last test case. I struggled with this one all day long.
}

wordMesh(['allow', 'lowering', 'ringmaster', 'terror']) // 'lowringter'
// DM: uncomment the below when you get the first test to pass
// wordMesh(['allow', 'lowering', 'ringmaster', 'terror']) // 'lowringter'
// wordMesh(['age', 'estate', 'esteem', 'teem']) // 'eeteem'
// wordMesh(['beacon', 'condominium', 'umbilical', 'california']) // "conumcal";
// wordMesh(['abandon', 'donation', 'onion', 'ongoing']) // dononon"
// wordMesh(['jamestown', 'ownership', 'hippocampus', 'pushcart', 'cartorapher', 'pheromone']) // "ownhippuscartpher"
// wordMesh(['kingdom', 'dominator', 'notorious', 'usual', 'allegory']) // 'failed to mesh'
// wordMesh(['deforestation', 'citation', 'conviction', 'incarceration']) // 'failed to mesh'
// wordMesh(['wedding', 'edding', 'ding', 'ing', 'ng', 'g']) // 'failed to mesh'
// wordMesh(['eternal', 'tantalize', 'zing', 'ing', 'ng', 'g']) // 'failed to mesh'

/* CURRENT STATUS (update this section before each commit of the file)
d  
  MM: it works and pass all the tests. DM: No, all of the tests say "failed to mesh", so it does not work and not all the tests passed. In order for me to work efficiently, I have to be able to trust that the status you give is accurate. If I don't trust your accuracy, then I have to double or triple check everything you do. This slows us down. So, please take time to review and check very carefully. Attention to detail is so, so crucial in programming. 
  
  next steps: 
  * DM: MM debugs the code to insure that all the tests work

*/
