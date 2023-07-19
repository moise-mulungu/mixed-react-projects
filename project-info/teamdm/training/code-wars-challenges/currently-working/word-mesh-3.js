function wordMesh(arrayOfStrings) {
  console.log('--------------------------- wordMesh called:')
  const isArrayOfStrings =
    Array.isArray(arrayOfStrings) && arrayOfStrings.every((element) => typeof element === 'string')
  if (!isArrayOfStrings) throw new TypeError('wordMesh: input must be an array of strings')

  // DM: (?= \1) is a "positive lookahead assertion". Interesting.
  const meshedLetters = arrayOfStrings.join(' ').match(/(\w+)(?= \1)/g)

  if (meshedLetters.length === arrayOfStrings.length - 1) {
    // DM: use the standard .join(string); .join`` looks like a hack
    return meshedLetters.join('')
  }
  return 'failed to mesh'

  // DM: execution never reaches this point
  console.log({ meshedLetters })
}

wordMesh(['allow', 'lowering', 'ringmaster', 'terror']) // 'lowringter'
wordMesh(['allow', 'lowering', 'ringmaster', 'terror']) // 'lowringter'
wordMesh(['age', 'estate', 'esteem', 'teem']) // 'eeteem'
wordMesh(['beacon', 'condominium', 'umbilical', 'california']) // "conumcal";
wordMesh(['abandon', 'donation', 'onion', 'ongoing']) // dononon"
wordMesh(['jamestown', 'ownership', 'hippocampus', 'pushcart', 'cartorapher', 'pheromone']) // "ownhippuscartpher"
wordMesh(['kingdom', 'dominator', 'notorious', 'usual', 'allegory']) // 'failed to mesh'
wordMesh(['deforestation', 'citation', 'conviction', 'incarceration']) // 'failed to mesh'
wordMesh(['wedding', 'edding', 'ding', 'ing', 'ng', 'g']) // 'failed to mesh'
wordMesh(['eternal', 'tantalize', 'zing', 'ing', 'ng', 'g']) // 'failed to mesh'

/* CURRENT STATUS (update this section before each commit of the file)

STATUS: 2 of the tests don't pass

NEXT STEPS: debug the code (next week. Thursday, focus on the other challenge files.)

*/
