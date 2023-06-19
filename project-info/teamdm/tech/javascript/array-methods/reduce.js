// .reduce() - 4 syntax examples - these all do the same thing

const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm']
// 1
const count1 = consonants.reduce((acc, cur) => acc + cur, 0)
// 2
const count2 = consonants.reduce((acc, cur) => {
  return acc + cur
}, 0)
// 3
const callback = (acc, cur) => acc + cur
const count3 = consonants.reduce(callback, 0)
// 4
const callback2 = (acc, cur) => {
  return acc + cur
}
const count4 = consonants.reduce(callback, 0)

const numbers = [102, 91, 3, -6, 203, 8, 33, 21, 150, 77, 61, 3, 91, 21, 8]

// Exercise 1: Calculate the sum of all numbers of the numbers array by using the reduce-function
const total = numbers.reduce((acc, cur) => {
  console.log({ total })
  return acc + cur
}, 0)

// Exercise 2: Find the lowest number by using the reduce-function
const lowest = numbers.reduce((acc, cur) => {
  console.log({ acc, cur })
  return Math.min(acc, cur) // acc < cur ? acc : cur
}, 0)

// Exercise 3: Generate an array without any duplicates by using the reduce function.
// example input: [5, 1, 2, 5, 1, 2], output: [5, 1, 2]
// To check if an element exists within an array use the "indexOf" function.
// It will return "-1" if the desired value does not exist otherwise
// the index of the element.
// Example: [1,2,3].indexOf(1) => 0
// Example: [1,2,3].indexOf(7) => -1
const numbers2 = [5, 1, 2, 5, 1, 2]
const uniqNumbers = numbers2.reduce((acc, cur) => {
  console.log({ uniqNumbers })
  if (acc.indexOf(cur) === -1) {
    acc.push(cur)
  }
  return acc
}, [])

// Exercise 4: Calculate the number of all completed-todo entries
const todos = [
  {
    userId: 10,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 7,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: true,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 2,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
  {
    userId: 2,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: 'qui ullam ratione quibusdam voluptatem quia omnis',
    completed: false,
  },
  {
    userId: 31,
    id: 7,
    title: 'illo expedita consequatur quia in',
    completed: false,
  },
  {
    userId: 90,
    id: 8,
    title: 'quo adipisci enim quam ut ab',
    completed: true,
  },
  {
    userId: 90,
    id: 9,
    title: 'molestiae perspiciatis ipsa',
    completed: false,
  },
]

// Exercise 4: Calculate the number of all completed-todo entries
const doneCount = todos.reduce((acc, cur) => {
  if (cur.completed) {
    acc++
  }
  return acc
  // return cur.completed ? acc++ : acc
}, 0)

console.log({ doneCount })

// Exercise 5: Create a data structure where the userId is mapped to the number of todos of this user.
// example:
// [{ userId: 123, ...}, { userId: 123, ... }, { userId: 200, ... }] => { 123: 2, 200: 1 }
const userAndTodoCountMapping = todos.reduce((userAndTodoCountMapping, todo) => {
  // this solution is complicated.
}, {})

/*the instructions are (possibly deliberately) confusing, because this:
[{ userId: 123, ...}, { userId: 123, ... }, { userId: 200, ... }] => { 123: 2, 200: 1 }
is not syntactically correct JS
the => is not an arrow function, he's using it just to signify "turns into"
so,
[{ userId: 123, ...}, { userId: 123, ... }, { userId: 200, ... }]
is just an abbreviated copy of the full todos object
and, after processed by your .reduce function
your reduce function should return an object that looks like this
{ 123: 2, 200: 1 }
but really:
{ 123: 2, 200: 1, ... } // ... because there are more than two userIDs in the data

key is mapped to value (in JS Object structures)
instructions say: Create a data structure where the userId is mapped to the number of todos of this user
example given: { 123: 2, 200: 1 }
{
  123: 2, // key-value pair
  200: 1, // key-value pair
}
*/

const userAndTodoCountMapping = todos.reduce((userAndTodoCountMapping, todo) => {
  console.log({ userAndTodoCountMapping, todo })
  if (userAndTodoCountMapping[todo.userId]) {
    userAndTodoCountMapping[todo.userId]++
  } else {
    userAndTodoCountMapping[todo.userId] = 1
  }
  return userAndTodoCountMapping
}, {})
