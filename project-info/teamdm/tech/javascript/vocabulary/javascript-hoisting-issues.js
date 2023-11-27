// I installed tsx paakage because it allows run js (and ts) scripts from the command line without worrying about commonjs VS esmodules and don't need to use the .mjs extension in NextJS repos

// DM: todoMM: add a directory of same name as this file, and put each section is its own .js file WHY so we can run each and because each concept has more to it, so it is worthwhile to have a separate file on each.

/* 
  __Only Declarations Are Hoisted__: 
   Only variable and function declarations are hoisted, not initializations. If a variable is declared and initialized after using it, the value will be undefined.
*/
// the variable exists but is uninitialized, hence "undefined"
console.log(myVar) // undefined
var myVar = 5 // but we never use "var", right?
console.log(myVar) // 5

/* 
   __Let and Const Are Not Hoisted__: 
   Variables declared with let and const are hoisted to the top of the block, but they remain uninitialized until the code execution reaches the declaration. Trying to access them before declaration results in a ReferenceError.
*/
console.log(myLetVar) // ReferenceError: Cannot access 'myLetVar' before initialization
// DM: todoMM: run this code and see what the output is:
console.log(typeof myLetVar)
let myLetVar = 5
console.log(myLetVar)

/* 
  __Function Expressions and Arrow Functions Are Not Hoisted__: 
  Function expressions and arrow functions are not hoisted. If you try to call one before it's defined, you'll get a TypeError.
*/
// DM: todoMM: add an example of arrow function, also
console.log(myFunc()) // Outputs: TypeError: myFunc is not a function
var myFunc = function () {
  return 'Hello World'
}

/* __Functions Are Hoisted First__: 
   Function declarations are hoisted before variables. If a variable and function with the same name are declared, the variable will overwrite the function in the hoisting phase.
*/
console.log(myFunc()) // Outputs: "Hello World"
var myFunc = 5
function myFunc() {
  return 'Hello World'
}
console.log(myFunc) // Outputs: 5
// In this case, the function myFunc is hoisted first, then the variable myFunc is hoisted and overwrites the function.
