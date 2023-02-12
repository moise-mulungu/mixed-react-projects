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
function removeChar(str){

  let subStr = str.slice(1, str.length -1);
  return subStr;
};

removeChar('');
```
