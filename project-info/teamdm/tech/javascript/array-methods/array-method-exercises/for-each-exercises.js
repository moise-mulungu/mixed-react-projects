// DM: todoMM: it would be a good tome to review these again, paying attention to what is logged, what is returned by the callbacks, and what is the final value returned by the looping method, (except forEach, which you never care about what it returns)

// run this line and see what is logged
const result1 = [1, 2, 3].forEach((number) => console.log('the current number is: ', number))
result1 /* DM: todoDM: write the value of "result1" here - still todo, this part is important check MDN if you're not sure what [].foreach() returns */
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
result2 // [2, 3]
// the current number is:  1
// the current number is:  2
// the current number is:  3

const students = [
  { name: 'Aisha', grade: 89 },
  { name: 'Bruno', grade: 55 },
  { name: 'Carlos', grade: 68 },
  { name: 'Dacian', grade: 71 },
  { name: 'Esther', grade: 40 },
]
const studentsWhoPassed = students.filter((student) => {
  console.log('the current student is: ', student)
  return student.grade >= 60 && student.name !== 'Dacian'
})
console.log(studentsWhoPassed)
// [{ name: 'Aisha', grade: 89 }, { name: 'Carlos', grade: 68 }}]

const result3 = [1, 2, 3].map((number) => {
  console.log('the current number is: ', number)
  return number ** number
})
result3 // [1, 4, 27]
// the current number is:  1
// the current number is:  2
// the current number is:  3
const asObject = [1, 2, 3].reduce((acc, cur, idx, arr) => {
  console.log('argument values are: ', acc, cur, idx, arr)
  return { ...acc, [cur]: cur }
}, {})
result4 // { 1: 1, 2: 2, 3: 3 }
// argument values are:  {} 1 0 [ 1, 2, 3 ]
// argument values are:  { 1: 1 } 2 1 [ 1, 2, 3 ]
// argument values are:  { 1: 1, 2: 2 } 3 2 [ 1, 2, 3 ]
// DM: todoMM: can you give better names to the first two arguments (to the reduce callback: acc, cur? Just name them after what they are.

const nums = [1, 2, 3]
nums.forEach((num) => num)
nums // [1, 2, 3]
