// howtojs: array.reduce boilerplate starter template
;[].reduce((acc, cur) => {
  return acc // always return acc;
}, undefined /* always initialize the 2nd value */)

/* howtojs: array: reduce: concatenate:: (usually refers to strings, also arrays) the elements in the array */
;[[1], [2]].reduce((acc, cur) => {
  // MM: this code [([1], [2])] returns [2], but i think it should be an array with nested arrays like this [[1], [2]] to get the desired result. DM: correct. I removed the () from the array - those must have been injected at some point by prettier, because I didn't intend them.
  console.log({ acc, cur })
  // howtojs: array:: concat to combine/merge two arrays
  return acc.concat(cur) // concat returns a new array
}, []) // [1, 2]
;['a', 'b'].reduce((acc, cur) => {
  // the same here - this code [('a', 'b')] returns ['b'], but i think it should be an array of strings without parentheses like this ['a', 'b'] to get the desired result. DM: correct
  return acc + cur
}, '') // 'ab'

/* howtojs: array: reduce: sum:: the elements in the array */
;[1, 2].reduce((acc, cur, idx, src) => {
  console.log({ acc, cur, idx, src })
  return acc + cur
}, 0) // 3

/* howtojs: array: reduce:: count the number of elements in the array */
;[(1, 2)].reduce((acc, cur) => {
  console.log({ acc, cur })
  return acc + 1
}, 0) // 2

/* 
(done)DM: make a demo video explaining how this works.
Vocab:
* property access operator - "." as in array.reduce or obj.propertyName
* callback function AKA callback
* to initialize a variable or object property; ex: const myVar = 1; obj.prop = 1;
* empty object {}
* shorthand property names - as in { cur, acc } is 'shorthand' for { cur: cur, acc: acc }
* to increment - ex: numberVariable++
* to iterate - ex: to iterate an array, the current iteration of the reduce loop
* array literal - ex: ['a', 'b', ... ]
* parameters of the callback function
  * acc - accumulator, which was initialized as the 2nd argument to .reduce()
  * cur - value is the element of the current iteration of the array
  * idx - index of the current iteration of the array
  * src - source (contains the array that is being iterated by .reduce())
  * note: parameters and arguments are the same thing, but the correct word depends on context
    * parameter: context is inside a function 
    * argument: context is when you are CALLING a function, you pass arguments myFunc(myArg1, myArg2)
* accumulator - acc, the 2nd parameter to the reduce() function (sorry, I had 'callback' here previously, that was wrong)
* current value - ex: cur is the current value of the current iteration of the array
* computed property access operator - "[]" as in acc[cur]

*/

// howtojs: array: reduce:: turn array into: complex object; group by property
// the link to the demo: https://www.youtube.com/watch?v=2sRHiskWLqo

/*

DM: good job. I think making videos is good practice in speaking about code and also let's me know any gaps to fill in your knowledge.
A few things I noticed while listening:
* you said "required to use reduce, not an array method" - can you tell me another array method that works better than reduce? :) It was 'let' and a for loop that you were not allowed to use. 
* nice typing while talking
	* recommend you type your code BEFORE explaining the logic. The logic you explained WHILE you were typing was most understandable. Logic you discussed BEFORE was really hard to follow. It is always better to have something you can point at with your mouse cursor - this reduces the number of words you have to say to explain.
* don't mention Copilot or turn it off
* "initialized to 1" not "equalized to 1"
(done) DM: todoMM: It will be good to record the video again. But, this time, before you record, write down what you will say here below. Tomorrow I will edit it, which you will learn from seeing the diffs. Then, after I have edited it, record another video. Write what you will say like this, using bullet points.

//(done) DM: todoMM: update where you feel necessary. Afterwards, I'll review one more time, and you can make a new video.

Introduction
* I have an array of strings
* I'll have to use the array method reduce to solve this problem because the array method "reduce" is the only array method that can turn an array into an object, a string, a number, or another array of a different length.
The task
* The problem is to count the number of times each element appears or repeated in the array
* What approach should I take to solve this problem if my array has as many as over 100 elements?

The solution
* the array method reduce will have two parameters: a callback function and an initial value
  * the callback function will have three parameters: the accumulator, the current value and the index
  * the initial value is the accumulator which is an object that is initialized as an empty object
* the current value is the current element of the array upon each iteration of the array
* I will return a clone of the accumulator adding new values as the return value of the callback function
* the logic will be like this:
  * if the accumulator has the current value as a property, then increment the value of the property by 1
  * if the accumulator does not have the current value as a property, then set the current value as a property and initialize it to 1
  * return the accumulator

Wrap up
* DM: make this very short, it's not a summary, but rather just a goodbye: something like: thank you for watching, leave any questions in the comments. This is good verbiage, though, so you may be able to put some of this in the logic section.
This is the end of the video. Thank you for watching. Leave any questions in the comments.
*/

