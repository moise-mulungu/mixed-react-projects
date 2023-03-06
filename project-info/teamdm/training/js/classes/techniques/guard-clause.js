/* 

guard clause - return early
benefits
* prevents deep indenting when using multiple if...else statements
* more concise
* makes it clear immediately which values the func will NOT act on

note: let's follow MDN's lead of how to say/spell JS things. ex: "if...else": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
*/

function func(number) {
  if (Number.isNaN(number)) throw new Error('you must pass a number to func()') // guard clause
  const evenNumber = number % 2 === 0
  if (evenNumber) return 'Even' // guard clause
  return 'Odd'
}

// VS

function func(number) {
  if (!Number.isNaN(number)) {
    const evenNumber = number % 2 === 0
    if (evenNumber) return 'Even'
    else {
      // imagine there were a lot of lines of logic here, it is indented and you have to follow more if...else logic
      return 'Odd'
    }
  } else {
    throw new Error('you must pass a number to func()')
  }
}
