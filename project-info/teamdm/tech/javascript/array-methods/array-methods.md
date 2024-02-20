//(done) DM: good, and also add here a short description of what is in the document, so I don't have to open it to see what it is.
Google Documents in the cloud that contains react project ideas, javascript interview questions, and array methods: https://drive.google.com/file/d/1RuIqi-2ljew9bP1M92dQNcgOi7-iFyy9/view?usp=drive_link

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
an expression used to unpack values from arrays, or properties from objects, into distinct variables
DM: this is a great definition. I made it a little shorter (faster to read)

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
to perform some sort of action (side effect) on every item in an array.

## filter: 
takes a callback function which will be called once per item in the array.


## map: 
iterates over the array, and, once for each element in the array, invokes the callback function (which must return the new value at that index in the array)

## difference between map and forEach 
Both of the two array methods iterate through an array with a callback function, but with map the elements of the resulting new array are determined by the value returned by the callback. with forEach it does not matter what value the callback function returns
... that was wordy, sometimes examples are OK
[1,2].map(e => e) // [1,2]
[1,2].foreach(e => e) // [undefined, undefined]

## array **element**
let's only use 'element' for a member of an array, just to be consistent (why? for consistent callback parameter names: element, e) (ok to break the rule against abbreviations for brevity in callback functions)

DM: good work thinking about these and moving code to the .js file. I made some edits, which is the plan, you don't have to get the exact correct answer, but learn from the process of trying, then seeing my edits. super!