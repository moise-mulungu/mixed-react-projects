// recursive with ternary operator where numbers are added from 1 to the given number
function recursive(number) {
  return number === 1 ? 1 : number + recursive(number - 1)
}

console.log(recursive(5)) // 15
