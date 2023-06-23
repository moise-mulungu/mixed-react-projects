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
