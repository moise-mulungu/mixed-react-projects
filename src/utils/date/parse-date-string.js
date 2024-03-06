/**
 * This function parses a date string into a JavaScript Date object.
 * 
 * Usage example:
 * 
 * try {
 *   const date = parseDate({ dateString: '2022-12-31' });
 *   console.log(date);
 * } catch (error) {
 *   console.error(error);
 * }
 * 
 * @param {Object} params - The parameters for the function.
 * @param {string} params.dateString - The date string to parse.
 * @returns {Date} The parsed date.
 * @throws {Error} If the date string cannot be parsed.
 */

function parseDate({ dateString }) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new Error(`Cannot parse date string: ${dateString}`);
    }
    return date;
  }
  
  // Test code
  try {
    console.log(parseDate({ dateString: '2022-12-31' })); // Should log a Date object for December 31, 2022
    console.log(parseDate({ dateString: 'invalid-date' })); // Should throw an error
  } catch (error) {
    console.error(error);
  }