DM: good idea. A few edits for brevity/conciseness

# types of JS errors

## syntax error
A SyntaxError is a type of error that is thrown when there is a typo in the code, creating invalid code - code which cannot be interpreted by the compiler.

## Reference Error
The ReferenceError object represents an error when a variable (or property) that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.

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

(done)DM: todoMM: great! Put this in a new file react-errors.md in the appropriate folder
