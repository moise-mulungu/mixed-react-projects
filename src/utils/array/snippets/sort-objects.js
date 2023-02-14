// reverse sort by the value of objectProperty2
// tip: array.reverse() works the same as sort
;[
  {
    objectProperty1: 1,
    objectProperty2: 2,
  },
  {
    objectProperty1: 3,
    objectProperty2: 4,
  },
].sort((a, b) => a.objectProperty2 -b.objectProperty2)
.forEach((item) => {
  console.log(`${item.objectProperty2} ${item.objectProperty2}`)
})
/* your code goes here */

// expected result:
;[
	{
		objectProperty1: 3,
		objectProperty2: 4,
	},
  {
    objectProperty1: 1,
    objectProperty2: 2,
  },
].sort((a, b) => a.objectProperty2 -b.objectProperty2)
.forEach((item) => {
  console.log(`${item.objectProperty2} ${item.objectProperty2}`)
})

// I used two different methods to sort the array of objects from this source: https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
// the first method is to use the sort method and pass in a function
// the second method is to use the forEach method and pass in a function