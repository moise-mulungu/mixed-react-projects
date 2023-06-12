function wordMesh(arrayOfStrings) {
  // your code here
  const isArrayOfStrings =
    Array.isArray(arrayOfStrings) && arrayOfStrings.every((element) => typeof element === 'string')
  if (!isArrayOfStrings) throw new TypeError('wordMesh: input must be an array of strings')

  for (let i = 0; i < arrayOfStrings.length - 1; i++) {
    const meshedLetters = []
    for (let j = 0; j < arrayOfStrings[i].length; j++) {
      // DM: todoMM: create two well-named variables to hold the values used in the below logical expression
      //             then, assign the value of the logical expression to a well-named variable
      //             then, console.log them all
      if (arrayOfStrings[i][j] === arrayOfStrings[i + 1][j]) {
        meshedLetters.push(arrayOfStrings[i][j])
      }
    }
    if (meshedLetters.length === 0) return 'failed to mesh'
    return meshedLetters.join('')
    // put a console.log here, so that you can see what is going on for each iteration of the outer loop
  }

  //  MM: toDM: this is my solution, but it doesn't work for the last test case. I struggled with this one all day long.
  // todoMM: ok, I don't see any console.log, so it seems like you haven't debugged enough - console.log is your first step to debugging. as long as you have put every small part into a well-named variable, you can log those variables to see where things went wrong.
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
