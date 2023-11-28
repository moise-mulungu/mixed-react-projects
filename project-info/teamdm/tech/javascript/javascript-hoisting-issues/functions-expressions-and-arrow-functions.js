/* 
  __Function Expressions and Arrow Functions Are Not Hoisted__: 
  Function expressions and arrow functions are not hoisted. If you try to call one before it's defined, you'll get a TypeError.
*/
console.log({ myFunc }) // { myFunc: undefined }
console.log(myFunc()) // TypeError: myFunc is not a function
var myFunc = function () {
  return 'Hello World'
}

console.log({ myArrowFunc }) // { myArrowFunc: undefined }
console.log(myArrowFunc()) // TypeError: myArrowFunc is not a function
var myArrowFunc = () => {
  return 'Hello World'
}
