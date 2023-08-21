## software testing

the process of evaluating and verifying that a software product or application does what it is supposed to do. 
benefits: 
- preventing bugs, 
- reducing development costs,
- improving performance.

# Test management plan. 
# Types of software testing.
DM: great! List the other types of software testing 

## unit testing

the smallest testable parts of an application, called units, are individually scrutinized for proper operation. Software developers and sometimes QA staff complete unit tests during the development process. A set of unit testing is called a `spec`, a spec has an `assertion`, then an `assertion` has a `matcher`, finally a `test runner`.

### unit test: specification aka spec

a statement of the initial state of the unit; the starting point of each test case; the inputs to the unit, including the value of any external data read by the unit; what the test case actually tests, in terms of the functionality of the unit; and the analysis used in the design of the test case (e.g., which decisions within the unit are tested). The specification must include the expected outcome of the test case.

### unit test: assertion

ensures that the code behaves as expected. Assertions replace us humans in checking that the software does what it should. They express requirements that the unit under test is expected to meet. Now, often one can write slightly different assertions to capture a given requirement

### unit test: matcher

an object that defines when two objects match.

### unit test: test runner

a component that orchestrates the execution of tests and provides the outcome to the user. The runner may use a graphical interface, a textual interface, or return a special value to indicate the results of executing the tests.
