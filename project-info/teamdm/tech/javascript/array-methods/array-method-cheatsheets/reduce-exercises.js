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
    const weightedScore = cur.score * cur.weight
    console.log('weightedScore', weightedScore)
    return Math.round(acc + weightedScore / scores.length)
  }, 0)
  console.log(result)
}

// count the occurrences of the letters in the array
;['a', 'b', 'b', 'a', 'b', 'm', 'n'].reduce(
  (acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    return acc
  },
  { a: 0 } // don't change this initial value of the accumulator
)

{
  ;[
    ['The', 'red', 'horse'],
    ['A', 'plane', 'over', 'the', 'ocean'],
    ['Chocolate', 'ice', 'cream', 'is', 'awesome'],
  ].reduce((acc, cur) => {
    // your code here
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
    return acc.indexOf(cur) === -1 ? acc.concat(cur) : acc
  }, []) // result: ['a', 'b']
}

{
  const string = '(())()(()())'
  // return true if all the "(" have a closing ")"
  // use reduce to implement the following (pseudocode) logic
  // MM: toDM: I am not sure how to do this with reduce, I struggled with this one a lot.
  /* 
  status = 0
  for char in string:
  if(char=="("):
  status=status+1
  elif(char==")"):
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
  ;[
    [1, 2],
    [['a', 'b'], 4],
    [5, 6],
  ].reduce((acc, cur) => {
    return acc.concat(cur)
  }, []) // [1, 2, ['a','b'], 4, 5, 6]
}

{
  // reverse a string
  ;[...'abc'].reduce((acc, cur) => {
    return cur + acc
  }, '') // 'cba'
}
