function wordMesh(arrayOfStrings) {
  console.log('--------------------------- wordMesh called:')
  const isArrayOfStrings =
    Array.isArray(arrayOfStrings) && arrayOfStrings.every((element) => typeof element === 'string')
  if (!isArrayOfStrings) throw new TypeError('wordMesh: input must be an array of strings')

  // DM: (?= \1) is a "positive lookahead assertion". Interesting.
  const meshedLetters = arrayOfStrings.join(' ').match(/(\w+)(?= \1)/g)
  console.log({ meshedLetters })

  if (meshedLetters === null) return 'failed to mesh' // guard clause to handle the case when meshedLetters.match fails
  return meshedLetters.join('')
}
//(done) DM: todoMM: try running this script and look at the error message. Write a guard clause to handle the case when meshedLetters .match fails
// node project-info/teamdm/training/code-wars-challenges/currently-working/word-mesh-3.js
wordMesh(['allow', 'lowering', 'ringmaster', 'terror']) // 'lowringter'
wordMesh(['age', 'estate', 'esteem', 'teem']) // 'eeteem'
wordMesh(['beacon', 'condominium', 'umbilical', 'california']) // "conumcal";
wordMesh(['abandon', 'donation', 'onion', 'ongoing']) // dononon"
wordMesh(['jamestown', 'ownership', 'hippocampus', 'pushcart', 'cartorapher', 'pheromone']) // "ownhippuscartpher"
wordMesh(['kingdom', 'dominator', 'notorious', 'usual', 'allegory']) // 'failed to mesh'
wordMesh(['deforestation', 'citation', 'conviction', 'incarceration']) // 'failed to mesh'
wordMesh(['wedding', 'edding', 'ding', 'ing', 'ng', 'g']) // 'failed to mesh'
wordMesh(['eternal', 'tantalize', 'zing', 'ing', 'ng', 'g']) // 'failed to mesh'

/* CURRENT STATUS 

STATUS: all tests passed!

NEXT STEPS: your review and approval.

*/
