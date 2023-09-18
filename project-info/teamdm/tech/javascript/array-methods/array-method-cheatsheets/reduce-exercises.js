// DM: go through all the exercises below, noting which ones work, and which ones don't, which are really done. You absolutely CANNOT put "(done)"" if something is not done. Son, it is important that you slow down. Take time to read the todo--MM and be sure it is really done. This is all about accurate communication. "Maybe" and "close enough" doesn't work in programming. 1s and 0s - it is binary, it either works or it doesn't. So you have to be EXACT. Very important that I can depend on you to be accurate because this is wasting a lot of our valuable time and slowing down your progress!!(thank you for your feedback. I will be more careful.)

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
  // calculate the average (of the weighted scores) (rounded off to the nearest integer).
  // 1. Get 3 weighted scores
  // 2. Take the average
  // 3. Round off the average

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
  // 1. Get 3 weighted scores added up (sum) to a total
  const totalOfWeightedScores = scores.reduce((acc, cur) => {
    console.log('acc:', { acc }, 'cur', { cur })

    const weightedScore = cur.score * cur.weight

    return acc + weightedScore
    // return Math.round(average)
    // 2. Take the average of the total of the weighted scores

    // 3. Round off the average
    // const averageRounded =
    // 30
  }, 0)

  console.log('totalOfWeightedScores', totalOfWeightedScores)

  const averageRounded = Math.round(totalOfWeightedScores / scores.length)
  console.log('averageRounded', averageRounded)
  // expected result: 30

  // MM: DM: look at the approach above, the result is not as expected.
}
// MM: DM: I am still working on it. DM: remember all [].reduce callbacks must return a value

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
  // DM: in this exercise the pseudocode is telling you how to do it. I restored the original indenting because the indenting is a key part of showing what the logic is. In pseudocode we don't put opening an closing {} to indicate blocks of code, but rather the indenting tells you where the block closes.
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

  // best approach, I think. Based on the numUnclosedParentheses, you can return true or false
  const numUnclosedParentheses = '(())()(()()'.split('').reduce((acc, cur) => {
    if (cur === '(') {
      acc++
    } else if (cur === ')') {
      acc--
    }
    return acc
  }, 0)
  // DM: I don't think you can return a boolean from the reduce, because you can't know if all the parentheses are closed until the very end; MM: this is returning "undefined"
  const allParenthesesAreClosed = string.split('').reduce(
    (acc, cur) => {
      // true if all the "(" have a closing ")"
      // your code here

      //(in progress) DM: todoMM: use console.log to know what is happening here. If I don't see console.logs then I know you're just guessing. I can't debug without console.logs. So - you'll see that inside the reduce loop, you're looping through the characters again, which is not necessary. I don't think you intended to loop inside a loop, but since you didn't console.log, you didn't notice it!

      //MM: DM: i learned from this source: https://forum.freecodecamp.org/t/using-reduce-to-return-a-boolean/333951/2

      const openingParentheses = '('
      console.log({ openingParentheses })

      const closingParentheses = ')'
      console.log('closingParentheses', { closingParentheses })

      // DM: you are adding two boolean variables(ok).
      const parentheses = openingParentheses + closingParentheses
      console.log('parentheses', { parentheses })

      if (cur === parentheses) {
        return acc + 1
      }

      return acc
    },
    false //MM: i did not set the initial value of the accumulator here as the expected result has to be a boolean. DM: always set the initial value so that it is self-documenting, even if it works without it.
  )
  // MM: DM: I am still getting "true" even if i remove one curly brace.
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
  //DM: add this to utils/array/reverse.js. Follow the same pattern we used in the other utils. Research if lodash has a function for this and not that in the new file if so. DM: haha, JavaScript has a function for this: String.prototype.reverse()! See my note in the new file you created. MM: DM: this exercise is already solved, and i already moved it to util/array/reverse.js.
  // howtojs: reverse a string; note also: 'abc'.split('').reverse().join('')
  ;[...'abc'].reduce((acc, cur) => {
    return cur + acc
  }, '') // 'cba'
}
