## Function 1 - hello world

Description:
Make a simple function called greet that returns the most-famous "hello world!".

Solution

    ```js
    function greet() {
        return 'hello world!'
    }
    ```

## Multiply

DESCRIPTION:
This code does not execute properly. Try to figure out why.

    ```js
    function multiply(a, b){
    a * b
    }
```
solution:

    ```js
    function multiply(a, b){
    return a * b
    }
    ```

## remove the first and last character of a string 

```js
// this statement is the "definition" of the function
function removeChar(str){ // 
  // when "called", this line is executed
  // the value of str will be the value you pass in the "call" below
  // if you pass nothing to removeChar, str will be undefined by default
  const subStr = str.slice(1, str.length -1);
  return subStr;
};
removeChar(); // this is the "call" of the funtion

// DM: if you have a solution that doesn't work, put some info here about that. I might not see the bug just by reading it. 

const myUndef = undefined
const myString = 'string'
const myEmptyString = ''
removeChar(myUndef) // fails with typeError
removeChar(myString) // works properly
removeChar(myEmptyString) // works properly

// so, in order that your program won't crash you should never pass undefined to removeChar
// but, if the argument is a variable, you may not control what is in the variable
// imagine you have a variable "stringArg" that gets assigned an unknown value - it could be undefined, or '', or 'abc'
// so, to code "defensively", do this
removeChar(stringArg || '')
// to make sure your function will never crash

// even better, handle this in the function definition
//   by providing a default value '' to the argument 'str' 

// this statement is the "definition" of the function
function removeChar(str: ''){ <----- if str is undefined, it will be assigned ''
  // when "called", this line is executed
  // the value of str will be the value you pass in the "call" below
  // if you pass nothing to removeChar, str will be "undefined" by default
  const subStr = str.slice(1, str.length -1);
};
removeChar(); // this is the "call" of the function; it does not provide an argument



removeChar('');
```

## Reversed Strings
DESCRIPTION:
Complete the solution so that it reverses the string passed into it.

```js
function solution(str) {
    const splitString = str.split(''); // split a given string ('s','t','r')
    const reversedString = splitString.reverse(); // ('r', 's', 't')
    const joinedString = reversedString.join(''); // (rst)
    return joinedString
    // or return str.split('').reverse().join('')
}
// 
solution('');
```

## Is n divisible by x and y?

description: create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

```js

// I can resolve this with two solutions
//  the first is to define a variable with a boolean true/false and return that opposite of that boolean after an if condition is passed.
// the second is just simple to return a remainder operation with AND operator
function isDivisible(n, x, y) {
    let result = true;
    if (!(n % x === 0 && n % y === 0)) {
        result = false;
    }
    return result;
    // return n % x === 0 && n % y === 0

}

console.log(isDivisible(3, 3, 4));

