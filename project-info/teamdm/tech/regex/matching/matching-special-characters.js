// src= https://regexone.com/

const stringOfText = 'This is a string with some special characters: !@#$%^&*()'
const matchAllSpecialCharacters = /\W/g // DM: good. It does the same as /[^A-Za-z0-9]/g
// this will match all the provided special characters in the string
const checkResult = stringOfText.match(matchAllSpecialCharacters)
console.log({ checkResult })
// DM: todoMM: what is the expected output?
