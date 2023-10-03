const alphaCharacters = 'you can see all the details from this number: 1234567890123456789, then add @ your name and then click the button to send the message';

const nonAlphaCharacters = alphaCharacters.match(/\W/g);
console.log({ nonAlphaCharacters }); // ['@', ':', ',']
