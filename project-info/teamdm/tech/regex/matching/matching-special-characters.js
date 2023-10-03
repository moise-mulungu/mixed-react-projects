// src= https://regexone.com/

// DM: todoMM: this doesn't work

const stringOfText = 'Hello @# world!'
const matchAllSpecialCharacters = /[^A-Za-z0-9]/

const checkResult = stringOfText.match(matchAllSpecialCharacters)
console.log({ checkResult }) // DM: todoMM: what is the expected output? Does this work?
