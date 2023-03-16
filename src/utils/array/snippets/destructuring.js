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

// DM: todoMM: excellent!, now add "rest parameters" (done) Where? I don't see it. I meant to add them here check MDN and put an example here
