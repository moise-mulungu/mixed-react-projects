function narcissistic(value) {
  /* 5. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
input: a number
output: boolean(true or false)
  */

  // 6. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isNumber = typeof value === 'number'
  if (!isNumber) throw new Error('value must be a number')

  /* 7. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? 
        Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, Yes!)
        */
  /*
i want to check if the number is narcissistic by checking if the sum of the digits raised to the power of the number of digits is equal to the number
  */

  /* 8. break down the the 'variable' elements of the solution into the most granular (smallest) parts by
        assigning each part (string, boolean expression, etc.) to a well-named, descriptive variable.
        Naming variables: 
        * each logical expressions must be assigned to a variable. 
	  * the instructions often contain words that can be used in variable names.
        * function names verb or verb+noun (create, handleClick, handleSubmit)
        * booleans are named with (positive) adjectives: (open, seen, isString)
        * everything else with nouns or adjectives: (myThing, myCoolThing)
        * variable names should express exactly what the variable contains
        * see naming-conventions.md*/

  // MM: toDM: I did it on the other way as the first approach did not work, but can you figure out how to resolve it with the first approach.
  // DM: todoMM: I can. Put this code into a new file, with tests, discussing where/why it doesn't work, and I'll have a look.

  const valueDigits = Math.floor(Math.log10(value)) + 1
  console.log(valueDigits)

  const lastValueDigit = value % 10
  console.log(lastValueDigit)

  let sumOfDigits = 0
  for (let i = 0; i < valueDigits; i++) {
    console.log(i)
    sumOfDigits += lastValueDigit ** valueDigits
    console.log(sumOfDigits)
  }
  if (sumOfDigits === value) {
    return true
  }
  /* 9. use the named parts to create a readable solution. */

  /* 10. return the solution
   always return a variable, or, use only variables in return statements
   this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
   */
  return false
  // MM: toDM: some test cases are failing.
}

narcissistic(7) // true
narcissistic(371) // true
narcissistic(122) // false
narcissistic(4887) // false
narcissistic(4888) // true
narcissistic(4889) // false
