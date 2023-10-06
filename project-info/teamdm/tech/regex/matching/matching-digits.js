// DM: good. comments always refer to the code BELOW the comment. I.e., the \d is in this next line
// howtojs: regexp:: matching digit characters; to match digit characters in JavaScript, you can use one of the two following regular expression: /\d/ or /[0-9]/
const pattern = /[\d]/g;
const str = 'This is a string with 12345 digits';

// DM: this is a good exercise, but try not to waste my time by leaving code that doesn't work.
// MM: a lesson that i learn; never fully trust any code without double-checking it.  
//(done) DM: todoMM: doesn't return the value you wrote after the console.log. It returns:
// [
//   '1',
//   index: 22,
//   input: 'This is a string with 12345 digits',
//   groups: undefined
// ]
console.log(str.match(pattern)); // Returns an array containing the matched digits [1, 2, 3, 4, 5]

