// howtojs: custom reverse string:: if you need to apply additional logic while you reverse a string. Normally just use String.prototype.reverse

{
  function reverseStringWithReduce(string) {
    // return string.split('').reduce((acc, item) => item + acc, '')
    return string.split('').reduce((acc, item) => [item, ...acc].join(''), '')
  }

  reverseWithReduce('hello') // 'olleh'
}

// howtojs:: String.prototype.reverse() example
{
  function reverseWithStringReverse(string) {
    return string.split('').reverse().join('')
  }

  reverseWithStringReverse('hello') // 'olleh'
}
