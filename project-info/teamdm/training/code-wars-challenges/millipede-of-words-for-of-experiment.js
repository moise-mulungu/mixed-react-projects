function millipedeOfWords(words) {
  for (const word of words) {
    // DM: the current word is 'word'. The issue with for...of is that it doesn't provide an index, so you can't derive the index of the next word. There are workarounds, but they are not pretty. It is better to use a built-in array method. It is great to experiment, though!
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
