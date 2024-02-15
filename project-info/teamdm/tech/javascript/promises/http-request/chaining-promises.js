/*
With the fetch() API, once you get a Response object, you need to call another function to get the response data. In this case, we want to get the response data as JSON, so we would call the json() method of the Response object. It turns out that json() is also asynchronous. So this is a case where we have to call two successive asynchronous functions.
*/
// node project-info/teamdm/tech/javascript/promises/http-request/chaining-promises.js

const fetchPromise = fetch(
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
)

fetchPromise.then((response) => {
  const jsonPromise = response.json()
  jsonPromise.then((data) => {
    //  this is an example of "callback hell" where you are nesting callbacks when you need to perform multiple async operations in a sequence (i.e., fetch needs to complete, .json() needs to complete)
    console.log(data[0].name)
    // what if you needed to perform an async fetch fetch for each data.name in the array? MM: If you need to perform an async fetch for each data.name in the array, you can use Promise.all() to wait for all the fetches to complete. this is how it would look like:
    /*
    fetchPromise.then((response) => {
        return response.json();
    }).then((data) => {
    const fetchPromises = data.map(item => fetch(item.name));
    return Promise.all(fetchPromises);
    }).then((responses) => {
   
    }).catch((error) => {
    console.error('Error:', error);
    });
    */
  })
})


const fetchPromise2 = fetch(
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
)

fetchPromise2
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name)
  })

  // adding an async/await version

  ;(async () => {
    console.log('starting async/await version')
    try {
      const response = await fetch(
        'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
      )
      const data = await response.json()
      console.log(data[0].name)
    } catch (error) {
      console.error(`Error fetching async/await data: ${error}`)
    }
  })()

