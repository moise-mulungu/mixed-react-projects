// run this line and see what is logged
const result1 = [1,2,3].forEach(number => console.log('the current number is: ', number))
// what is the value of "result1"?
result1 /* DM: todoDM: write the value of "result1" here */
// the current number is:  1
// the current number is:  2
// the current number is:  3

// now to the same for a filter, map, reduce
const result2 = [1,2,3].filter(number => {
	console.log('the current number is: ', number)
	return number > 1
)
result2 /* DM: todoDM: write the value of result2 here */
/* DM: todoDM: write the output of console.log here */

const result3 = [1,2,3].map(number => {
	console.log('the current number is: ', number)
	return number ** number
})
result3 /* DM: todoDM: write the value of result3 here */
/* DM: todoDM: write the output of console.log here */

const result4 = [1,2,3].reduce((acc, cur, idx, arr) => {
	console.log('argument values are: ', acc, cur, idx, arr)
	return {...acc, [cur]: cur}
}, {})
result4 /* DM: todoDM: write the value of result4 here */
/* DM: todoDM: write the output of console.log here */
// DM: bonus: can you give better names to the first two arguments?
