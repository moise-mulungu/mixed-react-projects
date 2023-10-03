const str = 'This is a string with sequential characters from a to z in both lower and upper case';
// This will match all the sequential characters from a to z in both lower and upper case and return them as an array
const sequentialChars = str.match(/[a-zA-Z]/g);
console.log(sequentialChars); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']