export default function isArrayOfStrings(array) {
  return array.every((item) => typeof item === 'string')
}
