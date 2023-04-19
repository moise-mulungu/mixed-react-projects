// always copy this template into each new coding challenge file
// !!! always fill out each empty multiline comments like below; you can put "n/a" (non applicable) if that's the case
/*
 */

// memorable summary: make it work, test it, make it pretty

// // // // // // // // // // // // // // start of the template
// 1. put the following here:

// 1.1 the challenge instructions, including the examples:
/*
Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

Do not modify the input.
Some examples:
    keepOrder([1, 2, 3, 4, 7], 5) //=> 4
                        ^(index 4)
    keepOrder([1, 2, 3, 4, 7], 0) //=> 0
            ^(index 0)
    keepOrder([1, 1, 2, 2, 2], 2) //=> 2
                ^(index 2)
*/

// 1.2 the coding challenge URL:
/*
https://www.codewars.com/kata/582aafca2d44a4a4560000e7/train/javascript
*/

/* 2. list and describe anything that is unclear in the challenge description
      these would be the questions you'd be expected to ask in a interview situation
      (practice reading the challenge description carefully) */
/*
n/a
*/

//  3. write tests (at the bottom of the file), then continue with step 4. (use all tests from the coding challenge "Sample Tests" section)

// It's OK to rename the parameter(s) in the codewars starter function if the parameter names are imprecise
function keepOrder(ary, val) {
  /* 4. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
input: number in a sorted array
output: index of a number that can be inserted into the array to maintain the sorted order
  */

  // 5. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  const isSorted = (ary) => ary.every((value, index) => index === 0 || ary[index - 1] <= value)
  console.log('isSorted', isSorted(ary))
  if (!isSorted(ary)) throw new Error('array is not sorted')

  /* 6. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? 
        Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, DM: yes!)
        */
  /*
i want to find the index of a given number(val), and insert it into the array in order to maintain the sorted order
  */

  /* 7. break down the the 'variable' elements of the solution into the most granular (smallest) parts by
        assigning each part (string, boolean expression, etc.) to a well-named, descriptive variable.
        Naming variables: 
        * each logical expressions must be assigned to a variable. 
	  * the instructions often contain words that can be used in variable names.
        * function names verb or verb+noun (create, handleClick, handleSubmit)
        * booleans are named with (positive) adjectives: (open, seen, isString)
        * everything else with nouns or adjectives: (myThing, myCoolThing)
        * variable names should express exactly what the variable contains
        * see naming-conventions.md*/
  const mappedArray = ary.map((item, index) => {
    console.log('item', item, 'index', index)
    const itemEqualsVal = item === val
    // the idea is to find the index of the first number that is greater than val
  })

  /* 8. use the named parts to create a readable solution. */

  /* 9. return the solution
      always return a variable, or, use only variables in return statements
      this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
   */
  return mappedArray // still in progress
}
// 10. write test(s) that cover the input variants and the expected result (!!! Do this before you start coding)
// expected result

keepOrder([1, 2, 3, 4, 7], 5) // 4
keepOrder([1, 2, 3, 4, 7], 0) // 0
keepOrder([1, 1, 2, 2, 2], 2) // 2
keepOrder([1, 2, 3, 4], 5) // 4
keepOrder([1, 2, 3, 4], -1) // 0
keepOrder([1, 2, 3, 4], 2) // 1
keepOrder([1, 2, 3, 4], 0) // 0
keepOrder([1, 2, 3, 4], 1) // 0
keepOrder([1, 2, 3, 4], 2) // 1
keepOrder([1, 2, 3, 4], 3) // 2
keepOrder([-5, -4, -2, -1, 1, 2], -2) // 2

/* 11. Make it pretty! Review the code for conciseness and readability: clear, descriptive variable names
       note: as you are working, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time on it. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter.  */

/* 12. code review and approval*/
/*  */

/* 13. Final step: after code review and final approval (like we do at work), I'll leave a comment here, and you can: copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/
