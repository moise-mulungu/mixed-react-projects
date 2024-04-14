// import { isSubsetOf } from '@/utils/array'
export { default as isSubsetOf } from './is-subset-of'
//(done) DM: do the same for the rest of the new ones you've added to this directory. This way you can:
// howdojs: modules: export:: "named export of a default import"
// ???DM: Why exporting in this way while we have already exported by default the same function directly from its file?
// MM: ???DM: is there any difference between exporting an arrow function and a normal function?
export { default as allIntegers } from './all-integers'

export { default as getUniqueItemInArray } from './get-unique-item-in-array'
export { default as isArrayOfStrings } from './is-array-of-strings'
export { default as isArraySorted } from './is-array-sorted'
export { default as shuffle } from './shuffle'
