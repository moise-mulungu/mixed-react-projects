function millipedeOfWordsWithIndenting(words) {
  console.log(`\n\n----------------------------------------------------------------`)
  console.log('millipedeOfWordsWithIndenting() called with:', { words })
  // howtonode: exit a node process - process.exit(0)
  // process.exit(0)
  function recursiveSolution(words, previousLastLetter = '', indent = '') {
    console.log(`${indent}recursiveSolution() called, words: ${words}`)
    console.log(`${indent}recursiveSolution() called, previousLastLetter: ${previousLastLetter}`)
    console.log(`${indent}recursiveSolution() called, indent: ${indent}`)
    // howtojs: log the true arguments passed to a function (i.e., before default values are applied); log the special variable "arguments"
    // console.log(`${indent} recursiveSolution() called with:`, { arguments })
    if (words.length === 0) {
      console.log(`${indent}words.length === 0`)
      return true
    }

    return words.some((word, i) => {
      const wordCombinesWithPreviousWord = word.startsWith(previousLastLetter)
      console.log(`${indent}word: ${word}`)
      console.log(`${indent}previousLastLetter: ${previousLastLetter}`)
      console.log(`${indent}wordCombinesWithPreviousWord: ${wordCombinesWithPreviousWord}`)
      const allRemainingWords = words.slice(0, i).concat(words.slice(i + 1))
      console.log(`${indent}allRemainingWords: ${allRemainingWords}`)
      const lastLetterOfCurrentWord = word.slice(-1) // also: word.at(-1)
      console.log(`${indent}lastLetterOfCurrentWord: ${lastLetterOfCurrentWord}`)
      return (
        wordCombinesWithPreviousWord &&
        recursiveSolution(allRemainingWords, lastLetterOfCurrentWord)
      )
    })
  }

  const result = recursiveSolution(words)
  console.log({ result })
  return result
}
millipedeOfWordsWithIndenting(['engine', 'endure']) // true
// node project-info/teamdm/tech/programming/recursion/recursive-millipede-of-words.js
