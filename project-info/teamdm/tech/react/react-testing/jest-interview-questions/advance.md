## 1. How would you go about setting up a Jest test suite for a React application?
 Here are the steps to set up a Jest test suite for a React application:

* Install Jest as a dev dependency by running the following command in your project directory:
`npm install --save-dev jest`

* Create a __tests__ folder in your project directory. This folder will contain your test files.
  
* Create a test file for each React component you want to test. Jest uses a specific naming convention for test files, which is [filename].test.js or [filename].spec.js. For example, if you want to test a component called Button.jsx, your test file should be named `Button.test.js` or `Button.spec.js`.
  
* Write your test cases using the Jest syntax. Jest provides a set of assertion functions that you can use to test various aspects of your components. For example, you can use the `expect` function to check if a component renders correctly or if it handles user interactions as expected.
  
* Run your tests by running the following command in your project directory: `npm test`
  
Jest will automatically discover and run all the test files in your __tests__ folder. It will also provide a detailed report of the test results, including information about the number of tests run, the number of tests passed, and any test failures.

## 2. What strategies do you use to debug Jest tests?

* When troubleshooting Jest tests, use the `--verbose` parameter on the Jest CLI to acquire full information about test runs, including problems. 
* The built-in debugging tools in Jest, such as `expect.assertions()` and `expect.hasAssertions()`, can assist in identifying unexpected behavior in tests. 
* The snapshot testing feature in Jest allows you to compare test output to a known good version, emphasizing changes that cause tests to fail. These techniques can aid in the rapid identification and resolution of Jest test difficulties.
  
## 3. How do you handle asynchronous code in Jest tests?

* When creating tests, Jest provides a variety of management options for asynchronous code. The first choice is to make use of the `async/await` syntax, which lets you write asynchronous code in a synchronous way. Pronouncing the capability as `async` and utilizing the anticipated catchphrase makes it simpler to peruse and fathom the code.

* Utilizing the `.resolves` or `.rejects` matchers, which assist in testing promise resolution or rejection without requiring async/await syntax, is yet another option. Time is saved and code is written less using this method.

* Utilizing the `done callback` function, which is passed as an argument to the test function, is a third option. When setup or cleanup are required, calling this function after the asynchronous code has finished enables Jest to wait before finishing the test.

* Last but not least, the `setTimeout` function can be used to hold off on running the test for a predetermined amount of time, which is useful for waiting before doing so.

## 4. What is the difference between a snapshot test and a unit test in Jest?

### Feature	Snapshot Test	
* `Purpose`: To capture a snapshot of the component's output	
* `Test focus`:	Component output (DOM, UI)
* `Test type`: Integration testing
* `What is tested` : The rendered markup of a component
* `Test methodology`:  Renders the component and compares the output to a saved snapshot
* `Test output`: Serialized representation of the component's rendered output
* `Test maintenance`: Needs to be updated if component's visual output changes	
* `Advantage`: Helps catch visual regressions in the component
  
### Unit Test

* `Purpose`: To test individual units of code for correctness
* `Test focus`: Function or module output (JavaScript)
* `Test type`: Unit testing
* `What is tested` : The internal implementation details of a function
* `Test methodology`: calls the function with known inputs and compares the output to the expected result
* `Test output`: Pass/Fail assertion message with details on what failed
* `Test maintenance`: Needs to be updated if the implementation of the function changes
* `Advantage`: Tests individual units in isolation, making it easier to pinpoint issues


## 5.  How do you mock a function in Jest?

Mocking functions in Jest involve creating a new, empty mock function using the `Jest.fn()` method and customizing it to match the behavior of the original function. This can be useful for a number of reasons, such as ***testing functions that depend on external APIs or services, or simulating specific behavior for testing purposes***.

To create a mock function in Jest, you can use the Jest.fn() method, like this:
```js
const myFunction = Jest.fn();
```
This creates a new mock function called `myFunction`. You can then customize this function by chaining methods such as `mockReturnValue`, `mockResolvedValue`, or `mockImplementation`.

For example, let's say you want to mock a simple function that adds two numbers together:
```js
  Chafunction add(a, b) {
    return a + b;
  }
```
To mock this function in Jest and make it always return 10, you could do something like this:
```js
const add = Jest.fn().mockReturnValue(10);
```
Now, whenever the add function is called in your test, it will return 10 instead of the actual result of adding two numbers.

It's worth noting that you can also use the `Jest.spyOn()` method to mock an existing function on an object, rather than creating a new mock function. This can be useful for testing methods on objects that depend on other methods within the same object.

