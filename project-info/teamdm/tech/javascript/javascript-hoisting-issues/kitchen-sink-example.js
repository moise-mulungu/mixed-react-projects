// DM: I need to do some more work on this, so I'll let you know when to read it

// this is really tricky, but read it and ask me questions. Then, come back later and read it again and again. It will sink in.
// pay attention to "what is the path of execution through the code", because it is not linear
// watch when functions are called because they divert execution to the code in the function before continuing with the code after the function call.
// this is also good practice at understanding how functions work in programming.

// todoDM: example of class needed? any differences or does it behave the same as let and const?
if (true) {
  function outerFunction() {
    function innerFunction() {
      // unlike let and const, with var there is no reference error,
      // because innerVarVariable is hoisted
      // but the value is undefined, due to Partial Early Activation (see below)
      const innerConstVariable = `Inner const variable, and the value of innerVarVariable (at the time execution reaches this line) is: "${innerVarVariable}"`

      return [
        // these const variables are hoisted, but uninitialized - called Temporal Dead Zone
        // hoisted, so when you call the function which runs this code
        // there is no runtime error (referenceError) saying outerVariable does not exist
        // execution does not actually reach this line
        //   before outerVariable is initialized
        //   because this code is in a function, so it doesn't run until the function is called
        //   therefore, there is no reference error when execution finally reaches this statement
        // execution does not reach this line (until innerFunction() is called)
        innerConstVariable,
        outerConstVariable,
        // hoisting and early activation - ??? when execution entered the scope, all function declaration were executed first
        innermostFunction(),
      ]

      // equals undefined from the top of its scope until execution reaches its declaration
      // this is called "Partial Early Activation" (?for var only?)
      // unlike let, const, and class, execution can access it before declaration without a reference error
      var innerVarVariable = 'contents of innerVarVariable'

      function innermostFunction() {
        return {
          from: 'InnermostFunction',
          // still undefined because innermostFunction() is called before execution reaches the declaration of innerVarVariable
          innerVarVariable,
        }
      }
    }

    // activated when execution reaches the declaration
    const outerConstVariable = 'Outer variable'

    return innerFunction
  }
  const results = outerFunction()()
  console.log(results)
}
