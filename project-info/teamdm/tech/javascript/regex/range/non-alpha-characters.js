const alphaCharacters = 'you can see all the details from this number: 1234567890123456789, then add @ your name and then click the button to send the message';

// howtojs: regexp:: matching non-alphanumeric characters: \w ex: /[^\w]/g 
const nonAlphaCharacters = alphaCharacters.match(/[^\w\s]/g);
console.log({ nonAlphaCharacters }); // [ ':', ',', '@' ] 

