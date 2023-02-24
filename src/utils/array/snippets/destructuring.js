//object destructuring
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

//array destructuring
const colors = ['red', 'green', 'blue']
const [firstColor, secondColor] = colors  // this one is similar to const firstColor = colors[0] and const secondColor = colors[1]
console.log(firstColor) // ‘red’
console.log(secondColor) // ‘green’