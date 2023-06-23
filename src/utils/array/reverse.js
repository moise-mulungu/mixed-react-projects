{
  function reverseWithReduce(array) {
    return array.reduce((acc, item) => [item, ...acc], [])
  }

  reverseWithReduce([1, 2, 3, 4, 5]) // [5, 4, 3, 2, 1]
  reverseWithReduce(['a', 'b', 'c', 'd', 'e']) // ['e', 'd', 'c', 'b', 'a']
}

{
  function reverseWithReduce(string) {
    // return string.split('').reduce((acc, item) => item + acc, '')
    return string.split('').reduce((acc, item) => [item, ...acc].join(''), '')
  }

  reverseWithReduce('hello') // 'olleh'
}