## 6.  What is the purpose of the Jest CLI?

The ***Jest CLI (Command Line Interface)*** is a command-line tool that allows developers to execute Jest tests and other test-related operations. Its goal is to provide a straightforward and user-friendly interface for handling Jest tests without the requirement for a separate build tool or IDE. Developers may simply run tests, analyse test results, and produce coverage reports using the Jest CLI.

## 7.  How do you configure Jest to run tests in parallel?

Jest is a popular JavaScript testing framework that offers a number of useful features, including the ability to run tests in parallel. Running tests in parallel can greatly speed up test execution times, especially for large test suites.

* By default, Jest runs tests in parallel using a maximum of the number of logical processors available on the machine. However, you can also explicitly specify the maximum number of workers to use using the `--maxWorkers` option. 
  For example, if you want to run tests using 4 workers, you can use the following command:

  `Jest --maxWorkers=4`

When Jest runs tests in parallel, it automatically divides your test suites into multiple groups and distributes them among the specified number of workers. This means that each worker runs a subset of the total test suites, which can significantly reduce the overall test execution time.

## 8.  What is the difference between Jest and Enzyme?

Jest and Enzyme are both popular testing frameworks used in the JavaScript ecosystem, but they serve different purposes and have different approaches to testing. Jest is a full-featured testing framework that includes everything needed for testing JavaScript applications, including test runners, assertions, and mocking capabilities.

  Jest is known for its ease of use and integration with popular JavaScript frameworks like React, Angular, and Vue. Jest is particularly well-suited for testing the functionality of the application as a whole and for testing complex scenarios involving multiple components and interactions.

  Enzyme, on the other hand, is a testing utility specifically designed for testing React components. Enzyme provides a set of functions for shallow rendering, mounting, and manipulating React components, making it easy to simulate user interactions and test component behavior. Enzyme is particularly well-suited for testing individual React components and for testing component interactions and state changes.

## 9.  How do you set up code coverage in Jest?

Setting up code coverage in Jest is a straightforward process, and involves the following steps:

* Ensure that you have the latest version of Jest installed in your project. You can install it using npm or yarn:
`npm install --save-dev Jest` or `yarn add --dev Jest`

* In your Jest configuration file (usually Jest.config.js), add the coverage property and set it to an object with the following properties:
```js
  module.exports = {
    // ...
    coverage: {
      collectCoverage: true,
      collectCoverageFrom: ['src/**/*.{js,jsx}'],
      coverageReporters: ['lcov', 'text-summary'],
    },
  };
```
The `collectCoverage` property enables code coverage collection, while `collectCoverageFrom` specifies the files to collect coverage from. In this example, it collects coverage from all `.js` and `.jsx` files in the src directory. Finally, `coverageReporters` specifies the format in which coverage data will be reported. In this example, it reports in both lcov and text-summary formats.

* Run your tests with the `--coverage` flag: `Jest --coverage`

## 10.  How do you handle mocking of external API calls in Jest tests?

When testing code that makes external API calls, it's important to mock those API calls to ensure that your ***tests are deterministic and don't rely on external dependencies***. Jest provides several ways to handle mocking of external API calls. Here's a step-by-step guide:

* Identify the external API calls made by your code that need to be mocked.
  
* Create a mock implementation of the external API that returns fake data. You can do this using `Jest's Jest.fn()` method to create a mock function that returns the fake data:

```js
  // Example mock implementation of an external API
  const mockGetData = Jest.fn(() => {
    return {
      data: {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
    };
  });
```
* Use Jest's `Jest.mock()` method to replace the original implementation of the external API with the mock implementation:

```js
  // Example mock implementation of an external API
  Jest.mock('./api', () => ({
    getData: mockGetData,
  }));
```
In this example, the getData function from the ./api module is being replaced with the mockGetData mock function.
Write your test code, which should call the code that makes the external API call. You can then assert that the code behaves correctly based on the fake data returned by the mock implementation:

```js
  // Example test case for code that makes an external API call
  test('should return the correct user data', async () => {
    const result = await getUserData();
    expect(result).toEqual({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
    });
  });
```
In this example, the `getUserData()` function is being tested, which makes an external API call to the `getData()` function. The test is checking that the function correctly returns the expected data based on the fake data returned by the mock implementation. By following these steps, you should be able to mock external API calls in your Jest tests and ensure that your tests are `deterministic` and `reliable`.

