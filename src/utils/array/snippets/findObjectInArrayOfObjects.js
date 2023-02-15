// 

// exercise:
// find the object that contains objectProperty1 has value of 3
// tip: array.find()
;[
  {
    objectProperty1: 1,
    objectProperty2: 2,
  },
  {
    objectProperty1: 3,
    objectProperty2: 4,
  },
]./* your code goes here */
  find((object) => object.objectProperty1 === 3)

// expected result:
// {
// 	objectProperty1: 3,
// 	objectProperty2: 4,
// }