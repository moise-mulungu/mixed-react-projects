
# JS runtime VS compile-time errors

- compile-time (syntax) errors
  - occur during the parsing of code
  - caused by syntax issues, like missing brackets or typos
  - SyntaxError: violations of javascript syntax rules
    - example: `if (x { console.log(x) } // SyntaxError: Unexpected token '{'` 

- runtime errors
  - occur during code execution
  - types of errors JS throws
    - ReferenceError: accessing undeclared variables or out-of-scope variables
      - `console.log(undeclaredVariable); // ReferenceError: undeclaredVariable is not defined`
    - TypeError: operation involving a value of an unexpected type
      - `null.f(); // TypeError: Cannot read property 'f' of null`
    - RangeError: numeric value outside an allowed range
      - `new Array(-1); // RangeError: Invalid array length`
    - EvalError: errors related to the `eval()` function
      - `eval('var a ='); // EvalError: missing ; before statement`
    - URIError: incorrect use of URI-handling functions
      - `decodeURIComponent('%'); // URIError: URI malformed`
    - AggregateError: represents multiple errors wrapped in a single error object
      - `throw new AggregateError([new Error('some error')], 'AggregateError with one error'); // AggregateError: AggregateError with one error`
    - InternalError (specific to some engines): errors that occur within the JavaScript engine itself
      ```js
      // Example may depend on a specific JavaScript engine's limitations, such as recursion depth
      function recursiveFn() {
          recursiveFn();
      }
      recursiveFn(); // InternalError: too much recursion`
      ```
  - logic errors
    - occur when code doesn't perform as intended
    - no violations of language rules, hence no exceptions thrown
    - example: incorrect use of logic operators leading to wrong outcomes

