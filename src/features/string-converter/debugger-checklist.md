<!-- I started by adding the definitions of different types of error in JavaScript -->

# Errors
There are 7 types of JavaScript errors: `Syntax error`, `Reference Error`, `Type Error`, `Evaluation Error`, `RangeError`, `URI Error` and `Internal Error`

## syntax error
A SyntaxError is a type of error that is thrown when there is a typo in the code, creating invalid code - code which cannot be interpreted by the compiler.

## Reference Error
The ReferenceError object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.

## type error
The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type. A TypeError may be thrown when: an operand or argument passed to a function is incompatible with the type expected by that operator or function.

## range error
A RangeError is thrown when trying to pass a value as an argument to a function that does not allow a range that includes the value. This can be encountered when: passing a value that is not one of the allowed string values to String.

## evaluation error

The EvalError object indicates an error regarding the global eval() function. This exception is not thrown by JavaScript anymore, however the EvalError object remains for compatibility.

## URI Error
The URIError object represents an error when a global URI handling function was used in a wrong way. URIError is a serializable object, so it can be cloned with structuredClone() or copied between Workers using postMessage().

## internal error

The InternalError object indicates an error that occurred internally in the JavaScript engine.

### Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
* The React error `Too many re-renders. React limits the number of renders to prevent an infinite loop` happens due to the state update in the main body of the component or invoking an event handler, instead of passing as a function
* ***howtofixerror: react:: too many re-renders; use useEffect hook and put state changes inside it***

### type-error: cannot read properties of undefined (reading 'string')
* The `cannot read property of undefined` error happens when you try to access a property or method of a variable that is undefined.
* ***howtofixerror: react:: cannot read properties of undefined; add an undefined check on the variable before you access it***
