export default isSorted = (sortedArray) =>
  sortedArray.every((value, index) => index === 0 || sortedArray[index - 1] <= value)
