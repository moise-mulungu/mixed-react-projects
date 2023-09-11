# Beginner Interview Questions of Jest

## 1. What is Jest?

Jest is a powerful tool for testing JavaScript applications, particularly React and React Native projects. With Jest, developers can perform unit tests, snapshot tests, and coverage reporting to ensure that their code is functioning correctly. 

## 2. Why do we need Jest?

Jest is required to automate the testing process and ensure that our application functions as planned. It assists us in writing test cases for our application and ensuring that the code is valid and runs as planned.

## 3. What is a test suite in Jest?

In Jest, a `test suite` is a collection of test cases that are related to a specific unit or feature of an application. A test suite is created using the `describe` function in Jest, which takes two arguments: a **string that describes the test suite**, and a **callback function** that contains the individual test cases.

For example, if you were testing a function called sum that adds two numbers together, you could create a test suite using the describe function like this:
```js
describe('sum function', () => {
  // individual test cases go here
});
```
Inside the callback function, you can write as many test cases as you need using the test function, which takes two arguments: a string that describes the test case, and a callback function that contains the test code. Here's an example of a test case that checks whether sum(2, 2) returns 4:
```js
describe('sum function', () => {
  test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
```
 Test suites are a useful way to organize your tests and keep them focused on specific parts of your codebase.

## 4. What is a test case in Jest?

In Jest, `a test case is a piece of code that defines a specific behavior or scenario to be tested`. It typically consists of one or more assertions that verify that the actual output of a function or module matches the expected output. 
Jest provides a range of ***APIs and matchers*** for writing more complex test cases, including asynchronous tests, tests that simulate user interactions, and tests that check for errors and exceptions. 

## 5. How do you install Jest?

Installing Jest is a simple process that requires just a few steps:

First, ensure that you have `Node.js` installed on your system.

Use the following command to install Jest using npm:
`npm install --save-dev Jest`



After the installation is complete, you can create a test file with a `.test.js` or `.spec.js` extension, depending on your preference.

Finally, run your Jest tests by executing the following command:
`npm test`

This command runs all of your Jest tests in the project. Following these steps will enable you to use Jest for testing your JavaScript code.


## 6. What is a snapshot test in Jest?

In Jest, a snapshot test is a type of test that compares the output of a component or function against a pre-existing snapshot. A snapshot is a serialized representation of the expected output.

Jest provides a `toMatchSnapshot matcher` for creating snapshot tests. If the output matches the snapshot, the test passes. If the output differs, the snapshot needs to be updated to reflect the new output.

## 7. What is code coverage in Jest?

`Code coverage` in Jest measures the percentage of your code that is executed during your tests. It helps identify areas of your codebase that may require additional testing or optimization. Jest provides a built-in coverage tool that generates reports on the coverage percentage for each file and the entire project. 
Use the `--coverage` flag to generate a coverage report in the coverage directory. 

## 8. How do you run a single test case in Jest?

To run a single test case in Jest, use the: `--testNamePattern` option followed by the name of the test case you want to run. For example, if you have a test called "testA" in your file, you can run it like this:

`npm test -- --testNamePattern=testA`

This will run only the "testA" test case and skip all other tests in the file. You can also use a regular expression to match multiple test names, like so:

`npm test -- --testNamePattern=/testA|testB/`

This will run all test cases that have either "testA" or "testB" in their name. Note that ***--testNamePattern is case-sensitive***, so make sure to use the exact test name when running the command.

## 9. What is the difference between describe and it in Jest?

### describe

* Used to group related test cases together	

* Can contain multiple it blocks	

* Can be nested to create a hierarchy of test suites
* 
* Can have hooks (beforeAll, afterAll, beforeEach, afterEach)	

* Typically used to group tests by functionality or component	


### It

* Used to define an individual test case
  
* Can only contain a single test assertion
  
* Cannot be nested
  
* Cannot have hooks
  
* Typically used to test a single behavior or condition.

## 10. What is a setup function in Jest?

A `setup function` in Jest is a special type of function that is executed before or after a set of tests, allowing you to set up the testing environment, configure test fixtures, or perform other necessary setup tasks.

Jest provides a number of different setup functions that you can use depending on your needs, including:

`beforeAll`: This function is executed once before any of the tests in a test suite. It's commonly used to set up the testing environment or initialize test fixtures that are needed by all of the tests in the suite.

`beforeEach`:This function is executed before each test in a test suite. It's commonly used to set up test fixtures or reset the testing environment before each individual test.

`afterEach`: This function is executed after each test in a test suite. It's commonly used to clean up any resources that were used during the test, or to reset the testing environment before the next test.

