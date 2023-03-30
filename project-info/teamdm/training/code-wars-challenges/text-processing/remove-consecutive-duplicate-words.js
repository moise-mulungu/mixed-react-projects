function removeConsecutiveDuplicates(string) {
  const isString = typeof string === 'string'
  if (!isString) throw new Error('parameter or input must be a string')

  const removeConsecutiveDuplicateWords = string.split(' ')
  console.log(removeConsecutiveDuplicateWords)
  const mapped = removeConsecutiveDuplicateWords.map((word, index) => {
    if (word === removeConsecutiveDuplicateWords[index + 1]) {
      return ''
    }
    return word
  })

  console.log(mapped)
  return mapped.join(' ')
}

removeConsecutiveDuplicates('alpha alpha alpha alpha', 'alpha')
removeConsecutiveDuplicates('alpha beta alpha', 'alpha beta alpha')
removeConsecutiveDuplicates('alpha alphabeta alphagamma', 'alpha alphabeta alphagamma')
removeConsecutiveDuplicates('alpha alpha beta alpha alpha', 'alpha beta alpha')
removeConsecutiveDuplicates('alpha beta beta', 'alpha beta')
