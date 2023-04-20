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
// DM: todoMM: let's rename these. 'ary' breaks the "no abbreviations" coding standard, as does val, and val doesn't describe what is in the val (you can use your 'input' description in #4)
function keepOrder(ary, val) {
  /* 4. describe the inputs and outputs in detail: their types and possible values
        note: sometimes you have some requirements that aren't explicitly in the instructions, but are in the example.

        inputs:
          parameter1: string|number|...; possible values:
          parameter2: string|number|...; possible values:

        output: string|number|...; possible values: */
  /*
input: number and a sorted array
output: index of a number that can be inserted into the array to maintain the sorted order
  */

  // 5. Validate/adjust the input. Throw errors (*offensive coding*). Convert types or transform (defensive coding)
  // DM: great validation!, super! Glad you're writing these as a function, that way they are quickly reusable.
  // DM: todoMM: put this function into src/utils/arrays/isArraySorted. (changing 'ary' to 'array')
  const isSorted = (ary) => ary.every((value, index) => index === 0 || ary[index - 1] <= value)
  console.log('isSorted', isSorted(ary))
  if (!isSorted(ary)) throw new Error('array is not sorted')

  /* 6. state the solution in terms of WHAT (declarative), not HOW (imperative)
	  WHAT do you want to change in the input to get the output?
        WHAT do you want to calculate based on the input? 
        Think in terms of avoiding mutating variables. Create new variables instead of manipulating existing variables(not mutating variables, but creating new variables. great!, DM: yes!)
        */
  /*
  // DM: todoMM: you don't have to insert it, just find out what the index is and return that index
i want to find the index of a given number(val), and return it
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

  // DM: you already have the elements of the solution. I can't think of any more. So, I moved the code the #8, because you can go directly to the solution.

  /* 8. use the named parts to create a readable solution. */

  // DM: todoMM: in this case you have an array, and you want to get a number (the index). So, whenever you want to change an array to something non-array, you use Array.reduce()! Your logic below is going in the right direction. So, search the repo for ".reduce(" to see an example of reduce as a refresher (you've done it before), then try using it here.
  // get the index of the val
  const filteredItemsLessThanVal = ary.filter((item) => item < val)
  // DM: todoMM: this wasn't my first solution, but is is good! hot tip: try: indexOfTheNextItem = filteredItemsLessThanVal.length and test to see if it works.
  const indexOfTheNextItem = filteredItemsLessThanVal.reduce((acc) => acc + 1, 0)
  console.log('indexOfTheNextItem', indexOfTheNextItem)

  /* 9. return the solution
      always return a variable, or, use only variables in return statements
      this makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
   */
  return indexOfTheNextItem
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
// DM: todoMM: extra credit: try passing an array of one-word strings, all lower case, and see what happens! (hint, < and > can be used on strings)

/* 11. Make it pretty! Review the code for conciseness and readability: clear, descriptive variable names
       note: the entire time you are working on the solution, try to write good names, so that Duncan and yourself can 
             understand easily. Don't use misleading or too-unspecific variable names.
             But, don't spend much time figuring out the perfect variable name. The trick is to describe
             what it is with lots of words. Just write exactly what the variable holds.
             Later, in this step, you can refine variable names to be shorter/better if appropriate.  */

/* 12. code review and approval*/
/*  */

/* 13. Final step: after code review and final approval (like we do at work), I'll leave a comment here, and you can: copy the solution below this line, remove all comments and console.log below this line  
       OK to rename variables here if it seems better while looking at the code in concise form*/
// DM: hey, check out the new instructions in 13 above. Do wait until I give "final approval" here a this gives me a chance to do a "code review" and help you perfect the solution before doing 13.
function keepOrder(ary, val) {
  const isSorted = (ary) => ary.every((value, index) => index === 0 || ary[index - 1] <= value)
  if (!isSorted(ary)) throw new Error('array is not sorted')
  const filteredItemsLessThanVal = ary.filter((item) => item < val)
  const indexOfTheNextItem = filteredItemsLessThanVal.reduce((acc) => acc + 1, 0)
  return indexOfTheNextItem
}

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
