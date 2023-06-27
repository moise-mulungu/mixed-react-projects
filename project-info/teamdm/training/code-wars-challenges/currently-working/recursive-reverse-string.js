// from https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
{
  function reverseString(str) {
    if (str === '') {
      return ''
    } else {
      console.log(str.substr(1))
      console.log(str.charAt(0))
      return reverseString(str.substr(1)) + str.charAt(0)
    }
  }

  reverseString('hello') // 'olleh'
}

// DM: interesting. Let's keep this in this directory until we're done with recursion.
