
DM: Moise, follow all of these when doing any coding exercise problem. It will work out better/faster in the end.
    note: do this for future exercises. Don't worry about it for the previous exercises you are still working on

# rules for readability
* never use 'let'
* assign all logical expressions to a well-named variable
  * variable should express a positive (if you want to use 'not' in a variable name, you got it wrong)
  * don't make me think! I want to read code fast.
	* benefit: self-documenting code

# rules for debugging
* always return a variable, for each debugging via console.log 

# steps
1. describe the inputs and outputs in detail: their types and possible values
2. validate the input (convert types or transform if needed) (*defensive coding*)
3. break down the the 'variable' elements of the solution into the most granular (smallest) parts
   * assign each part (string, boolean expression, etc.) to a well-named, descriptive variable
4. use the named parts to create a readable solution
5. return the solution
6. list and describe anything that is unclear in the challenge description
   * these would be the questions you'd be expected to ask in a interview situation
   * practice reading the challenge description carefully
* note: via these tasks, you are essentially repeating the key elements of the challenge description in the code
7. write test(s) that cover the input variants

* starter function
```js
function myFunction(parameter1, parameter2) {
  /*   
  1) describe the inputs and outputs, their types and possible values
     inputs: 
       parameter1: string|number|...; values: 
       parameter2: string|number|...; values:
       
     output:
 
  */

  // 2) validate the input or convert if possible

  // 3) break down the the 'variable' elements of the solution into the most granular (smallest) parts; assign each to a well-named, descriptive variable (rename input if needed)

  // 4) code the solution (logical expressions)

  // always return a variable, or, use only variables in return statements (all logical expressions must be assigned to a variable)
  // This makes it easy to debug by logging  // console.log('i am easy to debug by logging', { var1, var2 })
  return ''

  // 5. list and describe anything that is unclear in the challenge description

}
// 6) test input variants
myFunction('','') // expected result

```
* example (somewhat exaggerated to cover all 6 points)
```js
// Determine offspring sex based on genes XX and XY chromosomes
// Description
// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

function chromosomeCheck(sperm) {
  // 1) describe the inputs and outputs, their types and possible values
  // inputs: string: sperm sex chromosome: X (girl) || Y(boy)
  // output: string: "Congratulations! You're going to have a daughter|son."

  // 2) validate the input or convert if possible
  if (typeof sperm !== 'string') throw new Error('parameter to chromosomeCheck() must be a string')
  if (sperm.length !== 1) throw new Error('parameter to chromosomeCheck() must be one character')
  // 'sperm' is technically "dirty input" because it could be in either case
  const spermCleaned = sperm.toLowerCase() // convention: always normalize TO lowercase, not uppercase

  // 3) break down the the 'variable' elements of the solution into the most granular (smallest) parts; assign each to a well-named, descriptive variable (rename input if needed)

  // a better name - the given function used 'sperm' which wasn't clear
  const spermSexChromosome = spermCleaned
  const zygoteGender = spermSexChromosome === 'x' ? 'female' : 'male'
  const daughterOrSon = { female: 'daughter', male: 'son' }[zygoteGender]

  // 4) code the solution

  const message = `Congratulations! You're going to have a ${daughterOrSon}.`

  // 5) return the solution
  // always return a variable, or, use only variables in return statements (all logical expressions must be assigned to a variable)
  // This makes it easy to debug by logging   
  // console.log('i am easy to debug by logging', { sperm, spermCleaned, spermSexChromosome, zygoteGender, daughterOrSon, message })
  return message

// 6) list and describe anything that is unclear in the challenge description

}
// 7) test input variants
chromosomeCheck('Y') // "Congratulations! You're going to have a son."
chromosomeCheck('y') // "Congratulations! You're going to have a son."
chromosomeCheck('X') // "Congratulations! You're going to have a daughter."

```
