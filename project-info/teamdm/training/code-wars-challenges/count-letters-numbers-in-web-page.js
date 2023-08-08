// DM: I'm really confused about a lot of the todo-MMs you marked with (done) in this directory but which were not done. It took me a lot of time to go through the diffs from your last commit, and no changes to the actual code. I would hope you can be very careful and pay better attention to detail and clear communication, so that I can spend less time in confusion, and more time teaching and working on important things in our repo. In my role as mentor and as "boss" it is really important that you take the time to make it easy for me to figure out what to do next and how to help you. It is what I always try to do for my bosses.(I was not professional, I am sorry.)

// node ./project-info/teamdm/training/code-wars-challenges/currently-working/count-letters-numbers-in-web-page.js

// console.log(getText())

/* 

https://wesbos.com/javascript/09-gettin-loopy/53-looping-and-iterating-reduce-exercise

The task is to go to any webpage, like the Mozilla Developer Docs for reduce, copy every single piece of text like Wes is doing in the screenshot below by pressing Cmd + A and Cmd + C and then 
* !!!!! counting how many times every letter and number occurs on the page

*/

// first grab all the text
const allText = getText()

// then convert the text to an array of characters
// howtojs: performance:: quick-and-dirty way to measure performance: console.time('title'); console.timeEnd('title')
console.time('splitting')
const allCharacters = allText.split('')
console.timeEnd('splitting')
// console.log(allCharacters)

// filter the text to grab only letters and numbers and ignore other text content like parenthesis, question marks, white space etc.
console.time('filtering')
const lettersAndNumbers = allCharacters.filter((char) => {
  // (for review)DM: todoMM: String.match() returns a boolean, so you can just return: DM: this is not done.
  // return char.match(/[a-z0-9]/i)
  //(for review) DM: todoMM: what about capital letters? Also not done.
  // if (char.match(/[a-z0-9]/i)) {
  //   return true
  // }
  const isAlphaNumeric = char.match(/[a-zA-Z0-9]/i)
  console.log({ isAlphaNumeric })

  return isAlphaNumeric
  // at first, I did not understand what you meant by returning the result of the match, but now I see that you meant to return the
  // DM: yes, glad you figured it out, it was a little unclear.
  //(done) DM: todoMM: best to always run the code in order to test your code edits. This will help you find typos and errors. When I run you code I see:
  /*   return char.match(/[a-Az-Z0-9]/i); I see this error: but i don't run this code because it's freezing my computer
                    ^^^^^^^^^^^^^^ 
// DM: OK, let me know if you run into this freezing issue again. JS errors shouldn't freeze your machine. In the future, if something like freezing happens, you can write something is the "status" section if each challenge file. Always communicate what is going on. This is the biggest lesson I learned in my last job; now it's working perfectly with return char.match(/[a-zA-Z0-9]/i)

SyntaxError: Invalid regular expression: /[a-Az-Z0-9]/: Range out of order in character class
 */
})
console.timeEnd('filtering')
console.log(lettersAndNumbers)

// DM: todoMM: measure the perf (performance) of the map here and the reduce below: DM: not done.(the performance of the map and reduce is done below, i don't know if it's what you want!) DM: see the howtojs above, measure perf by using console.time/timeEnd
const charToLowerCase = lettersAndNumbers.map((char) => {
  return char.toLowerCase()
})
// whether the letter is uppercase or lowercase, we still only **count**(number) it once. For example a and A would could as two "a"s, not one uppercase A and one lowercase a
const count = charToLowerCase.reduce((acc, cur) => {
  // DM: good
  acc[cur] = acc[cur] ? acc[cur] + 1 : 1
  // console.log({ acc, cur })
  return acc
}, {})

console.log(count)

