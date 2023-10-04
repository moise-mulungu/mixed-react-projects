// src= https://regexone.com/

const stringOfText = 'This is a string with some special characters: !@#$%^&*()'

// this will match all the provided special characters in the string; includes also empty spaces;
const matchAllSpecialCharacters = /\W/g // DM: good. It does the same as /[^A-Za-z0-9]/g; 
const checkResult = stringOfText.match(matchAllSpecialCharacters)
console.log({ checkResult }) //  [" ", " ", " ", " ", " ", " ", " ", ":", " ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

const matchAllSpecialCharactersWithoutSpace = /[^\w\s]/g // DM: you only need one ^ at the beginning of the []
const checkResultWithoutSpace = stringOfText.match(matchAllSpecialCharactersWithoutSpace)
console.log({ checkResultWithoutSpace }) //  [":", "!", "@", "#", "$", "%", "&", "*", "(", ")"]

// DM: good examples. I reordered the lines to group related things. Think of your future self reading this and be sure it is really clear and in order.