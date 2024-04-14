function binarySearch(arrayOfItems, target) {
  // step 1: initialize firstItem to 0 and lastItem to length of arrayOfItems - 1
  let firstItem = 0
  let lastItem = arrayOfItems.length - 1

  // step 2: while firstItem less than or equal to lastItem
  while (firstItem <= lastItem) {
    // step 3: initialize midPoint to the round down value of (lastItem + firstItem) / 2
    const midPoint = Math.floor((lastItem + firstItem) / 2)

    // step 4: if arrayOfItems[midPoint] equal to target
    if (arrayOfItems[midPoint] === target) {
      // step 5: return midPoint
      return midPoint
    }
    // step 6: else if arrayOfItems[midPoint] less than target 
    else if (arrayOfItems[midPoint] < target) {
      // step 7: set firstItem to midPoint + 1
      firstItem = midPoint + 1
    }
    // step 8: else if arrayOfItems[midPoint] greater than target
     else if (arrayOfItems[midPoint] > target) {
      // step 9: set lastItem to midPoint - 1
      lastItem = midPoint - 1
    }
  }
  // step 10: if target not found in arrayOfItems,
  return -1
}

// create a verify function to check if the index returned by the binarySearch function is correct
function verify(index) {
  if (index !== -1) {
    console.log(`Target found at index: ${index}`)
  } else {
    console.log('Target not found in arrayOfItems')
  }
}

const arrayOfItems = [1, 2, 3, 4, 5, 6]
const target = 15

// call the binarySearch function with the appropriate arguments
const index = binarySearch(arrayOfItems, target)
verify(index)
