### React testing frameworks, test runners, assertion libraries

- summarize the content from the source: https://www.browserstack.com/guide/top-react-testing-libraries
- Added react testing libraries list:

  1. Jest: is the most popular __testing framework__ created and maintained by Facebook. It is used to test React components and is adopted by Uber, Airbnb and others. Jest is highly recommended by the React Community as the React Testing Framework of choice. It comes with its own _test runner and assertion functions_.
     installation:

  ```js
  npm install --save-dev jest
  ```

  2. Mocha: is another popular __testing framework__ for Javascript developers. It provides browser support, asynchronous tests, test coverage reports, _and the use of any assertion library_. It provides developers full control over how and with which tools to test their code. It is also _compatible with a wide range of testing frameworks and libraries_. Mocha is an _alternative to Jest_ due to its lack of complexity in certain areas such as mocking.
     installation:

  ```js
  npm install --global mocha
  ```
  (done)DM: todoMM: add the meanings of the acronyms BDD, TDD below
  3. Chai: is a popular BDD / TDD __assertion and expectation library__ for _node_ and the _browser_. It _can be paired_ with any javascript testing framework. It’s often associated with testing in Mocha, and can also be used with Jest and Enzyme. Some functionalities such as expect, should and assert, helps to declare what to expect in a test. It can also be made to make assertions for functions.
     installation:

  ```js
   npm install chai
  ```

  4. Jasmine: is a fantastic open-source BDD testing __framework and test runner__ for testing all kinds of javascript applications. It examines the user interface’s readability and responsiveness across a range of screen sizes and resolutions. It is _mostly combined with Babel and Enzyme_ to test React applications.
     installation:

  ```js
  npm install jasmine-node
  ```

  5. Karma : is neither a testing framework nor an assertion library. It is a __test runner__ for JavaScript that _runs on Node.js_. It launches an HTTP server, and generates a test runner HTML file. It allows one to execute JavaScript code across multiple real browsers and was built to simplify the feedback loop between writing code and getting information from the tests.
     installation:

  ```js
  npm install karma –save-dev
  ```

  ### BDD
  Behavioral-Driven Development is an Agile software development methodology in which an application is documented and designed around the behavior a user expects to experience when interacting with it.
  

  ### TDD
  Test-Driven Development is a software development practice that focuses on creating `unit test cases` before developing the actual code. It is an iterative approach combining `programming`, `unit test creation`, and `refactoring`.
