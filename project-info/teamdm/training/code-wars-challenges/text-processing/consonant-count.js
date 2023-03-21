/// ///////////////////////////////////////////////////////////////////
// Count consonants
/// ///////////////////////////////////////////////////////////////////
const myConsonantCount = (str) => {
  const allCharacters = str.toLowerCase() // i want to make sure all characters are included, but i am not sure if this is the best way to do it with 'toLowerCase()' method
  // i want to include all possible characters into the string and then filter out the vowels
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const mappedVowels = vowels.map((item) => item.toLowerCase())

  const splitStr = allCharacters.split('')
  const selectedConsonants = splitStr.filter((char) => !mappedVowels.includes(char))

  // get rid of non-letters

  const countConsonants = selectedConsonants.reduce((acc, cur) => acc + cur, 0)

  return countConsonants
}
console.log(myConsonantCount('moie@'))
// some test cases are not passing, because of the special characters, i am not sure how to handle them
