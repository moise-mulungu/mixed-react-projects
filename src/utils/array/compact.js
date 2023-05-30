export default function compact(array) {
  // (element != null) === (element !== undefined && element !== null) // however, future linter will disallow loose equality operators (like != or ==), so let's not use it here
  return array.filter((element) => element !== undefined && element !== null)
}
