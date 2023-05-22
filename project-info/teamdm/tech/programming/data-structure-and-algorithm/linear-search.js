//MM: toDM: I spent the weekend learning about data structures and algorithms through the freeCodeCamp youtube channel, here is the link to the video: https://www.youtube.com/watch?v=8hly31xKli0

function linearSearch(list, target) {
  // step 1: loop through each item in list
  for (let i = 0; i < list.length; i++) {
    // step 2: check if item at current index is equal to target
    if (list[i] === target) {
      // step 3: if it is, return the current index
      return i
    }
  }
  // step 4: if target not found in list, return -1
  return -1
}

// create a verify function to check if the index returned by the linearSearch function is correct
function verify(index) {
  if (index === -1) {
    console.log('Target not found in list')
  } else {
    console.log(`Target found at index: ${index}`)
  }
}

const list = [1, 2, 3, 4, 5, 6]
const target = 5

// call the linearSearch function with the appropriate arguments
const index = linearSearch(list, target)
verify(index)
