// DM: I like this; very concise and readable
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

// DM: todoMM: write a js vocab entry for "commonJS" noting briefly how it is different from "ES modules"
// howtojs: commonJS:: export functions with module.exports
module.exports = { add, subtract, multiply, divide }
exports.add = (a, b) => a + b
exports.subtract = (a, b) => a - b
exports.multiply = (a, b) => a * b
exports.divide = (a, b) => a / b

//(in progress) DM: todoMM: get an account so that you can use chat.openai.com AKA ChatGPT
//(in progress) DM: todoMM: ask ChatGPT "what is the difference between arrow functions and regular functions"
// MM: DM: I first wanted to create an account on a free VPN extension, but it requiring me to pay for it. after having a VPN account, I can create an account on chat.openai.com.
