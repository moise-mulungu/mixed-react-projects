// DM: todoMM: alway sput a comment that can be copy and pasted to run the nodejs script. Do the same as below for the other .js file n this directory
// node project-info/teamdm/tech/javascript/promises/http-request/basic-fetch.js
const fetchPromise = fetch(
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
)

// DM: todoMM: improve this comment to show which fetch is running .then() or async/await
console.log(fetchPromise)

fetchPromise.then((response) => {
  console.log(`Received .then() response: ${response.status}`)
})

console.log('Started the .then() request…')

// DM: todoMM: add the async/await version to the other .js files in this dir following my example below (including the changes to all the console.log which clarifies whether the .then() fetch is running or the async/await fetch is running). :

// to avoid the error: SyntaxError: await is only valid in async functions and the top level bodies of modules put this into a IIFE (Immediately Invoked Function Expression) like this:
;(async () => {
  console.log('starting async/await version')
  try {
    const response = await fetch(
      'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
    )
    console.log(`Received async/await response: ${response.status}`)
  } catch (error) {
    // even though .catch() is not in the example above, I included the catch here because you ALWAYS use it with try.
    console.error(`Error fetching async/await data: ${error}`)
  }
})()

/* 

When you run this, check the console in the terminal and with the console.logs notice the order in which the code runs

DM: todoMM: explain to me here below why "starting async/await version" is logged before "Received .then() response: 200" even thought the console.log for "Received .then() response: 200" comes after the console.log for "starting async/await version" in the code.

*/
