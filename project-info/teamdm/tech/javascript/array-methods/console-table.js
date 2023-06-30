// howtojs:: log/display multidimensional arrays
const activities = [
  ['Work', 9],
  ['Eat', 1],
  ['Commute', 2],
  ['Play Game', { a: 'b' }],
  ['Sleep', 7],
]

console.table(activities)
// ┌─────────┬──────────┬────────┐
// │ (index) │    0     │   1    │
// ├─────────┼──────────┼────────┤
// │    0    │ 'Work'   │   9    │
// │    1    │  'Eat'   │   1    │
// │    2    │ 'Commute'│   2    │
// │    3    │'Play Game'│   1   │
// │    4    │ 'Sleep'  │   7    │
// └─────────┴──────────┴────────┘

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.table(numbers)
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │   1    │
// │    1    │   2    │
// │    2    │   3    │
// │    3    │   4    │
// │    4    │   5    │
// │    5    │   6    │
// │    6    │   7    │
// │    7    │   8    │
// │    8    │   9    │
// └─────────┴────────┘
