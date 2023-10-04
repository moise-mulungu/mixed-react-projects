// src= https://regexone.com/

const stringOfText = 'This is a string with some special characters: !@#$%^&*()'
const matchAllSpecialCharacters = /\W/g // DM: good. It does the same as /[^A-Za-z0-9]/g; MM: this includes also empty spaces.
const matchAllSpecialCharactersWithoutSpace = /[^\w^\s]/g // DM: good. It does the same as /[^A
// this will match all the provided special characters in the string
const checkResult = stringOfText.match(matchAllSpecialCharacters)
console.log({ checkResult }) //  [" ", " ", " ", " ", " ", " ", " ", ":", " ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
const checkResultWithoutSpace = stringOfText.match(matchAllSpecialCharactersWithoutSpace)
console.log({ checkResultWithoutSpace }) //  [":", "!", "@", "#", "$", "%", "&", "*", "(", ")"]
//(done) DM: todoMM: what is the expected output?
