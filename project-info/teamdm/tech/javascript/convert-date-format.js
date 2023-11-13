/*
This convertDateFormat function first creates a new Date object from the dateString. It then extracts the day, month, and year from the date, and formats them as strings. It uses these strings to create the 'DD MM YYYY' and 'MM DD, YYYY' date formats, and returns them in an object.
*/

function convertDateFormat(dateString) {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, '0')
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const month = monthNames[date.getMonth()] // Months are 0-based in JavaScript
  const year = date.getFullYear()

  const ddMMyyyy = `${day} ${month} ${year}`
  const mmDDyyyy = `${month} ${day}, ${year}`

  return { ddMMyyyy, mmDDyyyy }
}

const dateFormats = convertDateFormat('1993-12-04')
console.log(dateFormats) // { ddMMyyyy: '04 December 1993', mmDDyyyy: 'December 04, 1993' }
