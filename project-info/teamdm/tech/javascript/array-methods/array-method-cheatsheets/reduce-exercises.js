// DM: go through all the exercises below, noting which ones work, and which ones don't, which are really done. You absolutely CANNOT put "(done)"" if something is not done. Son, it is important that you slow down. Take time to read the todoMM and be sure it is really done. This is all about accurate communication. "Maybe" and "close enough" doesn't work in programming. 1s and 0s - it is binary, it either works or it doesn't. So you have to be EXACT. Very important that I can depend on you to be accurate because this is wasting a lot of our valuable time and slowing down your progress!!(thank you for your feedback. I will be more careful.)

// DM: it's interesting that JS lets you create a block simply by putting { /* code inside here has its own "scope" */} in the code. It's interesting because if you put each exercise inside it's own block, you'll never have problems with repeated const variable names clashing.
{
  // get the largest number in the array
  ;[1, 6, 4].reduce((acc, cur) => {
    // your code here
    console.log('acc:', { acc })
    console.log('cur', { cur })
    // if (acc < cur) {
    //   return cur
    // } else {
    // }
    //(done) DM: good. would it be more readable if you used Math.max() ? DM: good.
    // return acc < cur ? cur : acc
    const largestNumber = Math.max(acc, cur)
    console.log('largestNumber', largestNumber)
    return largestNumber
  }, 0)
  // expected result: 6
}

{
  // DM: Look at this next line very carefully:
  // calculate the average of the weighted scores rounded off to the nearest integer.
  /*  DM: it is saying to 
    calculate 
    the average of
    the weighted scores
    rounded off the the nearest integer

    this means you have to to these steps:
    in the reduce:
      get the 3 weighted scores
      get the total of the weighted scores
    then:
      tget the average of the weighted scores
      round it off
    
    Feel free to give this challenge to AI, I won't consider ti cheating. You can learn from the answer. and you'll have to convert the answer in order to avoid using 'let'.
  
  */
  // weighted score = score * weight
  // rounded off to the nearest integer (means no decimal places in the answer)
  const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 },
  ]
  // DM: lets give this variable a specific name. What is 
  const result = scores.reduce((acc, cur) => {
    /* your code here */ // 30;
    //(in progress!) DM: todoMM: have a look at WHEN you take the average. You're doing it too soon. You want to take the average at the very end AFTER you have calculated and after you have summed up all the weighted scores. DM: think of it in a real simple example. You have 3 numbers and you need their average. You take the average only once, at the very end, after you have calculated the total of all the 3 numbers.
    // MM: I think I understand what you mean. I think I need to add up all the weighted scores first, then divide by the number of scores, then round it off to the nearest integer, but the solution is different from the previous code.
    // MM: DM: I would like you can check my approach if it is correct from the previous one, because this one gives 18 instead of 30 as required.

    const weightedScore = cur.score * cur.weight
    console.log('weightedScore', weightedScore)
    // return Math.round(acc + weightedScore / scores.length)
    const sumAllWeightedScores = acc + weightedScore
const roundedValue = Math.round(sumAllWeightedScores)
console.log('roundedValue', roundedValue)
    // const average = sumAllWeightedScores / scores.length // you're taking the average too soon
    const average = roundedValue / scores.length
    console.log('average', average)

    return average
  

    // return Math.round(average)
  }, 0)
  console.log(result) // 30
}

// count the occurrences of the letters in the array
// DM: I think prettier removed the {} because they are not needed since there is no top-level variable created.
;['a', 'b', 'b', 'a', 'b', 'm', 'n'].reduce(
  (acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    return acc
  },
  { a: 0 } // don't change this initial value of the accumulator
) //expected result: { a: 2, b: 3, m: 1, n: 1 }
// DM: Your correction is better way to code, so I'll copy it here:
// ;['a', 'b', 'b', 'a', 'b', 'm', 'n'].reduce((acc, cur) => {
//   if (acc[cur]) {
//     acc[cur] = acc[cur] + 1
//   } else {
//     acc[cur] = 1
//   }
//   return acc
// }, {})

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
    if (acc.includes(cur)) {
      return acc
    } else {
      return acc.concat(cur)
    }
    // return acc.indexOf(cur) === -1 ? acc.concat(cur) : acc
  }, []) // result: ['a', 'b']
}

{
  const string = '(())()(()())' // true
  // return true if all the "(" have a closing ")"
  // use reduce to implement the following (pseudocode) logic
  // MM: toDM: I am not sure how to do this with reduce, I struggled with this one a lot.
  //(done) DM: todoMM: in this exercise the pseudocode is telling you how to do it. I restored the original indenting because the indenting is a key part of showing what the logic is. In pseudocode we don't put opening an closing {} to indicate blocks of code, but rather the indenting tells you where the block closes.
  // toDM: I could not implement it. DM: make sure you understand how the pseudocode works:
  /* 
  // you're doing the next 6 lines with the reduce()
    status = 0
    for char in string:
      if(char=="("):
        status=status+1
      elif(char==")"): // elif === else if
        status=status-1     
    // look at the indentation in the pseudo code. The next line has the same indentation as the "for" loop which you implemented with reduce(). This means that the next 2 lines are outside/after the reduce.
    if(status==0):
      return False
  */

  string.split('').reduce((acc, cur) => {
    // true if all the "(" have a closing ")"
    // your code here
    if (cur === '(') {
      return acc + 1
    } else if (cur === ')') {
      return acc - 1
    } else acc === 0
    return false
  }, 0)
}

{
  // flatten the nested arrays, but only flatten the one level deep
  // howtojs:: flatten array to the first level only; note: new array.prototype.flat() 2nd parameter let's you specify how many levels deep to flatten.
  // DM: thanks. Removing the 'good' to keep the howto instruction clean.
  ;[
    [1, 2],
    [['a', 'b'], 4],
    [5, 6],
  ].reduce((acc, cur) => {
    return acc.concat(cur)
  }, []) // [1, 2, ['a','b'], 4, 5, 6]
}

{
  //(done) DM: todoMM: add this to utils/array/reverse.js. Follow the same pattern we used in the other utils. Research if lodash has a function for this and not that in the new file if so. DM: haha, JavaScript has a function for this: String.prototype.reverse()! See my note in the new file you created.
  // howtojs: reverse a string; note also: 'abc'.split('').reverse().join('')
  ;[...'abc'].reduce((acc, cur) => {
    return cur + acc
  }, '') // 'cba'
}
