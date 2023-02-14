// howtojs: arrays: sort numbers
// todoMM: solve this exercise
const myArray =[2, 5, 3, 14, 11, 12.4, ]; 

// create a function that sorts an array of objects by a given key
function sortArray(a, b) {
    return a - b
}

// join the array into a string
// let joinedArray = myArray.join();
// console.log(joinedArray);

// sort the array
// myArray.sort();

// sort the array using the function
let sortedArray = myArray.sort(sortArray);
console.log(sortedArray);

// todoDM: write exercise to sort array of objects
