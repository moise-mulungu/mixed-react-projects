// howtojs:    ref: esLint no-empty-pattern https://eslint.org/docs/latest/rules/no-empty-pattern
// vocab: "empty destructuring pattern" "create a pattern that has no effect" "empty curly braces are used to the right of an embedded object destructuring pattern" { _ = {} } = foo; // doesn't create any variables: https://eslint.org/docs/latest/rules/no-empty-pattern
const { _ = {} } = undefined
// DM: todoDM: more
