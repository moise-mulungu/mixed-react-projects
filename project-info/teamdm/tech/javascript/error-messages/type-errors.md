
# howtojs: type error:: 
* a variable is expected to be of a certain type, based on how it is used, ex: called as a function myVariable()
* however, the variable is of a different type
* types: primitives and objects
  * primitives: string, number, boolean, null, undefined
  * objects: object, array, regexp, etc. 
## debugging
* the NAME of the variable is in the error message
* log the variable with: console.log({ myVariable, type: typeof myVariable })
* look at where the variable is defined, is it of the type you expect

## examples
* "TypeError: onSubmitForm is not a function"
  * After adding a form, and call an onSubmit function as parameter, the following error occurs with submit button: "TypeError: onSubmitForm is not a function"