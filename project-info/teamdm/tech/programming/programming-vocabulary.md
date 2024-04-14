note: prefix Google searches with "computer programming" to get the best results. "programming" alone is not specific enough

## Agile methodology

(done) DM: use bing chat ai to get a very short definition for this vocab entry; the definition is found in the project-info/teamdm/agile.md file

Agile methodology is a project management framework that breaks projects down into several dynamic phases, commonly known as sprints. It emphasizes continuous collaboration and improvement, and is an iterative methodology.

## JSON

(done) DM: Moise, ask bing chat ai for "give me a very, very, very brief explanation of JSON" and use that to create this JSON vocab entry here

JSON stands for **JavaScript Object Notation**. It is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays (or other serializable values)¹. JSON is a lightweight data-interchange format that is easy for humans to read and write. It is also easy for machines to parse and generate³.

howtojs: json parse error:: The error “SyntaxError Unexpected Token in JSON” appears when you try to parse content (for example - data from a database, api, etc), but the content itself is not JSON (could be XML, HTML, CSV) or invalid JSON containing unescaped characters, missing commas and brackets.

## functional programming

Functional programming (FP) is an approach to software development that uses pure functions to create maintainable software. In other words, building programs by applying and composing functions

## guard clause

A guard clause is a piece of conditional logic that is placed at the beginning of a function that will return out of the function early on if certain conditions are not met. Guard clauses are simple to implement in any function that involves conditional logic, and they make functions shorter and cleaner (readable)

<!-- Examples for more clarity, we'll be doing this in code-wars, grab an e later from there -->

## imperative and declarative

- imperative programming is a software development paradigm where functions are implicitly coded in every step required to solve a problem. In imperative programming, every operation is coded and the code itself specifies how the problem is to be solved, which means that _pre-coded models_ are not called on.

- Declarative programming is a method to abstract away the _control flow_ for logic required for software to perform an action, and instead involves stating what the task or desired outcome is. Declarative programming is a high-level programming concept, which is the opposite of imperative programming.

## control flow

The control flow is the order in which the computer executes _statements_ in a script.
Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops.

## Magic string

magic strings are string values that are specified directly within application code that have an impact on the application's behavior

- why are magic strings to be avoided?
  - magic strings will end up being duplicated within the system, and since they cannot automatically be updated using refactoring tools, they become a common source of bugs when changes are made to some strings but not others.
  - when your application grows bigger, it may sound difficult to access all the magic strings.
  - fewer bugs if you edit magic strings in a constants file, once, instead of in multiple places where they are usually embedded in code.

## pre-trained model AKA pre-trained code model AKA? "pre-coded models"

A pre-trained model is a saved network that was previously trained on a large dataset, typically on a large-scale image-classification task. You either use the pre-trained model as is or use transfer learning to customize this model to a given task

## screen-reader

Screen readers are software programs that allow blind or visually impaired users to read the text that is displayed on the computer screen with a speech synthesizer or braille display. A screen reader is the interface between the computer's operating system, its applications, and the user.

(done)DM: put the next 3 items into the React vocabulary file

## logical expression

logical expressions (also called Boolean expressions) are the result of applying logical (Boolean) operators to relational or arithmetic expressions. The result of an operation has two possible states: true or false. Logical expressions are considered false when equal to 0, and are considered true when nonzero

- variable should express a positive (if you want to use 'not' in a variable name, you got it wrong)
- "don't make me think!" (UX book title) Programmers need to to read code quickly.

- benefit: self-documenting code

DM: todoDM: I'm not sure of all the types of logical expressions, so make a little list.

## program optimization (code optimization, or software optimization)

is the process of modifying a software system to make some aspect of it work more efficiently or use fewer resources. In general, a computer program may be optimized so that it executes more _rapidly_, or to make it capable of operating with less _memory_ storage or _other resources_, or draw less power

## premature optimization

is a way of spending a lot of resources (e.g., time and effort) trying to optimize certain functions in a codebase early on, even though these optimizations are likely to be irrelevant later, due to necessary changes in the code. Exaggerated, but true: https://stackify.com/premature-optimization-evil/ “The real problem is that programmers have spent far too much time worrying about efficiency in the wrong places and at the wrong times; premature optimization is the root of all evil (or at least most of it) in programming.”

<!-- I often heard about this term, but I did not know what it meant.
cool
-->

## test-driven development (TDD)

Test-driven development (TDD) is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. This is as opposed to software being developed first and test cases created later.

DM: todoDM: refactor-driven development

## Functional programming principles

functional programming is a programming paradigm which has its roots in mathematics, primarily evolved from lambda calculus.It is a declarative type of programming style. Its main focus is on “what to solve” in contrast to an imperative style where the main focus is “how to solve”

## Declarative programming

is a non-imperative style of programming in which programs describe their desired results without explicitly listing commands or steps that must be performed

## imperative programming

is a software development paradigm where functions are implicitly coded in every step required to solve a problem. In imperative programming, every operation is coded and the code itself specifies how the problem is to be solved, which means that pre-coded models are not called on.

DM: super!

