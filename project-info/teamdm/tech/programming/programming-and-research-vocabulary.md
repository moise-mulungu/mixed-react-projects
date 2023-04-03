note: prefix Google searches with "computer programming" to get the best results. "programming" alone is not specific enough

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
* why are magic strings to be avoided? 
  * magic strings will end up being duplicated within the system, and since they cannot automatically be updated using refactoring tools, they become a common source of bugs when changes are made to some strings but not others. 
  * when your application grows bigger, it may sound difficult to access all the magic strings.
  * fewer bugs if you edit magic strings in a constants file, once, instead of in multiple places where they are usually embedded in code.

## pre-trained model AKA pre-trained code model AKA? "pre-coded models"

A pre-trained model is a saved network that was previously trained on a large dataset, typically on a large-scale image-classification task. You either use the pre-trained model as is or use transfer learning to customize this model to a given task

## screen-reader

Screen readers are software programs that allow blind or visually impaired users to read the text that is displayed on the computer screen with a speech synthesizer or braille display. A screen reader is the interface between the computer's operating system, its applications, and the user.

## react component

react as a "component-based framework". what is a component?
components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components.

## logical expression

A logical expression is a statement that can either be true or false. For example, a < b is a logical expression. It can be true or false depending on what values of a and b are given.

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