`afterAll`:This function is executed once after all of the tests in a test suite have completed. It's commonly used to clean up any resources that were used during the testing process or to perform other finalization tasks.

Setup functions are defined using the `beforeAll`, `beforeEach`, `afterEach`, and `afterAll` methods provided by Jest's global describe function.

For example, here's how you could define a beforeEach function that sets up a mock database connection for your tests:
```js
describe('My tests', () => {
  let db;

  beforeEach(() => {
    db = Jest.fn(); // create a mock database connection
  });

  test('Test 1', () => {
    // your test code
  });

  test('Test 2', () => {
    // your test code
  });
});
```
In this example, the beforeEach function creates a new mock database connection before each test in the test suite, ensuring that the database is properly set up for each individual test.

## 11.  What is a teardown function in Jest?

In Jest, a `teardown function` is a function that is executed after running one or more test cases. It is used to clean up any resources or state that was created during the test, such as closing database connections or cleaning up temporary files.

## 12.  How do you test React components with Jest?

Jest provides a range of features and tools that make it easy to write comprehensive tests for React components. You'll need to install Jest, as well as any additional dependencies required for testing React components. 
This might include `react`, `react-dom`, and `@testing-library/react`, among others.

`Rendering components`:Jest provides a render function from @testing-library/react that you can use to render your components and get access to their rendered output.

`Interacting with components`: You can simulate user interactions with your components using Jest's fireEvent function from `@testing-library/react`. 

`Snapshot testing`:Jest's snapshot testing feature allows you to create a snapshot of your component's rendered output and compare it against future runs of the test.

## 13. What is a test runner in Jest?

In Jest, a `test runner` is a tool that is responsible for executing test suites and reporting the results. Jest includes a built-in test runner that can run test suites in parallel, allowing for faster and more efficient testing.

## 14. What is the difference between beforeEach and beforeAll in Jest?

`beforeEach` is executed before each test case and is useful for setting up any necessary state that should be reset before each test case. On the other hand, `beforeAll` is executed once before all the test cases and is useful for setting up any global state that should be shared across all the test cases. The main difference between the two is that `beforeEach` is run multiple times, once before each test case, while `beforeAll` is run only once, before all the test cases.

## 15. What is the difference between afterEach and afterAll in Jest?

`AfterEach` is executed after each test case and is useful for cleaning up any state that was set up by the `beforeEach` function. On the other hand, `afterAll` is executed once after all the test cases have been run and is useful for cleaning up any global state that was set up by the `beforeAll` function. The main difference between the two is that `afterEach` is run multiple times, once after each test case, while `afterAll` is run only once, after all the test cases have been executed.


## 16. How do you test Redux actions and reducers in Jest?

Testing Redux actions and reducers in Jest involves a multi-step process:

* First, create a new test file with a descriptive name that ends in .test.js or .spec.js.
* Import the action creators and the reducer that you want to test into your test file.
* Write one or more test cases that simulate different scenarios that your action creators and reducers might encounter.
* For testing action creators, call the action creator function and then assert that the resulting action object matches the expected shape.
* For testing reducers, create a test case that simulates a particular action being dispatched to the reducer, and then assert that the reducer returns the expected new state.
* Use Jest's built-in expect function and matchers to make assertions about the output of your tests.
Here's an example of how to test a Redux action creator and reducer using Jest:
```js
import { incrementCount, countReducer } from './count';

describe('count actions and reducer', () => {
  describe('incrementCount', () => {
    it('should create an action to increment the count', () => {
      const expectedAction = { type: 'INCREMENT_COUNT' };
      expect(incrementCount()).toEqual(expectedAction);
    });
  });

  describe('countReducer', () => {
    it('should handle INCREMENT_COUNT', () => {
      expect(countReducer(0, { type: 'INCREMENT_COUNT' })).toEqual(1);
    });
it('should return the initial state if no matching action is passed', () => {
      expect(countReducer(undefined, {})).toEqual(0);
    });
  });
});
```
In this example, we're testing an `action creator` called `incrementCount` and a reducer called `countReducer`. We've written two test cases for the reducer, one to test the case where the `INCREMENT_COUNT` action is dispatched, and one to test the default case where no matching action is dispatched. We've also written a test case for the action creator to ensure that it returns the expected action object.

## 18.  What is a mock module in Jest?

In Jest, you can test Redux actions and reducers by creating test cases that simulate different scenarios and verifying the expected outcomes. To test actions, you can create mock action creators that dispatch a specific action, and then check if the expected action was dispatched.