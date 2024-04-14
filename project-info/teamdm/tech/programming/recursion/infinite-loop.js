const greet = () => {
  console.log('Hello')
  greet()
}
greet() // As the condition is not provided, this will crash the browser/node in an infinite loop because it's going to invoke itself over and over again.
