/* 
   __Let and Const Are Not Hoisted__: 
   Variables declared with let and const are hoisted to the top of the block, but they remain uninitialized until the code execution reaches the declaration. Trying to access them before declaration results in a ReferenceError.
*/

// DM: I wrote some better examples to illustrate the point

// set the top-level if statements condition to `true` to run the code

if (false) {
  function func() {
    // abc doesn't exist
    return abc // ReferenceError: abc is not defined
  }
  console.log({ returnValue: func() }) // execution never gets here
}
if (false) {
  function func() {
    // abc exists, is hoisted, but is uninitialized
    return abc // ReferenceError: Cannot access 'abc' before initialization
    const abc = '123'
  }
  console.log({ returnValue: func() }) // execution never gets here
}

// typical use case for let and const
if (true) {
  function func() {
    const abc = '123'
    return abc // no ReferenceError
  }
  console.log({ returnValue: func() }) // { returnValue: '123' }
}
