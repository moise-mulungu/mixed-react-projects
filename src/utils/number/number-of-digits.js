const { get } = require("lodash")

// with math.floor() and math.log(10)
function getNumberOfDigits (number) {
    return Math.floor(Math.log10(number)) + 1
}

// with math.floor() and while loop
const getNumberOfDigit = (number) => {
    let numberOfDigits = 0
    while (number > 0) {
        number = Math.floor(number / 10)
        numberOfDigits++
    }
    return numberOfDigits
}

getNumberOfDigits(1234) // 4
getNumberOfDigits(123) // 3
getNumberOfDigits(4773) // 4
getNumberOfDigits(0) // infinity
getNumberOfDigits(1_000_343_490_884_773) // 16

getNumberOfDigit(1234) // 4
getNumberOfDigit(2_334_444) // 7
getNumberOfDigit(2_345_000_000) // 10
