This is from AI: 

# JavaScript promises
JavaScript promises are objects that represent the eventual completion or failure of an asynchronous operation. They can be handled using either .then().catch() or async/await.

## .then().catch()
This is the traditional way of handling promises. The .then() method is used to schedule a callback to be run when the promise resolves. If the promise rejects, the .catch() method is used to handle the error.

    ```js
        // Start a fetch request to 'https://api.example.com/data'
    fetch('https://api.example.com/data')
        // When the fetch request completes, it returns a response object. We then convert this response into JSON.
        .then(response => response.json())
        // After the response is converted into JSON, we log the data to the console.
        .then(data => {
            console.log(data)
            // NOTE: .then always returns a promise, no matter what you do. even if you return a value, .then() will wrap it in a promise, which resolves instantly, but it still a promise
        })
        // If any error occurs during the fetch request or while handling the response, we catch the error and log it to the console.
        .catch(error => console.error('Error:', error));
    ```

## async/await
This is a modern way of handling promises, introduced in ES2017. It makes asynchronous code look and behave more like synchronous code, which can make it easier to understand and reason about.

    ```js
    // Declare an asynchronous function named 'fetchData'
    async function fetchData() {
    // Start a try block to handle any errors that might occur
        try {
            // Start a fetch request to 'https://api.example.com/data' and wait for it to complete
            const response = await fetch('https://api.example.com/data');
            // After the fetch request completes, convert the response into JSON and wait for that to complete
            const data = await response.json();
            // Log the data to the console
            console.log(data);
        // If any error occurs during the fetch request, while handling the response, or while converting the response into JSON, catch the error
        } catch (error) {
            // Log the error to the console
            console.error('Error:', error);
        }
        }

    // Call the 'fetchData' function
    fetchData();
    ```
Both methods are valid and can be used depending on the situation and personal preference. However, async/await can lead to cleaner and more readable code, especially when dealing with multiple asynchronous operations that depend on each other. DEVs will see then.catch often in example code because it works the same for older code as well as recent code. If then.catch is shown in example code for a package, for example, it does not necessarily mean that you have to use then.catch. Almost always you can use await.

(done)DM: going forward, use async/await unless you absolutely must use then.catch. It is important to keep code clean and to avoid "callback" hell, in which .then() callbacks get deeply nested. MM: yes, i found the async/await more readable than then().catch()