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

// DM: todoMM: super, now add to the statement so that it resolves to the value of objectProperty2 (after you do this, I'll show you how to improve your constants file so that it has fewer "hard-coded" values)
console.log([
  {
    objectProperty1: 1,
    objectProperty2: 2,
  },
  {
    objectProperty1: 3,
    objectProperty2: 4,
  },
] /* your code goes here */
  .find((object) => object.objectProperty1 === 3 && object.objectProperty2 === 4)) /* your code goes here */


  function isDivisible(n, x, y) {
    const result = true;
    const nDivisibleByX = n % x === 0;
    const nDivisibleByY = n % y === 0;
    if (nDivisibleByX  &&  nDivisibleByY) {
        result = true;
    }
    return result;
    // return n % x === 0 && n % y === 0

}
console.log(isDivisible(3, 3, 4));