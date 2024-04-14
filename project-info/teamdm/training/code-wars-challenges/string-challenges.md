# RegExp

```js
//(done!) DM: try these

// check that the string is only (all) alpha-numeric characters using RegExp (hint look at the \d \w \t \s) DM: this line contains the task. Try to do it.
'abc de!'
  .test(/^[a-zA-Z0-9]+$/)(
    // I changed so that the pattern can test the string
    /^[a-zA-Z0-9]+$/
  )
  .test('abc de!') // boolean(false)
{
  const str = 'abc de!'
  const pattern = /^\w+$/
  const result = pattern.test(str)
  console.log(result) // false
}
{
  ;/^abc$/.test('abc')
} // true
{
  ;/^[0-9]+$/.test('1234x')
} // false
{
  ;/^\d+$/.test('1234')
} // true
//check if all digits DM: follow the same pattern to check if all the characters in the string are digits
```

# String methods

// DM: todoDM: string method, RegExp exercises
