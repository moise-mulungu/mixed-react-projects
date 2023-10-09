// src= https://regexone.com/

const stringOfText = 'This is a string with some special characters: !@#$%^&*()'

// this will match all the provided special characters in the string; includes also empty spaces;
//(done) DM: todoMM: make a howtojs. Don't cram too many different examples into 1 howto
// howtojs: regexp:: matching all non-alphanumeric characters: /[^\w\s]/g or /[^A-Za-z0-9\s]/g. 
const matchAllSpecialCharacters = /\W/g // DM: good. It does the same as /[^A-Za-z0-9]/g; 
const checkResult = stringOfText.match(matchAllSpecialCharacters)
console.log({ checkResult }) //  [" ", " ", " ", " ", " ", " ", " ", ":", " ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// howtojs: regexp:: matching non-alphanumeric characters without space: /[^\w\s]/g or /[^A-Za-z0-9\s]/g. 
const matchAllSpecialCharactersWithoutSpace = /[^\w\s]/g // DM: you only need one ^ at the beginning of the []
const checkResultWithoutSpace = stringOfText.match(matchAllSpecialCharactersWithoutSpace)
console.log({ checkResultWithoutSpace }) //  [":", "!", "@", "#", "$", "%", "&", "*", "(", ")"]

// DM: good examples. I reordered the lines to group related things. Think of your future self reading this and be sure it is really clear and in order.
