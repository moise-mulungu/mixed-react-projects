// this is a function that accepts a callback as a parameter and then calls (invokes) the callback

// example of a function that uses a callback parameter:
function doSomething(callback, items) {
  for (const item of items) {
    callback(item[0], item[1])
  }
}
// using the function, passing a callback and data
doSomething(
  // note: I can name the parameters whatever I want. It doesn't matter because doSomething() will just pass arguments, and it doesn't affect doSomething() what the parameter names are.
  (firstName, lastName) => {
    console.log(`Hello ${firstName} ${lastName}! How the heck are you?`)
  },
  [
    ['Duncan', 'McKeever'],
    ['Moise', 'Mulungu'],
    ['Bill', 'Gates'],
  ]
)
// using the same function in a different way
doSomething(
  // note: I don't have to "use" all of the parameters. I can use just one. doSomething() will try to pass 2 args, but the 2nd will be undefined since it is not in the data. Even if the 2nd arg were defined in the data, my callback here would ignore it.
  (name) => {
    console.log(`${name} is an imaginary character!`)
  },
  [
    ['Ronald McDonald'], // this time, each array has only 1 element
    ['Mickey Mouse'],
  ]
)

// DM: todoMM: read the above then run the above in the node REPL. study how they work together

// DM: todoMM: exercise: write a function doSomething2(). It should be identical to doSomething(), but it should allow 3 parameters passed to the callback

// now invoke (call) doSomething2 passing a callback and data.

// DM for DM: potom: bezkonechnii params, dobavit text vFunc, drugievarianti?

node "./project-info/teamdm/tech/javascript/callback-exercise.js"
