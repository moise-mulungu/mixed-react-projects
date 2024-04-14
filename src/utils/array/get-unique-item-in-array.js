// note: there is a lodash function: uniq

export default function getUniqueElements(array) {
  return [...new Set(array)]
}

// another less "idiomatic" approach. likely more efficient
function getUniqueItemsWithIndexOf(array) {
  // indexOf finds the first instance of a unique element in an array
  // note: "element" is the name of the individual contents of an array
  return array.filter((element, index) => array.indexOf(element) === index)
}
