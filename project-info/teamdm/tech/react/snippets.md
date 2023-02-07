# Difference between quotes(“ ”) and backticks(`` );
Quotes are used for creating strings while backticks are for embedding variables in a string
e.g: const userName = ‘Mail’
const dynamicString = `hello {userName}`/ ${}

# Normal function vs Arrow function

e.g : function exclaim(string) {
 return string + '!';
}
const exclaim = string => string + '!';

# Object destructuring vs Object accessing

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
- forEach: when we want to perform some sort of action on every item in an array.
const pizzaToppings = [
 'cheese',
 'avocado',
 'halibut',
 'custard',
];



pizzaToppings.forEach((topping, index) => {
 console.log(index, topping);
});

- filter: In many ways, filter is very similar to forEach. It takes a callback function, and that callback function will be called once per item in the array.
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

console.log(studentsWhoPassed);

- Map: In many ways, map is quite a lot like forEach. We give it a callback function, and it iterates over the array, calling the function once for each item in the array.
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