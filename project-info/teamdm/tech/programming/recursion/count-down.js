// normal for loop
const countDown = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(i)
  }
}
// countDown(10) // 10 9 8 7 6 5 4 3 2 1

// recursive function
const countDown2 = (num, indent = '') => {
  // the base case
  if (num <= 0) {
    console.log(`${indent} All done!`)
    return
  }
  console.log(`${indent} num: ${num}`)
  num--
  countDown2(num, indent + '-'.repeat(2))
}
countDown2(10) // 10 9 8 7 6 5 4 3 2 1 All done!

const countUp = (num, ind = '') => {
  // the base case
  if (num >= 10) {
    console.log(`${ind}You nailed it!`)
    return
  }
  console.log(`${ind} num: ${num}`)
  num++
  countUp(num, ind + '-'.repeat(3))
}
const res = countUp(1) // 1 2 3 4 5 6 7 8 9 You nailed it!

/* 
DM: good job on the recursion
going forward we going to run all scripts using the node executable from the command line.
so, in each js script file, put the command in a comment (see below). This way we can quickly copy the command and paste it into the terminal.
*/
// node project-info/teamdm/tech/programming/recursion/count-down.js
