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
  return acc + cur
}, 0)
console.log({ total })

// Exercise 2: Find the lowest number by using the reduce-function
const lowest = numbers.reduce((acc, cur) => {
  return Math.min(acc, cur) // acc < cur ? acc : cur
})
console.log({ lowest })

// Exercise 3: Generate an array without any duplicates by using the reduce function.
// example input: [5, 1, 2, 5, 1, 2], output: [5, 1, 2]
// To check if an element exists within an array use the "indexOf" function.
// It will return "-1" if the desired value does not exist otherwise
// the index of the element.
// Example: [1,2,3].indexOf(1) => 0
// Example: [1,2,3].indexOf(7) => -1
const numbers2 = [5, 1, 2, 5, 1, 2]
// DM: I edited this so that the accumulator is not mutated
// howtojs: array: reduce:: you have an array and you want an array of a different length
const uniqNumbers = numbers2.reduce((uniqNumbers, cur) => {
  // DM: cool! so much more readable
  // DM: some DEVs like to name the accumulator with the name of the same variable that will hold the final result. I think it makes the code more readable. Personally, I don't do it much, but if I did, I'd use acc as the variable name while developing and testing, then rename it during the "make it prettier" stage.
  if (!uniqNumbers.includes(cur)) {
    // uniqNumbers.push(cur)
    return [...uniqNumbers, ...cur]
  }
  /*
  if (uniqNumbers.indexOf(cur) === -1) {
    uniqNumbers.push(cur)
  }
  */
  return uniqNumbers
}, [])
console.log({ uniqNumbers })

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

console.log({ userAndtodoCountMapping })

// 5) Given an array of arrays, flatten them into a single array without using Array.prototype.flat()
// Note: Take a look at Array.concat() to help with this one
{
  var arrays = [['1', '2', '3'], [true], [4, 5, 6]]
  function flatten(array) {
    return array.reduce(
      (acc, cur, idx) => {
        /* your code here */
        return acc.concat(cur)
      },
      [] /* initialize the accumulator */
    )
  }

  console.log(flatten(arrays)) // ["1", "2", "3", true, 4, 5, 6]
}

/* 6. Given an array of potential voters, return an object representing the results of the vote
  Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.
  */
{
  var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false },
  ]

  function voterResults(array) {
    return array.reduce(
      (acc, cur) => {
        /* your code here */
        const youngPeopleAgeRange = cur.age >= 18 && cur.age <= 25
        const youngPeopleVoted = youngPeopleAgeRange && cur.voted

        const midPeopleAgeRange = cur.age >= 26 && cur.age <= 35
        const midPeopleVoted = midPeopleAgeRange && cur.voted

        const oldPeopleAgeRange = cur.age >= 36 && cur.age <= 55
        const oldPeopleVoted = oldPeopleAgeRange && cur.voted

        if (youngPeopleAgeRange) {
          acc.numYoungPeople++
          if (youngPeopleVoted) {
            acc.numYoungVotes++
          }
        } else if (midPeopleAgeRange) {
          acc.numMidPeople++
          if (midPeopleVoted) {
            acc.numMidVotesPeople++
          }
        } else if (oldPeopleAgeRange) {
          acc.numOldPeople++
          if (oldPeopleVoted) {
            acc.numOldVotesPeople++
          }
        }

        acc.numMidVotesPeople.push('')
        acc.numMidsPeople.deepKey = ''
        return acc
      },
      // howtojs: reduce:: initialize accumulator as an object
      {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0,
      } /* initialize the accumulator */
    )
  }

  console.log(voterResults(voters)) // Returned value shown below:
  /*
    { numYoungVotes: 1,
      numYoungPeople: 4,
      numMidVotesPeople: 3,
      numMidsPeople: 4,
      numOldVotesPeople: 3,
      numOldsPeople: 4 
    }
  */
  //MM: It took me a while to figure out how to do this one. I had to google-search for the solution. It was not intuitive to me.
}
