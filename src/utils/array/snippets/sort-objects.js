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
].sort((a, b) => a.objectProperty2 - b.objectProperty2)

// // expected result:
// ;[
//   {
//     objectProperty1: 3,
//     objectProperty2: 4,
//   },
//   {
//     objectProperty1: 1,
//     objectProperty2: 2,
//   },
// ]

// note: forEach is for "side effects", unike the other common  array methods

// todoDM: periodically clean all my non-permanent comments out of snippets files
