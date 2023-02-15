// reverse sort by the value of objectProperty2
// tip: array.reverse() works the same as sort
// DM: todoMM: check your prettier configuration so that you can auto-format JS; if we're not both using prettier it makes for fewer formatting-only diffs; I mention it because this file was formatted a lot by prettier when I saved it (my vscode setting formats prettier on-save, but you can use the default prettier shortcut, also.)
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

// DM: both of these are the same, I'll remove one
// I used two different methods to sort the array of objects from this source: https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
// the first method is to use the sort method and pass in a function

// DM: remember forEach is for side effects, it won't affect the sort; I'm going to remove it because it's not necessary to console.log in snippets files (of course, you can console.log while you're working on it). You have to solution so I'm going to do the last step: making the file more concise
// the second method is to use the forEach method and pass in a function

// todoDM: periodically clean all my non-permanent comments out of snippets files
