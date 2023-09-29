// src= https://regexone.com/

const stringOfText = 'Hello @# world!'
const matchAllSpecialCharacters = /[^A-Za-z0-9]/

const checkResult = stringOfText.match(matchAllSpecialCharacters)
console.log({ checkResult })
