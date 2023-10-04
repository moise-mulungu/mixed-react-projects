
## always test your code
```
# example: in the VsCode terminal
$ node # start the node REPL
Welcome to Node.js v16.16.0.
Type ".help" for more information.
> 
> // don't need to use console.log()
> // whatever you put on each line will be output in the line below 
>
> myArray = []
[]
> myArrayCloned = [...myArray]
[]
> myArrayCloned === myArray // false
false
> myArrayCopied = myArray
[]
> myArrayCopied === myArray // true
true
>
>.exit
$