function getUniqueItems(array) {
  const uniqueItems = array.filter((item, index) => array.indexOf(item) === index)
  return uniqueItems
}
