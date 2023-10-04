import { difference } from "lodash";
export default function isSubsetOf(smaller, larger) {
  return difference(smaller, larger).length === 0;
}

/*

tests:
[1, 2], [1, 2, 3], true
[1, 2], [2, 3], false
[], [], true // or return error?
[1], [], false
[], [1], true ?

*/

/*

// The difference (subtraction) is defined as follows.
// The set A−B consists of elements that are in A but not in B.
function difference(a, b) {
  return a.filter((item) => !b.includes(item));
}

*/
