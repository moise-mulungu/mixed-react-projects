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
] /* your code goes here */
  .find((object) => object.objectProperty1 === 3)

// expected result:
// {
// 	objectProperty1: 3,
// 	objectProperty2: 4,
// }

// DM: super, todoMM: now add to the statement so that it resolves to the value of objectProperty2 (after you do this, I'll show you how to improve your constants file so that it has fewer "hard-coded" values)
;[
  {
    objectProperty1: 1,
    objectProperty2: 2,
  },
  {
    objectProperty1: 3,
    objectProperty2: 4,
  },
] /* your code goes here */
  .find((object) => object.objectProperty1 === 3) /* your code goes here */