function getText() {
  // functions are "hoisted"
  // howtojs: escape:: quote characters (backticks, single|double quote) in quoted text
  return `
Wes Bos
free + premium
Courses
The Syntax
Podcast
Web Development
more
About
me
the
Blog
🔥
Tips
real spicy
Beginner
JavaScript
Notes
real life
Speaking
and training
what font?!
/uses
what theme!?
You want to
Contact
me
Module 1 - The Basics
WelcomePart 01
House Keeping
Starter Files
How to Do the Course
Browser, Editor and Terminal SetupPart 02
The browser
Shortcuts
Node.js
Checking if Node.js is installed
Which Terminal to Use
Checking if you have npm installed
Command Line Basics
Check that Node.js is working
Code Editor
Running and Loading JavaScriptPart 03
Run scripts before closing body tag
External JavaScript Files
Running it in Node.js
Variables and StatementsPart 04
var
let
const
Statements and Semi-Colons in JavaScript
Code Blocks
Differences between var, let & const
Strict Mode
Scoping
Naming Conventions
Camel Casing
Snake Case
Kebab Case - Not Allowed
Code Quality Tooling with Prettier and ESLintPart 05
ESLint & Prettier
ESLint
Prettier
Installing ESLint & Prettier
Installing npm packages locally
Creating the package.json file
Configuring ESLint and Prettier with VS Code
Types - IntroductionPart 06
Types - StringsPart 07
JavaScript Comments
Difference between Single Quotes, Double Quotes and Backticks
Putting String on Multiple Lines
Concatenation and Interpolation
Backticks
Types - NumbersPart 08
Numbers in JavaScript
Helper Methods
Modulo and Power Operators
Things to know about Math in JavaScript
Infinity and Negative Infinity
Not a Number
Types - ObjectsPart 09
Types - Null and UndefinedPart 10
undefined
null
Types - Booleans and EqualityPart 11
Equality (equal sign, double equal sign, triple equal sign)
Module 2 - Functions
Functions - Built-inPart 12
Built-in Functions
Example #1 👇
Example #2 👇
Functions - CustomPart 13
Defining a Function
Returning Values
Storing a Value Returned from A Function
Functions - Parameters and ArgumentsPart 14
Another Example
Even More Examples
How to Fall Back on Default for Only One Parameter
Different Ways to Declare FunctionsPart 15
Anonymous Functions
Function Expressions
What is the difference between a function declaration and a function expression?
Hoisting
Arrow Functions
Different Ways to Write Arrow Functions
Implicit and Explicit Returns
Arrow Function Gotcha's
IIFE
Methods
Preview of this
Callback Functions
Click Callback
Timer Callback
Debugging ToolsPart 16
Console Debugging
The Call Stack and Stack Trace
Grabbing Elements
Breakpoints
Network Request
Break On Attribute
Module 3 - The Tricky Bits
ScopePart 17
Global Variables
Function Scoping
Block Scoping
Lexical and Static Scoping
HoistingPart 18
Hoisting Function Declarations
Variable Hoisting
ClosuresPart 19
Examples of Closures
Private Variables
Module 4 - The DOM
Introduction to the DOMPart 20
Window Object Refresher
The Document Object Introduction
The Navigator Object
Selecting ElementsPart 21
Setup
Where to Load JavaScript When Selecting Elements
Selecting DOM Elements
Searching Inside Already Selected Elements
Element Properties and MethodsPart 22
Getters and Setters
textContent and innerText
Exercise
insertAdjacentText and insertAdjacentElement
Working with ClassesPart 23
Adding a class
Removing a class
Toggling a class
The contains method
Built-in and Custom Data AttributesPart 24
Data Attributes
Creating HTMLPart 25
append method
insertAdjacentElement method
Generating An Unordered List
HTML from Strings and XSSPart 26
document.createRange() and document.createFragment()
Security and Sanitization
XSS (Cross Site Scripting)
Traversing and Removing NodesPart 27
The difference between a Node and an Element
Properties to work with Nodes and Elements
Removing Elements
CardioPart 28
closest method
Module 5 - Events
Event ListenerPart 29
Removing an Event Listener
Listening to events on multiple elements
forEach method
Targets, Bubbling, Propagation and CapturePart 30
Propagation
this keyword
Prevent Default and Form EventsPart 31
preventDefault method
Other Types of Events with Form Inputs
Accessibility Gotchas and Keyboard CodesPart 32
Difference between Buttons and Links
Keyboard Accessibility
Module 6 - Serious Practice Exercises
Etch-a-SketchPart 33
Shaking / Clearing the Canvas
Event listener "once" option
Click Outside ModalPart 34
closest method
Scroll Events and Intersection ObserverPart 35
Intersection Observer
TabsPart 36
Converting a NodeList to an Array
Module 7 - Logic and Flow Control
BEDMASPart 37
If Statements, Function Returns, Truthy and FalsyPart 38
Operators
Truthy or Falsy
Truthy or Falsy values
Coercion, Ternaries and Conditional AbusePart 39
Ternary
Blockless If Statements
Case Switch and Animating a Turtle with CSS VariablesPart 40
Intervals and TimersPart 41
Intervals
Clearing Timeouts and Intervals
Module 8 - Data Types
ObjectsPart 42
Creating an Object
Accessing Properties
Deleting a Property from an Object
Methods
Object References vs ValuesPart 43
Spread Operator
Lodash
MapsPart 44
Set
JSON
ArraysPart 45
Array Methods
Array Cardio - Static MethodsPart 46
Object Static Methods
Array Cardio - Instance MethodsPart 47
join method
split method
pop method
shift and unshift methods
Array Cardio - Callback Methods and Function GenerationPart 48
Module 9 - Loops
Looping and Iterating - Array forEachPart 49
Looping and Iterating - MappingPart 50
Looping and Iterating - Filter, Find and Higher-Order FunctionsPart 51
Looping and Iterating - ReducePart 52
Looping and Iterating - Reduce ExercisePart 53
Regular Expression
Looping and Iterating - for, for in, for of, and while LoopsPart 54
The for loop
for of Loop
for in loop
while and do while loops
Module 10 - Harder Practice Exercises
Face Detection and CensorshipPart 55
Sarcastic Text GeneratorPart 56
The modulo operator
Shopping Form with Custom Events, Delegation and LocalstoragePart 57
LocalStorage
Event Delegation
Building a GalleryPart 58
Closures
Tab-Index
Building a SliderPart 59
Module 11 - Prototypes, this, new and Inheritance
The New KeywordPart 60
The This KeywordPart 61
Prototype Refactor of Gallery ExercisePart 62
bind method
Prototypes and Prototypal InheritancePart 63
Prototype Refactor of the Slider ExercisePart 64
Bind, Call and ApplyPart 65
Bind method
Call and Apply methods
Call method
Apply method
Module 12 - Advanced Flow Control
The Event Loop and Callback HellPart 66
PromisesPart 67
.then() method
Promise.all()
Promise.race()
Promises - Error HandlingPart 68
Promise.allSettled()
Refactoring Callback Hell to Promise LandPart 69
Async/AwaitPart 70
Async/Await Error HandlingPart 71
Handling Errors with Higher Order Functions
Async/Await Prompt UIPart 72
Running an Event Listener Only Once
Async Typer UI - Two WaysPart 73
Module 13 - Ajax and Fetching Data
AJAX and APIsPart 74
What is an API?
JSON
AJAX
Public API list
CORS and RecipesPart 75
Query Parameters
CORS
What is CORS?
CORS policy
Babel
Browserlist
Proxy
Dad JokesPart 76
Headers
Getting a Random Index
Loading State & CSS Loader
Currency ConverterPart 77
Caching the Rates
Converting
Hooking Up The UI
Input Event on a Form
Wiring up Handlers
Formatting Currency using Number Format API
Module 14 - ES Modules and Structuring Larger Apps
ModulesPart 78
What are Modules?
Use Cases
Modules in the Browser
In the Past - Sharing JavaScript Code between Files
Setting up Server
Importing and Exporting Modules
Things we need to know about Modules
Scope
Difference between Default and Named Exports
Renaming Modules
More Ways to Import
Loading JavaScript On Demand
async
Currency Module RefactorPart 79
Bootstrap / App Init Functions
Dad Jokes Modules RefactorPart 80
Refactoring into Modules
Fixing Refactoring Errors
Recap
Bundling and Building with ParcelPart 81
Benefits of Bundlers
Bundler Options / Alternatives
Using Parcel
Dad Jokes Module
Installing Parcel
Adding an NPM Script to package.json
Building with Parcel
Using Open-Source npm packagesPart 82
node-modules folder
Using Third Party Packages
Third Party Node Modules
waait npm package
faker npm package
CommonJS Syntax vs ECMA Script Modules import
date-fns npm package
axios npm package
lodash npm package
await-to-js
SecurityPart 83
JavaScript is public
XSS and Sanitizing your Inputs
FarceBook
Image Event Hijacking
Sanitizing User Data with DOMPurify.
HTTPS Origin
Module 15 - Final Round of Exercises
Web Speech Colours GamePart 84
Web Speech
Colour Layout
Combining Speech and Words
Audio VisualizationPart 85
Audio
Time Data Visualization
Frequency Visualization
Looping and Iterating - Reduce Exercise
Beginner JavaScript
Enjoy these notes? Want to Slam Dunk JavaScript?

These are notes based on my Beginner JavaScript Video Course. It's a fun, exercise heavy approach to learning Modern JavaScript from scratch.

Use the code BEGINNERJS for an extra $10 off.

BeginnerJavaScript.com

JavaScript, Iterating, Reduce
Edit Post 
This lesson is an exercise where you have to use map, filter, and reduce all in one exercise.

The task is to go to any webpage, like the Mozilla Developer Docs for reduce, copy every single piece of text like Wes is doing in the screenshot below by pressing Cmd + A and Cmd + C and then counting how many times every letter and number occurs on the page.

mozilla developer docs for the array reduce
Here are a couple of tips:

first grab all the text
then convert the text to an array of letters
then we need to filter the text to grab only letters and numbers and ignore other text content like parenthesis, question marks, white space etc.
we want to make sure that whether the letter is uppercase or lowercase, we still only count it once. For example a and A would could as two "a"s, not one uppercase A and one lowercase a.
This is going to use filter, map and reduce all in one go.

Open up the file reduce-challenge.html.

The first thing we will do is get the text in there.

Create a variable called text and use backticks for the value because we are going to paste the text we copied between the backticks and backticks allow our text to be multi line.

Note: the text within the text variable has been shortened for demonstration purposes in the following code examples.

const text = \`
[0, 1, 2, 3, 4].reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue);
If you were to provide an initialValue as the second argument to reduce(), the result would look like this:
The value returned by reduce() in this case would be 20.
Examples
Sum all the values of an array\`;
console.log(text);
A text example having 31 kb worth of text
As you can see, we have over 31.1 KB worth of text.

How can we convert all of the text into an array of every single letter?

You can call split() or spread it into an array.

For example we can call split on our text variable and pass it an empty string so that we split it on nothing like so 👇

const everything = text.split('');
console.log(everything);
array having 15911 length letters in console
As you see, now we get an array with 15,911 letters that are in it.

Next we need to deal with ignoring the case when counting letters.

There are 2 ways we can do that:

we can either lowercase everything immediately or
we could filter the things out for what we want
If we do lowercase first, we will be unnecessarily lowercasing things that do not have lowercase and uppercase, such as symbols like the question mark and numbers etc.

However, if we filter first, then our matcher will have to match both uppercase and lowercase.

Let's get rid of the junk by using .filter() before lowercasing.

const result = everything.filter(char => )
We pass our filter a char, which is an instance of the item from our array, and then we want to filter out any items that are not letters or numbers from a-zA-Z and numbers 0-9.

Regular Expression
So how do we check if a character is from a-z, A-Z or 0-9?

We can use a .match() function.

Let's look at these docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

mozilla developers docs for regular expressions
A regular expression is a way to use what is called a Regex pattern to match characters within a string.

There are a number of different methods that take a Regex like match, matchAll, replace, search.

So if we wanted to filter for the letter a for example, we use a matcher.

The way you pass a regular expression to the .match() method is you put two forward slashes like // and then put the matcher in the middle.

To check for a match with the letter a you would do char.match(/a/), like so 👇

const result = everything.filter((char) => {
  // if that characer is a-zA-Z0-9
  if (char.match(/a/)) {
    return true;
  }
  return false;
});
result of match method applied on string 'a' with /a/ regex
As you can see, when we checked if it is a match with the letter a, it returned the value with a bit more information like where we found the word.

result of match method applied on string 'cat' with /a/ regex
However when we check if 'a'.match(/b/), it returned false because 'a' clearly does not match the letter 'b'.

In our case, we need a Regex that will match all letters, so we can do that using groups like so /[a-z]/.

Let's try that to see how we are doing.

const result = everything.filter((char) => {
  // if that characer is a-zA-Z0-9
  if (char.match(/[a-z]/)) {
    return true;
  }
  return false;
});
console.log(result);
result of match method applied on everything with /[a-z]/ regex
We have over 10,000 letters in our filtered array now. If you look closely, you will see they are all lowercase.

Let's fix that by modifying the group in our Regex like so 👇

char.match(/[a-zA-Z]/)
result of match method applied on everything with /[a-zA-Z]/ regex
As you can see, our array now contains letters as well.

Now we need to get numbers so we can add 0-9 to our group, as shown below.

char.match(/[a-zA-Z0-9]/)
Wes knows this off the top of his head from years of writing regex's.

However you can use the website https://regexr.com to find lots of patterns there and cheat sheets to help you match any character except a new line.

regexr.com website to find regex patterns
Another thing you could do is pass the case insensitive flag like so 👇

/([A-Z])/i
What that will do is it won't care about upper or lowercase. So in our case we could have done the regex like this 👇

char.match(/[a-z0-9]/i)
The i flag will make it case insensitive.

Let's refresh to mak sure that still works.

case insensitive pattern matching with /i flag
As you can see, it does work, and we also getting numbers now.

(You might notice in the dev tools that when you expand a large array, it breaks them up into groups as displayed in the image below.)

geeting numbers with insensitive pattern matching with /i flag 
So that is our first filter. The next thing we want to do is to lowercase everything.

One way we can do that is using .map().

We can chain the .map() directly on the .filter(), however the code is getting to be a little bit hard to work with so let's first refactor a bit.

Refactor the inline function we pass to filter to an external function we will name isValidChar.

const everything = text.split("");
function isValidChar(char) {
  return char.match(/[a-z0-9]/i);
}
const result = everything.filter(isValidChar);
console.log(result);
That already looks much neater.

We can make the code even more concise by chaining the .split() instead of assigning it to a variable, like so 👇

function isValidChar(char) {
  return char.match(/[a-z0-9]/i);
}
const result = text.split("").filter(isValidChar);
console.log(result);
Often developers like to put each method that is chained on it's own line as shown below.

const result = text
  .split('') // split each char into an item of an array
  .filter(isValidChar);
console.log(result);
Now let's chain the map over a function we will call lowercase.

function lowercase(char) {
  return char.ToLowerCase();
}
You could also write that as an arrow function, which we will use instead so comment the lowercase method we just added out and add the code below

const lowercase = char => char.toLowerCase();
If you refresh the page and open the array in the console, you will see that now there are only lowercase letters.

The last step in this exercise is to count the instances of each letter and number using a reduce.

Let's create an external function which we will pass to the reduce method.

We want to start with an empty object so we will pass that as the second argument.

function instanceCounter() {
}
const result = text
  .split("")
  .filter(isValidChar)
  .map(lowercase)
  .reduce(instanceCounter, {});
We will name the accumulator parameter counts and the individual character instance char.

Inside of the function, we will check whether the character already exists in the array using square brackets and a ternary function.

If the character does exist, we will increment it by 1.

If it does not, we will add it and set it to one.

function instanceCounter(counts, char) {
  counts[char] ? counts[char] + 1 : (counts[char] = 1);
}
If you refresh the page, you might see something like the following error 👇

cannot read property k of undefined error
In Wes' example, k is the second character.

k as the second character
Why is it telling us it's undefined?

It's because the first time it works, the first time our reducer accumulator is an object. However, because we didn't return anything from this line, then the second time the return is undefined.

To fix the issue, we simply need to add return counts; to the end of our instanceCounter method, as shown below.

function instanceCounter(counts, char) {
  counts[char] ? counts[char] + 1 : (counts[char] = 1);
  return counts;
}
If you refresh the page and open the console, you will see it is showing a count of 1 next to each character.

That's not right!

count of 1 next to each character
Let's debug this by looking at our ternary operator in instanceCounter.

So first we check if the letter exists in the array with counts[char] ?.

If it does exist, then the count of that character should be equal to the existing count plus one.

We forgot the equal sign!

ternary check for letters exists in the array, if does then the count of that character should be equal to the existing count plus one, forgot the equal sign as well
Modify the code like so

counts[char] ? counts[char] = counts[char] + 1 : counts[char] = 1;
You could even put the ternary operator on separate lines as shown below.

counts[char] ? (counts[char] = counts[char] + 1) : (counts[char] = 1);
result of occurrence of each character in array
It looks like we are getting real values!

A fun thing you could do now with the object we get back is figure out how to sort the characters from the most popular to the least popular.

Let's do it together.

What if we try using Object.entries(result);?

using Object.entries() method returning array with first item being the key and the second item being the count
It gives us an array of arrays with each arrays first item being the key and the second item being the count.

Next, we can use .sort().

Create an external function sortByValue, and name the two parameters a and b.

Within the function, we will compare the second items in the array because the first item is the key and the second item is the count. We want to compare the count.

If you recall, the way that sort works is that you can take the previous item and the next item and compare their values.

You can return any of these from a sort:

0, stay where you are.
-1, go forward
1, go backward towards the end of the array
So instead of saying if it's greater or less than (go back to the sorting video if you want to see that), we can simply just return whatever the value is.

It might be a positive value, it might be a zero value, that's just the benefit of doing that.

function sortByValue(a, b) {
  return a[1] - b[1];
}
const sortedResult = Object
  .entries(result)
  .sort(sortByValue);
one single reduce function showing all the work we did
It is possible to do all of the work we just did in one single reduce function, but it's much easier to read and better for re-usability to split it up into separate functions and chain them along.

Find an issue with this post? Think you could clarify, update or add something?

All my posts are available to edit on Github. Any fix, little or small, is appreciated!

 Edit on Github

← Prev
Looping and Iterating - Reduce

Next →
Looping and Iterating - for, for in, for of, and while Loops

Syntax Podcast: #629

Syntax PodcastJun 19th, 2023
AsyncLocalStorage + AsyncContext API

Listen Now →
@wesbos Tweets
LOL Spotify AI just confused Metal and Metalcore. Obscure playlist creators: WERE SAFE…

1
32
We're doing a Domain name registrar roundup for @syntaxfm Where should you / do you register yours…

0
38
The $10 LED tinkerer project:

I got my $5 ESP32 turning off a $4 set of WS2813 LEDs with a $1 PIR sThe $10 LED tinkerer project: I got my $5 ESP32 turning off a $4 set of WS2813 LEDs with a $1 PIR s…

2
44
@wesbos Instant Grams
Beginner JavaScript
Beginner JavaScript
A fun, exercise heavy approach to learning Modern JavaScript from scratch. This is a course for absolute beginners or anyone looking to brush up on their fundamentals. Start here if you are new to JS or programming in general!

BeginnerJavaScript.com
I post videos on YouTube and code on GitHub
Wes Bos © 1999 — 2023

Terms × Privacy Policy

`
}
