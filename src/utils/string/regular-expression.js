// prefer the Lodash _.escapeRegExp() Method

export default function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '')
}

console.log(escapeRegExp('hello. how are you?'))
