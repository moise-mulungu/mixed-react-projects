// types of "destructuring assignment"

// object destructuring
const user = {
  name: 'Moise theMan',
  city: 'Goma',
  province: 'North Kivu',
  country: 'Congo',
  postalCode: 'A1B2C3',
}

const { name, country } = user

console.log(name) // ‘Moise theMan’
console.log(country) // ‘Congo’

// array destructuring
const colors = ['red', 'green', 'blue']
const [firstColor, secondColor] = colors // this one is similar to const firstColor = colors[0] and const secondColor = colors[1]
console.log(firstColor) // ‘red’
console.log(secondColor) // ‘green’

// parameter destructuring
function printUser({ name, country }) {
  console.log(name, country)
}
printUser(user) // ‘Moise theMan Congo’

// DM: great, this is a good example

// rest parameters
function sum(...numbers) {
  let total = 0
  for (const num of numbers) {
    total += num
  }
  return total
}

console.log(sum(1, 2, 3))
// Expected output: 6

console.log(sum(1, 2, 3, 4))
// Expected output: 10
