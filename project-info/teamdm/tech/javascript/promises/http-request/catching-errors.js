/*
The fetch() API can throw an error for many reasons (for example, because there was no network connectivity or the URL was malformed in some way) and we are throwing an error ourselves if the server returned an error. To support error handling, Promise objects provide a catch() method. This is a lot like then(): you call it and pass in a handler function. However, while the handler passed to then() is called when the asynchronous operation succeeds, the handler passed to catch() is called when the asynchronous operation fails.
*/

// node project-info/teamdm/tech/javascript/promises/http-request/catching-errors.js

const catchingErrors = fetch(
  'bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
)

catchingErrors
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    return response.json()
  })
  .then((data) => {
    console.log(data[0].name)
  })
  .catch((error) => {
    console.log()
    console.log('CATCHING EXPECTED ERROR:')
    console.error(`Could not get products: ${error}`)
  })

// adding an async/await version
;(async () => {
  console.log('starting async/await version')
  try {
    const response = await fetch(
      'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
    )
    const data = await response.json()
    console.log('Running async/await fetch: ', data[0].name) // console the async/await fetch running
  } catch (error) {
    console.error(`Error fetching async/await data: ${error}`)
  }
})()
