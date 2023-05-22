function recursiveBinarySearch(array, target) {
    // step 1: check if array is empty, if it is, return -1
  if (array.length === 0) {
    return -1
  }

    // step 2: initialize midIndex to the round down value of length of array / 2
  const midIndex = Math.floor(array.length / 2)
  // step 3: initialize midValue to the value at midIndex of array
  const midValue = array[midIndex]

  // step 4: if midValue equal to target, return midIndex
  if (midValue === target) {
    return midIndex
  }
// MM ???toDM: I am having a hard time understanding the logic of the following two steps
  // step 5: else if midValue less than target, return recursive call of binarySearch with the appropriate arguments
  if (midValue > target) {
    return recursiveBinarySearch(array.slice(0, midIndex), target)
  }

    // step 6: else if midValue greater than target, return recursive call of binarySearch with the appropriate arguments
  const result = recursiveBinarySearch(array.slice(midIndex + 1), target)
  return result === -1 ? -1 : result + midIndex + 1
}

// create a verify function to check if the index returned by the recursiveBinarySearch function is correct
function verify(index) {
  if (index !== -1) {
    console.log(`Target found at index: ${index}`)
  } else {
    console.log('Target not found in array')
  }
}

// call the recursiveBinarySearch function with the appropriate arguments
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
verify(recursiveBinarySearch(array, 1)) // 0
verify(recursiveBinarySearch(array, 5)) // 4