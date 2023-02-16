// howtojs: arrays: sort numbers
// DM: good work! I'm going to make this super concise now
;[2, 5, 3].sort((a, b) => a - b) // !!! never a > b! I've done this a few times. Doesn't work because ... a>b returns a boolean, not a number

// DM: todoMM: remove all the below once you've moved these to other files

const myArray = [2, 5, 3, 14, 11]

// join the array into a string
myArray.join()
// DM: make another file named join.js if you'd like to explore that, but keep each file small, one topic, succinct

// sort the array
myArray.sort() // DM: move to sort-alphabetic.js if you'd like snippets for that

// sort the array using the function // DM: syntax examples and variants move those to the tech/javascript/ section as needed. in src/utils keep only the code you'd copy and paste into other code
// myArray.sort(sortArray)
console.log(myArray)

function isDivisible(n, x, y) {
    const nDivisibleByX = n % x === 0;
    const nDivisibleByY = n % y === 0;
    return nDivisibleByX && nDivisibleByY ? true : false;
}
console.log(isDivisible(3, 3, 4));
