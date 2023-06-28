// (status: in progress)
function wordMesh(arrayOfStrings) {
  // your code here
  const isArrayOfStrings =
    Array.isArray(arrayOfStrings) && arrayOfStrings.every((element) => typeof element === 'string')
  if (!isArrayOfStrings) throw new TypeError('wordMesh: input must be an array of strings')

  for (let i = 0; i < arrayOfStrings.length - 1; i++) {
    const meshedLetters = []
    console.log(arrayOfStrings[i])
    for (let j = 0; j < arrayOfStrings[i].length; j++) {
      //(done) DM: create two well-named variables to hold the values used in the below logical expression
      //             then, assign the value of the logical expression to a well-named variable
      //             then, console.log them all
      const firstWordLetter = arrayOfStrings[i][j]
      console.log({ firstWordLetter })
      const secondWordLetter = arrayOfStrings[i + 1][j]
      console.log({ secondWordLetter })
      if (firstWordLetter === secondWordLetter) {
        meshedLetters.push(arrayOfStrings[i][j])
      }
    }
    if (meshedLetters.length === 0) return 'failed to mesh'
    return meshedLetters.join('')
    // put a console.log here, so that you can see what is going on for each iteration of the outer loop
  }

  //  MM: this is my solution, but it doesn't work for the last test case. I struggled with this one all day long.
}

wordMesh(['allow', 'lowering', 'ringmaster', 'terror']) // => 'lowringter'
wordMesh(['kingdom', 'dominator', 'notorious', 'usual', 'allegory']) // => 'failed to mesh'

// DM: it's easy to make mistakes, for example, your tests below, the expected result is incorrect. But, remember, no the thing is NOT to never make mistakes, but to discover the inevitable mistakes. I strongly suspect that with proper logging in your code, you would have realized that your expected test results below were wrong.

// DM: this would be "failed to mesh" - elements 0 and 1 don't mesh
wordMesh(['deforestation', 'citation', 'conviction', 'incarceration']) // => 'con'

// DM: this would fail to mesh
wordMesh(['wedding', 'edding', 'ding', 'ing', 'ng', 'g']) // => 'wedding'

// DM: this would be "eeteem"
wordMesh(['age', 'estate', 'esteem', 'teem']) // => 'aged'

// DM: this would be "failed to mesh"
wordMesh(['eternal', 'tantalize', 'zing', 'ing', 'ng', 'g']) // => 'eternal'

/* CURRENT STATUS (update this section before each commit of the file)

(done)DM: todoMM: what is the current status? I see your console.logs, but without more info from you, I have no idea what I should do in this file. (note:I see that the expected results of the tests are still incorrect. DM: todoMM: this is not done. I was asking what is the status, as in: Does the function work correctly? Next steps? What should I do in this file?

*/
