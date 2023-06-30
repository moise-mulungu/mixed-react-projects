// howtojs: array.reduce boilerplate starter template
;[].reduce((acc, cur) => {
  return acc // always return acc;
}, undefined /* always initialize the 2nd value */)

/* howtojs: array: reduce: concatenate:: (usually refers to strings, also arrays) the elements in the array */
;[[1], [2]].reduce((acc, cur) => {
  // MM: this code [([1], [2])] returns [2], but i think it should be an array with nested arrays like this [[1], [2]] to get the desired result. DM: correct. I removed the () from the array - those must have been injected at some point by prettier, because I didn't intend them.
  console.log({ acc, cur })
  return acc.concat(cur)
}, []) // [1, 2]
;['a', 'b'].reduce((acc, cur) => {
  // the same here - this code [('a', 'b')] returns ['b'], but i think it should be an array of strings without parentheses like this ['a', 'b'] to get the desired result. DM: correct
  return acc + cur
}, '') // 'ab'

/* howtojs: array: reduce: sum:: the elements in the array */
;[1, 2].reduce((acc, cur) => {
  console.log({ acc, cur })
  return acc + cur
}, 0) // 3

/* howtojs: array: reduce:: count the number of elements in the array */
;[(1, 2)].reduce((acc, cur) => {
  console.log({ acc, cur })
  return acc + 1
}, 0) // 2

// good!
/* howtojs: array: object:: turn array into: object; initialize with empty object as the initial value */
// turn array into: object
;['a', 'b', 'c', 'a', 'b'].reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++
  } else {
    acc[cur] = 1
  }
  return acc
}, {})

// expected result: { a: 2, b: 2, c: 1 }
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
DM: todoMM: It will be good to record the video again. But, this time, before you record, write down what you will say here below. Tomorrow I will edit it, which you will learn from seeing the diffs. Then, after I have edited it, record another video. Write what you will say like this, using bullet points.

Introduction
* 
* 
The problem
* 
* 
The solution
* 
  * 
* 
Wrap up
* 

*/

/*
Explanation of the code:
* the reduce() function is called on the array
* the reduce() function takes 2 arguments: a callback function and an initial value
* the callback function takes 3 arguments: the accumulator, the current value, and the index
* the accumulator is an object that is initialized as the 2nd argument to reduce()
* the current value is the current element of the array
* the callback function returns the accumulator
* the reduce() function returns the accumulator
* the reduce() function iterates the array, calling the callback function once for each element of the array
*/
// here is the link to the demo: https://youtu.be/2V0gJPwmVAI
// comment
;['a', 'b', 'c', 'a', 'b'].reduce(
  (acc, cur, idx) => {
    acc[cur].count++
    acc[cur].indexes.push(idx)
    // console.log({ acc, cur, idx })
    console.log({ cur, idx })
    return acc
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

// MM: this answers the question what other array method you can use besides reduce DM: this isn't an array method, it's a for loop
// DM: todoMM: make js vocab entry describing what are the array methods and properties: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array just give a few examples of each
// another js vocab entry "Method" is a function that is a property of an object
{
  function checkOccurence(array, element) {
    // never use 'let' because this forces you to use and learn Array methods
    let count = 0 // efficiency may require let
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        count++
      }
      // DM: todoMM: programming vocab entry: "side-effect"
      // side-effects: Array.forEach() is for side-effects
      console.log()
      // change the title of the web page - manip DOM
    }
    return count
  }

  checkOccurence(['a', 'b', 'c', 'a', 'b'], 'a') // 2
}
