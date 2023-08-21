## software testing

Software testing is the process of evaluating and verifying that a software product or application does what it is supposed to do. The benefits of testing include preventing bugs, reducing development costs and improving performance. Test management plan. Types of software testing.

## unit testing

Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually scrutinized for proper operation. Software developers and sometimes QA staff complete unit tests during the development process. A set of unit testing is called a `spec`, a spec has an `assertion`, then an `assertion` has a `matcher`, finally a `test runner`.

### specification aka spec

The unit test specification is a statement of the initial state of the unit; the starting point of each test case; the inputs to the unit, including the value of any external data read by the unit; what the test case actually tests, in terms of the functionality of the unit; and the analysis used in the design of the test case (e.g., which decisions within the unit are tested). The specification must include the expected outcome of the test case.

### assertion

The assert section ensures that the code behaves as expected. Assertions replace us humans in checking that the software does what it should. They express requirements that the unit under test is expected to meet. Now, often one can write slightly different assertions to capture a given requirement

### matcher

Basically a matcher is an object that defines when two objects match.

### test runner

A test runner is a component which orchestrates the execution of tests and provides the outcome to the user. The runner may use a graphical interface, a textual interface, or return a special value to indicate the results of executing the tests.
