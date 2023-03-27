
// always copy this template into each new coding challenge file
// always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
/*

*/

// // // // // // // // // // // // // // start of the template
// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel

*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
*/

// 1.3 some tests from the coding challenge: ex: myFunction('', '') // expected result
/*
  disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
  disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
  disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully) */
/*

*/

//  3. write tests (at the bottom of the file), then continue with step 4.

function disemvowel(str) {
  /* 4. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string...; possible values: any string

        output: string...; possible values: any string but without vowels */
  /*

  */

  // 5. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
const isString = typeof str === 'string'
if (!isString) {
    throw new Error('input must be a string')
}

  /* 6. state the solution in terms of WHAT (declarative), not HOW (imperative)
	      WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? */
  /*
  I want to remove all possible vowels from the string, and return the string without vowels

  */

  /* 7. break down the the 'variable' elements of the solution into the most granular (smallest) parts by
        assigning each part (string, boolean expression, etc.) to a well-named, descriptive variable.
        * each logical expressions must be assigned to a variable. 
	  * the instructions often contain words that can be used in variable names.
        * functions are named with verbs+noun (createMyThing) or adverbs: (onClick, onSubmitHandler)
        * booleans are named with (positive) adjectives: (open, seen, isString)
        * everything else with nouns or adjectives: (myThing)*/

        // declare the vowels variable
        const vowels = ['a', 'e', 'i', 'o', 'u']

        // split the string into an array of characters
        const characters = str.split('')

        // filter the array of characters to remove the vowels
        const filteredCharacters = characters.filter(character => {
            // check if the character is a vowel
            const isVowel = vowels.includes(character.toLowerCase())
            // return the character if it is not a vowel
            return !isVowel
        })

        
        /* 8. use the named parts to create a readable solution. */
        // join the array of characters back into a string
        const joinedFilteredCharacters = filteredCharacters.join('')
        
        /* 9. return the solution
        always return a variable, or, use only variables in return statements
        this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
        */
  return joinedFilteredCharacters
}
// 10. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
disemvowel('', '') // ''
disemvowel('hello world') // 'hll wrld'
disemvowel('This exercise is easy') // 'Ths xrcs s s'
disemvowel(123) // 'input must be a string'
disemvowel('_/!o@#$%^&*a()_+e') // '_/!@#$%^&*()_+'

/* 11. Review the code for conciseness and readability: clear, descriptive variable names
       note: as you are working, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time on it. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter.  */

/* 12. Final step: copy the solution here, remove all comments  */
