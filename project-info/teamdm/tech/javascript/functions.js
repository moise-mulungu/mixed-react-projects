function func(param1, param2) {
  console.log({ param1, param2 })
}
func(1, 2) // order matters

function funcWithObjectParam({ param1, param2 }) {
  console.log({ param1, param2 })
}
funcWithObjectParam({
  param2: 2, // order doesn't matter
  param1: 1,
})
// same as above, but deconstructing the passed object in a different place
function funcWithObjectParam2(obj) {
  const { param1, param2 } = obj
  console.log({ param1, param2 })
}
funcWithObjectParam({
  param2: 2, // order doesn't matter
  param1: 1,
})
