Defensive programming

What is defensive coding? and why is defensive coding so important?

This expression may seem new to some developers, but familiar to others.

As a developer, I used to dive straight into coding before even reading the tasks by figuring out which steps to take and how to proceed in solving any coding challenge or building a project.

We might have been taught how to break a big problem into the smallest chunks and then resolve each part individually, but sometimes we have never heard about defensive coding/programming before.

Before defining defensive coding, let’s take an example of ball games; football, basketball, soccer, and cricket. What all of these sports have in common is the “game system”. The game system consists of defensive and offensive parts. Players assume to be either defenders or offenders.

The primary task of defenders is to prevent the opposition from scoring, and offenders have the tasks to score.

This same principle is used in programming as well.

Let’s define it:

Defensive programming is a form of defensive design intended to develop programs that are capable of detecting potential security abnormalities and making predetermined responses. It ensures the continuing function of a piece of software under unforeseen circumstances. Defensive programming practices are often used where high availability, safety, or security is needed. (Wikipedia)

Let’s imagine the following two scenarios where we are required to create two functions;

A function with a password of at least six characters,
```js
function myPassword(char) {

If (char. length < 6) return ‘password needs to have six characters’

}
```

The if statement from myPassword plays the role of guardrail to our function. It means only a password of at least six characters will pass, otherwise, it will throw an error( ‘password needs to have six characters’)

2. A function that returns odd numbers from an array(numbers that are not divisible by two).

We can add a defensive system like this:

```js
function getOddNumbers (arr) {

const isInteger = Number.parseInt(arr)

If (!integer) throw new Error(‘the parameter passed must be

an integer’)

const oddNum = arr.filter((num) => num % 2 === 1)

return oddNum

}
```

The ‘if statement’ plays the role of guardian of the code, that only integers are allowed, the opposite will send a warning message.

Defensive coding/programming is an approach that a developer has to be aware of, to help improve the solving-problem skills, and protect our code from bugs, bad testing, and errors as well.

I hope this article would be helpful, and if you wish to network with me, here is my email address, and my LinkedIn!