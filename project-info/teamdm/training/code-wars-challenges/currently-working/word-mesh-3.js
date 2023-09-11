function wordMesh(arrayOfStrings) {
  console.log('--------------------------- wordMesh called:')
  const isArrayOfStrings =
    Array.isArray(arrayOfStrings) && arrayOfStrings.every((element) => typeof element === 'string')
  if (!isArrayOfStrings) throw new TypeError('wordMesh: input must be an array of strings')

  // separate expressions; see the wrong number of matches

  // DM: (?= \1) is a "positive lookahead assertion". Interesting.
  const meshedLetters = arrayOfStrings.join(' ').match(/(\w+)(?= \1)/g)

  const failed = arrayOfStrings.length === meshedLetters. // DM: todoMM: you can finish this line by checking the length of  meshedLetters against the expected length

  const result = meshedLetters === null || failed ? 'failed to mesh' : meshedLetters.join('')

  console.log({ arrayOfStrings })
  console.log({ meshedLetters })
  console.log({ result })

  return result
}

// node project-info/teamdm/training/code-wars-challenges/currently-working/word-mesh-3.js
wordMesh(['allow', 'lowering', 'ringmaster', 'terror']) // 'lowringter'
wordMesh(['age', 'estate', 'esteem', 'teem']) // 'eeteem'
wordMesh(['beacon', 'condominium', 'umbilical', 'california']) // "conumcal";
wordMesh(['abandon', 'donation', 'onion', 'ongoing']) // dononon"
wordMesh(['jamestown', 'ownership', 'hippocampus', 'pushcart', 'cartorapher', 'pheromone']) // "ownhippuscartpher"
wordMesh(['wedding', 'edding', 'ding', 'ing', 'ng', 'g']) // 'eddingdingingngg'
// should fail:
wordMesh(['deforestation', 'citation', 'conviction', 'incarceration']) // 'failed to mesh' - 1st pair fails
// DM: todoMM: these two didn't "failed to mesh"
wordMesh(['kingdom', 'dominator', 'notorious', 'usual', 'allegory']) // 'failed to mesh' - 2nd pair fails
wordMesh(['eternal', 'tantalize', 'zing', 'ing', 'ng', 'g']) // 'failed to mesh'

/* CURRENT STATUS 

STATUS: all tests passed!

NEXT STEPS: your review and approval.

*/