/* 
DM: I liked this summary, so preserving it. Maybe put it in the youtube more info section:
summary: I am given an array of strings where I have to count the number of times each element appears in the array. I will use the array method "reduce" to solve this problem. For each element in the array, if the accumulator has the current value as a property, then increment the value of the property by 1. If the accumulator does not have the current value as a property, then add the current value as a property and initialize it to 1. Return the accumulator.

*/
// old link to the demo: https://youtu.be/2V0gJPwmVAI
/* howtojs: array: object:: turn array into: object; initialize with empty object as the initial value */
// turn array into:
object[('a', 'b', 'c', 'a', 'b')].reduce((acc, cur) => {
  console.log({ acc, cur })
  if (acc[cur]) {
    acc[cur]++
  } else {
    acc[cur] = 1
  }
  return acc
}, {})
// expected result: { a: 2, b: 2, c: 1 }

/* same thing, non-mutating syntax */
;['a', 'b', 'c', 'a', 'b'].reduce((acc, cur) => {
  console.log({ acc, cur })
  // if (acc[cur]) acc[cur]++
  // else acc[cur] = 1
  return {
    ...acc,
    [cur]: acc[cur] ? acc[cur] + 1 : 1,
  }
}, {})

// --------------------------------

// simple version of the next example
;['a', 'b', 'c', 'a', 'b'].reduce(
  (acc, cur) => {
    const newCount = acc[cur] + 1
    console.log({ cur, newCount, acc })
    return {
      ...acc,
      [cur]: newCount,
    }
  },
  { a: 0, b: 0, c: 0 }
)

// howtojs: reduce with deeply nested objects; no mutations syntax
;['a', 'b', 'c', 'a', 'b', 'd'].reduce(
  (acc, cur, idx) => {
    console.log({ cur, idx })
    // acc[cur].count++
    // acc[cur].indexes.push(idx)
    // // console.log({ acc, cur, idx })
    // return acc
    const newCount = acc[cur].count + 1
    const newIndexes = [...acc[cur].indexes, idx]
    console.log({ newCount, newIndexes })
    console.log({ acc })
    return {
      // shallow clone: { ...acc }
      ...acc,
      [cur]: {
        // { a: 1, a: 2} // { a: 2 }
        count: newCount,
        indexes: newIndexes,
      },
    }
  },
  {
    a: {
      count: 0,
      indexes: [],
    },
    b: {
      count: 0,
      indexes: [],
    },
    c: {
      count: 0,
      indexes: [],
    },
    d: {
      count: 0,
      indexes: [],
    },
  }
)
/*
result:
{
  a: { count: 2, indexes: [ 0, 3 ] },       
  b: { count: 2, indexes: [ 1, 4 ] },
  c: { count: 1, indexes: [ 2 ] }
},
*/

// howtojs: array: reduce:: without mutating the accumulator
;['a', 'b', 'c', 'a', 'b'].reduce((acc, cur) => {
  const value = acc[cur] ? acc[cur] + 1 : 1
  return { ...acc, [cur]: value }
}, {})
