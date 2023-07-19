// DM: alternate concise version of the challenge, the main drawback being that the RegExp is hard to read.

// DM: you understand it now, right?
// DM: this is fairly readable, but the regExp is hard to read quickly. It will also not provide information if the input array is not as expected.

function createPhoneNumber(numbers) {
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // "(111) 111-1111"
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"
createPhoneNumber([6, 7, 4, 2, 8, 9, 1, 2, 3, 4]) // "(674) 289-1234"
createPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) // "(519) 555-4468"
createPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) // "(345) 501-2527"

// MM: DM: this challenge is the same as the other ones, but the difference is that it returns the parameter by joining the array and then replacing the numbers with the regex. DM: got it, tks, moving it out of the 'current' dir.
