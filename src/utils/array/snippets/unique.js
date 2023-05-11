const uniqueArray = [...new Set(notUniqueArray)]
// DM: todoMM: turn it into a function and put in the parent directory (also, in the new file, mention that there is a lodash function uniq)

const arrayOfUniqueWords = [...new Set(words)]
if (arrayOfUniqueWords.length !== words.length) return false
