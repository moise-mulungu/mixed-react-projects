//(done) DM: todoMM: good, now give the parameter a more descriptive, specific name
// const allIntegers = (parameter) => parameter.every((item) => Number.isInteger(item))
//(done) DM: todoMM: lets always declare exported functions as a function declaration, not arrow function
// export default allIntegers

export default function allIntegers(array) {
  return array.every((item) => Number.isInteger(item))
}
