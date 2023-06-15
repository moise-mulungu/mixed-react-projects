// .reduce() - 4 syntax examples - these all do the same thin

// 1
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm']
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
const count = consonants.reduce(callback, 0)

const numbers = [102, 91, 3, -6, 203, 8, 33, 21, 150, 77, 61, 3, 91, 21, 8];

// Exercise 1: Calculate the sum of all numbers of the numbers array by using the reduce-function
const total = numbers.reduce((acc, cur) => {
  return acc + cur
}, 0);

console.log({ total })



// Exercise 2: Find the lowest number by using the reduce-function
const lowest = numbers.reduce((acc, cur) => {
  return Math.min(acc, cur) // acc < cur ? acc : cur or 
  //if (acc < cur) return acc else return cur
});

console.log({ lowest })



// Exercise 3: Generate an array without any duplicates by using the reduce function.
// example input: [5, 1, 2, 5, 1, 2], output: [5, 1, 2]
// To check if an element exists within an array use the "indexOf" function.
// It will return "-1" if the desired value does not exist otherwise 
// the index of the element.
// Example: [1,2,3].indexOf(1) => 0
// Example: [1,2,3].indexOf(7) => -1
const numbers2 = [5, 1, 2, 5, 1, 2];
const uniqNumbers = numbers2.reduce((acc, cur) => {
  if (acc.indexOf(cur) === -1) {
    acc.push(cur)
  }
  return acc
}, []);

console.log({ uniqNumbers })


// Exercise 4: Calculate the number of all completed-todo entries
const todos = [
  {
    "userId": 10,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }, {
    "userId": 7,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": true
  }, {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  }, {
    "userId": 2,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  }, {
    "userId": 2,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }, {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  }, {
    "userId": 31,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  }, {
    "userId": 90,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  }, {
    "userId": 90,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  }
];

const doneCount = todos.reduce((acc, cur) => {
  if (cur.completed) {
    acc++
  }
  return acc
  // return cur.completed ? acc++ : acc
}, 0);

console.log({ doneCount })


// Exercise 5: Create a data structure where the userId is mapped to the number of todos of this user.
// example:
// [{ userId: 123, ...}, { userId: 123, ... }, { userId: 200, ... }] => { 123: 2, 200: 1 }

const userAndtodoCountMapping = todos.reduce((userMap, todo) => {
// this solution is complicated.
}, {});