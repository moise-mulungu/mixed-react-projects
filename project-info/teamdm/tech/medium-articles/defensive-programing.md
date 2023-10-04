Defensive programming

What is defensive coding? and why is defensive coding so important?

This expression may seem new to some developers, but familiar to others.

As a developer, I used to dive straight into coding before even reading the tasks by figuring out which steps to take and how to proceed in solving any coding challenge or building a project.

We might have been taught how to break a big problem into the smallest chunks and then resolve each part individually, but sometimes we had never heard about defensive coding/programming before.

Before defining defensive coding, let’s take an example of ball games: football, basketball, soccer, and cricket. What all of these sports have in common is the “game system”. The game system consists of defensive and offensive parts. Players assume to be either defenders or offenders.

The primary task of defenders is to prevent the opposition from scoring, and offenders have the tasks to score.

This same principle is used in programming as well.

Let’s define it:

"Defensive programming is a form of defensive design intended to develop programs that are capable of detecting potential security abnormalities and making predetermined responses. It ensures the continuing function of a piece of software under unforeseen circumstances. Defensive programming practices are often used where high availability, safety, or security is needed." (Wikipedia)

Let’s imagine the following two scenarios:

1. A function with a password of at least six characters,

```js
// DM: when I was reading, I instantly wondered what this function is supposed to do. could you give it a more descriptive name, like validatePassword, or saveNewPassword?
function myPassword(char) { 

if (char.length < 6) return ‘password needs to have six characters’

/* ... */

}
```

The if statement from myPassword plays the role of a guardrail to our function. It means only a password of at least six characters will pass, otherwise, it will throw an error( ‘password needs to have six characters’)

2. A function that returns odd numbers from an array (numbers that are not divisible by two).

We can add a defensive system like this:

```js
function getOddNumbers (arr) {

const isInteger = Number.parseInt(arr) // DM: do you mean to validate that all elements in the array are integers?

If (!integer) throw new Error(‘the parameter passed must be an integer’)

const oddNum = arr.filter((num) => num % 2 === 1)

return oddNum

}
```

The ‘if statement’ plays the role of guardian of the code, that only integers are allowed, the opposite will send a warning message.

Defensive coding/programming is an approach that a developer has to be aware of, to help improve the solving-problem skills, and protect our code from bugs, bad testing, and errors as well.

I hope this article would be helpful, and if you wish to network with me, here is my email address, and my LinkedIn!

<!-- I know this is not among the plans, but I wanted to add it to the repo as a Microverse requirement of writing at least two to three articles per month.
DM: tell me if this is a good approach! -->
<!-- 

This is very well written. Few grammar or usage errors. Awesome. Blogging, writing articles, is a sure path to quick advancement.

Consider changing the title to "offensive programming"
partly because it more accurately describes your code examples
partly because "offensive programming" is more eye-catching, I hadn't heard the term, ppl will find it interesting to click on a blog post with that title

The wikipedia article was interesting. It says 'offensive programming' is a subset of defensive programming.
I think the 2nd example of offensive programming best describes what we are doing by throwing errors if input is not validated
https://en.wikipedia.org/wiki/Defensive_programming#Trusting_software_components
However, I fear I was not precise enough when I wrote the 'throwing' was "defensive programming"
"fail fast" is a great term for throwing errors. it lets the programmer know immediately that there is a problem
"catch errors early"

I liked this article: (it covers offensive programming)
https://programmingduck.com/articles/defensive-programming
"A different kind of error is a bug. In most programs, these errors are considered "unrecoverable". The rule-of-thumb for most programs is to crash on these errors and to not handle them."

I added the 'validate' step into code-challenge steps mostly to expose you to the habit of 1) thinking about the input and 2) how to 'throw' - what you're doing in the exercises is a little exaggerated - most ppl don't do that in code challenges. So ... keep that in mind. I still think it is a good practice, so let's keep doing it. 
The 'transform if possible' part is more like "defensive" I think. It tries not to fail. ex: if you're expecting a number, if the param is a string, try to String.parseInt() into a string.

Anyway, great job, just some food for thought. The blog posts are yours completely. I'll never insist on anything in particular, just offer suggestions.




-->