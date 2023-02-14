// DM: great job! now you have a searchable solution global regex vsCode search: "howtojs:.*sort.*number"
// DM: 'js' in the howtojs means vanilla js, btw, you'll have howtoreact, howtotw (tailwind) as you go along
// DM: last step is to make this as concise (readable quickly) as possible; see my changes as an example

// DM: I;m adding a little more to this line to make sure it's more searchable
// howtojs: arrays: sort numbers, numeric sort
const myArray = [1, 3, 2]

// create a function that sorts an array of objects by a given key
function sortArray(a, b) {
  return a - b
}

// join the array into a string
// const joinedArray = myArray.join();
// console.log(joinedArray);

// sort the array
// myArray.sort();

// sort the array using the function
myArray.sort(sortArray)
