/**
 * This function formats a JavaScript Date object into a date string.
 * 
 * @param {Object} params - The parameters for the function.
 * @param {Date} params.date - The date to format.
 * @param {string} [params.locale='en-US'] - The locale to use for formatting. Defaults to 'en-US'.
 * @param {Object} [params.options={ year: 'numeric', month: 'long', day: 'numeric' }] - The options to use for formatting. Defaults to { year: 'numeric', month: 'long', day: 'numeric' }.
 * @returns {string} The formatted date string.
 */
function formatDateString({ date, locale = 'en-US', options = { year: 'numeric', month: 'long', day: 'numeric' } }) {
    return date.toLocaleDateString(locale, options);
  }
  
  // Usage example
  const date = new Date();
  console.log(formatDateString({ date })); // Should log the current date in 'en-US' locale and 'numeric' format for year, 'long' format for month and 'numeric' format for day