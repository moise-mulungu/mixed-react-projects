/* 
   __Let and Const Are Not Hoisted__: 
   Variables declared with let and const are hoisted to the top of the block, but they remain uninitialized until the code execution reaches the declaration. Trying to access them before declaration results in a ReferenceError.
*/
console.log(myLetVar) // ReferenceError: Cannot access 'myLetVar' before initialization
//(MM: it does not execute, because it's called before. the execution stops on top) DM: todoMM: run this code and see what the output is:
console.log(typeof myLetVar)
let myLetVar = 5
console.log(myLetVar)
