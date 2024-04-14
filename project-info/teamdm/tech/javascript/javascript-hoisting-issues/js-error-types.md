
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
    - 
    <!-- MM: i added this example because i found it very instructive -->
      ```js
      function calculateAverage(num1, num2) {
          return num1 + num2 / 2;
      }

      console.log(calculateAverage(10, 20)); // Outputs 20, but the expected output is 15
      // In this example, the intention is to calculate the average of num1 and num2. However, due to the precedence of operators in JavaScript, the division operation is performed first, and then the result is added to num1. This leads to incorrect results. The correct code should be:
      
      function calculateAverage(num1, num2) {
        return (num1 + num2) / 2;
      }

      console.log(calculateAverage(10, 20)); // Outputs 15, which is the correct average
      ```
    - Best practices for debugging and preventing logic errors in JavaScript:
      1. Use console.log Statements: This is a simple and effective way to track the flow of your program and inspect the values of variables at different stages of execution
  
      2. Use a Debugger: Modern browsers and IDEs have built-in debuggers that allow you to step through your code line by line, inspect variables, and see the call stack.
  
      3. Write Unit Tests: Writing tests for your functions can help ensure they are producing the expected output for a given input. This can help catch logic errors before they become a problem

      4. Code Review: Having another set of eyes look over your code can help catch logic errors that you might have missed.

      5. Understand the Problem Well: Make sure you fully understand the problem you're trying to solve before you start coding. This can help prevent logic errors caused by misunderstandings about what the code should be doing

      6. Break Down Complex Problems: If a problem is complex, break it down into smaller parts. Solve and test each part individually. This can make it easier to spot logic error
  
      7. Use Linters: Linters can catch potential issues in your code that could lead to logic errors.

      8. Follow Best Practices: Following best practices for coding in JavaScript can help prevent many common logic errors.

      DM: cool, good list. 
      DM: in this case, my personal rules would help:
      * assigning each expression to a well-named variable
      * no compound expressions, ie no more than one operator in the expression: num1 + num2 / 10 // 2 operators: + and /
      ```js
      const numerator = num1 + num2
      const denominator = 2
      return numerator / denominator
      ```
      DM: this way there would be no confusion about operator precedence, because you follow rules that keep things separated and simple (and easier to console.log, because console.log wouldn't show you the problem in the above example.)ok