function wordMesh(arrayOfStrings) {
  // your code here
  const isArrayOfStrings =
    Array.isArray(arrayOfStrings) && arrayOfStrings.every((element) => typeof element === 'string')
  if (!isArrayOfStrings) throw new TypeError('wordMesh: input must be an array of strings')

  for (let i = 0; i < arrayOfStrings.length - 1; i++) {
    const meshedLetters = []
    for (let j = 0; j < arrayOfStrings[i].length; j++) {
      if (arrayOfStrings[i][j] === arrayOfStrings[i + 1][j]) {
        meshedLetters.push(arrayOfStrings[i][j])
      }
    }
    if (meshedLetters.length === 0) return 'failed to mesh'
    return meshedLetters.join('')
  }

  //  MM: toDM: this is my solution, but it doesn't work for the last test case. I struggled with this one all the day along.
}

wordMesh(['allow', 'lowering', 'ringmaster', 'terror']) // => 'lowringter'
wordMesh(['kingdom', 'dominator', 'notorious', 'usual', 'allegory']) // => 'failed to mesh'
wordMesh(['deforestation', 'citation', 'conviction', 'incarceration']) // => 'con'
wordMesh(['wedding', 'edding', 'ding', 'ing', 'ng', 'g']) // => 'wedding'
wordMesh(['age', 'estate', 'esteem', 'teem']) // => 'aged'
wordMesh(['eternal', 'tantalize', 'zing', 'ing', 'ng', 'g']) // => 'eternal'
