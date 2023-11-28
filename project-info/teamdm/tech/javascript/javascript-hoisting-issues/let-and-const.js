/* 
   __Let and Const Are Not Hoisted__: 
   Variables declared with let and const are hoisted to the top of the block, but they remain uninitialized until the code execution reaches the declaration. Trying to access them before declaration results in a ReferenceError.
*/
console.log(myLetVar) // ReferenceError: Cannot access 'myLetVar' before initialization
// DM: todoMM: run this code and see what the output is: MM: it does not execute, because ~~it's called~~ before. the execution stops on top DM: its not called because its not a function, only functions are "called". it's referenced above, though. Now, if you want to see what the next line does, do whatever you need to do so that execution gets to this line of code.
console.log(typeof myLetVar)
let myLetVar = 5
console.log(myLetVar)
