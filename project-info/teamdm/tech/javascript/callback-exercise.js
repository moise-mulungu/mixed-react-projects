// node "./project-info/teamdm/tech/javascript/callback-exercise.js"

const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Async IIFE because you can't use await at the top level bodies of modules
;(async () => {
  // sleep to give the debugger time to "attach" (currently doesn't help)
  await sleep(100)
  console.log('slept')

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
  console.log()

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
  console.log()

  //(done) DM: todoMM: read the above then run the above in the node REPL. study how they work together

  //(done) DM: todoMM: exercise: write a function doSomething2(). It should be identical to doSomething(), but it should allow 3 parameters passed to the callback
  function doSomething2(callback, items) {
    for (const item of items) {
      callback(item[0], item[1], item[2])
    }
  }

  doSomething2(
    (firstName, lastName, age) => {
      console.log(`Hello ${firstName} ${lastName}! are you in your ${age}s!`)
    },
    [
      ['Duncan', 'McKeever', 30],
      ['Moise', 'Mulungu', 25],
      ['Bill', 'Gates', 65],
    ]
  )
  console.log()

  function doSomething3(callback, data) {
    for (const item of data) {
      callback(...item)
    }
  }

  doSomething3(
    (id, country, city) => {
      console.log(`your id ${id}, from ${country}, ${city}!`)
    },
    [
      [1, 'USA', 'New York'],
      [2, 'Russia', 'Moscow'],
      [3, 'Ukraine', 'Kiev'],
    ]
  )
  // now invoke (call) doSomething2 passing a callback and data.
})()
