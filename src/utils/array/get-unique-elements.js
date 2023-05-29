// note: there is a lodash function uniq

export default function getUniqueElements(array) {
  return [...new Set(array)]
}
