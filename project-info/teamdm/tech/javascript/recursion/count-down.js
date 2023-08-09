// normal for loop
const countDown = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(i)
  }
}
countDown(10) // 10 9 8 7 6 5 4 3 2 1

// recursive function
const countDown2 = (num) => {
  // the base case
  if (num <= 0) {
    console.log('All done!')
    return
  }
  console.log(num)
  num--
  countDown2(num)
}
countDown2(10) // 10 9 8 7 6 5 4 3 2 1 All done!

const countUp = (num) => {
  // the base case
  if (num >= 10) {
    console.log('You nailed it!')
    return
  }
  console.log(num)
  num++
  countUp(num)
}

countUp(1) // 1 2 3 4 5 6 7 8 9 You nailed it!
