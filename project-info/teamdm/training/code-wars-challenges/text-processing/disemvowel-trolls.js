// imperative solution
function disemvowel(str) {
  const isString = typeof str === 'string'
  if (!isString) {
    throw new Error('input must be a string')
  }

  if (typeof str !== 'string') throw new Error('input must be a string')

  const vowels = ['a', 'e', 'i', 'o', 'u']

  const characters = str.split('')

  const filteredCharacters = characters.filter((character) => {
    const isVowel = vowels.includes(character.toLowerCase())

    return !isVowel
  })

  const joinedFilteredCharacters = filteredCharacters.join('')

  return joinedFilteredCharacters
}

disemvowel('', '') // ''
disemvowel('hello world') // 'hll wrld'
disemvowel('This exercise is easy') // 'Ths xrcs s s'
disemvowel(123) // 'input must be a string'
disemvowel('_/!o@#$%^&*a()_+e') // '_/!@#$%^&*()_+'

// declarative solution
function disemvowel(str) {
  const isString = typeof str === 'string'
  if (!isString) throw new Error('input must be a string')
  return str.replace(/[aeiou]/gi, '')
}

// Â: btw, I didn't mean for you to remove all the comments, just the ones in the short example in teh last step. it's ok, just FYI
