// from https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

function reverseString(string) {
  const indentSize = 3 // 3 spaces
  // the function 'reverse' is initialized
  function reverse(str, indent = '') {
    if (str === '') {
      console.log(indent, { str })
      return '' // empty string
    } else {
      const firstLetter = str.charAt(0)
      const theRest = str.substr(1)
      console.log(indent, { str, firstLetter, theRest })
      const newIndent = indent + '-'.repeat(indentSize) // String.repeat()
      const valueToReturn = reverse(theRest, newIndent) + firstLetter // concatenates ...
      console.log(indent, { valueToReturn })
      return valueToReturn
    }
  }

  return reverse(string)
}
reverseString('hello') // 'olleh'
