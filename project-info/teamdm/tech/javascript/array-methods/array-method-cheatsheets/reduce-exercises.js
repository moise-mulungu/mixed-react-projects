// DM: it's interesting that JS lets you create a block simply by putting { /* code inside here has its own "scope" */} in the code. It's interesting because if you put each exercise inside it's own block, you'll never have problems with repeated const variable names clashing.
// DM: todoMM: please put the expected result for each exercise below
{
  // get the largest number in the array
  ;[1, 6, 4].reduce((acc, cur) => {
    // your code here
    console.log('acc', acc)
    console.log('cur', cur)
    // if (acc < cur) {
    //   return cur
    // } else {
    // }
    // DM: todoMM; good. would it be more readable if you used Math.max() ?
    return acc < cur ? cur : acc
  }, 0)
}

{
  // calculate the average of the weighted scores rounded off to the nearest integer.
  // weighted score = score * weight
  // rounded off to the nearest integer (means no decimal places in the answer)
  const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 },
  ]
  const result = scores.reduce((acc, cur) => {
    /* your code here */ // 30; I am getting 85 instead of 30
    // DM: todoMM: have a look at WHEN you take the average. You're doing it too soon. You want to take the average at the very end AFTER you have calculated all the weighted scores
    const weightedScore = cur.score * cur.weight
    console.log('weightedScore', weightedScore)
    return Math.round(acc + weightedScore / scores.length)
  }, 0)
  console.log(result) // 30
}

// count the occurrences of the letters in the array
;['a', 'b', 'b', 'a', 'b', 'm', 'n'].reduce(
  (acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    return acc
  },
  { a: 0 } // don't change this initial value of the accumulator
) // { a: 2, b: 3, m: 1, n: 1 }

{
  ;[
    ['The', 'red', 'horse'],
    ['A', 'plane', 'over', 'the', 'ocean'],
    ['Chocolate', 'ice', 'cream', 'is', 'awesome'],
  ].reduce((acc, cur) => {
    // your code here
    // DM: good!
    return acc.concat(cur.join(' ') + '.')
  }, [])
  // result:
  /* 
[
  'The red horse.',
  'Plane over the ocean.',
  'Chocolate ice cream is awesome',
]
*/
}

{
  // remove duplicates in the array
  ;['a', 'b', 'b', 'a', 'b'].reduce((acc, cur) => {
    // if (acc.includes(cur)) {
    //   return acc
    // } else {
    //   return acc.concat(cur)
    // }
    // DM: good, I like this. Try using array.includes to make it more readable
    return acc.indexOf(cur) === -1 ? acc.concat(cur) : acc
  }, []) // result: ['a', 'b']
}

{
  const string = '(())()(()())'
  // return true if all the "(" have a closing ")"
  // use reduce to implement the following (pseudocode) logic
  // MM: toDM: I am not sure how to do this with reduce, I struggled with this one a lot.
  // DM: todoMM: in this exercise the pseudocode is telling you how to do it. I restored the original indenting because the indenting is a key part of showing what the logic is. In pseudocode we don't put opening an closing {} to indicate blocks of code, but rather the indenting tells you where the block closes.
  /* 
    status = 0
    for char in string:
      if(char=="("):
        status=status+1
      elif(char==")"): // elif === else if
        status=status-1     
    if(status==0):
      return False
  */

  string.split('').reduce((acc, cur) => {
    // true if all the "(" have a closing ")"
    // your code here
    if (cur === cur + acc) {
      return true
    } else {
      return false
    }
  }, '')
}

{
  // flatten the nested arrays, but only flatten the one level deep
  // howtojs:: flatten array to the first level only; note: new array.prototype.flat() 2nd parameter let's you specify how many levels deep to flatten.
  ;[
    [1, 2],
    [['a', 'b'], 4],
    [5, 6],
  ].reduce((acc, cur) => {
    return acc.concat(cur)
  }, []) // [1, 2, ['a','b'], 4, 5, 6]
}

{
  // DM: todoMM: add this to utils/array/reverse.js. Follow the same patter we used in the other utils. Research if lodash has a function for this and not that in the new file if so.
  // howtojs: reverse a string; note also: 'abc'.split('').reverse().join('')
  ;[...'abc'].reduce((acc, cur) => {
    return cur + acc
  }, '') // 'cba'
}

// DM: todoMM: new exercise: read this page https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/ and study the recursive solution at the bottom. Make an file in the currently-working directory and put the recursive solution there. Add some console.log so that you can see the order the recursive functions are called.
