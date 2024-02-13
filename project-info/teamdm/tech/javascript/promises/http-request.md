This is from mdn resources: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises

These exercises were supposed to be done on the browser console.

In this example, we'll download the JSON file from https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json, and log some information about it.

DM: todoMM: tomorrow I want you to put these into 3 separate files in a http-request/ directory. Make each of the 3 files a .js which runs and works via, for example: "node project-info/teamdm/tech/javascript/promises/http-request/basic-fetch.js"

DM: todoMM: going forward, avoid putting non-running code as examples. if the code doesn't run, it is not reliable as a learning tool and you have not learned all that you can from it by doing what is necessary to make it really work.

## http-request

    ```js
        const fetchPromise = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );

        console.log(fetchPromise);

        fetchPromise.then((response) => {
        console.log(`Received response: ${response.status}`);
        });

        console.log("Started request…");

    ```
    the console result: 
        Promise { <state>: "pending" }
        Started request…
        Received response: 200


## chaining promises
With the fetch() API, once you get a Response object, you need to call another function to get the response data. In this case, we want to get the response data as JSON, so we would call the json() method of the Response object. It turns out that json() is also asynchronous. So this is a case where we have to call two successive asynchronous functions.

    ```js
    const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

        fetchPromise.then((response) => {
            const jsonPromise = response.json();
                jsonPromise.then((data) => {
                //  this is an example of "callback hell" where you are nesting callbacks when you need to perform multiple async operations in a sequence (i.e., fetch needs to complete, .json() needs to complete)
                console.log(data[0].name);
                // what if you needed to perform an async fetch fetch for each data.name in the array?
            });
        });


        const fetchPromise = fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
            );

            fetchPromise
                .then((response) => response.json())
                .then((data) => {
                    console.log(data[0].name);
            });

    ```

## catching-errors
The fetch() API can throw an error for many reasons (for example, because there was no network connectivity or the URL was malformed in some way) and we are throwing an error ourselves if the server returned an error. To support error handling, Promise objects provide a catch() method. This is a lot like then(): you call it and pass in a handler function. However, while the handler passed to then() is called when the asynchronous operation succeeds, the handler passed to catch() is called when the asynchronous operation fails.

    ```js
        const fetchPromise = fetch("bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

        fetchPromise
        .then((response) => {
            if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data[0].name);
        })
        .catch((error) => {
            console.error(`Could not get products: ${error}`);
        });


    ```

## Promise terminology
DM: good! put into a promises vocabulary file in the same dir structure as the others.
Promises come with some quite specific terminology that it's worth getting clear about.

First, a promise can be in one of three states:

* pending: the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to fetch(), and the request is still being made.
* fulfilled: the asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called.
* rejected: the asynchronous function has failed. When a promise is rejected, its catch() handler is called.
DM: todoMM: what does "resolved" mean, when used with the above 3 terms?