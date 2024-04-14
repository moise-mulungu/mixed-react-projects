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