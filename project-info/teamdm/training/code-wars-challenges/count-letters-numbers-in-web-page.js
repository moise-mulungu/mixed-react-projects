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
  // (i declared a variable that hold the char.match function)DM: todoMM: String.match() returns a boolean, so you can just return: DM: this is not done.
  // return char.match(/[a-z0-9]/i)
  //(done) DM: todoMM: what about capital letters? Also not done.
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

//(done) DM: measure the perf (performance) of the map here and the reduce below: DM: not done.(the performance of the map and reduce is done below, i don't know if it's what you want!) DM: see the howtojs above, measure perf by using console.time/timeEnd MM: i found mapping is faster than reducing after measuring the performance by trying with small number of letters DM: super!
console.time('mapping')
const charToLowerCase = lettersAndNumbers.map((char) => {
  return char.toLowerCase()
})
console.timeEnd('mapping')
// whether the letter is uppercase or lowercase, we still only **count**(number) it once. For example a and A would could as two "a"s, not one uppercase A and one lowercase a
console.time('reducing')
const lettersAndNumbersLowercaseToCount = charToLowerCase.reduce((acc, cur) => {
  // DM: good
  acc[cur] = acc[cur] ? acc[cur] + 1 : 1
  // console.log({ acc, cur })
  return acc
}, {})
console.timeEnd('reducing')

console.log(lettersAndNumbersLowercaseToCount)

// functions are "hoisted", that's why you can use it in the code above where it is declared below
function getText() {
  // DM: getting "false positives" in this text when I VSCode global search so I'm replacing the text with a shorter, non-technical text
  // howtojs: escape:: quote characters (backticks, single|double quote) in quoted text
  return `
more
About
me
the
Blog
🔥
Tips
real spicy
Beginner
Notes
real life
@speaking
and training
what font?!

`
}
