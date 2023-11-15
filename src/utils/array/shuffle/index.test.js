/*
AI prompt answer: Testing a shuffle function can be tricky because the output is random. We can't predict the exact output, but we can test certain characteristics of the output. For example, we can check if the output array has the same length as the input array and contains the same elements. We can also check if the output array is different from the input array.
*/

const shuffle = require('./index.js')

// your tests go here

describe('shuffle', () => {
  it('returns an array with the same length', () => {
    const array = [1, 2, 3, 4, 5]
    const result = shuffle(array)
    expect(result.length).toEqual(array.length)
  })

  it('returns an array with the same elements', () => {
    const array = [1, 2, 3, 4, 5]
    const result = shuffle(array)
    const sortedOriginal = [...array].sort()
    const sortedResult = [...result].sort()
    expect(sortedResult).toEqual(sortedOriginal)
  })

  it('does not return the same array most of the time', () => {
    const array = [1, 2, 3, 4, 5]
    let different = false

    // Run the shuffle function 100 times
    for (let i = 0; i < 100; i++) {
      const result = shuffle([...array])
      if (JSON.stringify(result) !== JSON.stringify(array)) {
        different = true
        break
      }
    }

    expect(different).toBe(true)
  })
})

// run the test with: npx jest index.test.js
