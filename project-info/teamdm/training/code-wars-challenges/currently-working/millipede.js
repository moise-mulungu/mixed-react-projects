function millipedeOfWords(words) {
  for (const word of words) {
    const currentWord = words[0]
    console.log('currentWord', currentWord)
    const nextWord = words[+1]
    console.log('nextWord', nextWord)
    const isLastLetterSameAsFirstLetter = currentWord[currentWord.length - 1] === nextWord[0]

    if (isLastLetterSameAsFirstLetter) return true
  }

  return false
}

millipedeOfWords(['excavate', 'endure', 'desire', 'screen', 'theater', 'excess', 'night']) // true

millipedeOfWords(['trade', 'pole', 'view', 'grave', 'ladder', 'mushroom', 'president']) // false

millipedeOfWords(['screen', 'desire', 'theater', 'excess', 'night']) // true

millipedeOfWords(['engine', 'endure', 'elite', 'excess']) // true

millipedeOfWords(['east', 'e', 'e', 't', 't', 'e', 'time']) // true

millipedeOfWords(['no', 'dog', 'on', 'good']) // false
