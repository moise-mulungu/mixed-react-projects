// DM: example of extracting useful code to a reusable utility
export default function upperCaseFirst(string) {
  if (typeof string !== 'string') throw new Error('parameter to upperCaseFirst must be a string')
  return string.charAt(0).toUpperCase() + string.slice(1)
}
