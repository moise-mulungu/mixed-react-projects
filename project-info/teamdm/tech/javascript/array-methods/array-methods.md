
# difference between quotes(“ ”) and backticks(`` );
Quotes are used for creating strings while backticks are for embedding variables in a string
e.g: const userName = ‘Mail’
const dynamicString = `hello {userName}`/ ${}

# regular function vs arrow function
* note: "regular" is most common on google, but also used: ordinary, normal, traditional)
* DM: if you're cutting and pasting don't worry too much about it, but if you're typing, let's stick to lower case, unless it is a proper noun (name, place, thing)
* 
e.g : function exclaim(string) {
 return string + '!';
}
const exclaim = string => string + '!';

# object destructuring vs Object accessing
 is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

# Module
A module is a JavaScript file that can contain one or more exports. We can pull the code from one module into another using the import statement.

# A callback function
The term “callback function” refers to a function that we pass to another function

# JavaScript array (looping) methods
array.filter is to make an array into a smaller array - "smaller array" is the key concept, not the logic of the filter callback
array.map is to transform each element of an array into something different
array.reduce is to transform an array into something else (ex: into a number, or an object)

array.forEach is for "side effects" 
* the callback return value is always undefined! you cannot chain
* side effects: ex: like console.log
* try to use different array function 

// DM: todoDM: individual drills, log the current value in the callback, forEach first (log value, log index, return value), map (return value), filter, reduce

## forEach: 
when we want to perform some sort of action (side effect) on every item in an array.

## filter: 
takes a callback function, and that callback function will be called once per item in the array.


## map: 
In many ways, map is quite a lot like forEach. We give it a callback function, and it iterates over the array, calling the function once for each item in the array. 

## difference between map and forEach 
Both of the two array methods iterate through an array with a callback function, but map produces a new array, and does not mutate the original array, unlike forEach which mutate the initial array.