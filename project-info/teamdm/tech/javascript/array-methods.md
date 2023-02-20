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

```js 
const user = {
 name: 'François Bouchard',
 city: 'Saint-Louis-du-Ha! Ha!',
 province: 'Québec',
 country: 'Canada',
 postalCode: 'A1B 2C3',
};

const { name, country } = user;

console.log(name); // ‘François Bouchard’
console.log(country); // ‘Canada’

Const name = user.name
Const country = user.country

# Module

A module is a JavaScript file that can contain one or more exports. We can pull the code from one module into another using the import statement.

# A callback function
The term “callback function” refers to a function that we pass to another function

# JavaScript loop methods
## forEach: when we want to perform some sort of action (side effect) on every item in an array.
```js
const pizzaToppings = [
'cheese',
'avocado',
'halibut',
'custard',
];
`
* side effect like console.log or assignment `myObj.property = value` in contrast to map/filter/reduce which return values and thus can be chained. forEach is usually last in a chain of array methods
* cannot await promises in forEach

```js
pizzaToppings.forEach((topping, index) => {
console.log(index, topping);
});
```
DM: use the backticks ```js so we can see color formatting
## filter: takes a callback function, and that callback function will be called once per item in the array.
```js
const students = [
 { name: 'Aisha', grade: 89 },
 { name: 'Bruno', grade: 55 },
 { name: 'Carlos', grade: 68 },
 { name: 'Dacian', grade: 71 },
 { name: 'Esther', grade: 40 },
];

const studentsWhoPassed = students.filter(student => {
 return student.grade >= 60
});
```

console.log(studentsWhoPassed);

## map: In many ways, map is quite a lot like forEach. We give it a callback function, and it iterates over the array, calling the function once for each item in the array.

```js
const people = [
 { name: 'Aisha', grade: 89 },
 { name: 'Bruno', grade: 55 },
 { name: 'Carlos', grade: 68 },
 { name: 'Dacian', grade: 71 },
 { name: 'Esther', grade: 40 },
];

const screamedNames = people.map(person => {
 return person.name.toUpperCase();
});

console.log(screamedNames);

// examples with array.prototypes.sort();

;[2, 5, 3].sort((a, b) => a - b) // !!! never a > b! I've done this a few times. Doesn't work because ... a>b returns a boolean, not a number

// DM: todoMM: remove all the below once you've moved these to other files(done)