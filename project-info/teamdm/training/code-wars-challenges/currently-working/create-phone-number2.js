// ???DM: this is not my solution, but I got it from outer resources. I don't really understand it, especially with the .replace() part. Can you explain it to me? Thanks!
function createPhoneNumber(numbers) {
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // "(111) 111-1111"
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"
createPhoneNumber([6, 7, 4, 2, 8, 9, 1, 2, 3, 4]) // "(674) 289-1234"
createPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) // "(519) 555-4468"
createPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) // "(345) 501-2527"
