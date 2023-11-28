
/* 
  __Only Declarations Are Hoisted__: 
   Only variable and function declarations are hoisted, not initializations. If a variable is declared and initialized after using it, the value will be undefined.
*/
// the variable exists but is uninitialized, hence "undefined"
console.log(myVar) // undefined
var myVar = 5 // but we never use "var", right?
console.log(myVar) // 5