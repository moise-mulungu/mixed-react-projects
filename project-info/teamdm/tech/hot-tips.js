// howtojs: browser: console: objects are shown in all console lines with the ending values
// with an object, logging sometimes doesn't work in the browser console because it shows only the current (ending) value of acc
// howtojs: quick and dirty clone an object: JSON parse stringify; // JSON.stringify can't handle functions so use lodash.cloneDeep(). It also turns all undefined to null, so if you need that distinction, again, use lodash cloneDeep
function clone(obj) {
  JSON.parse(JSON.stringify(obj))
}

const myObj = {
  key: {
    key: 'value',
    myFunc: () => {}, // JSON.stringify can't handle functions, so use lodash.cloneDeep()
  },
  key2: 1,
  key3: [1, 2],
}
const myCopy = myObj // identical in value and reference
const myCopyViaSpread = { ...myObj } // new value, new keys and values, except the objects (the values of key, key3) are copied by reference, so they are identical in value and reference to those of the myObj
myObj.key.key = 'newValue'
console.log(myCopyViaSpread.key.key) // value
