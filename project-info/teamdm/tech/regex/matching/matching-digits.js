const pattern = /\d/;
const str = 'This is a string with 12345 digits';

console.log(str.match(pattern)); // Returns an array containing the matched digits [1, 2, 3, 4, 5]

// howtojs: regexp:: matching digit characters; to match digit characters in JavaScript, you can use one of the two following regular expression: /\d/ or /[0-9]/
