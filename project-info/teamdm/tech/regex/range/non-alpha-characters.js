const alphaCharacters = 'you can see all the details from this number: 1234567890123456789, then add @ your name and then click the button to send the message';

const nonAlphaCharacters = alphaCharacters.match(/[^\w\s]/g);
console.log({ nonAlphaCharacters }); // [ ':', ',', '@' ] 

// howtojs: regexp:: matching non-alpha characters ; To match these characters, use the following regular expression: /[^\w\s]/g. this is the same with special characters.
