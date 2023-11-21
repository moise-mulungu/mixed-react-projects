# general computer science (CS) vocabulary

- how to do a google search for a general CS term: "computer science theTerm"
- wikipedia is very good search result to choose

# attribute

Attributes in object-oriented programming are defined for classes and objects such as a data element representing the quality or state of the class or object. An attribute defines a particular property of an object, element or file

## gotcha

In programming, a gotcha is a valid construct in a system, program or programming language that works as documented but is counter-intuitive and almost invites mistakes because it is both easy to invoke and unexpected or unreasonable in its outcome.(source: https://en.wikipedia.org/wiki/Gotcha_(programming))

- DM: todoDM: add to Duncan's tech vocabulary list
-

## what is an opinionated formatter

an opinionated formatter enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.(i.e: Prettier, consistent formatting is wonderful).

- DM: todoDM: add to Duncan's tech vocabulary list

## plug-in

plug-in also called add-on or extension is a computer software that adds new functions to a host program without altering the host program itself.

## IDE(integrated development environment)

A software application that helps programmers develop software code efficiently. It increases developer productivity by combining capabilities such as software editing, building, testing, and packaging in an easy-to-use application.

## string interpolation

string interpolation in JavaScript is a process in which an expression is inserted or placed in the string. To insert or embed this expression into the string a "template literal" (previously called "template string")is used. By using string interpolation in JavaScript, values like variables and mathematical expressions and calculations can also be added.

## race condition

A race condition is an undesirable situation that occurs when a device or system attempts to perform two or more operations at the same time, but because of the nature of the device or system, the operations must be done in the proper sequence to be done correctly. (source: tech-target)

A race condition or **race hazard** is the condition of an electronics, software, or other system where the system's substantive behavior is dependent on the sequence or timing of other uncontrollable events. It becomes a bug when one or more of the possible behaviors is undesirable. (source: wikipedia)

## multiplicity

- when describing data
- the multiplicity of a _member_ (AKA element) is the number of times the same member appears in the array
- two arrays have the "same" (unique) elements, but they may not have the same _multiplicities_

Given [1 1 3 1 4 5 3]
unique: [1 3 4 5]
multiplicity: [3 2 1 1]

- Multiplicity defines how many objects participate in a relationship and it is the number of instances of one class related to one instance of the other class

## API

An application programming interface is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software.

## API specification

An API specification details the functional and expected behavior of an API, as well as the fundamental design philosophy and supported data types. It contains both documentation and API definitions to create a contract that people and software can read.

## portfolio

A developer portfolio is a website that showcases your best work, personality and talents. It is your best chance to prove your skills, share your enthusiasm about the profession and give your potential employers and clients a glimpse of how awesome it would be to work with you.

## UI (user interface)

Is the process designers use to build interfaces in software or computerized devices, focusing on "look-and-feel" or style. Designers aim to create interfaces which users find easy to use and pleasurable.

- "UI design" refers to graphical user interfaces and other forms, e.g., voice-controlled interfaces.

## UX (user experience)

The user experience is how a user interacts with and experiences a product, system or service. It includes a person's perceptions of utility, ease of use, and efficiency.

## transaction in computing

In computing, a transaction is a set of related tasks treated as a single action. Together the tasks form a logical unit of work in which all of them must succeed or none of them can succeed. If some tasks succeed but at least one fails, then all successful tasks are reversed, returning the system to its original state before the transaction.

## data storage

Data storage refers to magnetic, optical or mechanical media that records and preserves digital information for ongoing or future operations. There are two types of digital information: input and output data. Users provide the input data. Computers provide output data.

## bandwidth

The **maximum** amount of data transmitted over an internet connection in a given amount of time. Bandwidth is often mistaken for internet speed when it's actually the volume of information that can be sent over a connection in a measured amount of time – calculated in megabits per second (Mbps).

VS speed: Internet **bandwidth** determines **how much** data can be uploaded or downloaded from our device (in a given amount of time), and our internet **speed** determines **how fast** data can be uploaded or downloaded on our device(good!)

## throughput

Network throughput refers to the "**rate** of message delivery" over a communication channel, such as Ethernet or packet radio, in a communication network. The data that these messages contain may be delivered over physical or logical links, or through network nodes.

## credentials

Credentials refer to the verification of identity or tools for authentication. They may be part of a certificate or other authentication process that helps confirm a user's identity in relation to a network address or other system ID.

## API vs API endpoint

API (Application Programming Interface) is a set of routines, protocols, and tools for building software applications. 

API endpoint is a specific entry point into an API that allows a client to access a specific set of functionality offered by the API. Most often, a URL.

## WebSocket
Websocket is a communications protocol, providing simultaneous two-way communication channels over a single Transmission Control Protocol (TCP) connection. 

## live data
Live data in computer science refers to data that is constantly changing and being updated in real-time. This could include data from sensors, network traffic, or user input. Live data is often used in applications that require up-to-date information, such as stock market tracking, weather updates, or real-time analytics.

DM: going forward, use google search for vocab definitions, preferring the most authoritative sites, like MDN. AI is too often making things up, not blatantly wrong, but sometimes using the wrong terminology. DM: personally, I often check both AI and Google Search, as AI is often concise, then Google Search to validate.

DM: Continue to use AI for code examples, but always test them to be sure they work.(ok)