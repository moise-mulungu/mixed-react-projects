// DM: After you do that, fix the indenting in recursive-millipede-of-words.js. Follow the examples in this directory, to get an idea of what needs to change. What is found in recursive-reverse-strings.js that is missing in recursive-millipede-of-words.js? You need only edit one line in recursive-millipede-of-words.js. If you need to edit more, then look at recursive-reverse-strings.js again. DM: look also at the indenting you did in count-down.js(in progress!)
function millipedeOfWordsWithIndenting(words) {
  console.log(`\n\n----------------------------------------------------------------`)

  console.log('millipedeOfWordsWithIndenting() - called with:', { words })
  // howtonode: exit a node process - process.exit(0)
  // process.exit(0)
  function recursiveSolution(words, previousLastLetter = '', indent = '') {
    // console.log(`${indent}recursiveSolution() called, words: ${words}`)
    // console.log(`${indent}recursiveSolution() called, previousLastLetter: ${previousLastLetter}`)
    // console.log(`${indent}recursiveSolution() called, indent: ${indent}`)
    // howtojs: log the true arguments passed to a function (i.e., before default values are applied); log the special variable "arguments"
    // console.log(`${indent} recursiveSolution() called with:`, { arguments })
    if (words.length === 0) {
      console.log(`${indent}words.length === 0`)
      return true
    }

    return words.some((word, i) => {
      console.log(`${indent}word: ${word}`)
      const wordCombinesWithPreviousWord = word.startsWith(previousLastLetter)
      console.log({ wordCombinesWithPreviousWord })
      // console.log(`${indent}word: ${word}`)
      // console.log(`${indent}previousLastLetter: ${previousLastLetter}`)
      // console.log(`${indent}wordCombinesWithPreviousWord: ${wordCombinesWithPreviousWord}`)

      const allRemainingWords = words.slice(0, i).concat(words.slice(i + 1))
      console.log(`${indent}allRemainingWords: ${allRemainingWords}`)

      const lastLetterOfCurrentWord = word.slice(-1) // also: word.at(-1)
      console.log(`${indent}lastLetterOfCurrentWord: ${lastLetterOfCurrentWord}`)

      const newIndent = indent + '-'.repeat(2) // String.repeat()

      // add indent to each step of the recursion
      return (
        wordCombinesWithPreviousWord + newIndent &&
        recursiveSolution(allRemainingWords, lastLetterOfCurrentWord) // DM: only edit this line; MM: I am still unable to add indentation here after trying many times, any hints, please? DM: this is where the recursiveSolution() function calls itself. Look at other examples where you added indentation and do similar here. EAch time you call a function recursively, you want to increase the indent, right?(yeah!) DM: so ... whatch u gonna do?: MM: I will try it again
      )
    })
  }

  const result = recursiveSolution(words)
  console.log({ result })

  return result
}
millipedeOfWordsWithIndenting(['engine', 'endure']) // true ('e')
// node project-info/teamdm/tech/programming/recursion/recursive-millipede-of-words.js
