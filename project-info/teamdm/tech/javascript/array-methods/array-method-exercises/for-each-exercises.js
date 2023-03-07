// DM: todoMM: this page is important, review the way the array methods work and then finish up the todoMMs

// run this line and see what is logged
const result1 = [1, 2, 3].forEach((number) => console.log('the current number is: ', number))
// what is the value of "result1"?
result1 /* DM: todoDM: write the value of "result1" here */
// the current number is:  1
// the current number is:  2
// the current number is:  3

const pizzaToppings = ['cheese', 'avocado', 'halibut', 'custard']

pizzaToppings.forEach((topping, index) => {
  console.log(topping, index)
})
// cheese 0
// avocado 1
// halibut 2
// custard 3

// now to the same for a filter, map, reduce
const result2 = [1, 2, 3].filter((number) => {
  console.log('the current number is: ', number)
  return number > 1
})
result2 /* DM: todoMM: write the value of result2 here */
/* DM: todoMM: write the output of console.log here */
const students = [
  { name: 'Aisha', grade: 89 },
  { name: 'Bruno', grade: 55 },
  { name: 'Carlos', grade: 68 },
  { name: 'Dacian', grade: 71 },
  { name: 'Esther', grade: 40 },
]

const studentsWhoPassed = students.filter((student) => {
  return student.grade >= 60 && student.name !== 'Dacian'
})

console.log(studentsWhoPassed)
// [{ name: 'Aisha', grade: 89 }, { name: 'Carlos', grade: 68 }}]

const result3 = [1, 2, 3].map((number) => {
  console.log('the current number is: ', number)
  return number ** number
})
result3 /* DM: todoMM: write the value of result3 here */
/* DM: todoMM: write the output of console.log here */

const result4 = [1, 2, 3].reduce((acc, cur, idx, arr) => {
  console.log('argument values are: ', acc, cur, idx, arr)
  return { ...acc, [cur]: cur }
}, {})
result4 /* DM: todoMM: write the value of result4 here */
/* DM: todoMM: write the output of console.log here */
// DM: bonus: can you give better names to the first two arguments?

// DM: todoMM: be sure to always list the expected output
const nums = [1, 2, 3]
nums.forEach((num) => num + 1)
console.log(nums)
