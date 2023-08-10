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

// DM: implement the indent here, just like I did above.(done)
// DM: After you do that, have a look at recursive-reverse-strings.js (now in this directory). See how indented console.logs makes it clear what level of recursion you are at and how the recursion "unwinds" after you react the base case. Study this and be ready to explain to me how it works.(done)
// DM: After you do that, fix the indenting in recursive-millipede-of-words.js. Follow the examples in this directory, to get an idea of what needs to change. What is found in recursive-reverse-strings.js that is missing in recursive-millipede-of-words.js? You need only edit one line in recursive-millipede-of-words.js. If you need to edit more, then look at recursive-reverse-strings.js again.(in progress)
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
countUp(1) // 1 2 3 4 5 6 7 8 9 You nailed it!

/* 
DM: good job on the recursion
going forward we going to run all scripts using the node executable from the command line.
so, in each js script file, put the command in a comment (see below). This way we can quickly copy the command and paste it into the terminal.
*/
// node project-info/teamdm/tech/programming/recursion/count-down.js
