// .reduce() - 4 syntax examples - these all do the same thin

// 1
const count = consonants.reduce((acc, cur) => acc + cur, 0)

// 2
const count = consonants.reduce((acc, cur) => {
  return acc + cur
}, 0)

// 3
const callback = (acc, cur) => acc + cur
const count = consonants.reduce(callback, 0)

// 4
const callback = (acc, cur) => {
  return acc + cur
}
const count = consonants.reduce(callback, 0)
