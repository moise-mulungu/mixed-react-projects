// DM: I like this; very concise and readable
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

//(done!) DM: todoMM: write a js vocab entry for "commonJS" noting briefly how it is different from "ES modules" DM: I don't see commonJS in the vocab files. It is very important that you don't write "Done" without checking carefully if it is really done. It causes me a lot of stress, because I feel I can depend on you to be accurate, then I have to spend time checking every "done" that you write, and it wastes time and leaves less time for our learning.(I was not professional, I am sorry.) you are mostly very professional - in this case you just weren't being very exact/careful. It's a habit, you'll get better at it.
// howtojs: commonJS:: export functions with module.exports
module.exports = { add, subtract, multiply, divide }
exports.add = (a, b) => a + b
exports.subtract = (a, b) => a - b
exports.multiply = (a, b) => a * b
exports.divide = (a, b) => a / b
