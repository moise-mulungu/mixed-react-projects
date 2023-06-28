//(done) DM: todoMM: put this into ./snippets because you'll copy and paste it if you ever need it.

// howtojs: custom reverse array:: if you need to apply additional logic while you reverse an array. Normally just use Array.prototype.reverse

{
  function reverseWithReduce(array) {
    return array.reduce((acc, item) => [item, ...acc], [])
  }

  reverseWithReduce([1, 2, 3, 4, 5]) // [5, 4, 3, 2, 1]
  reverseWithReduce(['a', 'b', 'c', 'd', 'e']) // ['e', 'd', 'c', 'b', 'a']
}

{
  function reverseStringWithReduce(string) {
    // return string.split('').reduce((acc, item) => item + acc, '')
    return string.split('').reduce((acc, item) => [item, ...acc].join(''), '')
  }

  reverseWithReduce('hello') // 'olleh'
}
