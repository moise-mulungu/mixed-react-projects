export default isSorted = (array) =>
  array.every((value, index) => index === 0 || array[index - 1] <= value)
