// (done) DM: todoMM: function name should match the filename
const round = (number, precision) => {
  // 0, 2 2 dec pts
  const factor = Math.pow(10, precision)
  return Math.round(number * factor) / factor
}

console.log(getRound(1.025, 2)) // 1.02
console.log(getRound(1.025, 3)) // 1.025
console.log(getRound(1.025, 1)) // 1

// using Math.floor() and Math.ceil()
console.log(Math.floor(1.025)) // 1
console.log(Math.ceil(2.025)) // 2