## absolute url

An absolute URL includes the position within your website in your folder system names within the URL and consists of the full address from the protocol (HTTPS) to the domain name(e.g: https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## relative url

is a URL that only includes the path. The path is everything that comes after the domain, including the directory and slug or that does not start with a leading forward slash ( / ) or a protocol (such as http:// ) (e.g : link between pages of the same website)

## url object

The URL object immediately allows us to access its components, so it's a nice way to parse the url.

## data binding

Data binding is the process that establishes a connection between the app UI and the data it displays. If the binding has the correct settings and the data provides the proper notifications, when the data changes its value, the elements that are bound to the data reflect changes automatically.

## form validation

Form validation is a “technical process where a web-form checks if the information provided by a user is correct.” The form will either alert the user that they messed up and need to fix something to proceed, or the form will be validated and the user will be able to continue with their registration process.

## function signature AKA type signature AKA method signature

Defines input and output of functions or methods. A signature can include:

- parameters and their types.
- a return value and type.
- exceptions that might be thrown or passed back
- information about the availability of the method in an object-oriented program (such as the keywords public, static, or prototype).

## iteration(noun), iterate(verb), iterable(adjective)

Iteration is the repetition of a process in order to generate a (possibly unbounded) sequence of outcomes. Each repetition of the process is a single iteration, and the outcome of each iteration is then the starting point of the next iteration.
In computing, iteration is the technique marking out of a block of statements within a computer program for a defined number of repetitions. That block of statements is said to be iterated; a computer scientist might also refer to that block of statements as an "iteration".

## closure

In programming languages, a closure, also lexical closure or function closure, is a technique for implementing lexically scoped name binding in a language with first-class functions. Operationally, a closure is a record storing a function together with an environment

<!-- ???DM: can you have any simpler definition, this one seems hard to understand! -->

## ASCII

Abbreviated from American Standard Code for Information Interchange, is a character encoding standard for electronic communication. ASCII codes represent text in computers, telecommunications equipment, and other devices.

## binary code

In mathematics and in computing systems, a binary digit, or bit, is the smallest unit of data. Each bit has a single value of either 1 or 0, which means it can't take on any other value. Computers can represent numbers using binary code in the form of digital 1s and 0s inside the central processing unit (CPU) and RAM.

## integer

In computer science, an integer is a datum(`a piece of information`) of integral data type, a data type that represents some range of mathematical integers. Integral data types may be of different sizes and may or may not be allowed to contain negative values. Integers are commonly represented in a computer as a group of binary digits.

## how is ASCII represented in binary?

ASCII is an 8-bit code. That is, it uses eight bits to represent a letter or a punctuation mark. Eight bits are called a `byte`. A binary code with eight digits, such as 1101 10112, can be stored in one byte of computer memory.

## how are integers represented in binary?

Binary numbers are usually represented with just two digits — 0 and 1 — cor- responding to the off and on states of the internal hardware. It takes quite a few more digits to represent a number in binary than in decimal, but any number that can be expressed in one can be converted to the other.

## byte

In most computer systems, a byte is a unit of data that is eight binary digits long. A byte is the unit most computers use to represent a character such as a letter, number or typographic symbol. Each byte can hold a sequence of bits that need to be used in a larger unit for application purposes.

## radix (aka base)

Radix is the number of digits utilized in a positional number system before "rolling over" to the next digit's place. For example, in the base 10 number system, there is a total of 10 digits used (zero through nine), therefore, its radix is 10.

## single responsibility principle

The Single Responsibility Principle (SRP) is the concept that any single object in object-oriented programming (OOP) should be made for one specific function.

SRP is the first of the SOLID design principles.

SOLID was originally in reference to OOP, but SRP also applies to non-OOP, so you can restate SRP as follows:

- Every class, module, or function in a program should have one responsibility/purpose in a program. As a commonly used definition: "every class[, module, or function] should have only one reason to change".
  - note: "class, module, or function" has replaced "object" in the original definition.
    - note: Writing a "class" is how you do OOP, so "class" is synonymous with "object" in the new quote above.
- https://www.freecodecamp.org/news/solid-principles-single-responsibility-principle-explained/
  (ok)

## DRY, KISS, and YAGNI

principles that imply avoiding unnecessary code:

- DRY ("Don't repeat yourself") - avoiding repetitive code.
- KISS ("Keep it simple, stupid") - avoiding unnecessary complexity. Ex: hard code (long methods that are hard to read, etc.) that slows down future work.
- YAGNI ("You Aren't Gonna Need It") - avoiding the premature writing of code until you are certain that the user will need it. Avoiding "premature optimization".
<!-- That's why I used to listen to this quote: "premature optimization is the source of all evil", I did not know its meaning! Nice quote.-->

## data type

In software programming, data type refers to the type of value a variable has and what type of mathematical, relational or logical operations can be applied without causing an error.

### primitive data type

In computer science, primitive data types are a set of basic data types from which all other data types are constructed. Specifically it often refers to the limited set of data representations in use by a particular processor, which all compiled programs must use.

## compound data type or composite data type

In computer science, a composite data type or compound data type is any data type which can be constructed in a program using the programming language's primitive data types and other composite types.

## cache

In computing, a cache is a hardware or software component that stores data so that future requests for that data can be served faster; the data stored in a cache might be the result of an earlier computation or a copy of data stored elsewhere.

## runtime system or runtime environment

In computer programming, a runtime system or runtime environment is a sub-system that exists both in the computer where a program is created, as well as in the computers where the program is intended to be run. The name comes from the _compile time_ and runtime division from compiled languages, which similarly distinguishes the computer processes involved in the creation of a program (compilation) and its execution in the target machine (the run time)

## open source

Open-source software (OSS) is computer software that is released under a license in which the copyright holder grants users the rights to use, study, change, and distribute the software and its source code to anyone and for any purpose.
Open-source software may be developed in a collaborative, public manner.
Open-source software is a prominent example of open collaboration, meaning any capable user is able to participate online in development, making the number of possible contributors indefinite. The ability to examine the code facilitates public trust in the software.

## regex search (regular expression search)

A regular expression is a form of advanced searching that looks for specific patterns, as opposed to certain terms and phrases. With regular expressions, you can use pattern matching to search for particular strings of characters rather than constructing multiple, literal search queries.

## toolchain

In software, a toolchain is a set of programming tools that is used to perform a complex software development task or to create a software product, which is typically another computer program or a set of related programs.

## mvc(model-view-controller)

Model–view–controller (MVC) is a software design pattern commonly used for developing user interfaces that divides the related program logic into three interconnected elements. This is done to **separate** internal **representation** of information **from** the information **presentation** to and accepted from the user.

## model

The Model component corresponds to all the **data-related logic** that the user works with.

- can represent either the data that
  - is being transferred between the View and Controller components or
  - any other business logic-related data. It
- can add or retrieve data from the database.
- responds to the controller’s request because the controller can’t interact with the database by itself.
- interacts with the database and gives the required data back to the controller.

## view

The View component is used for all the **UI logic** of the application. It generates a user interface for the user. Views are created using the data which is collected by the model component but these data aren’t taken directly but through the controller. _It only interacts with the controller._

## controller

The controller is the component that **enables the interconnection between the view and the model** so it acts as an intermediary. The controller doesn’t have to worry about handling data logic, it just tells the model what to do. It process all the business logic and incoming requests, manipulate data using the Model component and interact with the View to render the final output.

DM: todoDM: see if I have a short example in ANKI.

## software dependency DM: is this a "peer dependency"?

A software dependency is a relationship between software components where one component relies on the other to work properly. For example, if a software application uses a library to query a database, the application depends on that library.

### (production) dependency

consists of all the packages that are used in the project with its version number. So, whenever you install any library that is required in your project that library you can find it in the package.json dependencies object.

### development dependency

it consists of all the packages that are used in the project in its development phase and not in the production or testing environment with its version number. So, whenever you want to install any library that is required only in your development phase then you can find it in the package.json dev Dependencies object.

src = https://www.geeksforgeeks.org/difference-between-dependencies-devdependencies-and-peerdependencies/

## axios

Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.


**Debouncing** and **throttling** are two programming techniques often used to limit the rate at which a function can fire or execute. They are often used in performance optimization, particularly in user interface development where certain events can trigger at a high rate, such as window resizing, scrolling, typing, or mouse movements. Here's a quick breakdown of each:

## Debounce: 
Debouncing ensures that a given function will not be called until after a certain amount of time has passed since it was last called. This can be useful for events that you only want processed once the user or system is "done" with an action, such as resizing a window or typing in a form field. When the debounced function is invoked, it postpones the execution to the future. If the function gets invoked again within that time period, it restarts the timer.

## Throttle: 
Throttling, on the other hand, guarantees that a function will only run at most once during a specified period of time. Throttling is useful for limiting the rate of execution for events that occur continuously, such as scrolling events. If a function is throttled to execute every 100ms, it will execute the first time immediately, but then won't execute again until at least 100ms have passed since the last execution.

In conclusion, use debounce when you want to limit the number of times a function can execute based on a delay after the last call, and use throttle when you want to limit the number of times a function can execute based on a delay since the first call.

# client-side code VS server-side code

## client-side code
Client-side code refers to the code that is executed on the client's web browser.
Ex: 
  ```js
  // a client-server code with react
  import React from 'react';

  class Message extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <p>This is a message from React.</p>
        </div>
      );
    }
  }

  export default Message;

  ```

## server-side code
server-side code refers to the code that is executed on the server.
  EX: 
  
  ```js
  // a simple server-side JavaScript code using Node.js and Express.js
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  app.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });

  ```

## Next.JS rendering: client-side VS server-side

* Code that stems from src/pages is client-side code that runs in the browser
  * note: NextJS may execute the code once on the server before sending to the browser, in some circumstances. Even if this is the case, the code will run in the browser. 
  * 
* Code that stems from src/pages/api is server-side code and runs in the server.

DM: I removed the previous definition as it confuses the issue given this context of distinguishing between where the code runs: browser or server



